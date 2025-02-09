import { register } from "infra/bff/bff.ts";
import {
  runningProcesses,
  runShellCommand,
  runShellCommandWithOutput,
} from "infra/bff/shellBase.ts";
import { getLogger } from "packages/logger.ts";

const logger = getLogger(import.meta);


async function checkPort(port: number): Promise<boolean> {
  try {
    const listener = Deno.listen({ port, hostname: "0.0.0.0" });
    listener.close();
    return false;
  } catch {
    return true;
  }
}

async function waitForPort(port: number, serviceName: string, timeout = 60000): Promise<boolean> {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (await checkPort(port)) {
      logger.info(`${serviceName} is ready on port ${port}`);
      return true;
    }
    await new Promise(r => setTimeout(r, 1000));
  }
  logger.error(`Timeout waiting for ${serviceName} on port ${port}`);
  return false;
}

// Install a SIGINT signal listener to terminate child processes on Ctrl+C
Deno.addSignalListener("SIGINT", async () => {
  logger.info("Ctrl+C pressed. Terminating child processes...");
  for (const proc of runningProcesses) {
    try {
      // Check if process is still running before attempting to kill it
      const status = await proc.status;
      if (!status.success) {
        proc.kill("SIGTERM");
      }
    } catch {
      // Process already terminated, skip it
      continue;
    }
  }
  Deno.exit();
});

async function stopJupyter() {
  logger.info("Stopping Jupyter...");
  try {
    await runShellCommand(
      [
        "pkill",
        "-f",
        "jupyter-notebook",
      ],
      undefined,
      {},
      false,
    );
    logger.info("Jupyter stopped");
    return 0;
  } catch {
    logger.info("No Jupyter process found");
    return 0;
  }
}

async function stopSapling() {
  logger.info("Stopping Sapling...");
  try {
    await runShellCommand(
      [
        "sl",
        "web",
        "--kill",
      ],
      undefined,
      {},
      false,
    );
    logger.info("Sapling stopped");
    return 0;
  } catch {
    logger.info("No Sapling process found");
    return 0;
  }
}

["devToolStop", "devToolsStop"].forEach((commandName) => {
  register(
    commandName,
    "Stop all development tools",
    async () => {
      await stopJupyter();
      await stopSapling();
      return 0;
    },
  );
});

register(
  "devToolStopJupyter",
  "Stop Jupyter notebook",
  stopJupyter,
);

register(
  "devToolStopSapling", 
  "Stop Sapling web interface",
  stopSapling,
);

// Register both command names
["devTool", "devTools"].forEach((commandName) => {
  register(
    commandName,
    "Run development tools (Sapling web interface and Jupyter notebook)",
    async () => {
      // Check GitHub auth status first

        const authStatus = await runShellCommandWithOutput([
          "gh",
          "auth",
          "status",
        ]);
        
        logger.log("GitHub auth status:", authStatus);
        if (!authStatus) {
          logger.log(`Not authenticated. ${authStatus} Let's log in.`)
          // Setup GitHub auth first
          const ghCommand = new Deno.Command("gh", {
            args: [
              "auth",
              "login",
              "--hostname",
              "github.com",
              "--web",
              "--git-protocol",
              "https",
            ],
            stdin: "piped",
          });
          const ghProcess = ghCommand.spawn();
          const writer = ghProcess.stdin.getWriter();
          await writer.write(new TextEncoder().encode("y\n"));
          await writer.close();
          await ghProcess.status;
        }
        

      logger.log("Starting Jupyter and Sapling web interface...");

      // Kill any existing Jupyter processes
      try {
        await runShellCommand(
          [
            "pkill",
            "-f",
            "jupyter-notebook",
          ],
          undefined,
          {},
          false,
        );

        await runShellCommand(
          [
            "sl",
            "web",
            "--kill",
          ],
          undefined,
          {},
          false,
        );
      } catch (e) {
        // Ignore errors if no processes were found
      }

      // Start both processes in parallel
      try {
        const env = {
          ...Deno.env.toObject(),
          // Suppress output of commands
          NO_COLOR: "1",
          PYTHONUNBUFFERED: "1"
        };


        logger.info("Starting Sapling web interface...");
        const saplingProc = new Deno.Command("sl", {
          args: ["web", "-f", "--no-open"],
          stdin: "null",
          stdout: "null",
          stderr: "null",
        }).spawn();

        logger.info("Starting Jupyter notebook...");
        await runShellCommand(
          ["deno", "jupyter", "--install"],
          undefined,
          env,
          false,
        );

        const jupyterProc = new Deno.Command("jupyter", {
          args: ["notebook", "--config", "./infra/jupyter/config.py"],
          stdin: "null",
          stdout: "null",
          stderr: "null",
        }).spawn();

        runningProcesses.push(saplingProc, jupyterProc);

        // Wait for both services to be ready
        await Promise.all([
          waitForPort(3011, "Sapling"),
          waitForPort(8888, "Jupyter")
        ]);

        logger.info("Everything is ready, head to Extension Devtools");
        return 0;
      } catch (error) {
        logger.error("Failed to start development tools:", error);
        return 1;
      }
    },
  );
});