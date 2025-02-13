import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Query__EntrypointDocs__param } from './param_type.ts';
import { Query__EntrypointDocs__output_type } from './output_type.ts';
import { EntrypointDocs as resolver } from '../../../../entrypoints/EntrypointDocs.tsx';
import BfDocs__DocsList__resolver_reader from '../../BfDocs/DocsList/resolver_reader.ts';

const readerAst: ReaderAst<Query__EntrypointDocs__param> = [
  {
    kind: "Linked",
    fieldName: "me",
    alias: null,
    arguments: null,
    condition: null,
    selections: [
      {
        kind: "Linked",
        fieldName: "docs",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Resolver",
            alias: "DocsList",
            arguments: null,
            readerArtifact: BfDocs__DocsList__resolver_reader,
            usedRefetchQueries: [],
          },
        ],
      },
    ],
  },
];

const artifact: EagerReaderArtifact<
  Query__EntrypointDocs__param,
  Query__EntrypointDocs__output_type
> = {
  kind: "EagerReaderArtifact",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
