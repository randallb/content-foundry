import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Mutation__Login__param } from './param_type.ts';
import { LoginMutation as resolver } from '../../../../mutations/LoginMutation.tsx';

const readerAst: ReaderAst<Mutation__Login__param> = [
  {
    kind: "Scalar",
    fieldName: "__typename",
    alias: null,
    arguments: null,
  },
];

const artifact: ComponentReaderArtifact<
  Mutation__Login__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Mutation.Login",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
