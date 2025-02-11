import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { CfLogo } from "packages/bfDs/static/CfLogo.tsx";
import { BfDsButton } from "packages/bfDs/components/BfDsButton.tsx";

export const LoggedInView = iso(`
  field BfCurrentViewerLoggedIn.LoggedInView @component {
    __typename
    YcForm
  }
`)(function LoggedInView({ data }) {
  return (
    <div className="flexRow editor-container">
      <div className="flexColumn left-side-bar">
        <div className="sidebar-logo">
          <CfLogo boltColor="black" foundryColor="black" />
        </div>
        <div className="flexColumn instructions">
          <div>
            Fill out or paste your Y Combinator application, then hit "Submit".
          </div>
          {
            /* <BfDsButton
            kind="secondary"
            type="submit"
            text="Show results"
            disabled={true}
            xstyle={{ alignSelf: "flex-end" }}
          /> */
          }
        </div>
      </div>
      <div className="flexRow editor-workspace">
        <data.YcForm />
      </div>
    </div>
  );
});
