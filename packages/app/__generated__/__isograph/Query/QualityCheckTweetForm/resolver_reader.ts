import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__QualityCheckTweetForm__param } from './param_type.ts';
import { QualityCheckTweetForm as resolver } from '../../../../components/QualityCheck/QualityCheckTweetForm.tsx';

const readerAst: ReaderAst<Query__QualityCheckTweetForm__param> = [
  {
    kind: "Scalar",
    fieldName: "__typename",
    alias: null,
    arguments: null,
  },
];

const artifact: ComponentReaderArtifact<
  Query__QualityCheckTweetForm__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Query.QualityCheckTweetForm",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
