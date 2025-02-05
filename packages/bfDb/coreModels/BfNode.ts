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
import { bfPutItem, type JSONValue } from "packages/bfDb/bfDb.ts";

const logger = getLogger(import.meta);
logger.setLevel(logger.levels.DEBUG);

type BfNodeDefaultProps = Record<string, never>;

/**
 * talks to the database with graphql stuff
 */
@staticImplements<BfBaseNodeConstructor<BfNodeDefaultProps, BfNode>>()
export class BfNode<TProps extends BfNodeBaseProps = BfNodeDefaultProps>
  extends BfNodeBase<TProps> {
  static findX<TProps extends BfNodeBaseProps, T extends BfNodeBase<TProps>>(
    _cv: BfCurrentViewer,
    _id: BfGid,
    _cache?: BfNodeCache,
  ): Promise<T> {
    throw new BfErrorNotImplemented();
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
    throw new BfErrorNotImplemented();
    return this;
  }
}
