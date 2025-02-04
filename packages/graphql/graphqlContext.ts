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
import { BfBlogPost } from "packages/bfDb/models/BfBlogPost.ts";
import { BfMetadata } from "packages/bfDb/classes/BfNodeMetadata.ts";
import { BfPerson } from "packages/bfDb/models/BfPerson.ts";

const logger = getLogger(import.meta);

export type Context = {
  [Symbol.dispose]: () => void;
  create<TProps extends BfNodeBaseProps>(
    BfClass: typeof BfNode<TProps>,
    props: TProps,
    metadata?: BfMetadata,
  ): Promise<BfNode<TProps>>;
  find(
    BfClass: typeof BfNodeBase,
    id: BfGid | string | null | undefined,
  ): Promise<GraphqlNode | null>;
  findCurrentUser(): Promise<BfPerson | null>;
  findRaw(
    id: BfGid | string | null | undefined,
    BfClass?: typeof BfNode | typeof BfBlogPost,
  ): Promise<GraphqlNode | null>;
  queryTargetsConnection<T, U extends typeof BfNodeBase>(
    source: T,
    BfClass: U,
    args: ConnectionArguments,
  ): Promise<Connection<GraphqlNode>>;
};

export async function createContext(_: Request): Promise<Context> {
  const cache = new Map<string, Map<BfGid, BfNodeBase>>();
  const currentViewer = new BfCurrentViewer();

  logger.debug("context Creating");
  const ctx: Context = {
    [Symbol.dispose]() {
      logger.debug("context Disposing");
      cache.clear();
      currentViewer.clear();
      logger.debug("Context disposed");
    },

    create<TProps extends BfNodeBaseProps>(
      BfClass: typeof BfNode<TProps>,
      props: TProps,
      metadata?: BfMetadata,
    ) {
      let innerCache = cache.get(BfClass.name);
      if (!innerCache) {
        innerCache = new Map<BfGid, BfNodeBase>();
        cache.set(BfClass.name, innerCache);
      }

      return BfClass.create(currentViewer, props, metadata, innerCache);
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
      return item?.toGraphql();
    },

    async findRaw(idOrString, BfClass = BfNode) {
      if (idOrString == null) {
        return null;
      }
      const id = toBfGid(idOrString);
      const item = await BfClass.findRaw(
        currentViewer,
        id,
        cache.values().toArray(),
      );
      return item?.toGraphql();
    },

    async findCurrentUser() {
      return BfPerson.findCurrentViewer(currentViewer);
    },

    async queryTargetsConnection(source, BfClass, args) {
      throw new BfErrorNotImplemented();
    },
  };
  return ctx;
}
