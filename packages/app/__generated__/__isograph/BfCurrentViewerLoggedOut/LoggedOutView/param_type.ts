import { type BfCurrentViewerLoggedOut__DemoButton__output_type } from '../../BfCurrentViewerLoggedOut/DemoButton/output_type.ts';
import { type BfCurrentViewerLoggedOut__LoginButton__output_type } from '../../BfCurrentViewerLoggedOut/LoginButton/output_type.ts';
import { type BfCurrentViewerLoggedOut__RegisterButton__output_type } from '../../BfCurrentViewerLoggedOut/RegisterButton/output_type.ts';
import { type BfCurrentViewerLoggedOut__WelcomeVideo__output_type } from '../../BfCurrentViewerLoggedOut/WelcomeVideo/output_type.ts';

export type BfCurrentViewerLoggedOut__LoggedOutView__param = {
  readonly data: {
    readonly WelcomeVideo: BfCurrentViewerLoggedOut__WelcomeVideo__output_type,
    readonly DemoButton: BfCurrentViewerLoggedOut__DemoButton__output_type,
    readonly LoginButton: BfCurrentViewerLoggedOut__LoginButton__output_type,
    readonly RegisterButton: BfCurrentViewerLoggedOut__RegisterButton__output_type,
  },
  readonly parameters: Record<PropertyKey, never>,
};
