import * as React from "react";
import { PageError } from "packages/app/pages/PageError.tsx";

type ErrorProps = {
  fallback?: React.ReactNode | ((error?: Error) => React.ReactNode);
  children: React.ReactNode;
};

type ErrorState = {
  hasError: boolean;
  error?: Error;
};

export class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
  override state: ErrorState = {
    hasError: false,
    error: undefined,
  };
  override props: ErrorProps;
  constructor(props: ErrorProps) {
    super(props);
    this.props = props;
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, info: unknown) {
    // TODO log error to posthog
    // logError(error, info);
  }

  override render() {
    if (this.state.hasError) {
      // e.g. <ErrorBoundary fallback={(error) => <ErrorPage error={error} />}>
      if (typeof this.props.fallback === "function") {
        return this.props.fallback(this.state.error);
      }
      return this.props.fallback ?? <PageError error={this.state.error} />;
    }

    return this.props.children;
  }
}
