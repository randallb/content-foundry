import {
  FragmentReader,
  getPromiseState,
  type IsographEntrypoint,
  useImperativeReference,
} from "@isograph/react";



export function useMutation<TReturn, T extends IsographEntrypoint<any, any>>(mutation: T) {
  
  const {
    fragmentReference: mutationRef,
    loadFragmentReference: commit,
  } = useImperativeReference(mutation);
  const returnable = {
    responseElement: null as TReturn | null,
    commit,
    isInFlight: false,
  };
  if (mutationRef) {
    returnable.responseElement = (
      <FragmentReader fragmentReference={mutationRef} additionalProps={{}} />
    ) as TReturn;
  }

  const result = mutationRef != null ? getPromiseState(mutationRef.networkRequest).kind === "Pending" : false;
  returnable.isInFlight = result;

  return returnable;
}
