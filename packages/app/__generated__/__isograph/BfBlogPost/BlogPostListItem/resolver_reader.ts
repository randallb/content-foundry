import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { BfBlogPost__BlogPostListItem__param } from './param_type.ts';
import { BlogPostListItem as resolver } from '../../../../components/Blog/BlogPostListItem.tsx';

const readerAst: ReaderAst<BfBlogPost__BlogPostListItem__param> = [
  {
    kind: "Scalar",
    fieldName: "__typename",
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
    fieldName: "content",
    alias: null,
    arguments: null,
  },
];

const artifact: ComponentReaderArtifact<
  BfBlogPost__BlogPostListItem__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "BfBlogPost.BlogPostListItem",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
