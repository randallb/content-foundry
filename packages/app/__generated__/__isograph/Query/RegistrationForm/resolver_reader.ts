import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__RegistrationForm__param } from './param_type.ts';
import { RegistrationForm as resolver } from '../../../../components/Query/RegistrationForm.tsx';
import BfCurrentViewerLoggedOut__asBfCurrentViewerLoggedOut__resolver_reader from '../../BfCurrentViewerLoggedOut/asBfCurrentViewerLoggedOut/resolver_reader.ts';

const readerAst: ReaderAst<Query__RegistrationForm__param> = [
  {
    kind: "Linked",
    fieldName: "me",
    alias: null,
    arguments: null,
    condition: null,
    selections: [
      {
        kind: "Linked",
        fieldName: "asBfCurrentViewerLoggedOut",
        alias: null,
        arguments: null,
        condition: BfCurrentViewerLoggedOut__asBfCurrentViewerLoggedOut__resolver_reader,
        selections: [
          {
            kind: "Scalar",
            fieldName: "registrationOptions",
            alias: null,
            arguments: [
              [
                "code",
                { kind: "Variable", name: "code" },
              ],
            ],
          },
        ],
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
