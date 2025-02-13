import { type BfCurrentViewer__Docs__output_type } from '../../BfCurrentViewer/Docs/output_type.ts';

export type Query__EntrypointDocs__param = {
  readonly data: {
    readonly me: ({
      readonly docs: ({
        readonly name: (string | null),
      } | null),
      readonly Docs: BfCurrentViewer__Docs__output_type,
    } | null),
  },
  readonly parameters: Record<PropertyKey, never>,
};
