import {
  BfNodeBase,
  type BfNodeBaseProps,
  type BfNodeCache,
} from "packages/bfDb/classes/BfNodeBase.ts";
import { type BfGid, toBfGid } from "packages/bfDb/classes/BfNodeIds.ts";
import { staticImplements } from "lib/staticImplements.ts";
import { BfCurrentViewer } from "packages/bfDb/classes/BfCurrentViewer.ts";
import { walk } from "@std/fs/walk";
import { BfErrorNodeNotFound } from "packages/bfDb/classes/BfErrorNode.ts";
import { extractYaml } from "@std/front-matter";
import { getLogger } from "packages/logger.ts";
import { BfErrorNotImplemented } from "packages/BfError.ts";
import { BfMetadata } from "packages/bfDb/classes/BfNodeMetadata.ts";

const logger = getLogger(import.meta);

enum BlogPostStatus {
  Draft = "draft",
  Published = "published",
}

type BlogPostFrontmatter = {
  author: string;
  cta: string;
  authorTwitter: string;
  summary: string;
  title: string;
  status: BlogPostStatus;
};

type MaybeBlogPostFrontmatter = Partial<BlogPostFrontmatter>;

type BfBlogPostProps = MaybeBlogPostFrontmatter & {
  content: string;
  status: BlogPostStatus;
};

export class BfBlogPost extends BfNodeBase<BfBlogPostProps> {
  private static _postsCache: Map<BfGid, BfBlogPost>;

  static async getPostsCache() {
    logger.debug('Starting getPostsCache');
    if (this._postsCache) {
      logger.debug('Returning existing posts cache');
      return this._postsCache;
    }
    logger.setLevel(logger.levels.DEBUG)
    
    this._postsCache = new Map();
    const iterable = walk(new URL(import.meta.resolve("content/blog")));
    const loggedOutCV = BfCurrentViewer.createLoggedOut(import.meta);
    logger.debug('Walking content/blog directory');
    
    for await (const entry of iterable) {
      const maybeId = entry.path.split(".md")[0].split("/").pop();
      if (maybeId == null) {
        logger.debug(`Skipping entry with invalid path: ${entry.path}`);
        continue;
      }
      const id = toBfGid(maybeId);
      if (entry.isFile) {
        logger.debug(`Processing file: ${entry.path} with ID: ${id}`);
        let content = await Deno.readTextFile(entry.path);
        let metadata = {} as MaybeBlogPostFrontmatter;
        try {
          const { body, attrs } = extractYaml(content);
          content = body;
          metadata = attrs as MaybeBlogPostFrontmatter;
          logger.debug(`Successfully parsed front matter for ${id}`);
        } catch {
          logger.warn(`Failed to parse front matter for ${id}`);
        }
        const props: BfBlogPostProps = {
          ...(metadata as MaybeBlogPostFrontmatter),
          content,
          status: metadata.status ?? BlogPostStatus.Published,
        };
        const creationMetadata = {
          bfGid: id,
        }
        logger.debug(`Creating blog post with title: ${metadata.title || 'untitled'}`);
        const post = await this.__DANGEROUS__createUnattached(
          loggedOutCV,
          props,
          creationMetadata,
        );
        this._postsCache.set(id, post);
        logger.debug(`Added post to cache with ID: ${id}`);
      }
    }
    logger.debug('Completed getPostsCache');
    logger.resetLevel();
    return this._postsCache;
  }

  static override async findX<
    TProps extends BfNodeBaseProps,
    T extends BfNodeBase<TProps>,
  >(
    cv: BfCurrentViewer,
    id: BfGid,
    cache?: BfNodeCache,
  ): Promise<T> {
    const postsCache = await this.getPostsCache();
    const item = postsCache.get(id);
    if (item) {
      return item as unknown as T;
    }
    logger.info(`Post not found: ${id}`);
    throw new BfErrorNodeNotFound();
  }

  static override async query<
    TProps extends BfNodeBaseProps,
    T extends BfNodeBase<TProps>,
  >(): Promise<Array<T>> {
    const postsCache = await this.getPostsCache();
    return Array.from(postsCache.values()) as unknown as Array<T>;
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
