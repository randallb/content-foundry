import { objectType, queryField } from "nexus";
import { BfBlogPost } from "packages/bfDb/models/BfBlogPost.ts";
import { connectionFromArray } from "graphql-relay";
import { graphqlBfNode } from "packages/graphql/types/graphqlBfNode.ts";

/**
 * Resuming: Load the blog and get its posts and show them in graphiql
 */
export const graphqlBfBlogPostType = objectType({
  name: "BfBlogPost",
  definition(t) {
    t.implements(graphqlBfNode);
    t.string("author");
    t.string("content");
    t.string("title");
    t.string("cta");
    t.string("summary");
    t.string("slug");
  },
});

export const graphqlBfBlogType = objectType({
  name: "BfBlog",
  definition(t) {
    t.implements(graphqlBfNode);
    t.string("name");
    // @ts-ignore problem with compiling on deno pre 2.1.7
    t.connectionField("posts", {
      type: graphqlBfBlogPostType,
    // @ts-ignore problem with compiling on deno pre 2.1.7
      resolve: async (parent, args, ctx) => {
        const posts = await BfBlogPost.query();
        return connectionFromArray(posts.map(post => post.toGraphql()), args);
      },
    });
  },
});