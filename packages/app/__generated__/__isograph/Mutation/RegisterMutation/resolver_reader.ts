import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Mutation__RegisterMutation__param } from './param_type.ts';
import { Mutation__RegisterMutation__output_type } from './output_type.ts';
import { RegisterMutation as resolver } from '../../../../mutations/RegisterMutation.tsx';

const readerAst: ReaderAst<Mutation__RegisterMutation__param> = [
  {
    kind: "Linked",
    fieldName: "register",
    alias: null,
    arguments: [
      [
        "registrationInput",
        { kind: "Variable", name: "registrationInput" },
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
  Mutation__RegisterMutation__param,
  Mutation__RegisterMutation__output_type
> = {
  kind: "EagerReaderArtifact",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
