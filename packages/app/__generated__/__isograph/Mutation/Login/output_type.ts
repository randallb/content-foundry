import type { ExtractSecondParam, CombineWithIntrinsicAttributes } from '@isograph/react';
import type React from 'react';
import { LoginMutation as resolver } from '../../../../mutations/LoginMutation.tsx';
export type Mutation__Login__output_type = (React.FC<CombineWithIntrinsicAttributes<ExtractSecondParam<typeof resolver>>>);
