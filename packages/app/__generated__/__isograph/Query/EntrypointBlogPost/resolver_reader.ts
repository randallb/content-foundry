import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Query__EntrypointBlogPost__param } from './param_type.ts';
import { Query__EntrypointBlogPost__output_type } from './output_type.ts';
import { EntrypointBlogPost as resolver } from '../../../../entrypoints/EntrypointBlogPost.ts';

const readerAst: ReaderAst<Query__EntrypointBlogPost__param> = [
  {
    kind: "Linked",
    fieldName: "bfNode",
    alias: null,
    arguments: [
      [
        "id",
        { kind: "Variable", name: "id" },
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

const artifact: EagerReaderArtifact<
  Query__EntrypointBlogPost__param,
  Query__EntrypointBlogPost__output_type
> = {
  kind: "EagerReaderArtifact",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
