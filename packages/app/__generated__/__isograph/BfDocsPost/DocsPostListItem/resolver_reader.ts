import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { BfDocsPost__DocsPostListItem__param } from './param_type.ts';
import { DocsPostListItem as resolver } from '../../../../components/BfDocs/DocsPostListItem.tsx';

const readerAst: ReaderAst<BfDocsPost__DocsPostListItem__param> = [
  {
    kind: "Scalar",
    fieldName: "title",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "slug",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "summary",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "author",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "status",
    alias: null,
    arguments: null,
  },
];

const artifact: ComponentReaderArtifact<
  BfDocsPost__DocsPostListItem__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "BfDocsPost.DocsPostListItem",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
