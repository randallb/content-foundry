import { register } from "infra/bff/bff.ts";
import startSpinner from "lib/terminalSpinner.ts";
import { getLogger } from "packages/logger.ts";
const logger = getLogger(import.meta);

export async function runShellCommand(
  commandArray: Array<string>,
  cwdString = Deno.env.get("REPL_HOME") ?? Deno.cwd(),
  additionalEnv = {},
  useSpinner = true,
): Promise<number> {
  const env = {
    ...Deno.env.toObject(),
    ...additionalEnv,
  };
  logger.info(`Running command: ${commandArray.join(" ")}`);
  let stopSpinner;
  if (useSpinner) {
    stopSpinner = startSpinner();
  }

  const cwd = new URL(import.meta.resolve(cwdString));

  const cmd = new Deno.Command(commandArray[0], {
    args: commandArray.slice(1),
    stdout: "inherit",
    stderr: "inherit",
    cwd,
    env,
  });

  const process = cmd.spawn();
  const { code, success } = await process.output();
  stopSpinner ? stopSpinner() : null;

  if (success) {
    // deno-lint-ignore no-console
    console.log(`Command succeeded: ${commandArray.join(" ")}`);
  } else {
    // deno-lint-ignore no-console
    console.error(
      `Command failed with code ${code}: ${commandArray.join(" ")}`,
    );
  }

  return code;
}

export async function runShellCommandWithOutput(
  commandArray: Array<string>,
  additionalEnv = {},
  useSpinner = true,
): Promise<string> {
  const env = {
    ...Deno.env.toObject(),
    ...additionalEnv,
  };
  // deno-lint-ignore no-console
  console.log(`Running command: ${commandArray.join(" ")}`);
  let stopSpinner;
  if (useSpinner) {
    stopSpinner = startSpinner();
  }
  const cwd = Deno.env.get("BF_PATH") ?? Deno.cwd();

  const cmd = new Deno.Command(commandArray[0], {
    args: commandArray.slice(1),
    stdout: "piped",
    stderr: "piped",
    cwd,
    env,
  });

  const process = cmd.spawn();
  const { stdout } = await process.output();
  stopSpinner ? stopSpinner() : null;
  return new TextDecoder().decode(stdout);
}

export function registerShellCommand(
  name: string,
  description: string,
  commandArray: Array<string>,
  useSpinner = true,
) {
  const shellCommand = (args: Array<string>) => {
    return runShellCommand(
      [...commandArray, ...args],
      undefined,
      {},
      useSpinner,
    );
  };
  register(
    name,
    description,
    shellCommand,
  );
  return shellCommand;
}
