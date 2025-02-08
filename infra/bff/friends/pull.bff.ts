
import { register } from "infra/bff/bff.ts";
import { runShellCommand } from "infra/bff/shellBase.ts";
import { getLogger } from "packages/logger.ts";

const logger = getLogger(import.meta);

register(
  "pull",
  "Pull the latest code from sapling",
  async () => {
    logger.info("Pulling latest code from sapling...");
    return await runShellCommand([
      "sl",
      "pull",
    ]);
  },
);
