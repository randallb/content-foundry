import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__Blog__param } from './param_type.ts';
import { Blog as resolver } from '../../../../components/Blog/Blog.tsx';

const readerAst: ReaderAst<Query__Blog__param> = [
  {
    kind: "Scalar",
    fieldName: "__typename",
    alias: null,
    arguments: null,
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
