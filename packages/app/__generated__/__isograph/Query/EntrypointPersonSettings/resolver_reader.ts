import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Query__EntrypointPersonSettings__param } from './param_type.ts';
import { Query__EntrypointPersonSettings__output_type } from './output_type.ts';
import { EntrypointPersonSettings as resolver } from '../../../../entrypoints/EntrypointSettings.tsx';
import BfPerson__PersonSettings__resolver_reader from '../../BfPerson/PersonSettings/resolver_reader.ts';

const readerAst: ReaderAst<Query__EntrypointPersonSettings__param> = [
  {
    kind: "Linked",
    fieldName: "me",
    alias: null,
    arguments: null,
    condition: null,
    selections: [
      {
        kind: "Resolver",
        alias: "PersonSettings",
        arguments: null,
        readerArtifact: BfPerson__PersonSettings__resolver_reader,
        usedRefetchQueries: [],
      },
    ],
  },
];

const artifact: EagerReaderArtifact<
  Query__EntrypointPersonSettings__param,
  Query__EntrypointPersonSettings__output_type
> = {
  kind: "EagerReaderArtifact",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
