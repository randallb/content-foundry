import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { BlogFrame } from "packages/app/components/Blog/BlogFrame.tsx";

export const Blog = iso(`
  field Query.Blog @component {
    __typename
    blog {
      BlogPostList
    }
  }
`)(function Blog({ data }) {
  const BlogList = data?.blog?.BlogPostList;

  return (
    <BlogFrame>
      {BlogList ? <BlogList /> : <div>Coming soon!</div>}
    </BlogFrame>
  );
});
