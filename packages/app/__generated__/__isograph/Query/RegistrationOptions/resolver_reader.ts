import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Query__RegistrationOptions__param } from './param_type.ts';
import { Query__RegistrationOptions__output_type } from './output_type.ts';
import { RegistrationOptions as resolver } from '../../../../entrypoints/EntrypointRegistrationOptions.tsx';

const readerAst: ReaderAst<Query__RegistrationOptions__param> = [
  {
    kind: "Scalar",
    fieldName: "registrationOptions",
    alias: null,
    arguments: null,
  },
];

const artifact: EagerReaderArtifact<
  Query__RegistrationOptions__param,
  Query__RegistrationOptions__output_type
> = {
  kind: "EagerReaderArtifact",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
