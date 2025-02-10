import { isBrowser } from "packages/logger.ts";

export function getConfigurationVariable(
  configVar: string,
): string | undefined {
  if (isBrowser()) {
    // @ts-expect-error global environment variables
    return globalThis.__ENVIRONMENT__?.[configVar];
  }
  return Deno.env.get(configVar);
}
