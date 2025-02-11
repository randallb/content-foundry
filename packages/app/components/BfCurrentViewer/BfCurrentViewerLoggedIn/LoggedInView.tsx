import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { BfDsForm } from "packages/bfDs/components/BfDsForm/BfDsForm.tsx";
import { BfDsInput } from "packages/bfDs/components/BfDsInput.tsx";

export const LoggedInView = iso(`
  field BfCurrentViewerLoggedIn.LoggedInView @component {
    __typename
    YcForm
  }
`)(function LoggedInView({ data }) {
  return <h1>Logged in view!</h1>;
});
