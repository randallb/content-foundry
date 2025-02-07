import { useMutation } from "packages/app/hooks/isographPrototypes/useMutation.tsx";
import { IsographEntrypoint } from "@isograph/react";

export function useEntrypoint<TReturn, T extends IsographEntrypoint<any, any>>(
  entrypoint: T,
) {
  const { commit, responseElement } = useMutation<TReturn, T>(entrypoint);
  return {
    load: commit,
    responseElement,
  };
}
