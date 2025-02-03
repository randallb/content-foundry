import type { Handler } from "packages/web/web.tsx";
import { getLogger } from "packages/logger.ts";
import { BfError } from "packages/BfError.ts";
const logger = getLogger(import.meta);

async function startJupyter() {
  const isRunning = await new Deno.Command("pgrep", {
    args: ["-f", "jupyter"],
  }).output();

  if (isRunning.code !== 0) {
    (new Deno.Command("jupyter", {
      args: [
        "notebook",
        "--config",
        "infra/jupyter/config.py",
        "--no-browser",
      ],
    })).spawn();

    // Brief delay to let Jupyter start
    await new Promise((resolve) => setTimeout(resolve, 8000));
  }
}

export function addTools(routes: Map<string, Handler>) {
  logger.debug("Adding tools");
  routes.set("/tools/jupyter-notebook-open", async (req) => {
    await startJupyter();

    const searchParams = new URLSearchParams(new URL(req.url).search);
    const filePath = searchParams.get("filePath");
    return new Response(null, {
      status: 302,
      headers: {
        location: `https://${
          Deno.env.get("REPLIT_DEV_DOMAIN")
        }:3000/notebooks/${filePath}?token=bfjupyter`,
      },
    });
  });
  routes.set("/tools/jupyter-console-open", async (req) => {
    await startJupyter();
    const searchParams = new URLSearchParams(new URL(req.url).search);
    const filePath = searchParams.get("filePath");
    return new Response(null, {
      status: 302,
      headers: {
        location: `https://${
          Deno.env.get("REPLIT_DEV_DOMAIN")
        }:3000/consoles/${filePath}?token=bfjupyter`,
      },
    });
  });

  routes.set("/tools/sapling-open", async () => {
    const token = await Deno.readTextFile(`${Deno.env.get("REPL_HOME")}/.sapling_token`);
    if (!token) {
      throw new BfError("Sapling token not found");
    }
    return new Response(null, {
      status: 302,
      headers: {
        location: `https://${
          Deno.env.get("REPLIT_DEV_DOMAIN")
        }:3001/?token=${token.trim()}&cwd=%2Fhome%2Frunner%2Fworkspace`,
      },
    });
  });
}
