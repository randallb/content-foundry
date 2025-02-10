import { BfDsButton } from "packages/bfDs/components/BfDsButton.tsx";

export function Onboarding() {
  return (
    <>
      <h2>Welcome</h2>
      <BfDsButton kind="primary" type="submit" text="Create passkey" />
    </>
  );
}
