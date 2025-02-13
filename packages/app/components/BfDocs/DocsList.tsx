import { iso } from "packages/app/__generated__/__isograph/iso.ts";

export const DocsList = iso(`
  field BfDocs.DocsList @component {
      posts {
         nodes {
            DocsPostListItem
         }
      }
  }
`)(function DocsList({ data }) {
  const nodes = data?.posts?.nodes ?? [];
  const docsListItems = nodes.map((node) => node && <node.DocsPostListItem />).filter(Boolean);

  return docsListItems.length > 0
    ? docsListItems
    : <div>No documentation found</div>;
});
