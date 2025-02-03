import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import type { RouteEntrypoint } from "packages/app/routes.ts";
import { useRouter } from "packages/app/contexts/RouterContext.tsx";

export const EntrypointBlog = iso(`
  field Query.EntrypointBlog {
    Blog
  }
`)(function EntrypointBlog({ data }): RouteEntrypoint {
  const title = "Content Foundry Blog";
  return { Body: data.Blog, title };
});