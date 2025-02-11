import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { BfCurrentViewerLoggedIn__YcForm__param } from './param_type.ts';
import { YcForm as resolver } from '../../../../components/BfCurrentViewer/BfCurrentViewerLoggedIn/YcForm.tsx';

const readerAst: ReaderAst<BfCurrentViewerLoggedIn__YcForm__param> = [
  {
    kind: "Scalar",
    fieldName: "__typename",
    alias: null,
    arguments: null,
  },
];

const artifact: ComponentReaderArtifact<
  BfCurrentViewerLoggedIn__YcForm__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "BfCurrentViewerLoggedIn.YcForm",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
