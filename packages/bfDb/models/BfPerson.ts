import { BfNode } from "packages/bfDb/coreModels/BfNode.ts";
import { getLogger } from "packages/logger.ts";

const logger = getLogger(import.meta);

export type BfUserProps = {
  name: string;
};

/**
 * @class 
 * @description 
 */
export class BfUser extends BfNode<BfUserProps> {
}
