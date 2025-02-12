import { iso } from "packages/app/__generated__/__isograph/iso.ts";

export const Blog = iso(`
  field BfCurrentViewer.Blog @component {
    blog {
     BlogPostList
    }
  }
`)(function Blog({ data }) {
  const BlogList = data?.blog?.BlogPostList;

  return (
    BlogList ? <BlogList /> : <div>Coming soon!</div>
  );
});
