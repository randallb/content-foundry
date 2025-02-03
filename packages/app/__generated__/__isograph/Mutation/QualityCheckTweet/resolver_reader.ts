import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Mutation__QualityCheckTweet__param } from './param_type.ts';
import { qualityCheckTweetMutation as resolver } from '../../../../mutations/TestMutation.tsx';

const readerAst: ReaderAst<Mutation__QualityCheckTweet__param> = [
  {
    kind: "Linked",
    fieldName: "qualityCheckTweet",
    alias: null,
    arguments: [
      [
        "tweet",
        { kind: "Variable", name: "tweet" },
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
        fieldName: "recommendations",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "sourceText",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "recommendedText",
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

const artifact: ComponentReaderArtifact<
  Mutation__QualityCheckTweet__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Mutation.QualityCheckTweet",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
