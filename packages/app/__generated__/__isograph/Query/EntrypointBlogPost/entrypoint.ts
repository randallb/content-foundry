import type {IsographEntrypoint, NormalizationAst, RefetchQueryNormalizationArtifactWrapper} from '@isograph/react';
import {Query__EntrypointBlogPost__param} from './param_type.ts';
import {Query__EntrypointBlogPost__output_type} from './output_type.ts';
import readerResolver from './resolver_reader.ts';
const nestedRefetchQueries: RefetchQueryNormalizationArtifactWrapper[] = [];

const queryText = 'query EntrypointBlogPost ($id: ID) {\
  bfNode____id___v_id: bfNode(id: $id) {\
    __typename,\
    id,\
    __typename,\
    ... on BfBlogPost {\
      id,\
      __typename,\
      author,\
      content,\
      cta,\
      summary,\
      title,\
    },\
  },\
}';

const normalizationAst: NormalizationAst = {
  kind: "NormalizationAst",
  selections: [
    {
      kind: "Linked",
      fieldName: "bfNode",
      arguments: [
        [
          "id",
          { kind: "Variable", name: "id" },
        ],
      ],
      concreteType: null,
      selections: [
        {
          kind: "Scalar",
          fieldName: "__typename",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "id",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "__typename",
          arguments: null,
        },
        {
          kind: "InlineFragment",
          type: "BfBlogPost",
          selections: [
            {
              kind: "Scalar",
              fieldName: "id",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "__typename",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "author",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "content",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "cta",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "summary",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "title",
              arguments: null,
            },
          ],
        },
      ],
    },
  ],
};
const artifact: IsographEntrypoint<
  Query__EntrypointBlogPost__param,
  Query__EntrypointBlogPost__output_type
> = {
  kind: "Entrypoint",
  networkRequestInfo: {
    kind: "NetworkRequestInfo",
    queryText,
    normalizationAst,
  },
  concreteType: "Query",
  readerWithRefetchQueries: {
    kind: "ReaderWithRefetchQueries",
    nestedRefetchQueries,
    readerArtifact: readerResolver,
  },
};

export default artifact;
