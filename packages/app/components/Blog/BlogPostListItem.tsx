import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { getLogger } from "packages/logger.ts";
import { marked } from "marked";

const logger = getLogger(import.meta);

export const BlogPostListItem = iso(`
  field BfBlogPost.BlogPostListItem @component {
    __typename
    author
    content
  }
`)(function BlogPostListItem({ data }) {
  const perf = performance.now();
  const html = marked(data.content ?? "", {async: false});
  const total = performance.now() - perf;
  if (total > 100) {
    logger.warn(`Markdown parsing took ${total}ms.`);
  }

  return (
    <>
      <h1>{data.author}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
});
