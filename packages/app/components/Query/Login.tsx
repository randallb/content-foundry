import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { BfDsButton } from "packages/bfDs/components/BfDsButton.tsx";

export const LoginForm = iso(`
  field Query.LoginForm @component {
    me {
      asBfCurrentViewerLoggedOut {
        authenticationOptions
      }
    }
  }
`)(function LoginForm({ data }) {
  return <BfDsButton text="Clicky mc clickington" />
})