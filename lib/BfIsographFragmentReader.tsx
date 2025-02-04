import type * as React from "react";
import type { ExtractReadFromStore, IsographEntrypoint } from "@isograph/react";
import type { FragmentReference } from "@isograph/react";
// import { NetworkRequestReaderOptions } from '@isograph/react';
import { useResult } from "@isograph/react";
import type { RouteEntrypoint } from "packages/app/routes.ts";
import { getLogger } from "packages/logger.ts";

const logger = getLogger(import.meta);

type NetworkRequestReaderOptions = {
  suspendIfInFlight: boolean;
  throwOnNetworkError: boolean;
};

export function BfIsographFragmentReader<
  TEntrypoint extends IsographEntrypoint<any, RouteEntrypoint>,
>(
  props: {
    fragmentReference: FragmentReference<
      ExtractReadFromStore<TEntrypoint>,
      RouteEntrypoint
    >;
    networkRequestOptions?: Partial<NetworkRequestReaderOptions>;
    additionalProps?: Record<string, unknown>;
  },
): React.ReactNode {
  const { Body } = useResult(
    props.fragmentReference,
    props.networkRequestOptions,
  );

  return <Body {...props.additionalProps} />;
}
