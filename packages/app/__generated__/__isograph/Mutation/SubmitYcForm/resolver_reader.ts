import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Mutation__SubmitYcForm__param } from './param_type.ts';
import { Mutation__SubmitYcForm__output_type } from './output_type.ts';
import { SubmitYcFormMutation as resolver } from '../../../../mutations/SubmitYcForm.ts';

const readerAst: ReaderAst<Mutation__SubmitYcForm__param> = [
  {
    kind: "Linked",
    fieldName: "submitYcForm",
    alias: null,
    arguments: [
      [
        "formData",
        { kind: "Variable", name: "formData" },
      ],
    ],
    condition: null,
    selections: [
      {
        kind: "Scalar",
        fieldName: "__typename",
        alias: null,
        arguments: null,
      },
      {
        kind: "Linked",
        fieldName: "companySummary",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "revision",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "explanation",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "confidence",
            alias: null,
            arguments: null,
          },
        ],
      },
      {
        kind: "Linked",
        fieldName: "productSummary",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "revision",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "explanation",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "confidence",
            alias: null,
            arguments: null,
          },
        ],
      },
      {
        kind: "Linked",
        fieldName: "locationDecision",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "revision",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "explanation",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "confidence",
            alias: null,
            arguments: null,
          },
        ],
      },
      {
        kind: "Linked",
        fieldName: "progress",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "revision",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "explanation",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "confidence",
            alias: null,
            arguments: null,
          },
        ],
      },
      {
        kind: "Linked",
        fieldName: "workLengthHistory",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "revision",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "explanation",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "confidence",
            alias: null,
            arguments: null,
          },
        ],
      },
      {
        kind: "Linked",
        fieldName: "techStack",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "revision",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "explanation",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "confidence",
            alias: null,
            arguments: null,
          },
        ],
      },
      {
        kind: "Linked",
        fieldName: "revenueSource",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "revision",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "explanation",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "confidence",
            alias: null,
            arguments: null,
          },
        ],
      },
      {
        kind: "Linked",
        fieldName: "previousApplicationChange",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "revision",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "explanation",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "confidence",
            alias: null,
            arguments: null,
          },
        ],
      },
      {
        kind: "Linked",
        fieldName: "otherIncubators",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "revision",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "explanation",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "confidence",
            alias: null,
            arguments: null,
          },
        ],
      },
      {
        kind: "Linked",
        fieldName: "reasonForProductChoice",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "revision",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "explanation",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "confidence",
            alias: null,
            arguments: null,
          },
        ],
      },
      {
        kind: "Linked",
        fieldName: "competitors",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "revision",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "explanation",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "confidence",
            alias: null,
            arguments: null,
          },
        ],
      },
      {
        kind: "Linked",
        fieldName: "moneyMaking",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "revision",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "explanation",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "confidence",
            alias: null,
            arguments: null,
          },
        ],
      },
      {
        kind: "Linked",
        fieldName: "otherIdeas",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "revision",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "explanation",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "confidence",
            alias: null,
            arguments: null,
          },
        ],
      },
      {
        kind: "Linked",
        fieldName: "equityBreakdown",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "revision",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "explanation",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "confidence",
            alias: null,
            arguments: null,
          },
        ],
      },
      {
        kind: "Linked",
        fieldName: "investmentsReceived",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "revision",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "explanation",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "confidence",
            alias: null,
            arguments: null,
          },
        ],
      },
      {
        kind: "Linked",
        fieldName: "reasonForApplying",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "revision",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "explanation",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "confidence",
            alias: null,
            arguments: null,
          },
        ],
      },
      {
        kind: "Linked",
        fieldName: "whoToldYou",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "revision",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "explanation",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "confidence",
            alias: null,
            arguments: null,
          },
        ],
      },
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
