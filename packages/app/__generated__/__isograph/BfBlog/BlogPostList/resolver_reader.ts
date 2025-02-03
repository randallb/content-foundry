import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { BfBlog__BlogPostList__param } from './param_type.ts';
import { BlogPostList as resolver } from '../../../../components/Blog/BlogPostList.tsx';
import BfBlogPost__BlogPostListItem__resolver_reader from '../../BfBlogPost/BlogPostListItem/resolver_reader.ts';

const readerAst: ReaderAst<BfBlog__BlogPostList__param> = [
  {
    kind: "Scalar",
    fieldName: "__typename",
    alias: null,
    arguments: null,
  },
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
            alias: "BlogPostListItem",
            arguments: null,
            readerArtifact: BfBlogPost__BlogPostListItem__resolver_reader,
            usedRefetchQueries: [],
          },
        ],
      },
    ],
  },
];

const artifact: ComponentReaderArtifact<
  BfBlog__BlogPostList__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "BfBlog.BlogPostList",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
