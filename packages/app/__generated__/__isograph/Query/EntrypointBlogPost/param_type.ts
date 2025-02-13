import { type BfBlogPost__BlogPostListItem__output_type } from '../../BfBlogPost/BlogPostListItem/output_type.ts';
import type { Query__EntrypointBlogPost__parameters } from './parameters_type.ts';

export type Query__EntrypointBlogPost__param = {
  readonly data: {
    readonly me: ({
      readonly blog: ({
        readonly post: ({
          readonly __typename: string,
          readonly BlogPostListItem: BfBlogPost__BlogPostListItem__output_type,
        } | null),
      } | null),
    } | null),
  },
  readonly parameters: Query__EntrypointBlogPost__parameters,
};
