import type { ExtractSecondParam, CombineWithIntrinsicAttributes } from '@isograph/react';
import type React from 'react';
import { SaveRegistrationMutation as resolver } from '../../../../mutations/SaveRegistrationMutation.tsx';
export type Mutation__Register__output_type = (React.FC<CombineWithIntrinsicAttributes<ExtractSecondParam<typeof resolver>>>);
