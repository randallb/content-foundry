import type {IsographEntrypoint, NormalizationAst, RefetchQueryNormalizationArtifactWrapper} from '@isograph/react';
import {Query__EntrypointRegister__param} from './param_type.ts';
import {Query__EntrypointRegister__output_type} from './output_type.ts';
import readerResolver from './resolver_reader.ts';
const nestedRefetchQueries: RefetchQueryNormalizationArtifactWrapper[] = [];

const queryText = 'query EntrypointRegister ($code: ID!) {\
  registration____code___v_code: registration(code: $code) {\
    options {\
      attestation,\
      authenticatorSelection {\
        requireResidentKey,\
        userVerification,\
      },\
      challenge,\
      excludeCredentials {\
        id,\
      },\
      extensions {\
        credProps,\
      },\
      pubKeyCredParams {\
        alg,\
        type,\
      },\
      rp {\
        id,\
        name,\
      },\
      user {\
        id,\
        displayName,\
        name,\
      },\
    },\
    person {\
      id,\
      name,\
    },\
  },\
}';

const normalizationAst: NormalizationAst = {
  kind: "NormalizationAst",
  selections: [
    {
      kind: "Linked",
      fieldName: "registration",
      arguments: [
        [
          "code",
          { kind: "Variable", name: "code" },
        ],
      ],
      concreteType: "Registration",
      selections: [
        {
          kind: "Linked",
          fieldName: "options",
          arguments: null,
          concreteType: "RegistrationOptions",
          selections: [
            {
              kind: "Scalar",
              fieldName: "attestation",
              arguments: null,
            },
            {
              kind: "Linked",
              fieldName: "authenticatorSelection",
              arguments: null,
              concreteType: "AuthenticatorSelection",
              selections: [
                {
                  kind: "Scalar",
                  fieldName: "requireResidentKey",
                  arguments: null,
                },
                {
                  kind: "Scalar",
                  fieldName: "userVerification",
                  arguments: null,
                },
              ],
            },
            {
              kind: "Scalar",
              fieldName: "challenge",
              arguments: null,
            },
            {
              kind: "Linked",
              fieldName: "excludeCredentials",
              arguments: null,
              concreteType: "PublicKeyCredentialDescriptorJSON",
              selections: [
                {
                  kind: "Scalar",
                  fieldName: "id",
                  arguments: null,
                },
              ],
            },
            {
              kind: "Linked",
              fieldName: "extensions",
              arguments: null,
              concreteType: "RegistrationOptionsExtensions",
              selections: [
                {
                  kind: "Scalar",
                  fieldName: "credProps",
                  arguments: null,
                },
              ],
            },
            {
              kind: "Linked",
              fieldName: "pubKeyCredParams",
              arguments: null,
              concreteType: "RegistrationOptionsPubKeyCredParams",
              selections: [
                {
                  kind: "Scalar",
                  fieldName: "alg",
                  arguments: null,
                },
                {
                  kind: "Scalar",
                  fieldName: "type",
                  arguments: null,
                },
              ],
            },
            {
              kind: "Linked",
              fieldName: "rp",
              arguments: null,
              concreteType: "RegistrationOptionsRp",
              selections: [
                {
                  kind: "Scalar",
                  fieldName: "id",
                  arguments: null,
                },
                {
                  kind: "Scalar",
                  fieldName: "name",
                  arguments: null,
                },
              ],
            },
            {
              kind: "Linked",
              fieldName: "user",
              arguments: null,
              concreteType: "RegistrationOptionsUser",
              selections: [
                {
                  kind: "Scalar",
                  fieldName: "id",
                  arguments: null,
                },
                {
                  kind: "Scalar",
                  fieldName: "displayName",
                  arguments: null,
                },
                {
                  kind: "Scalar",
                  fieldName: "name",
                  arguments: null,
                },
              ],
            },
          ],
        },
        {
          kind: "Linked",
          fieldName: "person",
          arguments: null,
          concreteType: "BfPerson",
          selections: [
            {
              kind: "Scalar",
              fieldName: "id",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "name",
              arguments: null,
            },
          ],
        },
      ],
    },
  ],
};
const artifact: IsographEntrypoint<
  Query__EntrypointRegister__param,
  Query__EntrypointRegister__output_type
> = {
  kind: "Entrypoint",
  networkRequestInfo: {
    kind: "NetworkRequestInfo",
    queryText,
    normalizationAst,
  },
  concreteType: "Query",
  readerWithRefetchQueries: {
    kind: "ReaderWithRefetchQueries",
    nestedRefetchQueries,
    readerArtifact: readerResolver,
  },
};

export default artifact;
