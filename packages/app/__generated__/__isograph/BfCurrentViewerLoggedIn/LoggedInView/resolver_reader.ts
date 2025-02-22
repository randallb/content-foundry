import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { BfCurrentViewerLoggedIn__LoggedInView__param } from './param_type.ts';
import { LoggedInView as resolver } from '../../../../components/BfCurrentViewer/BfCurrentViewerLoggedIn/LoggedInView.tsx';
import BfCurrentViewerLoggedIn__YcForm__resolver_reader from '../../BfCurrentViewerLoggedIn/YcForm/resolver_reader.ts';

const readerAst: ReaderAst<BfCurrentViewerLoggedIn__LoggedInView__param> = [
  {
    kind: "Scalar",
    fieldName: "__typename",
    alias: null,
    arguments: null,
  },
  {
    kind: "Resolver",
    alias: "YcForm",
    arguments: null,
    readerArtifact: BfCurrentViewerLoggedIn__YcForm__resolver_reader,
    usedRefetchQueries: [],
  },
];

const artifact: ComponentReaderArtifact<
  BfCurrentViewerLoggedIn__LoggedInView__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "BfCurrentViewerLoggedIn.LoggedInView",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
