import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { BfDsForm } from "packages/bfDs/components/BfDsForm/BfDsForm.tsx";
import { BfDsFormTextInput } from "packages/bfDs/components/BfDsForm/BfDsFormTextInput.tsx";
import { getLogger } from "packages/logger.ts";
import { BfDsFormSubmitButton } from "packages/bfDs/components/BfDsForm/BfDsFormSubmitButton.tsx";
import mutation from "packages/app/__generated__/__isograph/Mutation/RegisterMutation/entrypoint.ts";
import { useMutation } from "packages/app/hooks/isographPrototypes/useMutation.tsx";
import { useMemo } from "react";

import { startRegistration } from "@simplewebauthn/browser";
import { useRouter } from "packages/app/contexts/RouterContext.tsx";


const logger = getLogger(import.meta);



export const RegistrationForm = iso(`
  field Query.RegistrationForm($code: ID!) @component {
    registrationOptions(code: $code) {
      __typename
    }
  }
`)(function RegistrationForm({ data }) {
  const initialFormData = useMemo(() => {
    return {
      code: "",
    };
  }, [])
  async function register(formData: typeof initialFormData) {
    const result = await startRegistration({
      optionsJSON: {
        challenge: "something",
        rp: {
          name: "lol",
        },
        user: {
          displayName: "RanDull",
          id: "something",
          name: "RanDull",
        },
        pubKeyCredParams: [{
          alg: 256,
          type: "public-key",
        }]
      },
    });
    logger.info("commintting here", result)
  }
  return (
    <BfDsForm initialData={initialFormData} onSubmit={register}>
      <BfDsFormTextInput id="name" title={data.registrationOptions?.__typename ?? "lol"} />
      <BfDsFormSubmitButton text="submit" />
    </BfDsForm>
  );
});
