import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { BfDsButton } from "packages/bfDs/components/BfDsButton.tsx";
import { BfDsTooltip } from "packages/bfDs/components/BfDsTooltip.tsx";

export const DemoButton = iso(`
  field BfCurrentViewerLoggedOut.DemoButton @component {
    __typename
  }
`)(function DemoButton({ data }) {
  return (
    <BfDsTooltip text="Try the demo">
      <div className="center">
        <BfDsButton text="Try the demo" xstyle={{ width: "80%" }} />
      </div>
    </BfDsTooltip>
  );
});
