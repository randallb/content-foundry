import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Mutation__Register__param } from './param_type.ts';
import { RegisterMutation as resolver } from '../../../../mutations/Register.tsx';
import BfCurrentViewerLoggedIn__asBfCurrentViewerLoggedIn__resolver_reader from '../../BfCurrentViewerLoggedIn/asBfCurrentViewerLoggedIn/resolver_reader.ts';

const readerAst: ReaderAst<Mutation__Register__param> = [
  {
    kind: "Linked",
    fieldName: "register",
    alias: null,
    arguments: [
      [
        "attResp",
        { kind: "Variable", name: "attResp" },
      ],
    ],
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
            kind: "Scalar",
            fieldName: "__typename",
            alias: null,
            arguments: null,
          },
        ],
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
