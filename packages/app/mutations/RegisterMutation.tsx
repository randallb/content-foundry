import { iso } from "packages/app/__generated__/__isograph/iso.ts";

export const mutation = iso(`entrypoint Mutation.RegisterMutation`)
export const RegisterMutation = iso(`
  field Mutation.RegisterMutation($registrationInput: RegistrationOptionsInput!) {
    register(registrationInput: $registrationInput) {
    __typename
    }
  }
`)(function RegisterMutation({ data }) {
  return data.register;
})