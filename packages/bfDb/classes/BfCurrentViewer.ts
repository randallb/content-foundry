import { getLogger } from "packages/logger.ts";
import { BfGid, toBfGid } from "packages/bfDb/classes/BfNodeIds.ts";

const logger = getLogger(import.meta);

export abstract class BfCurrentViewer {
  __typename: string;
  static async createFromRequest(importMeta: ImportMeta, _request: Request) {
    const cv = BfCurrentViewerLoggedOut
      .__PROBABLY_DONT_USE_THIS_VERY_OFTEN__create(importMeta);
    return cv;
  }
  static __DANGEROUS_USE_IN_SCRIPTS_ONLY__createOmni(importMeta: ImportMeta) {
    logger.warn(`Creating omnivc from: ${importMeta.url}`);
    return BfCurrentViewer__DANGEROUS__OMNI__
      .__PROBABLY_DONT_USE_THIS_VERY_OFTEN__create(importMeta);
  }
  static __DANGEROUS_USE_IN_SCRIPTS_ONLY__createLoggedIn(
    importMeta: ImportMeta,
    bfGid: string | BfGid,
    bfOid: string | BfGid,
  ) {
    logger.warn(`Creating Logged in user: ${importMeta.url}`);
    return BfCurrentViewerLoggedIn.__PROBABLY_DONT_USE_THIS_VERY_OFTEN__create(
      importMeta,
      toBfGid(bfGid),
      toBfGid(bfOid),
    );


  }

  static createLoggedOut(
    importMeta: ImportMeta,
  ) {
    logger.warn(`Creating Logged in user: ${importMeta.url}`);
    return BfCurrentViewerLoggedOut.__PROBABLY_DONT_USE_THIS_VERY_OFTEN__create(
      importMeta,
    );
  }
  clear() {}

  protected constructor(
    readonly creator: ImportMeta, // the import.meta of the module that created the current viewer
    readonly bfGid: BfGid, // person for whom the access token was created
    readonly bfOid: BfGid, // always an owner, used to determine access control
  ) {
    this.__typename = this.constructor.name;
  }

  toGraphql() {
    return { __typename: this.constructor.name, id: this.bfGid };
  }

  toString() {
    return `${this.constructor.name}#${this.bfGid}⚡️${this.bfOid}`;
  }
}

export class BfCurrentViewerLoggedOut extends BfCurrentViewer {
  protected constructor(
    override readonly creator: ImportMeta, // the import.meta of the module that created the current viewer
  ) {
    super(creator, toBfGid("ANON"), toBfGid("ANON"));
  }

  static __PROBABLY_DONT_USE_THIS_VERY_OFTEN__create(creator: ImportMeta) {
    return new this(creator);
  }
}
class BfCurrentViewerLoggedIn extends BfCurrentViewer {
  static __PROBABLY_DONT_USE_THIS_VERY_OFTEN__create(
    creator: ImportMeta,
    bfGid: BfGid,
    bfOid: BfGid,
  ) {
    return new this(creator, bfGid, bfOid);
  }
}

class BfCurrentViewer__DANGEROUS__OMNI__ extends BfCurrentViewer {
  static __PROBABLY_DONT_USE_THIS_VERY_OFTEN__create(creator: ImportMeta) {
    return new this(creator, toBfGid("OMNI"), toBfGid("OMNI"));
  }
}
