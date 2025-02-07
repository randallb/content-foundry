import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import type { RouteEntrypoint } from "packages/app/routes.ts";

export const EntrypointLogin = iso(`
  field Query.EntrypointLogin {
    LoginForm
  }
`)(function EntrypointRegister({ data }): RouteEntrypoint {
  return { Body: data.LoginForm, title: "Login" };
})