import { type BfDocs__DocsList__output_type } from '../../BfDocs/DocsList/output_type.ts';

export type Query__EntrypointDocs__param = {
  readonly data: {
    readonly me: ({
      readonly docs: ({
        readonly DocsList: BfDocs__DocsList__output_type,
      } | null),
    } | null),
  },
  readonly parameters: Record<PropertyKey, never>,
};
