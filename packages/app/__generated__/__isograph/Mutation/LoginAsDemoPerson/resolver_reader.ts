import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Mutation__LoginAsDemoPerson__param } from './param_type.ts';
import { Mutation__LoginAsDemoPerson__output_type } from './output_type.ts';
import { LoginAsDemoPersonMutation as resolver } from '../../../../mutations/LoginAsDemoPerson.tsx';

const readerAst: ReaderAst<Mutation__LoginAsDemoPerson__param> = [
  {
    kind: "Linked",
    fieldName: "loginAsDemoPerson",
    alias: null,
    arguments: null,
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
  Mutation__LoginAsDemoPerson__param,
  Mutation__LoginAsDemoPerson__output_type
> = {
  kind: "EagerReaderArtifact",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
