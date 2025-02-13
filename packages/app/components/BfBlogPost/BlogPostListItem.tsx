import { iso } from "packages/app/__generated__/__isograph/iso.ts";

export const BlogPostListItem = iso(`
  field BfBlogPost.BlogPostListItem @component {
    __typename
    title
    author
    cta
    summary
    href
  }
`)(function BlogPostListItem({ data }) {
  return (
    <a href={data?.href ?? "/"} className="blog-page-list-item" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="blog-page-item-info">
        <h3>{data.title}</h3>
        <p>{data.summary}</p>
        <p>By {data.author}</p>
        <p>{data.cta}</p>
      </div>
    </a>
  );
});