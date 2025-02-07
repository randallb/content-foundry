import { iso } from "packages/app/__generated__/__isograph/iso.ts";

export const WelcomeVideo = iso(`
  field BfCurrentViewerLoggedOut.WelcomeVideo @component {
    __typename
  }
`)(function WelcomeVideo({ data }) {
  return (
    <h2>I'm a video player</h2>
  );
});
