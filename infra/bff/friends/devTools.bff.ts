import { register } from "infra/bff/bff.ts";
import { runShellCommand, runningProcesses } from "infra/bff/shellBase.ts";
import { getLogger } from "packages/logger.ts";

const logger = getLogger(import.meta);

// Install a SIGINT signal listener to terminate child processes on Ctrl+C
Deno.addSignalListener("SIGINT", () => {
  console.log("Ctrl+C pressed. Terminating child processes...");
  for (const proc of runningProcesses) {
    // Send SIGTERM (or you can choose another signal)
    proc.kill("SIGTERM");
  }
  // Optionally exit after a short delay to allow cleanup
  Deno.exit();
});

// Register both command names
["devTool", "devTools"].forEach((commandName) => {
  register(
    commandName,
    "Run development tools (Sapling web and Jupyter notebook)",
    async () => {
      console.log("Starting Jupyter and Sapling web interface...");

      // Kill any existing Jupyter processes
      try {
        await runShellCommand([
          "pkill",
          "-f",
          "jupyter-notebook",
        ], undefined, {}, false);
        
        await runShellCommand([
          "sl",
          "web",
          "--kill",
        ], undefined, {}, false);
      } catch (e) {
        // Ignore errors if no processes were found
      }

      // Start both processes in parallel
      const port = Deno.env.get("REPLIT_PID2") === "true" ? "8284" : "8283";
      const session = Deno.env.get("REPLIT_SESSION");
      
      // Get GitHub token from extension API
      const tokenResponse = await fetch(`http://localhost:${port}/${session}/github/token`);
      const tokenData = await tokenResponse.json();
      const token = tokenData.token || "";
      
      // Set environment for child processes
      const env = { ...Deno.env.toObject(), GH_TOKEN: token };

      try {
        const promises = [
          // Start Sapling web interface
          runShellCommand([
            "sl",
            "web",
            "-f",
            "--no-open",
          ], undefined, env, false),

          // Start Jupyter notebook
          runShellCommand([
            "deno",
            "jupyter",
            "--install",
          ], undefined, env, false).then(() =>
            runShellCommand([
              "jupyter",
              "notebook",
              "--config",
              "./infra/jupyter/config.py",
            ], undefined, env, false)
          ),
        ];

        await Promise.all(promises);
        console.log("Go to 'Extension Devtools' to use the dev tools.");
        return 0;
      } catch (error) {
        logger.error("Failed to start development tools:", error);
        return 1;
      }
    },
  );
});