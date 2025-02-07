import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { BfDsButton } from "packages/bfDs/components/BfDsButton.tsx";
import entrypoint from "packages/app/__generated__/__isograph/Query/RegistrationOptions/entrypoint.ts";
import mutation from "packages/app/__generated__/__isograph/Mutation/Register/entrypoint.ts";
import { useImperativeReference } from "@isograph/react";
import { getLogger } from "packages/logger.ts";
import { startRegistration } from "@simplewebauthn/browser";

import { useState } from "react";
import { useMutation } from "packages/app/hooks/isographPrototypes/useMutation.tsx";

const logger = getLogger(import.meta);

export const RegisterButton = iso(`
  field BfCurrentViewerLoggedOut.RegisterButton @component {
    __typename
  }
`)(function RegisterButton({ data }) {
  const { loadFragmentReference } = useImperativeReference(entrypoint);
  const { commit } = useMutation(mutation);
  const [isInFlight, setIsInFlight] = useState(false);
  function register() {
    setIsInFlight(true);
    logger.setLevel(logger.levels.DEBUG);
    loadFragmentReference({}, {
      onComplete: async (optionsJSON) => {
        logger.debug("received result", optionsJSON);
        let attRespJSON;
        try {
          attRespJSON = await startRegistration({ optionsJSON });
          logger.debug("start this thing nao omfg", attRespJSON);
        } catch (e) {
          logger.error(e);
        }
        if (attRespJSON) {
          const attResp = JSON.stringify(attRespJSON);
          commit({ attResp }, {
            onComplete: () => {
              logger.setLevel(logger.levels.DEBUG);
              setIsInFlight(true);
              logger.debug("Completed registration.");
              logger.resetLevel();
            },
          });
        } else {
          setIsInFlight(false);
        }

        logger.resetLevel();
      },
    });
  }
  return (
    <BfDsButton
      text="You should Register!!"
      showSpinner={isInFlight}
      onClick={register}
    />
  );
});
