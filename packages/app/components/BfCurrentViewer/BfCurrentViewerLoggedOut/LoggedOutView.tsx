import { iso } from "packages/app/__generated__/__isograph/iso.ts";

export const LoggedOutView = iso(`
  field BfCurrentViewerLoggedOut.LoggedOutView @component {
    WelcomeVideo
    DemoButton
    LoginButton
    RegisterButton
  }
`)(function LoggedOutView({ data }) {
  return (
    <div>
      <h1>Welcome to Content Foundry</h1>
      <p>This is text.</p>
      <data.WelcomeVideo />
      <data.DemoButton />
      <data.LoginButton />
      <data.RegisterButton />
    </div>
  );
});
