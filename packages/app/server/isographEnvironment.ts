import {
  createIsographEnvironment,
  createIsographStore,
} from "@isograph/react";
// import { getContextFromRequest } from "packages/bfDb/getCurrentViewer.ts";
import { yoga } from "packages/graphql/graphqlServer.ts";
import { getLogger } from "packages/logger.ts";
import { createContext } from "packages/graphql/graphqlContext.ts";
const logger = getLogger(import.meta);

export function getIsographEnvironment(request: Request) {
  const store = createIsographStore()


  async function makeNetworkRequest<T>(
    queryText: string,
    variables: unknown,
  ): Promise<T> {
    using ctx = await createContext(request);
    
    const response = await yoga.fetch(
      new URL("/graphql", import.meta.url),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: queryText, variables }),
      },
      ctx,
    );
    const json = await response.json();

    if (response.ok) {
      return json;
    } else {
      throw new Error("NetworkError", {
        cause: json,
      });
    }
  }
  return createIsographEnvironment(
    store,
    makeNetworkRequest,
    null,
    logger.debug
  );
}