import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import type { RouteEntrypoint } from "packages/app/routes.ts";

export const EntrypointLogin = iso(`
  field Query.EntrypointLogin {
    __typename
  }
`)(function EntrypointLogin({ data }): RouteEntrypoint {
  return { Body: () => null, title: "Login" };
})