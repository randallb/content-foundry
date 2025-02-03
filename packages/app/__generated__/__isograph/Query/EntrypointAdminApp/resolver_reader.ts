import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Query__EntrypointAdminApp__param } from './param_type.ts';
import { Query__EntrypointAdminApp__output_type } from './output_type.ts';
import { EntrypointAdminApp as resolver } from '../../../../entrypoints/EntrypointApp.tsx';
import Query__AdminApp__resolver_reader from '../../Query/AdminApp/resolver_reader.ts';

const readerAst: ReaderAst<Query__EntrypointAdminApp__param> = [
  {
    kind: "Resolver",
    alias: "AdminApp",
    arguments: null,
    readerArtifact: Query__AdminApp__resolver_reader,
    usedRefetchQueries: [],
  },
];

const artifact: EagerReaderArtifact<
  Query__EntrypointAdminApp__param,
  Query__EntrypointAdminApp__output_type
> = {
  kind: "EagerReaderArtifact",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
