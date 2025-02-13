import { type BfDocsPost__DocsPostListItem__output_type } from '../../BfDocsPost/DocsPostListItem/output_type.ts';
import type { Query__EntrypointDocsPost__parameters } from './parameters_type.ts';

export type Query__EntrypointDocsPost__param = {
  readonly data: {
    readonly me: ({
      readonly docs: ({
        readonly post: ({
          readonly __typename: string,
          readonly DocsPostListItem: BfDocsPost__DocsPostListItem__output_type,
          readonly title: (string | null),
        } | null),
      } | null),
    } | null),
  },
  readonly parameters: Query__EntrypointDocsPost__parameters,
};
