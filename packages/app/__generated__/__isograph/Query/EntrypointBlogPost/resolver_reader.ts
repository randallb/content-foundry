import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Query__EntrypointBlogPost__param } from './param_type.ts';
import { Query__EntrypointBlogPost__output_type } from './output_type.ts';
import { EntrypointBlogPost as resolver } from '../../../../entrypoints/EntrypointBlogPost.ts';
import BfBlogPost__BlogPostListItem__resolver_reader from '../../BfBlogPost/BlogPostListItem/resolver_reader.ts';
import BfBlogPost__asBfBlogPost__resolver_reader from '../../BfBlogPost/asBfBlogPost/resolver_reader.ts';

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
      {
        kind: "Linked",
        fieldName: "asBfBlogPost",
        alias: null,
        arguments: null,
        condition: BfBlogPost__asBfBlogPost__resolver_reader,
        selections: [
          {
            kind: "Resolver",
            alias: "BlogPostListItem",
            arguments: null,
            readerArtifact: BfBlogPost__BlogPostListItem__resolver_reader,
            usedRefetchQueries: [],
          },
          {
            kind: "Scalar",
            fieldName: "author",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "title",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "content",
            alias: null,
            arguments: null,
          },
        ],
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
