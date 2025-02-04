import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__RegistrationForm__param } from './param_type.ts';
import { RegistrationForm as resolver } from '../../../../components/Query/Register.tsx';

const readerAst: ReaderAst<Query__RegistrationForm__param> = [
  {
    kind: "Linked",
    fieldName: "registration",
    alias: null,
    arguments: [
      [
        "code",
        { kind: "Variable", name: "code" },
      ],
    ],
    condition: null,
    selections: [
      {
        kind: "Linked",
        fieldName: "options",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "challenge",
            alias: null,
            arguments: null,
          },
          {
            kind: "Linked",
            fieldName: "rp",
            alias: null,
            arguments: null,
            condition: null,
            selections: [
              {
                kind: "Scalar",
                fieldName: "name",
                alias: null,
                arguments: null,
              },
              {
                kind: "Scalar",
                fieldName: "id",
                alias: null,
                arguments: null,
              },
            ],
          },
          {
            kind: "Linked",
            fieldName: "user",
            alias: null,
            arguments: null,
            condition: null,
            selections: [
              {
                kind: "Scalar",
                fieldName: "id",
                alias: null,
                arguments: null,
              },
              {
                kind: "Scalar",
                fieldName: "name",
                alias: null,
                arguments: null,
              },
              {
                kind: "Scalar",
                fieldName: "displayName",
                alias: null,
                arguments: null,
              },
            ],
          },
          {
            kind: "Linked",
            fieldName: "pubKeyCredParams",
            alias: null,
            arguments: null,
            condition: null,
            selections: [
              {
                kind: "Scalar",
                fieldName: "type",
                alias: null,
                arguments: null,
              },
              {
                kind: "Scalar",
                fieldName: "alg",
                alias: null,
                arguments: null,
              },
            ],
          },
          {
            kind: "Linked",
            fieldName: "authenticatorSelection",
            alias: null,
            arguments: null,
            condition: null,
            selections: [
              {
                kind: "Scalar",
                fieldName: "requireResidentKey",
                alias: null,
                arguments: null,
              },
              {
                kind: "Scalar",
                fieldName: "userVerification",
                alias: null,
                arguments: null,
              },
            ],
          },
          {
            kind: "Linked",
            fieldName: "excludeCredentials",
            alias: null,
            arguments: null,
            condition: null,
            selections: [
              {
                kind: "Scalar",
                fieldName: "id",
                alias: null,
                arguments: null,
              },
            ],
          },
          {
            kind: "Scalar",
            fieldName: "attestation",
            alias: null,
            arguments: null,
          },
          {
            kind: "Linked",
            fieldName: "extensions",
            alias: null,
            arguments: null,
            condition: null,
            selections: [
              {
                kind: "Scalar",
                fieldName: "credProps",
                alias: null,
                arguments: null,
              },
            ],
          },
        ],
      },
      {
        kind: "Linked",
        fieldName: "person",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "name",
            alias: null,
            arguments: null,
          },
        ],
      },
    ],
  },
];

const artifact: ComponentReaderArtifact<
  Query__RegistrationForm__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Query.RegistrationForm",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
