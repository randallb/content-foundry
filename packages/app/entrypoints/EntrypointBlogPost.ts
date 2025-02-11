import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import type { RouteEntrypoint } from "packages/app/routes.ts";

export const EntrypointBlogPost = iso(`
  field Query.EntrypointBlogPost($id: ID) {
    bfNode(id: $id) {
    __typename
      # asBfBlogPost {
      #   BlogPostListItem
      #   author
      # }
    }
  }
`)(function EntrypointBlogPost({ data }): RouteEntrypoint {
  // const title = data.bfNode?.asBfBlogPost?.author ?? "Content Foundry Post";
  // const Body = data.bfNode?.asBfBlogPost?.BlogPostListItem ?? (() => null);
  // return { Body, title };
  return { Body: () => "brb", title: "Coming soon!" };
});
