import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { BfCurrentViewerLoggedOut } from "packages/bfDb/classes/BfCurrentViewer.ts";
import { getLogger } from "packages/logger.ts";
import { BfDsButton } from "packages/bfDs/components/BfDsButton.tsx";
import { startAuthentication } from "@simplewebauthn/browser";
import { BfError } from "packages/BfError.ts";

const logger = getLogger(import.meta);

export const PageLogin = iso(`
  field Query.PageLogin @component {
    me {
       authenticationOptions {
         __typename
       }
    }
    
  }
`)(function PageLogin({ data }) {
  logger.setLevel(logger.levels.DEBUG);
  
  async function login() {
    const authenticationOptions = data?.me?.authenticationOptions;
    if (authenticationOptions == null) {
      throw new BfError("No authentication options found");
    }
    await startAuthentication({
      optionsJSON: authenticationOptions,
    });
  }

  return <BfDsButton onClick={login} text="Login using passkey" />;
});
