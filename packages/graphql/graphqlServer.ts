#! /usr/bin/env -S deno run --allow-write --allow-read --allow-env

import { connectionPlugin, makeSchema, queryField } from "nexus";
import { createYoga } from "graphql-yoga";

import * as types from "packages/graphql/__generated__/graphqlTypesList.ts";
import { createContext } from "packages/graphql/graphqlContext.ts";
import type { SchemaConfig } from "nexus/dist/builder.js";
import { getLogger } from "packages/logger.ts";

const logger = getLogger(import.meta);

const helloField = queryField("hello", {
  type: "String",
  resolve: () => "world",
});

const schemaOptions: SchemaConfig = {
  types,
  features: {
    abstractTypeStrategies: {
      __typename: true,
    },
  },
  plugins: [
    connectionPlugin({
      validateArgs: (args) => {
        if (args.first == null && args.last == null) {
          args.first = 10;
        }
        return args;
      },
      extendConnection: {
        count: {
          type: "Int",
          requireResolver: false,
        },
      },
      includeNodesField: true,
    }),
  ],
};

export const schema = makeSchema(schemaOptions);

// Create a Yoga instance with a GraphQL schema.
export const yoga = createYoga({ schema });

export const graphQLHandler = async (req: Request) => {
  using ctx = await createContext(req);
  // deno-lint-ignore no-explicit-any
  const res = await yoga.handleRequest(req, ctx as any);
  return res;
};

function makeNameThing(fileName: string) {
  return `export * from "packages/graphql/types/${fileName}";\n`;
}

if (import.meta.main) {
  logger.info("Building GraphQL schema...");
  const files = Deno.readDir(
    new URL(import.meta.resolve("packages/graphql/types")),
  );
  const nextTypes = [];

  for await (const file of files) {
    if (file.name.startsWith("graphql") && file.name.endsWith(".ts")) {
      nextTypes.push(file.name);
    }
  }

  nextTypes.sort();

  const fileString = `
/* @generated */
/* magical note: this was generated by server.ts. */

${nextTypes.map(makeNameThing).join("")}

/* you're welcome. */
  `;

  await Deno.writeTextFile(
    new URL(import.meta.resolve("./__generated__/graphqlTypesList.ts")),
    fileString,
  );

  const types = await import(
    "packages/graphql/__generated__/graphqlTypesList.ts"
  );

  makeSchema({
    ...schemaOptions,
    types,
    contextType: {
      module: import.meta.resolve("./graphqlContext.ts").replace("file://", ""),
      export: "Context",
    },
    formatTypegen: (content, type) => {
      if (type === "schema") {
        return `### @generated \n${content}`;
      } else {
        return `/* @generated */\n// deno-lint-ignore-file\n${
          content.replace(
            /(["'])(\.+\/[^"']+)\1/g,
            "$1$2.ts$1",
          )
        }`;
      }
    },
    outputs: {
      schema: new URL(
        import.meta.resolve(`packages/graphql/__generated__/schema.graphql`),
      )
        .pathname,
      typegen: new URL(
        import.meta.resolve(`packages/graphql/__generated__/_nexustypes.ts`),
      )
        .pathname,
    },
  });
}
