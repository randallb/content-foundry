import { BfNode } from "packages/bfDb/coreModels/BfNode.ts";
import { getLogger } from "packages/logger.ts";
import { BfCurrentViewer } from "packages/bfDb/classes/BfCurrentViewer.ts";
import { BfErrorNotImplemented } from "packages/BfError.ts";

const logger = getLogger(import.meta);

export type BfPersonProps = {
  name: string;
};

/**
 * @class 
 * @description 
 */
export class BfPerson extends BfNode<BfPersonProps> {
  static async findCurrentViewer(cv: BfCurrentViewer): Promise<BfPerson | null> {
    // throw new BfErrorNotImplemented();
    return new this(cv, { name: "Bob" });
  }
}
