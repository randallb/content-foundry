import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import type { RouteEntrypoint } from "packages/app/routes.ts";

export const EntrypointContentFoundryApp = iso(`
  field Query.EntrypointContentFoundryApp {
    ContentFoundryApp
  }
`)(function EntrypointContentFoundryApp({ data }): RouteEntrypoint {
  return { Body: data.ContentFoundryApp, title: "Content Foundry" };
});
