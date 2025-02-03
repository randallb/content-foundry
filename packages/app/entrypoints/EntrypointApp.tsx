import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import type { RouteEntrypoint } from "packages/app/routes.ts";

export const EntrypointAdminApp = iso(`
  field Query.EntrypointAdminApp {
    AdminApp
  }
`)(function EntrypointAdminApp({ data }): RouteEntrypoint {
  return { Body: data.AdminApp, title: "Admin App" };
});
