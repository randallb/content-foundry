import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import type { RouteEntrypoint } from "packages/app/routes.ts";

export const EntrypointBlogPost = iso(`
  field Query.EntrypointBlogPost($id: ID) {
    bfNode(id: $id) {
      __typename
      asBfBlogPost {
        BlogPostListItem
        author
        title
        content
      }
    }
  }
`)(function EntrypointBlogPost({ data }): RouteEntrypoint {
  const Body = () => "coming soon";
  const title = "Blog Post";
  return { Body, title };
});