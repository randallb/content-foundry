import type { Mutation__Register__parameters } from './parameters_type.ts';

export type Mutation__Register__param = {
  readonly data: {
    readonly register: ({
      /**
Unique identifier for the resource
      */
      readonly id: string,
    } | null),
  },
  readonly parameters: Mutation__Register__parameters,
};
