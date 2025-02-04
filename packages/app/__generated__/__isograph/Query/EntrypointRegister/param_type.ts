import { type Query__RegistrationForm__output_type } from '../../Query/RegistrationForm/output_type.ts';
import type { Query__EntrypointRegister__parameters } from './parameters_type.ts';

export type Query__EntrypointRegister__param = {
  readonly data: {
    readonly RegistrationForm: Query__RegistrationForm__output_type,
  },
  readonly parameters: Query__EntrypointRegister__parameters,
};
