
import { register } from "infra/bff/bff.ts";
import {
  runShellCommand,
  runShellCommandWithOutput,
} from "infra/bff/shellBase.ts";
import { getLogger } from "packages/logger.ts";

const logger = getLogger(import.meta);

async function getCurrentPR(): Promise<string | null> {
  try {
    const output = await runShellCommandWithOutput([
      "gh",
      "pr",
      "view",
      "--json",
      "number",
    ]);
    return JSON.parse(output).number;
  } catch {
    return null;
  }
}

async function getStackedPRs(): Promise<Array<string>> {
  const output = await runShellCommandWithOutput([
    "gh",
    "pr",
    "list",
    "--json",
    "number,body",
  ]);
  const prs = JSON.parse(output);
  const currentPR = await getCurrentPR();
  
  // Filter PRs that mention the current PR in their body
  return prs
    .filter((pr: any) => pr.body.includes(`#${currentPR}`))
    .map((pr: any) => pr.number.toString());
}

export async function mergeStack(): Promise<number> {
  const currentPR = await getCurrentPR();
  if (!currentPR) {
    logger.error("No current pull request found");
    return 1;
  }

  // Merge current PR
  logger.info(`Merging PR #${currentPR}...`);
  const mergeResult = await runShellCommand([
    "gh",
    "pr",
    "merge",
    currentPR,
    "--merge",
    "--delete-branch",
  ]);

  if (mergeResult !== 0) {
    logger.error("Failed to merge current PR");
    return mergeResult;
  }

  // Get and close stacked PRs
  const stackedPRs = await getStackedPRs();
  for (const prNumber of stackedPRs) {
    logger.info(`Closing PR #${prNumber}...`);
    await runShellCommand([
      "gh",
      "pr",
      "close",
      prNumber,
    ]);
  }

  logger.info("Successfully merged PR and closed stacked PRs!");
  return 0;
}

register("merge-stack", "Merge current PR and close stacked PRs", mergeStack);
