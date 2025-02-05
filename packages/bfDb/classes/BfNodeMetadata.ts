import type { BfGid } from "packages/bfDb/classes/BfNodeIds.ts";

export type BfMetadata =
  | BfMetadataNode
  | BfMetadataEdge;

export type BfMetadataNode = {
  /** Global ID */
  bfGid: BfGid;
  /** Owner ID */
  bfOid: BfGid;
  /** Creator ID */
  bfCid: BfGid;
  /** node class name */
  className: string;
  createdAt: Date;
  lastUpdated: Date;
  sortValue: string;
};

export type BfMetadataEdge = BfMetadataNode & {
  /** Source ID */
  bfSid: BfGid; 
  bfSClassName: string;
  /** Target ID */
  bfTid: BfGid;
  bfTClassName: string;
};

export type BfMetadataDefault = BfMetadata;
