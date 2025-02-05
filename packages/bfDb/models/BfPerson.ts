import { BfNode } from "packages/bfDb/coreModels/BfNode.ts";
import { getLogger } from "packages/logger.ts";
import { BfCurrentViewer } from "packages/bfDb/classes/BfCurrentViewer.ts";
import { BfErrorNotImplemented } from "packages/BfError.ts";
import { generateUUID } from "lib/generateUUID.ts";

const logger = getLogger(import.meta);
logger.setLevel(logger.levels.DEBUG);

export type BfPersonProps = {
  name: string;
  inviteCode?: string;
};

/**
 * @class
 * @description
 */
export class BfPerson extends BfNode<BfPersonProps> {
  static async findCurrentViewer(
    cv: BfCurrentViewer,
  ): Promise<BfPerson | null> {
    // throw new BfErrorNotImplemented();
    return new this(cv, { name: "Bob" });
  }

  override beforeCreate() {
    this.props.inviteCode = generateUUID();
  }
}
