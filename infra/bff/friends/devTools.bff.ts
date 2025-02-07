import { register } from "infra/bff/bff.ts";
import { runShellCommand } from "infra/bff/shellBase.ts";
import { getLogger } from "packages/logger.ts";

const logger = getLogger(import.meta);

register(
  "devTools",
  "Starts development tools (Sapling web interface and Jupyter notebook)",
  async () => {
    // Run both commands in parallel using Promise.all
    try {
      await Promise.all([
        // Start Sapling web interface
        runShellCommand(
          ["sl", "web", "-f", "--no-open"],
          undefined,
          {},
          false // disable spinner for continuous output
        ),
        // Start Jupyter notebook
        runShellCommand(
          ["deno", "jupyter", "--install"],
          undefined,
          {},
          true
        ).then(() => 
          runShellCommand(
            ["jupyter", "notebook", "--config", "./infra/jupyter/config.py"],
            undefined,
            {},
            false // disable spinner for continuous output
          )
        )
      ]);
      return 0;
    } catch (error) {
      logger.error("Failed to start development tools:", error);
      return 1;
    }
  }
);
