import { iso } from "packages/app/__generated__/__isograph/iso.ts";

export const LoggedOutView = iso(`
  field BfCurrentViewerLoggedOut.LoggedOutView @component {
    __typename
  }
`)(function LoggedOutView({ data }) {
  return <h1>Logged out view!</h1>
});
