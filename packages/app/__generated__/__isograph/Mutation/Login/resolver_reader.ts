import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Mutation__Login__param } from './param_type.ts';
import { Mutation__Login__output_type } from './output_type.ts';
import { LoginMutation as resolver } from '../../../../mutations/CompleteLogin.tsx';

const readerAst: ReaderAst<Mutation__Login__param> = [
  {
    kind: "Linked",
    fieldName: "login",
    alias: null,
    arguments: [
      [
        "email",
        { kind: "Variable", name: "email" },
      ],

      [
        "authResp",
        { kind: "Variable", name: "authResp" },
      ],
    ],
    condition: null,
    selections: [
      {
        kind: "Scalar",
        fieldName: "__typename",
        alias: null,
        arguments: null,
      },
    ],
  },
];

const artifact: EagerReaderArtifact<
  Mutation__Login__param,
  Mutation__Login__output_type
> = {
  kind: "EagerReaderArtifact",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
