import {
  BfNodeBase,
  type BfNodeBaseProps,
} from "packages/bfDb/classes/BfNodeBase.ts";
import { type BfCurrentViewer } from "packages/bfDb/classes/BfCurrentViewer.ts";
import { type BfNodeCache } from "packages/bfDb/classes/BfNodeBase.ts";
import { type BfGid } from "packages/bfDb/classes/BfNodeIds.ts";
import { BfErrorNotImplemented } from "packages/BfError.ts";
import { BfMetadata } from "packages/bfDb/classes/BfNodeMetadata.ts";
import { getLogger } from "packages/logger.ts";

const logger = getLogger(import.meta);

export type BfBlogProps = {
  name: string;
};

export class BfBlog extends BfNodeBase<BfBlogProps> {
  static override async findX<
    TProps extends BfNodeBaseProps,
    TThis extends typeof BfNodeBase<TProps>,
  >(
    this: TThis,
    cv: BfCurrentViewer,
    id: BfGid,
    cache?: BfNodeCache,
  ): Promise<InstanceType<TThis>> {
    const props: BfBlogProps = {
      name: "Content Foundry blog",
    };
    if (cv.isLoggedIn) {
      props.name = "Content Foundry Blog";
    }

    return new this(cv, props as unknown as TProps, {
      bfGid: id,
    }) as InstanceType<TThis>;
  }

  static override query<
    TProps extends BfNodeBaseProps,
    T extends BfNodeBase<TProps>,
  >(
    _cv: BfCurrentViewer,
    _metadata: BfMetadata,
    _props: TProps,
    _bfGids: Array<BfGid>,
    _cache?: BfNodeCache,
  ): Promise<Array<T>> {
    throw new BfErrorNotImplemented();
  }

  override async save() {
    return await this;
  }

  override async delete() {
    return await false;
  }

  override async load() {
    return await this;
  }
}
