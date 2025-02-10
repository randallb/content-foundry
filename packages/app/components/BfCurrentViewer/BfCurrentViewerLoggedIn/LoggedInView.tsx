import { iso } from "packages/app/__generated__/__isograph/iso.ts";

export const LoggedInView = iso(`
  field BfCurrentViewerLoggedIn.LoggedInView @component {
    __typename
  }
`)(function LoggedInView({ data }) {
  return <h1>Logged in view!</h1>;
});
