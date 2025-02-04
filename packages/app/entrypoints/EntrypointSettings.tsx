import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import type { RouteEntrypoint } from "packages/app/routes.ts";
import { BfError } from "packages/BfError.ts";

export const EntrypointPersonSettings = iso(`
  field Query.EntrypointPersonSettings {
    me {
      PersonSettings
    }
  }
`)(function EntrypointPersonSettings({ data }): RouteEntrypoint {
  if (!data.me?.PersonSettings) {
    throw new BfError("Not found");
  }
  return { Body: data.me.PersonSettings, title: "Settings" };
});
