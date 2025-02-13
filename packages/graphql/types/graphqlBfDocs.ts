import { objectType } from "nexus";
import { BfDocsPost } from "packages/bfDb/models/BfDocsPost.ts";
import { connectionFromArray } from "graphql-relay";
import { graphqlBfNode } from "packages/graphql/types/graphqlBfNode.ts";

export const graphqlBfDocsPostType = objectType({
  name: "BfDocsPost",
  definition(t) {
    t.implements(graphqlBfNode);
    t.string("author");
    t.string("content");
    t.string("title");
    t.string("status");
    t.string("summary");
    t.string("slug");
  },
});

export const graphqlBfDocsType = objectType({
  name: "BfDocs",
  definition(t) {
    t.implements(graphqlBfNode);
    t.string("name");
    // @ts-ignore problem with compiling on deno pre 2.1.7
    t.connectionField("posts", {
      type: graphqlBfDocsPostType,
      // @ts-ignore problem with compiling on deno pre 2.1.7
      resolve: async (parent, args, ctx) => {
        const posts = await BfDocsPost.query();
        return connectionFromArray(posts.map(post => post.toGraphql()), args);
      },
    });
  },
});
