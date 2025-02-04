import type { Query__RegistrationForm__parameters } from './parameters_type.ts';

export type Query__RegistrationForm__param = {
  readonly data: {
    readonly registration: ({
      readonly options: ({
        readonly challenge: string,
        readonly rp: {
          readonly name: string,
          readonly id: string,
        },
        readonly user: {
          readonly id: string,
          readonly name: string,
          readonly displayName: string,
        },
        readonly pubKeyCredParams: ReadonlyArray<{
          readonly type: string,
          readonly alg: number,
        }>,
        readonly authenticatorSelection: {
          readonly requireResidentKey: boolean,
          readonly userVerification: string,
        },
        readonly excludeCredentials: ReadonlyArray<{
          readonly id: string,
        }>,
        readonly attestation: string,
        readonly extensions: {
          readonly credProps: boolean,
        },
      } | null),
      readonly person: ({
        readonly name: (string | null),
      } | null),
    } | null),
  },
  readonly parameters: Query__RegistrationForm__parameters,
};
