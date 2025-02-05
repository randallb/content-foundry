import type { BfMetadata } from "packages/bfDb/classes/BfNodeMetadata.ts";
import { BfErrorNodeNotFound } from "packages/bfDb/classes/BfErrorNode.ts";
import { type BfGid, toBfGid } from "packages/bfDb/classes/BfNodeIds.ts";
import type { BfCurrentViewer } from "packages/bfDb/classes/BfCurrentViewer.ts";
import { generateUUID } from "lib/generateUUID.ts";
import { getLogger } from "packages/logger.ts";
import type { JSONValue } from "packages/bfDb/bfDb.ts";
import type { BfNode } from "packages/bfDb/coreModels/BfNode.ts";

const logger = getLogger(import.meta);

export type BfNodeBaseProps = Record<string, JSONValue>;

export type BfNodeCache<
  TProps extends BfNodeBaseProps = DefaultProps,
  T extends typeof BfNodeBase<TProps> = typeof BfNodeBase,
> = Map<
  BfGid | string,
  InstanceType<T>
>;

export interface BfBaseNodeConstructor<
  TProps extends BfNodeBaseProps,
  TThis extends typeof BfNodeBase<TProps>,
> {
  findX(
    this: TThis,
    cv: BfCurrentViewer,
    id: BfGid,
    cache?: BfNodeCache,
  ): Promise<InstanceType<TThis>>;
  query(
    cv: BfCurrentViewer,
    metadata: BfMetadata,
    props: TProps,
    bfGids: Array<BfGid>,
    cache?: BfNodeCache,
  ): Promise<Array<InstanceType<TThis>>>;
}

type DefaultProps = Record<string, never>;

export abstract class BfNodeBase<
  TProps extends BfNodeBaseProps = DefaultProps,
> {
  __typename = this.constructor.name;
  private _metadata: BfMetadata;

  static generateSortValue() {
    return `${Date.now()}`;
  }

  static generateMetadata(
    cv: BfCurrentViewer,
    metadata?: Partial<BfMetadata>,
  ): BfMetadata {
    const bfGid = toBfGid(generateUUID());
    const defaults = {
      bfGid: bfGid,
      bfOid: cv.bfOid,
      bfCid: cv.bfGid,
      className: this.name,
      createdAt: new Date(),
      lastUpdated: new Date(),
      sortValue: this.generateSortValue(),
    };
    return { ...defaults, ...metadata };
  }

  static async find<
    TProps extends BfNodeBaseProps,
    T extends BfNodeBase<TProps>,
  >(
    cv: BfCurrentViewer,
    id: BfGid,
    cache?: BfNodeCache,
  ) {
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

  static async __DANGEROUS__createUnattached<
    TProps extends BfNodeBaseProps,
    TThis extends typeof BfNodeBase<TProps>,
  >(
    this: TThis,
    cv: BfCurrentViewer,
    props: TProps,
    metadata?: Partial<BfMetadata>,
    cache?: BfNodeCache,
  ): Promise<InstanceType<TThis>> {
    logger.debug(
      `Creating unattached ${this.name} with props ${JSON.stringify(props)}`,
    );
    // @ts-expect-error new-ing an abstract class is a type error.
    const newNode = new this(cv, props, metadata);
    await newNode.beforeCreate();
    await newNode.save();
    await newNode.afterCreate();
    logger.debug(`Created ${newNode}`);
    cache?.set(newNode.metadata.bfGid, newNode);
    return newNode;
  }

  constructor(
    private _currentViewer: BfCurrentViewer,
    private _props: TProps,
    metadata?: Partial<BfMetadata>,
  ) {
    this._metadata = (this.constructor as typeof BfNodeBase).generateMetadata(
      _currentViewer,
      metadata,
    );
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

  toString() {
    return `${this.constructor.name}#${this.metadata.bfGid}⚡️${this.metadata.bfOid}`
  }

  abstract save(): Promise<this>;
  abstract delete(): Promise<boolean>;
  abstract load(): Promise<this>;
  abstract createTargetNode<
    TProps extends BfNodeBaseProps,
    TBfClass extends typeof BfNode<TProps>,
  >(
    TargetBfClass: TBfClass,
    props: TProps,
    metadata?: BfMetadata,
  ): Promise<InstanceType<TBfClass>>;

  /** CALLBACKS */

  beforeCreate(): Promise<void> | void {}

  // beforeDelete(): Promise<void> | void {}

  // beforeLoad(): Promise<void> | void {}

  // beforeUpdate(): Promise<void> | void {}

  afterCreate(): Promise<void> | void {}

  // afterUpdate(): Promise<void> | void {}

  // afterDelete(): Promise<void> | void {}

  // validateSave(): Promise<void> | void {}

  // validatePermissions(): Promise<void> | void {}

  /** /CALLBACKS */
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
