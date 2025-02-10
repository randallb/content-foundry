import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Mutation__SubmitYcForm__param } from './param_type.ts';
import { Mutation__SubmitYcForm__output_type } from './output_type.ts';
import { SubmitYcFormMutation as resolver } from '../../../../mutations/SubmitYcForm.ts';

const readerAst: ReaderAst<Mutation__SubmitYcForm__param> = [
  {
    kind: "Scalar",
    fieldName: "submitYcForm",
    alias: null,
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
];

const artifact: EagerReaderArtifact<
  Mutation__SubmitYcForm__param,
  Mutation__SubmitYcForm__output_type
> = {
  kind: "EagerReaderArtifact",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
