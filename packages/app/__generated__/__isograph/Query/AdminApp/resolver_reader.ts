import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__AdminApp__param } from './param_type.ts';
import { AdminApp as resolver } from '../../../../components/AdminApp/AdminApp.tsx';

const readerAst: ReaderAst<Query__AdminApp__param> = [
  {
    kind: "Scalar",
    fieldName: "__typename",
    alias: null,
    arguments: null,
  },
];

const artifact: ComponentReaderArtifact<
  Query__AdminApp__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Query.AdminApp",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
