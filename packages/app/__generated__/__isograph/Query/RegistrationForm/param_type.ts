import type { Query__RegistrationForm__parameters } from './parameters_type.ts';

export type Query__RegistrationForm__param = {
  readonly data: {
    readonly me: ({
      /**
A client pointer for the BfCurrentViewerLoggedOut type.
      */
      readonly asBfCurrentViewerLoggedOut: ({
        readonly registrationOptions: (string | null),
      } | null),
    } | null),
  },
  readonly parameters: Query__RegistrationForm__parameters,
};
