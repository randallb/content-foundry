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
import { BfError, BfErrorNotImplemented } from "packages/BfError.ts";
import { toBfGid } from "packages/bfDb/classes/BfNodeIds.ts";
import { graphqlBfPerson } from "packages/graphql/types/graphqlBfPerson.ts";

const logger = getLogger(import.meta);

export const graphqlAuthenticatorSelectionType = objectType({
  name: "AuthenticatorSelection",
  definition(t) {
    t.nonNull.string("residentKey");
    t.nonNull.string("userVerification");
    t.nonNull.boolean("requireResidentKey");
  },
});

export const graphqlExtensionsType = objectType({
  name: "RegistrationOptionsExtensions",
  definition(t) {
    t.nonNull.boolean("credProps");
  },
});

export const graphqlRegistrationOptionsPubKeyCredParamsType = objectType({
  name: "RegistrationOptionsPubKeyCredParams",
  definition(t) {
    t.nonNull.field("type", { type: graphqlPublicKeyOptionType });
    t.nonNull.int("alg");
  },
});

export const graphqlRegistrationOptionsUserType = objectType({
  name: "RegistrationOptionsUser",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("name");
    t.nonNull.string("displayName");
  },
});

export const graphqlRegistrationOptionsRpType = objectType({
  name: "RegistrationOptionsRp",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("name");
  },
});

export const graphqlPublicKeyOptionType = enumType({
  name: "PublicKeyRegistrationOption",
  members: { "public_key": "public-key" },
});

export const graphqlPublicKeyCredentialHintType = enumType({
  name: "PublicKeyCredentialHint",
  members: {
    "security_key": "security-key",
    "client_device": "client-device",
    "hybrid": "hybrid",
  },
});

export const graphqlPublicKeyCredentialDescriptorJSON = objectType({
  name: "PublicKeyCredentialDescriptorJSON",
  definition(t) {
    t.nonNull.field("type", { type: graphqlPublicKeyOptionType });
    t.nonNull.string("id");
    t.list.string("transports");
  },
});

export const graphqlRegistrationOptionsType = objectType({
  name: "RegistrationOptions",
  definition(t) {
    t.nonNull.string("challenge");
    t.nonNull.field("user", {
      type: graphqlRegistrationOptionsUserType,
    });
    t.nonNull.int("timeout");
    t.nonNull.string("attestation");
    t.nonNull.field("authenticatorSelection", {
      type: graphqlAuthenticatorSelectionType,
    });
    t.nonNull.field("extensions", {
      type: graphqlExtensionsType,
    });
    t.nonNull.list.nonNull.field("excludeCredentials", {
      type: graphqlPublicKeyCredentialDescriptorJSON,
    });
    t.nonNull.field("rp", {
      type: graphqlRegistrationOptionsRpType,
    });
    t.nonNull.list.nonNull.field("pubKeyCredParams", {
      type: graphqlRegistrationOptionsPubKeyCredParamsType,
    });
    t.nonNull.list.nonNull.field("hints", {
      type: graphqlPublicKeyCredentialHintType,
    });
  },
});

export const graphqlRegistrationType = objectType({
  name: "Registration",
  definition(t) {
    t.field("options", { type: graphqlRegistrationOptionsType });
    t.field("person", { type: graphqlBfPerson });
  },
});

export const graphqlRegistrationQuery = queryField("registration", {
  type: graphqlRegistrationType,
  args: {
    code: nonNull(idArg()),
  },
  resolve: async (parent, args, ctx, info) => {
    const person = await ctx.findX(BfPerson, toBfGid(args.code));
    const options = await person.generateRegistrationOptionsForGraphql();
    return { options, person: person.toGraphql() };
  },
});
