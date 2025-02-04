import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import type { RouteEntrypoint } from "packages/app/routes.ts";

export const EntrypointRegister = iso(`
  field Query.EntrypointRegister($code: ID!) {
    RegistrationForm(code: $code)
  }
`)(function EntrypointRegister({ data }): RouteEntrypoint {
  return { Body: data.RegistrationForm, title: "Register" };
})