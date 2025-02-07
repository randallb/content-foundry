import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Query__EntrypointLogin__param } from './param_type.ts';
import { Query__EntrypointLogin__output_type } from './output_type.ts';
import { EntrypointLogin as resolver } from '../../../../entrypoints/EntrypointLogin.tsx';
import Query__LoginForm__resolver_reader from '../../Query/LoginForm/resolver_reader.ts';

const readerAst: ReaderAst<Query__EntrypointLogin__param> = [
  {
    kind: "Resolver",
    alias: "LoginForm",
    arguments: null,
    readerArtifact: Query__LoginForm__resolver_reader,
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
