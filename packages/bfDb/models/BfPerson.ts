import { BfNode } from "packages/bfDb/coreModels/BfNode.ts";
import { getLogger } from "packages/logger.ts";
import { BfCurrentViewer } from "packages/bfDb/classes/BfCurrentViewer.ts";
import { BfError, BfErrorNotImplemented } from "packages/BfError.ts";
import { generateUUID } from "lib/generateUUID.ts";
import {
  generateRegistrationOptions,
  PublicKeyCredentialRequestOptionsJSON,
} from "@simplewebauthn/server";

const logger = getLogger(import.meta);
logger.setLevel(logger.levels.DEBUG);

export type BfPersonProps = {
  name: string;
};

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

  async generateRegistrationOptionsForGraphql() {
    logger.debug("Generating registration options for graphql");
    const rpID = Deno.env.get("REPLIT_DEV_DOMAIN");
    const userID = new Uint8Array(
      new TextEncoder().encode(this.metadata.bfGid),
    );
    if (!rpID || !userID) {
      throw new BfError("Can't generate registration options for graphql");
    }
    logger.debug("Generating registration options for graphql", {
      rpID,
      userID,
    });
    const result = await generateRegistrationOptions({
      rpName: "Content Foundry",
      rpID,
      userName: this.props.name,
    });

    return {
      attestation: result.attestation?.toString() ?? "none",
      authenticatorSelection: {
        residentKey: result.authenticatorSelection?.residentKey?.toString() ||
          "preferred",
        userVerification:
          result.authenticatorSelection?.userVerification?.toString() ||
          "preferred",
        requireResidentKey: !!result.authenticatorSelection?.requireResidentKey,
      },
      challenge: result.challenge,
      excludeCredentials: result.excludeCredentials?.map((credential) => ({
        id: credential.id,
        transports: credential.transports ?? [],
        type: credential.type,
      })) ?? [],
      extensions: {
        credProps: !!result.extensions?.credProps,
      },
      //  Ensure that the hints array only contains valid enum values
      hints:
        result.hints?.map((hint) =>
          hint as "client-device" | "hybrid" | "security-key"
        ) ?? [],
      pubKeyCredParams: result.pubKeyCredParams.map((param) => ({
        alg: param.alg,
        type: param.type,
      })),
      rp: {
        id: result.rp.id || "contentfoundry.org",
        name: result.rp.name,
      },
      timeout: result.timeout ?? 0,
      user: {
        id: result.user.id,
        displayName: result.user.displayName,
        name: result.user.name,
      },
    };
  }
}
