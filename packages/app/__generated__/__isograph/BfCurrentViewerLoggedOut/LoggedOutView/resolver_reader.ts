import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { BfCurrentViewerLoggedOut__LoggedOutView__param } from './param_type.ts';
import { LoggedOutView as resolver } from '../../../../components/BfCurrentViewer/BfCurrentViewerLoggedOut/LoggedOutView.tsx';
import BfCurrentViewerLoggedOut__DemoButton__resolver_reader from '../../BfCurrentViewerLoggedOut/DemoButton/resolver_reader.ts';
import BfCurrentViewerLoggedOut__LoginButton__resolver_reader from '../../BfCurrentViewerLoggedOut/LoginButton/resolver_reader.ts';
import BfCurrentViewerLoggedOut__RegisterButton__resolver_reader from '../../BfCurrentViewerLoggedOut/RegisterButton/resolver_reader.ts';
import BfCurrentViewerLoggedOut__WelcomeVideo__resolver_reader from '../../BfCurrentViewerLoggedOut/WelcomeVideo/resolver_reader.ts';

const readerAst: ReaderAst<BfCurrentViewerLoggedOut__LoggedOutView__param> = [
  {
    kind: "Resolver",
    alias: "WelcomeVideo",
    arguments: null,
    readerArtifact: BfCurrentViewerLoggedOut__WelcomeVideo__resolver_reader,
    usedRefetchQueries: [],
  },
  {
    kind: "Resolver",
    alias: "DemoButton",
    arguments: null,
    readerArtifact: BfCurrentViewerLoggedOut__DemoButton__resolver_reader,
    usedRefetchQueries: [],
  },
  {
    kind: "Resolver",
    alias: "LoginButton",
    arguments: null,
    readerArtifact: BfCurrentViewerLoggedOut__LoginButton__resolver_reader,
    usedRefetchQueries: [],
  },
  {
    kind: "Resolver",
    alias: "RegisterButton",
    arguments: null,
    readerArtifact: BfCurrentViewerLoggedOut__RegisterButton__resolver_reader,
    usedRefetchQueries: [],
  },
];

const artifact: ComponentReaderArtifact<
  BfCurrentViewerLoggedOut__LoggedOutView__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "BfCurrentViewerLoggedOut.LoggedOutView",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
