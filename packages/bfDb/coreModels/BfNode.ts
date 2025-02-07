import {
  BfNodeBase,
  BfNodeBaseProps,
  BfNodeCache,
} from "packages/bfDb/classes/BfNodeBase.ts";
import { BfCurrentViewer } from "packages/bfDb/classes/BfCurrentViewer.ts";
import { BfGid } from "packages/bfDb/classes/BfNodeIds.ts";
import { BfErrorNotImplemented } from "packages/BfError.ts";
import { BfMetadata } from "packages/bfDb/classes/BfNodeMetadata.ts";
import { getLogger } from "packages/logger.ts";
import { bfGetItem, bfPutItem, type JSONValue } from "packages/bfDb/bfDb.ts";
import { BfErrorNodeNotFound } from "packages/bfDb/classes/BfErrorNode.ts";

const logger = getLogger(import.meta);

/**
 * talks to the database with graphql stuff
 */
export class BfNode<TProps extends BfNodeBaseProps = BfNodeBaseProps>
  extends BfNodeBase<TProps> {
  protected _serverProps: TProps;
  protected _clientProps: Partial<TProps> = {};

  static override async findX<
    TProps extends BfNodeBaseProps,
    TThis extends typeof BfNodeBase<TProps>,
  >(
    this: TThis,
    cv: BfCurrentViewer,
    id: BfGid,
    cache?: BfNodeCache,
  ) {
    logger.debug(`findX: ${this.name} ${id} ${cv}`);
    const itemFromCache = cache?.get(id);
    if (itemFromCache) {
      return itemFromCache as InstanceType<TThis>;
    }
    const itemFromDb = await bfGetItem(cv.bfOid, id);
    logger.debug(itemFromDb);
    if (!itemFromDb) {
      logger.debug("couldn't find item", cv.bfOid, id);
      throw new BfErrorNodeNotFound();
    }
    const item = new this(cv, itemFromDb.props as TProps, itemFromDb.metadata);
    cache?.set(id, item);
    return item as InstanceType<TThis>;
  }

  static override query<
    TProps extends BfNodeBaseProps,
    TThis extends typeof BfNodeBase<TProps>,
  >(
    this: TThis,
    _cv: BfCurrentViewer,
    _metadata: BfMetadata,
    _props: TProps,
    _bfGids: Array<BfGid>,
    _cache: BfNodeCache,
  ): Promise<Array<InstanceType<TThis>>> {
    throw new BfErrorNotImplemented();
  }

  constructor(
    protected override _currentViewer: BfCurrentViewer,
    protected override _props: TProps,
    metadata?: Partial<BfMetadata>,
  ) {
    super(_currentViewer, _props, metadata);
    this._serverProps = _props;
  }

  override get props(): TProps {
    return { ...this._serverProps, ...this._clientProps };
  }

  override set props(props: Partial<TProps>) {
    this._clientProps = props;
  }

  override isDirty() {
    return Object.keys(this._clientProps).some((key) => {
      return this._clientProps[key] !== this._serverProps[key];
    });
  }

  override async save() {
    logger.setLevel(logger.levels.DEBUG);
    logger.debug(`Saving ${this}`, this.props, this.metadata);
    await bfPutItem(this.props, this.metadata);
    this._serverProps = this.props;
    this._clientProps = {};
    return this;
  }

  override async delete() {
    throw new BfErrorNotImplemented();
    return false;
  }
  override async load() {
    const item = await bfGetItem(this.cv.bfOid, this.metadata.bfGid);
    throw new BfErrorNotImplemented();
    return this;
  }

  override async createTargetNode<
    TProps extends BfNodeBaseProps,
    TBfClass extends typeof BfNode<TProps>,
  >(
    TargetBfClass: TBfClass,
    props: TProps,
    metadata?: BfMetadata,
  ): Promise<InstanceType<TBfClass>> {
    return new TargetBfClass(this.cv, props, metadata) as InstanceType<
      TBfClass
    >;
  }
}
