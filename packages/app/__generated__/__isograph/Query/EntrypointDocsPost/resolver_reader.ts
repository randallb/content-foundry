import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Query__EntrypointDocsPost__param } from './param_type.ts';
import { Query__EntrypointDocsPost__output_type } from './output_type.ts';
import { EntrypointDocsPost as resolver } from '../../../../entrypoints/EntrypointDocsPost.ts';
import BfDocsPost__DocsPostListItem__resolver_reader from '../../BfDocsPost/DocsPostListItem/resolver_reader.ts';

const readerAst: ReaderAst<Query__EntrypointDocsPost__param> = [
  {
    kind: "Linked",
    fieldName: "me",
    alias: null,
    arguments: null,
    condition: null,
    selections: [
      {
        kind: "Linked",
        fieldName: "docs",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Linked",
            fieldName: "post",
            alias: null,
            arguments: [
              [
                "slug",
                { kind: "Variable", name: "docsSlug" },
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
                kind: "Resolver",
                alias: "DocsPostListItem",
                arguments: null,
                readerArtifact: BfDocsPost__DocsPostListItem__resolver_reader,
                usedRefetchQueries: [],
              },
              {
                kind: "Scalar",
                fieldName: "title",
                alias: null,
                arguments: null,
              },
            ],
          },
        ],
      },
    ],
  },
];

const artifact: EagerReaderArtifact<
  Query__EntrypointDocsPost__param,
  Query__EntrypointDocsPost__output_type
> = {
  kind: "EagerReaderArtifact",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
