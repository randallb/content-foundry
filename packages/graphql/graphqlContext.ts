import { getLogger } from "packages/logger.ts";
import { type BfGid, toBfGid } from "packages/bfDb/classes/BfNodeIds.ts";
import { BfCurrentViewer } from "packages/bfDb/classes/BfCurrentViewer.ts";
// import type { BfNode } from "packages/bfDb/coreModels/BfNode.ts";
import type { Connection, ConnectionArguments } from "graphql-relay";
import type {
  BfNodeBase,
  BfNodeBaseProps,
} from "packages/bfDb/classes/BfNodeBase.ts";
import { BfErrorNotImplemented } from "packages/BfError.ts";
import type { BfNode } from "packages/bfDb/coreModels/BfNode.ts";
import type { GraphqlNode } from "packages/graphql/types/graphqlBfNode.ts";
// import { BfBlogPost } from "packages/bfDb/models/BfBlogPost.ts";
import type { BfMetadata } from "packages/bfDb/classes/BfNodeMetadata.ts";
import { BfPerson } from "packages/bfDb/models/BfPerson.ts";
import {
  AuthenticationResponseJSON,
  PublicKeyCredentialCreationOptionsJSON,
  RegistrationResponseJSON,
} from "@simplewebauthn/server";

const logger = getLogger(import.meta);

export type Context = {
  [Symbol.dispose]: () => void;
  getCvForGraphql(): any;
  createTargetNode<
    TProps extends BfNodeBaseProps,
    TBfClass extends typeof BfNode<TProps>,
  >(
    sourceNode: BfNode,
    BfClass: TBfClass,
    props: TProps,
    metadata?: BfMetadata,
  ): Promise<InstanceType<TBfClass>>;
  find<
    TProps extends BfNodeBaseProps,
    TClass extends typeof BfNodeBase<TProps>,
  >(
    BfClass: TClass,
    id: BfGid | string | null | undefined,
  ): Promise<InstanceType<TClass> | null>;
  findX<
    TProps extends BfNodeBaseProps,
    TClass extends typeof BfNodeBase<TProps>,
  >(
    BfClass: TClass,
    id: BfGid,
  ): Promise<InstanceType<TClass>>;
  findCurrentUser(): Promise<BfPerson | null>;
  login(
    email: string,
    options: AuthenticationResponseJSON,
  ): Promise<BfCurrentViewer>;
  register(
    registrationResponse: RegistrationResponseJSON,
    email: string,
  ): Promise<BfPerson>;
  getRequestHeader(name: string): string | null;
  queryTargetsConnection<T, U extends typeof BfNodeBase>(
    source: T,
    BfClass: U,
    args: ConnectionArguments,
  ): Promise<Connection<GraphqlNode>>;

  getResponseHeaders(): Headers;
  loginDemoUser(): Promise<BfCurrentViewer>;
};

export async function createContext(request: Request): Promise<Context> {
  logger.debug("Creating new context");
  const cache = new Map<string, Map<BfGid, BfNodeBase>>();
  const responseHeaders = new Headers();
  let currentViewer = await BfCurrentViewer.createFromRequest(
    import.meta,
    request,
    responseHeaders,
  );
  logger.debug("Current viewer created");

  async function loginDemoUser() {
    currentViewer = await BfCurrentViewer.createForDemo(import.meta, responseHeaders);
    return currentViewer;
  }

  async function login(email: string, options: AuthenticationResponseJSON) {
    logger.debug("Logging in user");
    currentViewer = await BfCurrentViewer.createFromLoginOptions(
      import.meta,
      email,
      options,
      responseHeaders,
    );
    logger.debug("User logged in successfully");
    return currentViewer;
  }

  async function register(
    registrationResponse: RegistrationResponseJSON,
    email: string,
  ) {
    logger.debug("Registering user");
    currentViewer = await BfCurrentViewer.createFromRegistrationResponse(
      import.meta,
      registrationResponse,
      email,
      responseHeaders,
    );
    const person = await BfPerson.register(registrationResponse, email);
    logger.debug("User registered successfully");
    return person;
  }

  logger.debug("context Creating");
  const ctx: Context = {
    [Symbol.dispose]() {
      logger.debug("Starting context disposal");
      cache.clear();
      logger.debug("Cache cleared");
      currentViewer.clear();
      logger.debug("Current viewer cleared");
      logger.debug("Context disposed successfully");
    },

    getResponseHeaders() {
      return new Headers(responseHeaders);
    },

    getRequestHeader(name: string) {
      return request.headers.get(name);
    },
    // responseHeaders,

    getCvForGraphql() {
      return currentViewer.toGraphql();
    },

    async createTargetNode<
      TProps extends BfNodeBaseProps = BfNodeBaseProps,
      TBfClass extends typeof BfNode<TProps> = typeof BfNode<TProps>,
    >(
      sourceNode: BfNode,
      TargetBfClass: TBfClass,
      props: TProps,
      metadata?: BfMetadata,
    ) {
      let innerCache = cache.get(TargetBfClass.name);
      if (!innerCache) {
        innerCache = new Map<BfGid, BfNodeBase>();
        cache.set(TargetBfClass.name, innerCache);
      }

      const newItem = await sourceNode.createTargetNode(
        TargetBfClass,
        props,
        metadata,
      );
      return newItem as InstanceType<TBfClass>;
    },

    async find(BfClass, idOrString) {
      if (idOrString == null) {
        return null;
      }
      const id = toBfGid(idOrString);
      const item = await BfClass.find(
        currentViewer,
        id,
        cache.get(BfClass.name),
      );
      return item as InstanceType<typeof BfClass>;
    },

    async findX(BfClass, id) {
      const item = await BfClass.findX(
        currentViewer,
        id,
        cache.get(BfClass.name),
      );
      return item as InstanceType<typeof BfClass>;
    },

    async findCurrentUser() {
      const currentViewerPerson = await BfPerson.findCurrentViewer(
        currentViewer,
      );
      return currentViewerPerson;
    },

    login,
    register,
    loginDemoUser,

    async queryTargetsConnection(source, BfClass, args) {
      throw new BfErrorNotImplemented();
    },
  };
  return ctx;
}
