import { getLogger } from "packages/logger.ts";

const logger = getLogger(import.meta);

/** not done */
export class BfCurrentViewer {
  static __DANGEROUS_USE_IN_SCRIPTS_ONLY__createOmni(importMeta: ImportMeta) {
    logger.warn(`Creating omnivc from: ${importMeta.url}`);
    return new BfCurrentViewer__DANGEROUS__OMNI__();
  }
  clear() {}
}

export class BfCurrentViewer__DANGEROUS__OMNI__ extends BfCurrentViewer {
}
