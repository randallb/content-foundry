import type {IsographEntrypoint, NormalizationAst, RefetchQueryNormalizationArtifactWrapper} from '@isograph/react';
import {Mutation__SubmitYcForm__param} from './param_type.ts';
import {Mutation__SubmitYcForm__output_type} from './output_type.ts';
import readerResolver from './resolver_reader.ts';
const nestedRefetchQueries: RefetchQueryNormalizationArtifactWrapper[] = [];

const queryText = 'mutation SubmitYcForm ($companySummary: String, $productSummary: String, $locationDecision: String, $progress: String, $workLengthHistory: String, $techStack: String, $revenueSource: String, $previousApplicationChange: String, $otherIncubators: String, $reasonForProductChoice: String, $competitiors: String, $moneyMaking: String, $otherIdeas: String, $equityBreakdown: String, $investmentsReceived: String, $reasonForAppling: String, $whoToldYou: String) {\
  submitYcForm____companySummary___v_companySummary____productSummary___v_productSummary____locationDecision___v_locationDecision____progress___v_progress____workLengthHistory___v_workLengthHistory____techStack___v_techStack____revenueSource___v_revenueSource____previousApplicationChange___v_previousApplicationChange____otherIncubators___v_otherIncubators____reasonForProductChoice___v_reasonForProductChoice____competitiors___v_competitiors____moneyMaking___v_moneyMaking____otherIdeas___v_otherIdeas____equityBreakdown___v_equityBreakdown____investmentsReceived___v_investmentsReceived____reasonForAppling___v_reasonForAppling____whoToldYou___v_whoToldYou: submitYcForm(companySummary: $companySummary, productSummary: $productSummary, locationDecision: $locationDecision, progress: $progress, workLengthHistory: $workLengthHistory, techStack: $techStack, revenueSource: $revenueSource, previousApplicationChange: $previousApplicationChange, otherIncubators: $otherIncubators, reasonForProductChoice: $reasonForProductChoice, competitiors: $competitiors, moneyMaking: $moneyMaking, otherIdeas: $otherIdeas, equityBreakdown: $equityBreakdown, investmentsReceived: $investmentsReceived, reasonForAppling: $reasonForAppling, whoToldYou: $whoToldYou),\
}';

const normalizationAst: NormalizationAst = {
  kind: "NormalizationAst",
  selections: [
    {
      kind: "Scalar",
      fieldName: "submitYcForm",
      arguments: [
        [
          "companySummary",
          { kind: "Variable", name: "companySummary" },
        ],

        [
          "productSummary",
          { kind: "Variable", name: "productSummary" },
        ],

        [
          "locationDecision",
          { kind: "Variable", name: "locationDecision" },
        ],

        [
          "progress",
          { kind: "Variable", name: "progress" },
        ],

        [
          "workLengthHistory",
          { kind: "Variable", name: "workLengthHistory" },
        ],

        [
          "techStack",
          { kind: "Variable", name: "techStack" },
        ],

        [
          "revenueSource",
          { kind: "Variable", name: "revenueSource" },
        ],

        [
          "previousApplicationChange",
          { kind: "Variable", name: "previousApplicationChange" },
        ],

        [
          "otherIncubators",
          { kind: "Variable", name: "otherIncubators" },
        ],

        [
          "reasonForProductChoice",
          { kind: "Variable", name: "reasonForProductChoice" },
        ],

        [
          "competitiors",
          { kind: "Variable", name: "competitiors" },
        ],

        [
          "moneyMaking",
          { kind: "Variable", name: "moneyMaking" },
        ],

        [
          "otherIdeas",
          { kind: "Variable", name: "otherIdeas" },
        ],

        [
          "equityBreakdown",
          { kind: "Variable", name: "equityBreakdown" },
        ],

        [
          "investmentsReceived",
          { kind: "Variable", name: "investmentsReceived" },
        ],

        [
          "reasonForAppling",
          { kind: "Variable", name: "reasonForAppling" },
        ],

        [
          "whoToldYou",
          { kind: "Variable", name: "whoToldYou" },
        ],
      ],
    },
  ],
};
const artifact: IsographEntrypoint<
  Mutation__SubmitYcForm__param,
  Mutation__SubmitYcForm__output_type
> = {
  kind: "Entrypoint",
  networkRequestInfo: {
    kind: "NetworkRequestInfo",
    queryText,
    normalizationAst,
  },
  concreteType: "Mutation",
  readerWithRefetchQueries: {
    kind: "ReaderWithRefetchQueries",
    nestedRefetchQueries,
    readerArtifact: readerResolver,
  },
};

export default artifact;
