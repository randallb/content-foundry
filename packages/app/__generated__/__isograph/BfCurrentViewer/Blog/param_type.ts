import { type BfBlog__BlogPostList__output_type } from '../../BfBlog/BlogPostList/output_type.ts';

export type BfCurrentViewer__Blog__param = {
  readonly data: {
    readonly blog: ({
      readonly BlogPostList: BfBlog__BlogPostList__output_type,
    } | null),
  },
  readonly parameters: Record<PropertyKey, never>,
};
