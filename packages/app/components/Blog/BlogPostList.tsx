import { iso } from "packages/app/__generated__/__isograph/iso.ts";

export const BlogPostList = iso(`
  field BfBlog.BlogPostList @component {
    __typename
    posts {
      nodes {
        BlogPostListItem
      }
    }
  }

`)(function BlogList({ data }) {
  const components = data.posts?.nodes?.map((node) =>
    node && <node.BlogPostListItem />
  );
  return (
    <div className="blog_list">
      {components}
    </div>
  );
});
