import { getLogger } from "packages/logger.ts";
import { type BfGid, toBfGid } from "packages/bfDb/classes/BfNodeIds.ts";
import { BfCurrentViewer } from "packages/bfDb/classes/BfCurrentViewer.ts";
// import type { BfNode } from "packages/bfDb/coreModels/BfNode.ts";
import type { Connection, ConnectionArguments } from "graphql-relay";
import type { BfNodeBase, BfNodeBaseProps } from "packages/bfDb/classes/BfNodeBase.ts";
import type { BfErrorNodeNotFound } from "packages/bfDb/classes/BfErrorNode.ts";
import { BfErrorNotImplemented } from "packages/BfError.ts";
import { BfNode } from "packages/bfDb/coreModels/BfNode.ts";
import { GraphqlNode } from "packages/graphql/types/graphqlBfNode.ts";
// import { BfBlogPost } from "packages/bfDb/models/BfBlogPost.ts";
import { BfMetadata } from "packages/bfDb/classes/BfNodeMetadata.ts";
import { BfPerson } from "packages/bfDb/models/BfPerson.ts";

const logger = getLogger(import.meta);

export type Context = {
  [Symbol.dispose]: () => void;
  __DANGEROUS__createUnattached<TProps extends BfNodeBaseProps, TClass extends typeof BfNodeBase<TProps>>(
    BfClass: TClass,
    props: TProps,
    metadata?: BfMetadata,
  ): Promise<InstanceType<TClass>>;
  find<TProps extends BfNodeBaseProps, TClass extends typeof BfNodeBase<TProps>>(
    BfClass: TClass,
    id: BfGid | string | null | undefined,
  ): Promise<InstanceType<TClass> | null>;
  findX<TProps extends BfNodeBaseProps, TClass extends typeof BfNodeBase<TProps>>(
    BfClass: TClass,
    id: BfGid,
  ): Promise<InstanceType<TClass>>;
  findCurrentUser(): Promise<BfPerson | null>;
  findRaw<TProps extends BfNodeBaseProps, TClass extends typeof BfNodeBase<TProps>>(
    id: BfGid | string | null | undefined,
    BfClass?: TClass,
  ): Promise<InstanceType<TClass> | null>;
  queryTargetsConnection<T, U extends typeof BfNodeBase>(
    source: T,
    BfClass: U,
    args: ConnectionArguments,
  ): Promise<Connection<GraphqlNode>>;
};

export async function createContext(request: Request): Promise<Context> {
  const cache = new Map<string, Map<BfGid, BfNodeBase>>();
  const currentViewer = await BfCurrentViewer.createFromRequest(import.meta, request);

  logger.debug("context Creating");
  const ctx: Context = {
    [Symbol.dispose]() {
      logger.debug("context Disposing");
      cache.clear();
      currentViewer.clear();
      logger.debug("Context disposed");
    },

    async __DANGEROUS__createUnattached(
      BfClass,
      props,
      metadata?: BfMetadata,
    ) {
      let innerCache = cache.get(BfClass.name);
      if (!innerCache) {
        innerCache = new Map<BfGid, BfNodeBase>();
        cache.set(BfClass.name, innerCache);
      }

      const newItem = await BfClass.__DANGEROUS__createUnattached(currentViewer, props, metadata, innerCache);
      return newItem;
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
      // @ts-expect-error findx isn't typed properly yet
      const item = await BfClass.findX(
        currentViewer,
        id,
        cache.get(BfClass.name),
      );
      return item as InstanceType<typeof BfClass>;
    },

    async findRaw(idOrString, BfClass) {
      throw new BfErrorNotImplemented();
      // if (idOrString == null) {
      //   return null;
      // }
      // const id = toBfGid(idOrString);
      // const item = await BfClass.findRaw(
      //   currentViewer,
      //   id,
      //   cache.values().toArray(),
      // );
      // return item;
    },

    async findCurrentUser() {
      const currentViewerPerson = await BfPerson.findCurrentViewer(currentViewer);
      return currentViewerPerson;
    },

    async queryTargetsConnection(source, BfClass, args) {
      throw new BfErrorNotImplemented();
    },
  };
  return ctx;
}
