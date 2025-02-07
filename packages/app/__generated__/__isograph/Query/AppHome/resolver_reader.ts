import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__AppHome__param } from './param_type.ts';
import { AppHome as resolver } from '../../../../components/AppHome.tsx';

const readerAst: ReaderAst<Query__AppHome__param> = [
  {
    kind: "Scalar",
    fieldName: "__typename",
    alias: null,
    arguments: null,
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
