import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { getLogger } from "packages/logger.ts";

import {
  type PublicKeyCredentialCreationOptionsJSON,
  startRegistration,
} from "@simplewebauthn/browser";
import { BfDsButton } from "packages/bfDs/components/BfDsButton.tsx";

const logger = getLogger(import.meta);

export const RegistrationForm = iso(`
  field Query.RegistrationForm($code: ID!) @component {
    registration(code: $code) {
      options {
        challenge
        rp {
          name
          id
        }
        user {
          id
          name
          displayName
        }
        pubKeyCredParams {
          type
          alg
        }
        authenticatorSelection {
          requireResidentKey
          userVerification
        }
        excludeCredentials {
          id
        }
        attestation 
        extensions {
          credProps
        }
      }
      person {
        name
      }
    }
  }
`)(function RegistrationForm({ data }) {
  const registrationOptions = data.registration?.options;
  if (!registrationOptions) {
    return;
  }
  async function register() {
    const optionsJSON =
      registrationOptions as PublicKeyCredentialCreationOptionsJSON;
    logger.debug('options json', optionsJSON)
    const result = await startRegistration({
      optionsJSON,
    });
    logger.info("commintting here", result);
  }
  return (
    <BfDsButton onClick={register} text="Click to register your passkey" />
  );
});