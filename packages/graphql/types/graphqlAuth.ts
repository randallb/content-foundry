import {
  enumType,
  idArg,
  inputObjectType,
  mutationField,
  nonNull,
  objectType,
  queryField,
  stringArg,
} from "nexus";
import { graphqlBfNode } from "packages/graphql/types/graphqlBfNode.ts";
import { getLogger } from "packages/logger.ts";
import { BfPerson } from "packages/bfDb/models/BfPerson.ts";
import {
  generateRegistrationOptions,
  verifyRegistrationResponse,
} from "@simplewebauthn/server";

const logger = getLogger(import.meta);

const fakeDb = {};

export const graphqlRegistrationOptionsType = objectType({
  name: "RegistrationOptions",
  definition(t) {
    t.string("publicKey");
    t.string("challenge");
    t.string("user");
    t.int("timeout");
    t.string("attestation");
    t.string("authenticatorSelection");
    t.string("supportedAuthenticatorTypes");
    t.string("extensions");
  },
});

export const graphqlRegistrationTransportsFutureType = enumType({
  name: "RegistrationTransportsFuture",
  members: [
    "ble",
    "cable",
    "hybrid",
    "internal",
    "nfc",
    // "smart-card",
    "usb",
  ],
});

export const graphqlRegistrationOptionsCredentialPropertiesOutput =
  inputObjectType({
    name: "RegistrationOptionsCredentialPropertiesOutput",
    definition(t) {
      t.nonNull.boolean("rk");
    },
  });

export const graphqlRegistrationOptionsAuthenticationExtensionsClientOutputs =
  inputObjectType({
    name: "RegistrationOptionsAuthenticationExtensionsClientOutputs",
    definition(t) {
      t.nonNull.boolean("appid");
      t.nonNull.field("credProps", {
        type: graphqlRegistrationOptionsCredentialPropertiesOutput,
      });
      t.nonNull.boolean("hmacCreateSecret");
    },
  });

export const graphqlRegistrationOptionsAttestationInputType = inputObjectType(
  {
    name: "RegistrationOptionsAttestationInput",
    definition(t) {
      t.nonNull.string("clientDataJSON");
      t.nonNull.string("attestationObject");
      t.nonNull.string("authenticatorData");
      t.nonNull.list.nonNull.field("transports", {
        type: graphqlRegistrationTransportsFutureType,
      });
      t.nonNull.int("publicKeyAlgorithm");
      t.nonNull.string("publicKey");
    },
  },
);

export const graphqlType = enumType({
  name: "Thingy",
  members: { "public_key": "public-key" },
});

export const graphqlRegistrationOptionsInputType = inputObjectType({
  name: "RegistrationOptionsInput",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.id("rawId");
    t.nonNull.field("response", {
      type: graphqlRegistrationOptionsAttestationInputType,
    });
    t.nonNull.string("publicKey");
    t.nonNull.string("challenge");
    t.nonNull.string("user");
    t.nonNull.int("timeout");
    t.nonNull.field("attestation", {
      type: graphqlRegistrationOptionsAttestationInputType,
    });
    t.nonNull.string("authenticatorSelection");
    t.nonNull.string("supportedAuthenticatorTypes");
    t.nonNull.string("extensions");
    t.nonNull.field("type", { type: graphqlType });
    t.nonNull.field("clientExtensionResults", {
      type: graphqlRegistrationOptionsAuthenticationExtensionsClientOutputs,
    });
  },
});

export const graphqlRegisterMutation = mutationField("register", {
  type: graphqlBfNode,
  args: {
    registrationInput: nonNull(graphqlRegistrationOptionsInputType),
  },
  resolve: async (parent, args, ctx, info) => {
    logger.info("Trying to register");
    const thingy = await verifyRegistrationResponse({
      response: args.registrationInput,
      expectedOrigin: "something",
      expectedChallenge: "something",
    });
    const person = await ctx.create(BfPerson, { name: "Randall" });
    return person.toGraphql();
  },
});

export const graphqlRegistrationQuery = queryField("registrationOptions", {
  type: graphqlRegistrationOptionsType,
  args: {
    code: nonNull(idArg()),
  },
  // @ts-expect-error techdebt
  resolve: async (parent, args, ctx, info) => {
    const username = "poopy butt";
    const thingy = await generateRegistrationOptions({
      rpID: username,
      rpName: Deno.env.get("RP_NAME") ?? Deno.env.get("REPLIT_DOMAINS") ??
        "",
      userName: username,
    });
    return thingy;
  },
});
