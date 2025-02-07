import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Query__EntrypointContentFoundryApp__param } from './param_type.ts';
import { Query__EntrypointContentFoundryApp__output_type } from './output_type.ts';
import { EntrypointContentFoundryApp as resolver } from '../../../../entrypoints/EntrypointApp.tsx';
import Query__ContentFoundryApp__resolver_reader from '../../Query/ContentFoundryApp/resolver_reader.ts';

const readerAst: ReaderAst<Query__EntrypointContentFoundryApp__param> = [
  {
    kind: "Resolver",
    alias: "ContentFoundryApp",
    arguments: null,
    readerArtifact: Query__ContentFoundryApp__resolver_reader,
    usedRefetchQueries: [],
  },
];

const artifact: EagerReaderArtifact<
  Query__EntrypointContentFoundryApp__param,
  Query__EntrypointContentFoundryApp__output_type
> = {
  kind: "EagerReaderArtifact",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
