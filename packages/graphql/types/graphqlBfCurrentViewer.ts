import {
  enumType,
  interfaceType,
  nonNull,
  objectType,
  queryField,
  stringArg,
} from "nexus";
import { graphqlNode } from "packages/graphql/types/graphqlBfNode.ts";
import { getLogger } from "packages/logger.ts";
import { BfPerson } from "packages/bfDb/models/BfPerson.ts";
import { toBfGid } from "packages/bfDb/classes/BfNodeIds.ts";
import { graphqlJSONScalarType, graphqlJSONStringScalarType } from "packages/graphql/types/graphqlJSONScalar.ts";

const logger = getLogger(import.meta);

export const graphqlBfCurrentViewerType = interfaceType({
  name: "BfCurrentViewer",
  definition(t) {
    t.implements(graphqlNode);
  },
});

export const graphqlBfCurrentViewerLoggedOutType = objectType({
  name: "BfCurrentViewerLoggedOut",
  definition(t) {
    t.implements(graphqlBfCurrentViewerType);
    t.field("authenticationOptions", {
      type: graphqlJSONStringScalarType,
      async resolve(parent, _args, ctx) {
        const parentPerson = await ctx.findX(BfPerson, toBfGid(parent.id));
        const authOptions = await parentPerson
          .generateAuthenticationOptionsForGraphql();
        return authOptions;
      },
    });
    t.field("registrationOptions", {
      type: graphqlJSONStringScalarType,
      args: {
        code: nonNull(stringArg()),
      },
      async resolve(parent, { code }, ctx) {
        logger.setLevel(logger.levels.DEBUG);
        const regOptions = await BfPerson.generateRegistrationOptionsForGraphql(
          code,
        );
        logger.debug(
          "parent",
          parent,
          "code",
          code,
          "Registration options",
          regOptions,
        );
        return regOptions;
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
