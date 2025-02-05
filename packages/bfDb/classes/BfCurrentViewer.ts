import { getLogger } from "packages/logger.ts";
import { BfGid, toBfGid } from "packages/bfDb/classes/BfNodeIds.ts";

const logger = getLogger(import.meta);

/** not done */
export class BfCurrentViewer {
  static async createFromRequest(importMeta: ImportMeta, _request: Request) {
    logger.error("Currently using omniCV for everything. This is bad™")
    return this.__DANGEROUS_USE_IN_SCRIPTS_ONLY__createOmni(importMeta)
  }
  static __DANGEROUS_USE_IN_SCRIPTS_ONLY__createOmni(importMeta: ImportMeta) {
    logger.warn(`Creating omnivc from: ${importMeta.url}`);
    return new BfCurrentViewer__DANGEROUS__OMNI__(importMeta, toBfGid("OMNI"), toBfGid("OMNI"));
  }
  clear() {}

  __typename = this.constructor.name;

  protected constructor(
    readonly creator: ImportMeta, // the import.meta of the module that created the current viewer
    readonly bfGid: BfGid, // person for whom the access token was created
    readonly bfOid: BfGid, // always an owner, used to determine access control
  ) {
  }
}

export class BfCurrentViewer__DANGEROUS__OMNI__ extends BfCurrentViewer {
}