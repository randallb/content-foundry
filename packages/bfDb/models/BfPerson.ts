import { BfNode } from "packages/bfDb/coreModels/BfNode.ts";
import { getLogger } from "packages/logger.ts";
import { BfCurrentViewer } from "packages/bfDb/classes/BfCurrentViewer.ts";
import { BfError, BfErrorNotImplemented } from "packages/BfError.ts";
import { generateUUID } from "lib/generateUUID.ts";
import {
  generateAuthenticationOptions,
  generateRegistrationOptions,
  PublicKeyCredentialRequestOptionsJSON,
} from "@simplewebauthn/server";

const logger = getLogger(import.meta);

export type BfPersonProps = {
  name: string;
};

const rpID = Deno.env.get("REPLIT_DEV_DOMAIN");

/**
 * @class
 * @description
 */
export class BfPerson extends BfNode<BfPersonProps> {
  static async findCurrentViewer(
    cv: BfCurrentViewer,
  ): Promise<BfPerson | null> {
    // throw new BfErrorNotImplemented();
    return new this(cv, { name: "Bob" });
  }

  static async generateRegistrationOptionsForGraphql(code: string) {
    logger.debug("Generating registration options for graphql");

    const userID = new Uint8Array(
      new TextEncoder().encode(code),
    );
    if (!rpID || !userID) {
      throw new BfError("Can't generate registration options for graphql");
    }
    logger.debug("Generating registration options for graphql", {
      rpID,
      userID,
    });
    const userName = "You!";
    const result = await generateRegistrationOptions({
      rpName: "Content Foundry",
      rpID,
      userName,
    });

    return result;
  }

  async generateAuthenticationOptionsForGraphql() {
    if (!rpID) {
      throw new BfError("Can't generate authentication options for graphql");
    }
    const result = await generateAuthenticationOptions({
      rpID,
    });
    return result;
  }
}
