
import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { RouterLink } from "packages/app/components/Router/RouterLink.tsx";

export const DocsPostListItem = iso(`
  field BfDocsPost.DocsPostListItem @component {
    __typename
    title
    author
    status
    summary
    slug
  }
`)(function DocsPostListItem({ data }) {
  if (!data) return null;

  return (
    <article className="docs-post-item">
      <h2 className="docs-post-title">
        <RouterLink to={`/docs/${data.slug}`}>
          {data.title || "Untitled Documentation"}
        </RouterLink>
      </h2>
      {data.author && (
        <div className="docs-post-author">By {data.author}</div>
      )}
      {data.summary && (
        <p className="docs-post-summary">{data.summary}</p>
      )}
      {data.status && (
        <div className="docs-post-status">
          Status: <span className={`status-${data.status.toLowerCase()}`}>{data.status}</span>
        </div>
      )}
    </article>
  );
});
