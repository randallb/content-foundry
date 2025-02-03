import type {IsographEntrypoint, NormalizationAst, RefetchQueryNormalizationArtifactWrapper} from '@isograph/react';
import {Mutation__QualityCheckTweet__param} from './param_type.ts';
import {Mutation__QualityCheckTweet__output_type} from './output_type.ts';
import readerResolver from './resolver_reader.ts';
const nestedRefetchQueries: RefetchQueryNormalizationArtifactWrapper[] = [];

const queryText = 'mutation QualityCheckTweet ($tweet: String!) {\
  qualityCheckTweet____tweet___v_tweet: qualityCheckTweet(tweet: $tweet) {\
    __typename,\
    recommendations {\
      confidence,\
      explanation,\
      recommendedText,\
      sourceText,\
    },\
  },\
}';

const normalizationAst: NormalizationAst = {
  kind: "NormalizationAst",
  selections: [
    {
      kind: "Linked",
      fieldName: "qualityCheckTweet",
      arguments: [
        [
          "tweet",
          { kind: "Variable", name: "tweet" },
        ],
      ],
      concreteType: "Recommendations",
      selections: [
        {
          kind: "Scalar",
          fieldName: "__typename",
          arguments: null,
        },
        {
          kind: "Linked",
          fieldName: "recommendations",
          arguments: null,
          concreteType: "RecommendationItem",
          selections: [
            {
              kind: "Scalar",
              fieldName: "confidence",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "explanation",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "recommendedText",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "sourceText",
              arguments: null,
            },
          ],
        },
      ],
    },
  ],
};
const artifact: IsographEntrypoint<
  Mutation__QualityCheckTweet__param,
  Mutation__QualityCheckTweet__output_type
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
