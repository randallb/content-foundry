import type { Mutation__Register__parameters } from './parameters_type.ts';

export type Mutation__Register__param = {
  readonly data: {
    readonly register: ({
      /**
A client pointer for the BfCurrentViewerLoggedIn type.
      */
      readonly asBfCurrentViewerLoggedIn: ({
        readonly __typename: string,
      } | null),
    } | null),
  },
  readonly parameters: Mutation__Register__parameters,
};
