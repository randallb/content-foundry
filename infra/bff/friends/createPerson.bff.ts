import { register } from "infra/bff/bff.ts";
import { getLogger } from "packages/logger.ts";
import { generateBluey } from "lib/generateBluey.ts";
import { BfCurrentViewer } from "packages/bfDb/classes/BfCurrentViewer.ts";
import { BfPerson } from "packages/bfDb/models/BfPerson.ts";
import { toBfGid } from "packages/bfDb/classes/BfNodeIds.ts";
import { generateUUID } from "lib/generateUUID.ts";
const logger = getLogger(import.meta);

register(
  "createPerson",
  "Creates a person in the system and returns a url to register",
  async ([name]) => {
    logger.info("creating a person now.");
    const cv = BfCurrentViewer.__DANGEROUS_USE_IN_SCRIPTS_ONLY__createOmni(import.meta);
    const bfGid = toBfGid(generateUUID());
    const metadata = { bfGid, bfOid: bfGid }
    const person = await BfPerson.__DANGEROUS__createUnattached(cv, { name }, metadata);

    logger.info(generateBluey(
      `Successfully created the user! Go to:

      https://${
        Deno.env.get("REPLIT_DEV_DOMAIN")
      }/register?code=${person.metadata.bfGid}`,
    ));
    return 0;
  },
);
