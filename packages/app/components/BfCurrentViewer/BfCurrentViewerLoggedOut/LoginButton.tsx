import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { BfDsButton } from "packages/bfDs/components/BfDsButton.tsx";

export const LoginButton = iso(`
  field BfCurrentViewerLoggedOut.LoginButton @component {
    __typename
  }
`)(function LoginButton({ data }) {
  return (
    <BfDsButton text="You should log in" />
  );
});
