import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { BfCurrentViewerLoggedOut__LoggedOutView__param } from './param_type.ts';
import { LoggedOutView as resolver } from '../../../../components/BfCurrentViewer/BfCurrentViewerLoggedOut/LoggedOutView.tsx';

const readerAst: ReaderAst<BfCurrentViewerLoggedOut__LoggedOutView__param> = [
  {
    kind: "Scalar",
    fieldName: "__typename",
    alias: null,
    arguments: null,
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
