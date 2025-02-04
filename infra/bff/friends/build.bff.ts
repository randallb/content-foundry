import { runShellCommand } from "infra/bff/shellBase.ts";
import { register } from "infra/bff/bff.ts";

const allowedEnvironmentVariables = [
  "BF_ENV",
  "CI",
  "COLORTERM",
  "DATABASE_URL",
  "DEBUG",
  "DENO_TRACE_PERMISSIONS",
  "FORCE_COLOR",
  "LOG_LEVEL",
  "NODE_ENV",
  "NODE_PG_FORCE_NATIVE",
  "OPENAI_API_KEY",
  "OPENAI_ORG_ID",
  "OPENAI_PROJECT_ID",
  "OPEN_ROUTER_API_KEY",
  "REPL_HOME",
  "REPLIT_DEV_DOMAIN",
  "RP_NAME",
  "TEAMCITY_VERSION",
  "TERM",
  "TF_BUILD",
  "USER",
];

const allowedNetworkDestionations = [
  "0.0.0.0:8000",
  "openrouter.ai",
  "api.us-east-1.aws.neon.tech:443",
];

const includableDirectories = [
  "packages",
  "content",
];

const readableLocations = [
  "$HOME/workspace",
  "./",
];

const denoCompilationCommand = [
  "deno",
  "compile",
  "--output=build/",
  ...includableDirectories.map((dir) => `--include=${dir}`),
  `--allow-net=${allowedNetworkDestionations.join(",")}`,
  `--allow-env=${allowedEnvironmentVariables.join(",")}`,
  `--allow-read=${readableLocations}`,
  "packages/web/web.tsx",
];

register("build", "Builds the current project", async () => {
  return await runShellCommand(["./packages/graphql/graphqlServer.ts"]) ||
    await runShellCommand(
      ["deno", "run", "-A", "npm:@isograph/compiler"],
      "packages/app",
    ) || await runShellCommand(denoCompilationCommand) ||
    await runShellCommand(["./infra/appBuild/appBuild.ts"]);
});
