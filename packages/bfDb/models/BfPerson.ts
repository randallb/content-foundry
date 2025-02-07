import { BfNode } from "packages/bfDb/coreModels/BfNode.ts";
import { getLogger } from "packages/logger.ts";
import { BfCurrentViewer } from "packages/bfDb/classes/BfCurrentViewer.ts";
import { BfError } from "packages/BfError.ts";
import {
  AuthenticationResponseJSON,
  generateAuthenticationOptions,
  generateRegistrationOptions,
  type RegistrationResponseJSON,
  verifyAuthenticationResponse,
  verifyRegistrationResponse,
  WebAuthnCredential,
} from "@simplewebauthn/server";
import { type BfGid, toBfGid } from "packages/bfDb/classes/BfNodeIds.ts";
import { BfErrorNodeNotFound } from "packages/bfDb/classes/BfErrorNode.ts";
import type { JSONValue } from "packages/bfDb/bfDb.ts";

const logger = getLogger(import.meta);

export type BfPersonProps = {
  name: string;
  registrationOptions?: Record<string, JSONValue>;
  credential?: Record<string, JSONValue>;
};

const rpID = Deno.env.get("REPLIT_DEV_DOMAIN");

/**
 * @class
 * @description
 */
export class BfPerson extends BfNode<BfPersonProps> {
  static findCurrentViewer(
    cv: BfCurrentViewer,
  ): Promise<BfPerson> {
    return this.findX(cv, cv.bfGid);
  }

  static async generateRegistrationOptionsForGraphql() {
    logger.debug("Generating registration options for graphql");

    const cv = BfCurrentViewer
      .__DANGEROUS_USE_IN_REGISTRATION_ONLY__createCvForRegistration(
        import.meta,
      );

    const person = await BfPerson.__DANGEROUS__createUnattached(cv, {
      name: "Content Foundry Anon",
    });

    const userID = new Uint8Array(
      new TextEncoder().encode(person.metadata.bfGid),
    );
    if (!rpID || !userID) {
      throw new BfError("Can't generate registration options for graphql");
    }
    logger.debug("Generating registration options for graphql", {
      rpID,
      userID,
    });
    const userName = person.props.name;
    const result = await generateRegistrationOptions({
      rpName: "Content Foundry",
      rpID,
      userName,
    });

    const registrationOptions = JSON.parse(JSON.stringify(result));

    person.props = { registrationOptions };
    await person.save();

    return result;
  }

  static async register(
    registrationOptions: RegistrationResponseJSON,
  ) {
    const currentViewer = BfCurrentViewer
      .__DANGEROUS_USE_IN_REGISTRATION_ONLY__createCvForRegistration(
        import.meta,
        registrationOptions.id,
      );
    const person = await BfPerson.findCurrentViewer(currentViewer);
    if (!rpID) {
      throw new BfError("Implement RPID please!");
    }
    if (!person || !person.props.registrationOptions) {
      throw new BfErrorNodeNotFound();
    }

    const priorOptions = person.props.registrationOptions;

    const verification = await verifyRegistrationResponse({
      response: registrationOptions,
      expectedChallenge: priorOptions.challenge as string,
      expectedOrigin: rpID,
      expectedRPID: rpID,
    });

    const { verified, registrationInfo } = verification;

    if (!verified) {
      logger.error("Registration verification failed", verification);
      throw new BfError("Registration failed!");
    }

    logger.debug("person", person);
    const credential = JSON.parse(JSON.stringify(registrationInfo));
    person.props = {
      credential,
    };
    await person.save();
    return person;
  }

  static async generateAuthenticationOptionsForGraphql() {
    if (!rpID) {
      throw new BfError("Can't generate authentication options for graphql");
    }

    const result = await generateAuthenticationOptions({
      rpID,
    });

    return result;
  }

  static async verifyLogin(
    cv: BfCurrentViewer,
    response: AuthenticationResponseJSON,
  ) {
    const person = await BfPerson.findCurrentViewer(cv);
    if (!person.props.registrationOptions || !rpID) {
      throw new BfError("No registration options found");
    }
    const currentOptions = person.props.registrationOptions;
    const credential = person.props.credential;
    if (!credential) {
      throw new BfError("No credential found");
    }
    let verification;
    try {
      verification = await verifyAuthenticationResponse({
        response,
        expectedChallenge: currentOptions.challenge as string,
        expectedOrigin: origin,
        expectedRPID: rpID,
        credential: credential as unknown as WebAuthnCredential,
      });
    } catch (e) {
      logger.error(e);
    }
    return verification?.verified ?? false;
  }
}