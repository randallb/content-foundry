import { objectType, queryField } from "nexus";
// import { BfBlogPost } from "packages/bfDb/models/BfBlogPost.ts";
import { connectionFromArray } from "graphql-relay";
import { graphqlBfNode } from "packages/graphql/types/graphqlBfNode.ts";

/**
 * Resuming: Load the blog and get its posts and show them in graphiql
 */
export const blogPostType = objectType({
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

export const blogType = objectType({
  name: "BfBlog",
  definition(t) {
    t.implements(graphqlBfNode);
    t.string("name");
    t.connectionField("posts", {
      type: blogPostType,
      resolve: async (parent, args, ctx) => {
        // const postsCache = await BfBlogPost.getPostsCache();
        return connectionFromArray([], args);
      },
    });
  },
});

export const blogQueryField = queryField("blog", {
  type: blogType,
  resolve: async (parent, args, ctx) => {
    return { id: "the blog" };
  },
});
