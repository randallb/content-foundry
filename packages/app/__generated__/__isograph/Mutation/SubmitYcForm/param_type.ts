import type { Mutation__SubmitYcForm__parameters } from './parameters_type.ts';

export type Mutation__SubmitYcForm__param = {
  readonly data: {
    readonly submitYcForm: ({
      readonly __typename: string,
      /**
A list of recommendations
      */
      readonly companySummary: ({
        readonly revision: (string | null),
        readonly explanation: (string | null),
        readonly confidence: (number | null),
      } | null),
      /**
A list of recommendations
      */
      readonly productSummary: ({
        readonly revision: (string | null),
        readonly explanation: (string | null),
        readonly confidence: (number | null),
      } | null),
      /**
A list of recommendations
      */
      readonly locationDecision: ({
        readonly revision: (string | null),
        readonly explanation: (string | null),
        readonly confidence: (number | null),
      } | null),
      /**
A list of recommendations
      */
      readonly progress: ({
        readonly revision: (string | null),
        readonly explanation: (string | null),
        readonly confidence: (number | null),
      } | null),
      /**
A list of recommendations
      */
      readonly workLengthHistory: ({
        readonly revision: (string | null),
        readonly explanation: (string | null),
        readonly confidence: (number | null),
      } | null),
      /**
A list of recommendations
      */
      readonly techStack: ({
        readonly revision: (string | null),
        readonly explanation: (string | null),
        readonly confidence: (number | null),
      } | null),
      /**
A list of recommendations
      */
      readonly revenueSource: ({
        readonly revision: (string | null),
        readonly explanation: (string | null),
        readonly confidence: (number | null),
      } | null),
      /**
A list of recommendations
      */
      readonly previousApplicationChange: ({
        readonly revision: (string | null),
        readonly explanation: (string | null),
        readonly confidence: (number | null),
      } | null),
      /**
A list of recommendations
      */
      readonly otherIncubators: ({
        readonly revision: (string | null),
        readonly explanation: (string | null),
        readonly confidence: (number | null),
      } | null),
      /**
A list of recommendations
      */
      readonly reasonForProductChoice: ({
        readonly revision: (string | null),
        readonly explanation: (string | null),
        readonly confidence: (number | null),
      } | null),
      /**
A list of recommendations
      */
      readonly competitors: ({
        readonly revision: (string | null),
        readonly explanation: (string | null),
        readonly confidence: (number | null),
      } | null),
      /**
A list of recommendations
      */
      readonly moneyMaking: ({
        readonly revision: (string | null),
        readonly explanation: (string | null),
        readonly confidence: (number | null),
      } | null),
      /**
A list of recommendations
      */
      readonly otherIdeas: ({
        readonly revision: (string | null),
        readonly explanation: (string | null),
        readonly confidence: (number | null),
      } | null),
      /**
A list of recommendations
      */
      readonly equityBreakdown: ({
        readonly revision: (string | null),
        readonly explanation: (string | null),
        readonly confidence: (number | null),
      } | null),
      /**
A list of recommendations
      */
      readonly investmentsReceived: ({
        readonly revision: (string | null),
        readonly explanation: (string | null),
        readonly confidence: (number | null),
      } | null),
      /**
A list of recommendations
      */
      readonly reasonForApplying: ({
        readonly revision: (string | null),
        readonly explanation: (string | null),
        readonly confidence: (number | null),
      } | null),
      /**
A list of recommendations
      */
      readonly whoToldYou: ({
        readonly revision: (string | null),
        readonly explanation: (string | null),
        readonly confidence: (number | null),
      } | null),
    } | null),
  },
  readonly parameters: Mutation__SubmitYcForm__parameters,
};
