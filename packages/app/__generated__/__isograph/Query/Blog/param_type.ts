import { type BfBlog__BlogPostList__output_type } from '../../BfBlog/BlogPostList/output_type.ts';

export type Query__Blog__param = {
  readonly data: {
    readonly __typename: string,
    readonly blog: ({
      readonly BlogPostList: BfBlog__BlogPostList__output_type,
    } | null),
  },
  readonly parameters: Record<PropertyKey, never>,
};
