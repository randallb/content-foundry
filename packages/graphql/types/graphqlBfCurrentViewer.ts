import {
  arg,
  enumType,
  interfaceType,
  mutationField,
  nonNull,
  objectType,
  queryField,
  stringArg,
} from "nexus";
import { graphqlNode } from "packages/graphql/types/graphqlBfNode.ts";
import { getLogger } from "packages/logger.ts";
import { BfPerson } from "packages/bfDb/models/BfPerson.ts";
import { toBfGid } from "packages/bfDb/classes/BfNodeIds.ts";
import {
  graphqlJSONScalarType,
  graphqlJSONStringScalarType,
} from "packages/graphql/types/graphqlJSONScalar.ts";
import { RegistrationResponseJSON } from "@simplewebauthn/server";
import { BfError } from "packages/BfError.ts";
import { BfCurrentViewer } from "packages/bfDb/classes/BfCurrentViewer.ts";

const logger = getLogger(import.meta);

export const graphqlBfCurrentViewerType = interfaceType({
  name: "BfCurrentViewer",
  definition(t) {
    t.implements(graphqlNode);
  },
});

export const graphqlBfCurrentViewerLoggedInType = objectType({
  name: "BfCurrentViewerLoggedIn",
  definition(t) {
    t.implements(graphqlBfCurrentViewerType);
  },
});

export const graphqlBfCurrentViewerLoggedOutType = objectType({
  name: "BfCurrentViewerLoggedOut",
  definition(t) {
    t.implements(graphqlBfCurrentViewerType);
  },
});

export const graphqlBfCurrentViewerQueryType = queryField("me", {
  type: graphqlBfCurrentViewerType,
  resolve(_root, _args, ctx) {
    return ctx.getCvForGraphql();
  },
});

export const graphqlBfCurrentViewerRegistrationOptionsType = mutationField(
  "registrationOptions",
  {
    type: graphqlJSONStringScalarType,
    args: {
      email: nonNull(stringArg()),
    },
    resolve: async (_parent, { email }, ctx) => {
      const { regOptions, person } = await BfPerson
        .generateRegistrationOptionsForGraphql(email);
      ctx.setRegisteringUser(person);
      return JSON.stringify(regOptions);
    },
  },
);

export const graphqlBfCurrentViewerRegisterMutation = mutationField(
  "register",
  {
    type: graphqlBfCurrentViewerType,
    args: {
      attResp: nonNull(arg({ type: graphqlJSONStringScalarType })),
      email: nonNull(stringArg()),
    },
    async resolve(parent, { attResp, email }, ctx) {
      const registrationResponseJSON: RegistrationResponseJSON = JSON.parse(
        attResp,
      );

      const person = await BfPerson.register(
        registrationResponseJSON,
        email,
      );

      return ctx.getCvForGraphql();
    },
  },
);

export const graphqlBfCurrentViewerCheckEmailMutation = mutationField("checkEmail", {
  type: "Boolean",
  args: {
    email: nonNull(stringArg()),
  },
  resolve: async (_, { email }, ctx) => {
    try {
      const cv = BfCurrentViewer.__DANGEROUS_USE_IN_REGISTRATION_ONLY__createCvForRegistration(import.meta, email)
      const person = await BfPerson.findByEmail(cv, email);
      logger.debug("person", person);
      return person != null && person.props?.credential !== undefined;
    } catch (error) {
      return false;
    }
  },
});

export const graphqlBfCurrentViewerGetLoginOptionsMutation = mutationField(
  "getLoginOptions",
  {
    type: graphqlJSONStringScalarType,
    args: {
      email: nonNull(stringArg()),
    },
    async resolve(_parent, { email }) {
      const options = await BfPerson.generateAuthenticationOptionsForGraphql(email);
      return JSON.stringify(options);
    },
  },
);

export const graphqlBfCurrentViewerLoginMutation = mutationField(
  "login",
  {
    type: graphqlBfCurrentViewerType,
    args: {
      options: nonNull(arg({ type: graphqlJSONStringScalarType })),
    },
    async resolve(_parent, { options }, ctx) {
      const optionsJSON = JSON.parse(options);
      const cv = await ctx.login(optionsJSON);
      const result = cv.toGraphql();
      return {
        ...result,
        // necessary for type error
        __typename: "BfCurrentViewerLoggedIn",
      };
    },
  },
);