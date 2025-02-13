import type {IsographEntrypoint, NormalizationAst, RefetchQueryNormalizationArtifactWrapper} from '@isograph/react';
import {Query__EntrypointDocs__param} from './param_type.ts';
import {Query__EntrypointDocs__output_type} from './output_type.ts';
import readerResolver from './resolver_reader.ts';
const nestedRefetchQueries: RefetchQueryNormalizationArtifactWrapper[] = [];

const queryText = 'query EntrypointDocs  {\
  me {\
    __typename,\
    id,\
    docs {\
      id,\
      posts {\
        nodes {\
          id,\
          author,\
          href,\
          status,\
          summary,\
          title,\
        },\
      },\
    },\
  },\
}';

const normalizationAst: NormalizationAst = {
  kind: "NormalizationAst",
  selections: [
    {
      kind: "Linked",
      fieldName: "me",
      arguments: null,
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
          kind: "Linked",
          fieldName: "docs",
          arguments: null,
          concreteType: "BfDocs",
          selections: [
            {
              kind: "Scalar",
              fieldName: "id",
              arguments: null,
            },
            {
              kind: "Linked",
              fieldName: "posts",
              arguments: null,
              concreteType: "BfDocsPostConnection",
              selections: [
                {
                  kind: "Linked",
                  fieldName: "nodes",
                  arguments: null,
                  concreteType: "BfDocsPost",
                  selections: [
                    {
                      kind: "Scalar",
                      fieldName: "id",
                      arguments: null,
                    },
                    {
                      kind: "Scalar",
                      fieldName: "author",
                      arguments: null,
                    },
                    {
                      kind: "Scalar",
                      fieldName: "href",
                      arguments: null,
                    },
                    {
                      kind: "Scalar",
                      fieldName: "status",
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
        },
      ],
    },
  ],
};
const artifact: IsographEntrypoint<
  Query__EntrypointDocs__param,
  Query__EntrypointDocs__output_type
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
