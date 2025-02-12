import { type BfBlogPost__BlogPostListItem__output_type } from '../../BfBlogPost/BlogPostListItem/output_type.ts';
import type { Query__EntrypointBlogPost__parameters } from './parameters_type.ts';

export type Query__EntrypointBlogPost__param = {
  readonly data: {
    readonly bfNode: ({
      readonly __typename: string,
      /**
A client pointer for the BfBlogPost type.
      */
      readonly asBfBlogPost: ({
        readonly BlogPostListItem: BfBlogPost__BlogPostListItem__output_type,
        readonly author: (string | null),
        readonly title: (string | null),
        readonly content: (string | null),
      } | null),
    } | null),
  },
  readonly parameters: Query__EntrypointBlogPost__parameters,
};
