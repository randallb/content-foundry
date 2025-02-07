import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Mutation__Register__param } from './param_type.ts';
import { SaveRegistrationMutation as resolver } from '../../../../mutations/SaveRegistrationMutation.tsx';

const readerAst: ReaderAst<Mutation__Register__param> = [
  {
    kind: "Linked",
    fieldName: "register",
    alias: null,
    arguments: [
      [
        "registrationResponse",
        { kind: "Variable", name: "registrationResponse" },
      ],
    ],
    condition: null,
    selections: [
      {
        kind: "Scalar",
        fieldName: "id",
        alias: null,
        arguments: null,
      },
    ],
  },
];

const artifact: ComponentReaderArtifact<
  Mutation__Register__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Mutation.Register",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
