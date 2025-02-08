import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { CfLogo } from "packages/app/resources/CfLogo.tsx";

export const LoggedOutView = iso(`
  field BfCurrentViewerLoggedOut.LoggedOutView @component {
    WelcomeVideo
    DemoButton
    LoginAndRegisterForm
  }
`)(function LoggedOutView({ data }) {
  return (
    <div className="appPage flexCenter">
      <div className="appHeader">
        <div className="appHeaderCenter">
          <div className="appHeaderWelcomer">
            Welcome to
          </div>
          <div className="appHeaderLogo">
            <CfLogo boltColor="black" foundryColor="black" />
          </div>
        </div>
      </div>
      <div className="loginBox">
        <p>This is text.</p>
        <data.WelcomeVideo />
        <data.DemoButton />
        <data.LoginAndRegisterForm />
      </div>
    </div>
  );
});
