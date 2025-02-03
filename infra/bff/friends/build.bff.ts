import { runShellCommand } from "infra/bff/shellBase.ts";
import { register } from "infra/bff/bff.ts";

const denoCompilationCommand = [
  "deno",
  "compile",
  "--output=build/",
  "--include=packages",
  "--include=content",
  "--allow-net=0.0.0.0:8000,openrouter.ai",
  "--allow-env=BF_ENV,CI,DENO_TRACE_PERMISSIONS,TERM,TF_BUILD,FORCE_COLOR,NODE_ENV,LOG_LEVEL,DATABASE_URL,OPENAI_API_KEY,REPL_HOME,REPLIT_DEV_DOMAIN,TEAMCITY_VERSION,COLORTERM,OPEN_ROUTER_API_KEY,OPENAI_ORG_ID,OPENAI_PROJECT_ID,DEBUG",
  "--allow-read=$HOME/workspace,./",
  "--allow-run=pgrep,jupyter",
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
