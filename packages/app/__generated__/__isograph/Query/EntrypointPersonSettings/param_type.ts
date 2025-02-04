import { type BfPerson__PersonSettings__output_type } from '../../BfPerson/PersonSettings/output_type.ts';

export type Query__EntrypointPersonSettings__param = {
  readonly data: {
    readonly me: ({
      readonly PersonSettings: BfPerson__PersonSettings__output_type,
    } | null),
  },
  readonly parameters: Record<PropertyKey, never>,
};
