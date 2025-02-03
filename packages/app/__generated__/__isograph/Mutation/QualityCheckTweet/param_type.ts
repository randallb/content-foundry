import type { Mutation__QualityCheckTweet__parameters } from './parameters_type.ts';

export type Mutation__QualityCheckTweet__param = {
  readonly data: {
    readonly qualityCheckTweet: ({
      readonly __typename: string,
      /**
A list of recommendations
      */
      readonly recommendations: (ReadonlyArray<({
        readonly sourceText: (string | null),
        readonly recommendedText: (string | null),
        readonly explanation: (string | null),
        readonly confidence: (number | null),
      } | null)> | null),
    } | null),
  },
  readonly parameters: Mutation__QualityCheckTweet__parameters,
};
