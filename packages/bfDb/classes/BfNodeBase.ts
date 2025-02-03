import type {
  BfMetadata,
} from "packages/bfDb/classes/BfNodeMetadata.ts";
import { staticImplements } from "lib/staticImplements.ts";
import { BfErrorNodeNotFound } from "packages/bfDb/classes/BfErrorNode.ts";
import {
  BfErrorNotImplemented,
} from "packages/BfError.ts";
import { type BfGid, toBfGid } from "packages/bfDb/classes/BfNodeIds.ts";
import type { BfCurrentViewer } from "packages/bfDb/classes/BfCurrentViewer.ts";
import { generateUUID } from "lib/generateUUID.ts";

export type BfNodeCache<T extends typeof BfNodeBase = typeof BfNodeBase> = Map<
  BfGid | string,
  InstanceType<T>
>;

export interface BfBaseNodeConstructor<
  TProps,
  TBfInstance extends BfNodeBase<TProps>,
> {
  findX(
    cv: BfCurrentViewer,
    id: BfGid,
    cache?: BfNodeCache,
  ): Promise<TBfInstance>;
  findRaw(
    cv: BfCurrentViewer,
    id: BfGid,
    caches?: Array<BfNodeCache>,
  ): Promise<TBfInstance>;
  query(
    cv: BfCurrentViewer,
    metadata: BfMetadata,
    props: TProps,
    bfGids: Array<BfGid>,
    cache?: BfNodeCache,
  ): Promise<Array<TBfInstance>>;
  create(
    cv: BfCurrentViewer,
    props: TProps,
    metadata?: BfMetadata,
    cache?: BfNodeCache,
  ): Promise<TBfInstance>;
}

type DefaultProps = Record<string, never>;

export abstract class BfNodeBase<TProps = DefaultProps> {
  __typename = this.constructor.name;
  _metadata: BfMetadata;

  static generateSortValue() {
    return `${Date.now()}`;
  }

  static generateMetadata(): BfMetadata {
    const bfGid = toBfGid(generateUUID());
    return {
      bfGid: bfGid,
      bfOid: bfGid,
      bfCid: bfGid,
      className: this.name,
      createdAt: new Date(),
      lastUpdated: new Date(),
      sortValue: this.generateSortValue(),
    };
  }

  static async find<TProps, T extends BfNodeBase<TProps>>(cv: BfCurrentViewer, id: BfGid, cache?: BfNodeCache) {
    const cachedItem = cache?.get(id);
    if (cachedItem) {
      return cachedItem;
    }
    try {
      // @ts-expect-error findX is on the static constructor, not this side.
      const result = await this.findX(cv, id, cache) as T;
      if (result) {
        if (cache) {
          cache.set(id, result);
        }
        return result;
      }
    } catch (e) {
      if (e instanceof BfErrorNodeNotFound) {
        // skip
      }
      throw e;
    }
    return null;
  }

  constructor(
    private _currentViewer: BfCurrentViewer,
    private _props: TProps,
    metadata?: BfMetadata,
  ) {
    this._metadata = metadata ||
      (this.constructor as typeof BfNodeBase).generateMetadata();
  }

  get cv(): BfCurrentViewer {
    return this._currentViewer;
  }

  get metadata(): BfMetadata {
    return this._metadata;
  }

  get props(): TProps {
    return this._props;
  }

  abstract save(): Promise<this>;
  abstract delete(): Promise<boolean>;
  abstract load(): Promise<this>;

  toGraphql() {
    const descriptors = Object.getOwnPropertyDescriptors(this);
    const skippedKeys = ["metadata", "cv", "props"];
    const getters = Object.entries(descriptors)
      .filter(([key, descriptor]) =>
        typeof descriptor.get === "function" && !skippedKeys.includes(key)
      )
      .map(([key]) => [key, this[key as keyof this]]);

    return {
      ...this.props,
      ...Object.fromEntries(getters),
      id: this.metadata.bfGid,
      __typename: this.__typename,
    };
  }
}

/**
 * Base class for all BfNode classes. Covers all the required fields and methods.
 * Basically abstract, but can't be because of type stuff.
 */
// @staticImplements<BfNodeConstructor>()
// export class BfNodeBase<TProps> implements BfNodeClass {
//   props: TProps;
//   metadata: BfMetadata;
//   currentViewer: BfCurrentViewer;

//   /** DEFAULT METHODS */

//   static generateMetadata(): BfMetadata {
//     throw new BfErrorNotImplemented();
//   }

//   static generateSortValue(): string {
//     return `${Date.now()}`;
//   }

//   toString(): string {
//     return `${this.constructor.name}#${this.metadata.bfGid}`;
//   }

//   constructor(cv: BfCurrentViewer, props: TProps, metadata?: BfMetadataNode) {
//     this.props = props;
//     this.metadata = metadata ?? (this.constructor as typeof BfNodeBase).generateMetadata()
//     this.currentViewer = cv;
//   }

//   static async find<TThis extends typeof BfNodeBase>(
//     this: TThis,
//     cv: BfCurrentViewer,
//     id: BfGid | string,
//     cache?: BfNodeCache<TThis>,
//   ): Promise<InstanceType<TThis> | null> {
//     const cachedItem = cache?.get(id);
//     if (cachedItem) {
//       return cachedItem;
//     }
//     try {
//       return await this.findX(cv, id, cache);
//     } catch (e) {
//       const catchableError = e instanceof BfErrorNodeNotFound;
//       if (catchableError) {
//         return null;
//       }
//       throw e;
//     }
//   }
//   /** /DEFAULT METHODS */

//   /** CALLBACKS */

//   async beforeCreate(): Promise<void> {}

//   async beforeDelete(): Promise<void> {}

//   async beforeLoad(): Promise<void> {}

//   async beforeUpdate(): Promise<void> {}

//   async afterCreate(): Promise<void> {}

//   async afterUpdate(): Promise<void> {}

//   async afterDelete(): Promise<void> {}

//   async validateSave(): Promise<void> {}

//   async validatePermissions(): Promise<void> {}

//   /** /CALLBACKS */

//   /** ABSTRACT METHODS */
//   static async findX<TThis extends typeof BfNodeBase>(
//     cv: BfCurrentViewer,
//     id: BfGid | string,
//     cache?: BfNodeCache<TThis>,
//   ): Promise<InstanceType<TThis>> {
//     const cachedItem = cache?.get(id);
//     if (cachedItem) {
//       return cachedItem;
//     }
//     throw new BfErrorExampleImplementation();
//   }

//   static query<TProps, TThis extends typeof BfNodeBase>(
//     this: TThis,
//     cv: BfCurrentViewer,
//     metadata: BfMetadata,
//     props: TProps,
//     bfGids: Array<BfGid>,
//     cache?: BfNodeCache<TThis>,
//   ): Promise<Array<InstanceType<TThis>>> {
//     throw new BfErrorNotImplemented();
//   }

//   static create<TProps, TThis extends typeof BfNodeBase>(
//     this: TThis,
//     cv: BfCurrentViewer,
//     props: TProps,
//     metadata: BfMetadata,
//     cache?: BfNodeCache<TThis>,
//   ): Promise<InstanceType<TThis>> {
//     throw new BfErrorNotImplemented();
//   }
// }
