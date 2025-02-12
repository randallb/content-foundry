import { type BfCurrentViewer__Blog__output_type } from '../../BfCurrentViewer/Blog/output_type.ts';

export type Query__EntrypointBlog__param = {
  readonly data: {
    readonly me: ({
      readonly blog: ({
        readonly name: (string | null),
      } | null),
      readonly Blog: BfCurrentViewer__Blog__output_type,
    } | null),
  },
  readonly parameters: Record<PropertyKey, never>,
};
