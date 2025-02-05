// import {
//   type BfBaseNodeConstructor,
//   BfNodeBase,
//   BfNodeBaseProps,
//   type BfNodeCache,
// } from "packages/bfDb/classes/BfNodeBase.ts";
// import { type BfGid, toBfGid } from "packages/bfDb/classes/BfNodeIds.ts";
// import { staticImplements } from "lib/staticImplements.ts";
// import {
//   type BfCurrentViewer,
//   BfCurrentViewer__DANGEROUS__OMNI__,
// } from "packages/bfDb/classes/BfCurrentViewer.ts";
// import { walk } from "@std/fs/walk";
// import { BfErrorNodeNotFound } from "packages/bfDb/classes/BfErrorNode.ts";
// import { extractYaml } from "@std/front-matter";
// import { getLogger } from "packages/logger.ts";
// import { BfErrorNotImplemented } from "packages/BfError.ts";
// import { BfMetadata } from "packages/bfDb/classes/BfNodeMetadata.ts";

// const logger = getLogger(import.meta);

// enum BlogPostStatus {
//   Draft = "draft",
//   Published = "published",
// }

// type BlogPostFrontmatter = {
//   author: string;
//   cta: string;
//   authorTwitter: string;
//   summary: string;
//   title: string;
//   status: BlogPostStatus;
// };

// type MaybeBlogPostFrontmatter = Partial<BlogPostFrontmatter>;

// type BfBlogPostProps = MaybeBlogPostFrontmatter & {
//   content: string;
//   status: BlogPostStatus;
// };

// @staticImplements<BfBaseNodeConstructor<BfBlogPostProps, BfBlogPost>>()
// export class BfBlogPost extends BfNodeBase<BfBlogPostProps> {
//   private static _postsCache: Map<BfGid, BfBlogPost>;
//   static async getPostsCache() {
//     if (this._postsCache) {
//       return this._postsCache;
//     }
//     this._postsCache = new Map();
//     const iterable = walk(new URL(import.meta.resolve("content/")));
//     const omniCv = new BfCurrentViewer__DANGEROUS__OMNI__();
//     for await (const entry of iterable) {
//       const maybeId = entry.path.split(".md")[0].split("/").pop();
//       if (maybeId == null) {
//         continue;
//       }
//       const id = toBfGid(maybeId);
//       if (entry.isFile) {
//         let content = await Deno.readTextFile(entry.path);
//         let metadata = {} as MaybeBlogPostFrontmatter;
//         try {
//           const { body, attrs } = extractYaml(content);
//           content = body;
//           metadata = attrs as MaybeBlogPostFrontmatter;
//         } catch {
//           logger.warn(`Failed to parse front matter for ${id}`);
//         }
//         const props: BfBlogPostProps = {
//           ...(metadata as MaybeBlogPostFrontmatter),
//           content,
//           status: metadata.status ?? BlogPostStatus.Published,
//         };
//         const post = await this.create(omniCv, props);
//         this._postsCache.set(id, post);
//       }
//     }
//     return this._postsCache;
//   }
//   static findX<TProps extends BfNodeBaseProps, T extends BfNodeBase<TProps>>(
//     _cv: BfCurrentViewer,
//     _id: BfGid,
//     _cache?: BfNodeCache,
//   ): Promise<T> {
//     throw new BfErrorNotImplemented();
//   }

//   static async findRaw(
//     _cv: BfCurrentViewer,
//     id: BfGid,
//     _caches: Array<BfNodeCache> = [],
//   ) {
//     const postsCache = await this.getPostsCache();
//     const item = postsCache.get(id);
//     if (item) {
//       return item;
//     }
//     logger.info(id)
//     throw new BfErrorNodeNotFound();
//   }

//   static query<TProps extends BfNodeBaseProps, T extends BfNodeBase<TProps>>(
//     _cv: BfCurrentViewer,
//     _metadata: BfMetadata,
//     _props: TProps,
//     _bfGids: Array<BfGid>,
//     _cache: BfNodeCache,
//   ): Promise<Array<T>> {
//     throw new BfErrorNotImplemented();
//   }

//   // static override async findX(
//   //   _cv: BfCurrentViewer,
//   //   id: BfGid,
//   //   cache: BfNodeCache = postsCache,
//   // ) {
//   //   const cachedItem = await cache.get(id);
//   //   if (cachedItem) {
//   //     return cachedItem as unknown as BfBlogPost;
//   //   }
//   //   throw new BfErrorNodeNotFound();
//   // }

//   // static override async query() {
//   //   return await postsCache.values().toArray();
//   // }

//   // static override async create(cv: BfCurrentViewer, props: BfBlogPostProps) {
//   //   return await new this(cv, props);
//   // }

//   async save() {
//     return await this;
//   }
//   async delete() {
//     return await false;
//   }
//   async load() {
//     return await this;
//   }
// }

// // @staticImplements<BfNodeConstructor<BfBlogPostProps>>()
// // export class BfBlogPost extends BfNodeBase<BfBlogPost, BfBlogPostProps> {
// //   static override findX<TThis extends BfNodeBase>(
// //     this: TThis,
// //     cv: BfCurrentViewer,
// //     id: BfGid,
// //     cache?: BfNodeCache,
// //   ): Promise<TThis> {

// //   }

// //   static override query<TThis extends BfNodeBase>(
// //     this: TThis,
// //     cv: BfCurrentViewer,
// //     metadata: BfMetadata,
// //     props: BfBlogPostProps,
// //     bfGids: Array<BfGid>,
// //     cache?: BfNodeCache,
// //   ): Promise<Array<TThis>> {

// //   }

// //   static override create<TThis extends BfNodeBase>(
// //     this: TThis,
// //     cv: BfCurrentViewer,
// //     props: BfBlogPostProps,
// //     cache?: BfNodeCache,
// //   ): Promise<TThis> {

// //   }

// //   async save() {
// //     return this;
// //   }

// //   async delete() {
// //     return true;
// //   }

// //   async load() {
// //     return this;
// //   }

// // }
