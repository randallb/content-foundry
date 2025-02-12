
import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { RouterLink } from "packages/app/components/Router/RouterLink.tsx";

export const BlogPostListItem = iso(`
  field BfBlogPost.BlogPostListItem @component {
    __typename
    title
    author
    cta
    summary
  }
`)(function BlogPostListItem({ data }) {
  if (!data) return null;

  return (
    <article className="blog-post-item">
      <h2 className="blog-post-title">
        <RouterLink to={`/blog/${data.__typename}`}>
          {data.title || "Untitled Post"}
        </RouterLink>
      </h2>
      {data.author && (
        <div className="blog-post-author">By {data.author}</div>
      )}
      {data.summary && (
        <p className="blog-post-summary">{data.summary}</p>
      )}
      {data.cta && (
        <div className="blog-post-cta">
          <RouterLink to={`/blog/${data.__typename}`} className="cta-link">
            {data.cta}
          </RouterLink>
        </div>
      )}
    </article>
  );
});
