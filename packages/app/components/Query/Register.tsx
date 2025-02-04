import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { BfDsForm } from "packages/bfDs/components/BfDsForm/BfDsForm.tsx";
import { BfDsFormTextInput } from "packages/bfDs/components/BfDsForm/BfDsFormTextInput.tsx";
import { getLogger } from "packages/logger.ts";
import { BfDsFormSubmitButton } from "packages/bfDs/components/BfDsForm/BfDsFormSubmitButton.tsx";
// import mutation from "packages/app/__generated__/__isograph/Mutation/RegisterMutation/entrypoint.ts";
import { useMutation } from "packages/app/hooks/isographPrototypes/useMutation.tsx";
import { useMemo } from "react";

import {
  PublicKeyCredentialCreationOptionsJSON,
  startRegistration,
} from "@simplewebauthn/browser";
import { useRouter } from "packages/app/contexts/RouterContext.tsx";

const logger = getLogger(import.meta);
logger.setLevel(logger.levels.DEBUG);

type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

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
  const initialFormData = useMemo(() => {
    return {
      code: "",
    };
  }, []);
  const registrationOptions = data.registration?.options;
  if (!registrationOptions) {
    return;
  }
  async function register(formData: typeof initialFormData) {
    const optionsJSON =
      registrationOptions as PublicKeyCredentialCreationOptionsJSON;
    logger.debug('options json', optionsJSON)
    const result = await startRegistration({
      optionsJSON,
    });
    logger.info("commintting here", result);
  }
  return (
    <BfDsForm initialData={initialFormData} onSubmit={register}>
      <BfDsFormTextInput
        id="name"
        title={data.registration?.person?.name ?? "Welcome!"}
      />
      <BfDsFormSubmitButton text="submit" />
    </BfDsForm>
  );
});
