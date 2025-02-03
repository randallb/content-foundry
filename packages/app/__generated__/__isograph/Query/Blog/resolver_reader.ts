import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__Blog__param } from './param_type.ts';
import { Blog as resolver } from '../../../../components/Blog/Blog.tsx';
import BfBlog__BlogPostList__resolver_reader from '../../BfBlog/BlogPostList/resolver_reader.ts';

const readerAst: ReaderAst<Query__Blog__param> = [
  {
    kind: "Scalar",
    fieldName: "__typename",
    alias: null,
    arguments: null,
  },
  {
    kind: "Linked",
    fieldName: "blog",
    alias: null,
    arguments: null,
    condition: null,
    selections: [
      {
        kind: "Resolver",
        alias: "BlogPostList",
        arguments: null,
        readerArtifact: BfBlog__BlogPostList__resolver_reader,
        usedRefetchQueries: [],
      },
    ],
  },
];

const artifact: ComponentReaderArtifact<
  Query__Blog__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Query.Blog",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
