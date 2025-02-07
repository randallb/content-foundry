import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Query__EntrypointLogin__param } from './param_type.ts';
import { Query__EntrypointLogin__output_type } from './output_type.ts';
import { EntrypointLogin as resolver } from '../../../../entrypoints/EntrypointLogin.ts';

const readerAst: ReaderAst<Query__EntrypointLogin__param> = [
  {
    kind: "Scalar",
    fieldName: "__typename",
    alias: null,
    arguments: null,
  },
];

const artifact: EagerReaderArtifact<
  Query__EntrypointLogin__param,
  Query__EntrypointLogin__output_type
> = {
  kind: "EagerReaderArtifact",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
