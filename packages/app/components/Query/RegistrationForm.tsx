import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { getLogger } from "packages/logger.ts";

import {
  type PublicKeyCredentialCreationOptionsJSON,
  startRegistration,
} from "@simplewebauthn/browser";
import { BfDsButton } from "packages/bfDs/components/BfDsButton.tsx";
import { BfError } from "packages/BfError.ts";

const logger = getLogger(import.meta);

export const RegistrationForm = iso(`
  field Query.RegistrationForm($code: String!) @component {
    me {
      asBfCurrentViewerLoggedOut {
        registrationOptions(code: $code)
      }
    }
    
  }
`)(function RegistrationForm({ data, parameters }) {
  // const registrationOptions = data.registration?.options;
  // if (!registrationOptions) {
  //   return;
  // }
  const registrationOptions =
    data?.me?.asBfCurrentViewerLoggedOut?.registrationOptions;
  async function register() {
    if (!registrationOptions) {
      throw new BfError("Can't register");
    }
    const optionsJSON = JSON.parse(
      registrationOptions,
    ) as PublicKeyCredentialCreationOptionsJSON;
    logger.debug("options json", optionsJSON);
    const result = await startRegistration({
      optionsJSON,
    });
    logger.info("commintting here", result);
  }
  return (
    <BfDsButton onClick={register} text="Click to register your passkey" />
  );
});
