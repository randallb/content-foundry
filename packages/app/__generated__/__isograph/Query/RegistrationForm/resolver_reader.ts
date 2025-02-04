import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__RegistrationForm__param } from './param_type.ts';
import { RegistrationForm as resolver } from '../../../../components/Query/Register.tsx';

const readerAst: ReaderAst<Query__RegistrationForm__param> = [
  {
    kind: "Linked",
    fieldName: "registrationOptions",
    alias: null,
    arguments: [
      [
        "code",
        { kind: "Variable", name: "code" },
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

const artifact: ComponentReaderArtifact<
  Query__RegistrationForm__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Query.RegistrationForm",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
