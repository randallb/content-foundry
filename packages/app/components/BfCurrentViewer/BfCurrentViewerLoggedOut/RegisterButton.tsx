import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { BfDsButton } from "packages/bfDs/components/BfDsButton.tsx";
import entrypoint from "packages/app/__generated__/__isograph/Query/RegistrationOptions/entrypoint.ts";
import { useImperativeReference, useResult } from "@isograph/react";
import { getLogger } from "packages/logger.ts";
import { startRegistration } from '@simplewebauthn/browser';

import { useState } from "react";

const logger = getLogger(import.meta);

export const RegisterButton = iso(`
  field BfCurrentViewerLoggedOut.RegisterButton @component {
    __typename
  }
`)(function RegisterButton({ data }) {
  const { loadFragmentReference } = useImperativeReference(entrypoint);
  const [isInFlight, setIsInFlight] = useState(false);
  function register() {
    setIsInFlight(true);
    logger.setLevel(logger.levels.DEBUG);
    loadFragmentReference({}, {
      onComplete: async (optionsJSON) => {
        logger.debug("received result", optionsJSON);
        let attResp;
        try {
          attResp = await startRegistration({ optionsJSON });
          logger.debug("start this thing nao omfg", attResp);
        } catch (e) {
          logger.error(e);
        } finally {
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
