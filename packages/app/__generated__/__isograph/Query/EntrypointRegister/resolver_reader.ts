import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Query__EntrypointRegister__param } from './param_type.ts';
import { Query__EntrypointRegister__output_type } from './output_type.ts';
import { EntrypointRegister as resolver } from '../../../../entrypoints/EntrypointRegister.tsx';
import Query__RegistrationForm__resolver_reader from '../../Query/RegistrationForm/resolver_reader.ts';

const readerAst: ReaderAst<Query__EntrypointRegister__param> = [
  {
    kind: "Resolver",
    alias: "RegistrationForm",
    arguments: [
      [
        "code",
        { kind: "Variable", name: "code" },
      ],
    ],
    readerArtifact: Query__RegistrationForm__resolver_reader,
    usedRefetchQueries: [],
  },
];

const artifact: EagerReaderArtifact<
  Query__EntrypointRegister__param,
  Query__EntrypointRegister__output_type
> = {
  kind: "EagerReaderArtifact",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
