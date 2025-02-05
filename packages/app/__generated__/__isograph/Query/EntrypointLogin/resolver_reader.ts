import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Query__EntrypointLogin__param } from './param_type.ts';
import { Query__EntrypointLogin__output_type } from './output_type.ts';
import { EntrypointRegister as resolver } from '../../../../entrypoints/EntrypointLogin.ts';
import Query__PageLogin__resolver_reader from '../../Query/PageLogin/resolver_reader.ts';

const readerAst: ReaderAst<Query__EntrypointLogin__param> = [
  {
    kind: "Resolver",
    alias: "PageLogin",
    arguments: null,
    readerArtifact: Query__PageLogin__resolver_reader,
    usedRefetchQueries: [],
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
