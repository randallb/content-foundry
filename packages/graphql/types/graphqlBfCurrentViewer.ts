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
    t.field("authenticationOptions", {
      type: graphqlJSONStringScalarType,

      async resolve() {
        return JSON.stringify(
          await BfPerson.generateAuthenticationOptionsForGraphql(),
        );
      },
    });
  },
});

export const graphqlBfCurrentViewerQueryType = queryField("me", {
  type: graphqlBfCurrentViewerType,
  resolve(_root, _args, ctx) {
    return ctx.getCvForGraphql();
  },
});

export const graphqlBfCurrentViewerRegistrationOptionsType = queryField("registrationOptions", {
  type: graphqlJSONStringScalarType,
  resolve: async () => {
    const regOptions = await BfPerson.generateRegistrationOptionsForGraphql();
    return JSON.stringify(regOptions);
  }
})

export const graphqlBfCurrentViewerRegisterMutation = mutationField(
  "register",
  {
    type: graphqlBfCurrentViewerType,
    args: {
      registrationResponse: nonNull(arg({ type: graphqlJSONStringScalarType })),
    },
    async resolve(parent, { registrationResponse }, ctx) {
      const registrationResponseJSON: RegistrationResponseJSON = JSON.parse(
        registrationResponse,
      );
      const person = await BfPerson.register(registrationResponseJSON);

      return ctx.getCvForGraphql();
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