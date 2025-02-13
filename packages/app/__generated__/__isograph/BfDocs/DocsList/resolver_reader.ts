import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { BfDocs__DocsList__param } from './param_type.ts';
import { DocsList as resolver } from '../../../../components/BfDocs/DocsList.tsx';
import BfDocsPost__DocsPostListItem__resolver_reader from '../../BfDocsPost/DocsPostListItem/resolver_reader.ts';

const readerAst: ReaderAst<BfDocs__DocsList__param> = [
  {
    kind: "Linked",
    fieldName: "posts",
    alias: null,
    arguments: null,
    condition: null,
    selections: [
      {
        kind: "Linked",
        fieldName: "nodes",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Resolver",
            alias: "DocsPostListItem",
            arguments: null,
            readerArtifact: BfDocsPost__DocsPostListItem__resolver_reader,
            usedRefetchQueries: [],
          },
          {
            kind: "Scalar",
            fieldName: "status",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "title",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "summary",
            alias: null,
            arguments: null,
          },
        ],
      },
    ],
  },
];

const artifact: ComponentReaderArtifact<
  BfDocs__DocsList__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "BfDocs.DocsList",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
