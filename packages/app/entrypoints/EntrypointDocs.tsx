import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import type { RouteEntrypoint } from "packages/app/routes.ts";
import { useRouter } from "packages/app/contexts/RouterContext.tsx";

export const EntrypointDocs = iso(`
  field Query.EntrypointDocs {
    me {
      docs {
        name
      }
      Docs
    }
  }
`)(function EntrypointDocs({ data }): RouteEntrypoint {
  const title = "Documentation";
  const DefaultBody = () => "Loading documentation...";

  return { Body: data?.me?.Docs ?? DefaultBody, title: data?.me?.docs?.name ?? title };
});
