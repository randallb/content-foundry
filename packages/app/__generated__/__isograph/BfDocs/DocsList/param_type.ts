import { type BfDocsPost__DocsPostListItem__output_type } from '../../BfDocsPost/DocsPostListItem/output_type.ts';

export type BfDocs__DocsList__param = {
  readonly data: {
    readonly posts: ({
      /**
Flattened list of BfDocsPost type
      */
      readonly nodes: (ReadonlyArray<({
        readonly DocsPostListItem: BfDocsPost__DocsPostListItem__output_type,
      } | null)> | null),
    } | null),
  },
  readonly parameters: Record<PropertyKey, never>,
};
