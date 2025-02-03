import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__AppHome__param } from './param_type.ts';
import { AppHome as resolver } from '../../../../components/AppHome.tsx';
import Query__QualityCheckTweetForm__resolver_reader from '../../Query/QualityCheckTweetForm/resolver_reader.ts';

const readerAst: ReaderAst<Query__AppHome__param> = [
  {
    kind: "Resolver",
    alias: "QualityCheckTweetForm",
    arguments: null,
    readerArtifact: Query__QualityCheckTweetForm__resolver_reader,
    usedRefetchQueries: [],
  },
];

const artifact: ComponentReaderArtifact<
  Query__AppHome__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Query.AppHome",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
