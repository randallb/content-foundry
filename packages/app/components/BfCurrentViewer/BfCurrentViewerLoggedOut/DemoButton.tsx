import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { BfDsButton } from "packages/bfDs/components/BfDsButton.tsx";

export const DemoButton = iso(`
  field BfCurrentViewerLoggedOut.DemoButton @component {
    __typename
  }
`)(function DemoButton({ data }) {
  return (
    <BfDsButton text="Try the demo" />
  );
});
