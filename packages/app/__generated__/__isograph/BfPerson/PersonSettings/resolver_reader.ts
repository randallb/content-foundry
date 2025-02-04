import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { BfPerson__PersonSettings__param } from './param_type.ts';
import { PersonSettings as resolver } from '../../../../components/BfPerson/Settings.tsx';

const readerAst: ReaderAst<BfPerson__PersonSettings__param> = [
  {
    kind: "Scalar",
    fieldName: "__typename",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "name",
    alias: null,
    arguments: null,
  },
];

const artifact: ComponentReaderArtifact<
  BfPerson__PersonSettings__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "BfPerson.PersonSettings",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
