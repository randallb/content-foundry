import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__ContentFoundryApp__param } from './param_type.ts';
import { ContentFoundryApp as resolver } from '../../../../components/Query/ContentFoundryApp.tsx';
import BfCurrentViewerLoggedIn__LoggedInView__resolver_reader from '../../BfCurrentViewerLoggedIn/LoggedInView/resolver_reader.ts';
import BfCurrentViewerLoggedIn__asBfCurrentViewerLoggedIn__resolver_reader from '../../BfCurrentViewerLoggedIn/asBfCurrentViewerLoggedIn/resolver_reader.ts';
import BfCurrentViewerLoggedOut__LoggedOutView__resolver_reader from '../../BfCurrentViewerLoggedOut/LoggedOutView/resolver_reader.ts';
import BfCurrentViewerLoggedOut__asBfCurrentViewerLoggedOut__resolver_reader from '../../BfCurrentViewerLoggedOut/asBfCurrentViewerLoggedOut/resolver_reader.ts';

const readerAst: ReaderAst<Query__ContentFoundryApp__param> = [
  {
    kind: "Scalar",
    fieldName: "__typename",
    alias: null,
    arguments: null,
  },
  {
    kind: "Linked",
    fieldName: "me",
    alias: null,
    arguments: null,
    condition: null,
    selections: [
      {
        kind: "Linked",
        fieldName: "asBfCurrentViewerLoggedIn",
        alias: null,
        arguments: null,
        condition: BfCurrentViewerLoggedIn__asBfCurrentViewerLoggedIn__resolver_reader,
        selections: [
          {
            kind: "Resolver",
            alias: "LoggedInView",
            arguments: null,
            readerArtifact: BfCurrentViewerLoggedIn__LoggedInView__resolver_reader,
            usedRefetchQueries: [],
          },
        ],
      },
      {
        kind: "Linked",
        fieldName: "asBfCurrentViewerLoggedOut",
        alias: null,
        arguments: null,
        condition: BfCurrentViewerLoggedOut__asBfCurrentViewerLoggedOut__resolver_reader,
        selections: [
          {
            kind: "Resolver",
            alias: "LoggedOutView",
            arguments: null,
            readerArtifact: BfCurrentViewerLoggedOut__LoggedOutView__resolver_reader,
            usedRefetchQueries: [],
          },
        ],
      },
    ],
  },
];

const artifact: ComponentReaderArtifact<
  Query__ContentFoundryApp__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Query.ContentFoundryApp",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
