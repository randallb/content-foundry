import type * as React from "react";
import { RouterLink } from "packages/app/components/Router/RouterLink.tsx";
import { CfLogo } from "packages/app/resources/CfLogo.tsx";

export function MarketingFrame({ children }: React.PropsWithChildren) {
  return (
    <div className="landing-page-frame">
      <nav className="landing-page-header">
        <div className="landing-page-logo">
          <RouterLink to="/">
            <CfLogo />
          </RouterLink>
        </div>
        <div className="landing-page-nav">
        </div>
      </nav>
      {children}
    </div>
  );
}
