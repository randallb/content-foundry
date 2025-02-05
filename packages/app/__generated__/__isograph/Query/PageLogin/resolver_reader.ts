import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__PageLogin__param } from './param_type.ts';
import { PageLogin as resolver } from '../../../../pages/PageLogin.tsx';
import BfCurrentViewerLoggedOut__asBfCurrentViewerLoggedOut__resolver_reader from '../../BfCurrentViewerLoggedOut/asBfCurrentViewerLoggedOut/resolver_reader.ts';

const readerAst: ReaderAst<Query__PageLogin__param> = [
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
            fieldName: "authenticationOptions",
            alias: null,
            arguments: null,
          },
        ],
      },
    ],
  },
];

const artifact: ComponentReaderArtifact<
  Query__PageLogin__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Query.PageLogin",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
