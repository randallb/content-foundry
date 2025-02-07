import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__LoginForm__param } from './param_type.ts';
import { LoginForm as resolver } from '../../../../components/Query/Login.tsx';
import BfCurrentViewerLoggedOut__asBfCurrentViewerLoggedOut__resolver_reader from '../../BfCurrentViewerLoggedOut/asBfCurrentViewerLoggedOut/resolver_reader.ts';

const readerAst: ReaderAst<Query__LoginForm__param> = [
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
  Query__LoginForm__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Query.LoginForm",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
