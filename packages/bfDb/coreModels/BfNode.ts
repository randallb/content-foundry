import { BfBaseNodeConstructor, BfNodeBase, BfNodeCache } from "packages/bfDb/classes/BfNodeBase.ts";
import { BfCurrentViewer } from "packages/bfDb/classes/BfCurrentViewer.ts";
import { BfGid } from "packages/bfDb/classes/BfNodeIds.ts";
import { staticImplements } from "lib/staticImplements.ts";
import { BfErrorNotImplemented } from "packages/BfError.ts";
import { BfMetadata } from "packages/bfDb/classes/BfNodeMetadata.ts";

/**
 * talks to the database with graphql stuff
 */
type BfNodeProps = Record<string, never>;

@staticImplements<BfBaseNodeConstructor<BfNodeProps, BfNode>>()
export class BfNode<TProps = BfNodeProps> extends BfNodeBase<TProps>{
  static findX<TProps, T extends BfNodeBase<TProps>>(
    _cv: BfCurrentViewer,
    _id: BfGid,
    _cache?: BfNodeCache,
  ): Promise<T> {
    throw new BfErrorNotImplemented();
  }

  static findRaw<TProps, T extends BfNodeBase<TProps>>(
    _cv: BfCurrentViewer,
    _id: BfGid,
    _caches: Array<BfNodeCache> = [],
  ): Promise<T> {
    throw new BfErrorNotImplemented();
  }

  static query<TProps, T extends BfNodeBase<TProps>>(
    _cv: BfCurrentViewer,
    _metadata: BfMetadata,
    _props: TProps,
    _bfGids: Array<BfGid>,
    _cache: BfNodeCache,
  ): Promise<Array<T>> {
    throw new BfErrorNotImplemented();
  }
  static create<TProps, T extends BfNodeBase<TProps>>(
    _cv: BfCurrentViewer,
    _props: TProps,
    _metadata?: BfMetadata,
    _cache?: BfNodeCache,
  ): Promise<T> {
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
    return await this;
  }
  async delete() {
    return await false;
  }
  async load() {
    return await this;
  }
}
