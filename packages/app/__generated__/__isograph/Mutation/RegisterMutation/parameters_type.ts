export type Mutation__RegisterMutation__parameters = {
  readonly registrationInput: {
    readonly attestation: {
          readonly attestationObject: string,
          readonly authenticatorData: string,
          readonly clientDataJSON: string,
          readonly publicKey: string,
          readonly publicKeyAlgorithm: number,
          readonly transports: ReadonlyArray<string>,
        },
    readonly authenticatorSelection: string,
    readonly challenge: string,
    readonly clientExtensionResults: {
          readonly appid: boolean,
          readonly credProps: {
                readonly rk: boolean,
              },
          readonly hmacCreateSecret: boolean,
        },
    readonly extensions: string,
    readonly id: string,
    readonly publicKey: string,
    readonly rawId: string,
    readonly response: {
          readonly attestationObject: string,
          readonly authenticatorData: string,
          readonly clientDataJSON: string,
          readonly publicKey: string,
          readonly publicKeyAlgorithm: number,
          readonly transports: ReadonlyArray<string>,
        },
    readonly supportedAuthenticatorTypes: string,
    readonly timeout: number,
    readonly type: string,
    readonly user: string,
  },
};
