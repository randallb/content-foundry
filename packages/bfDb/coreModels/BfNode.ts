import {
  BfBaseNodeConstructor,
  BfNodeBase,
  BfNodeBaseProps,
  BfNodeCache,
} from "packages/bfDb/classes/BfNodeBase.ts";
import { BfCurrentViewer } from "packages/bfDb/classes/BfCurrentViewer.ts";
import { BfGid } from "packages/bfDb/classes/BfNodeIds.ts";
import { staticImplements } from "lib/staticImplements.ts";
import { BfErrorNotImplemented } from "packages/BfError.ts";
import { BfMetadata } from "packages/bfDb/classes/BfNodeMetadata.ts";
import { getLogger } from "packages/logger.ts";
import { bfGetItem, bfPutItem, type JSONValue } from "packages/bfDb/bfDb.ts";
import { BfErrorNodeNotFound } from "packages/bfDb/classes/BfErrorNode.ts";

const logger = getLogger(import.meta);
logger.setLevel(logger.levels.DEBUG);

/**
 * talks to the database with graphql stuff
 */
@staticImplements<BfBaseNodeConstructor<BfNodeBaseProps, typeof BfNode>>()
export class BfNode<TProps extends BfNodeBaseProps> extends BfNodeBase<TProps> {
  static async findX(
    cv: BfCurrentViewer,
    id: BfGid,
    cache?: BfNodeCache,
  ) {
    const itemFromCache = cache?.get(id);
    if (itemFromCache) {
      return itemFromCache;
    }
    const itemFromDb = await bfGetItem(cv.bfOid, id);
    logger.debug(itemFromDb)
    
    if (!itemFromDb) {
      logger.debug("couldn't find item", cv.bfOid, id);
      throw new BfErrorNodeNotFound();
    }
    const item = new this(cv, itemFromDb.props, itemFromDb.metadata);
    cache?.set(id, item);
    return item;
  }

  static findRaw<TProps extends BfNodeBaseProps, T extends BfNodeBase<TProps>>(
    _cv: BfCurrentViewer,
    _id: BfGid,
    _caches: Array<BfNodeCache> = [],
  ): Promise<T> {
    throw new BfErrorNotImplemented();
  }

  static query<TProps extends BfNodeBaseProps, T extends BfNodeBase<TProps>>(
    _cv: BfCurrentViewer,
    _metadata: BfMetadata,
    _props: TProps,
    _bfGids: Array<BfGid>,
    _cache: BfNodeCache,
  ): Promise<Array<T>> {
    throw new BfErrorNotImplemented();
  }

  // static override async findX(
  //   _cv: BfCurrentViewer,
  //   id: BfGid,
  //   cache: BfNodeCache = postsCache,
  // ) {
  //   const cachedItem = await cache.get(id);
  //   if (cachedItem) {
  //     return cachedItem as unknown as BfBlogPost;
  //   }
  //   throw new BfErrorNodeNotFound();
  // }

  // static override async query() {
  //   return await postsCache.values().toArray();
  // }

  // static override async create(cv: BfCurrentViewer, props: BfBlogPostProps) {
  //   return await new this(cv, props);
  // }

  async save() {
    await bfPutItem(this.props, this.metadata);
    return this;
  }
  async delete() {
    throw new BfErrorNotImplemented();
    return false;
  }
  async load() {
    const item = await bfGetItem(this.cv.bfOid, this.metadata.bfGid);
    throw new BfErrorNotImplemented();
    return this;
  }
}
