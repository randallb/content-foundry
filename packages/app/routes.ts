import { PageUIDemo } from "packages/app/pages/PageUIDemo.tsx";

import entrypointBlogModule from "packages/app/__generated__/__isograph/Query/EntrypointBlog/entrypoint.ts";
import entrypointBlogPostModule from "packages/app/__generated__/__isograph/Query/EntrypointBlogPost/entrypoint.ts";
import entrypointContentFoundryAppModule from "packages/app/__generated__/__isograph/Query/EntrypointContentFoundryApp/entrypoint.ts";
import type { IsographEntrypoint } from "@isograph/react";
import { iso } from "packages/app/__generated__/__isograph/iso.ts";

/** hack until Patryck does some stuff */
function isoEntrypoint(
  entrypointName: string,
): IsographEntrypoint<any, RouteEntrypoint> {
  const entrypoints = {
    "entrypoint Query.EntrypointBlog": entrypointBlogModule,
    "entrypoint Query.EntrypointBlogPost": entrypointBlogPostModule,
    "entrypoint Query.EntrypointContentFoundryApp": entrypointContentFoundryAppModule,
  };
  // @ts-expect-error this is a temporary thing
  return entrypoints[entrypointName];
}

function fileHandlerFactory(url: string) {
  return function FileHandler() {
    return url;
  };
}

export type ComponentWithHeader = React.ComponentType<unknown> & {
  HeaderComponent?: React.ComponentType<unknown>;
};

export type RouteGuts = {
  Component: ComponentWithHeader;
};

export type RouteMap = Map<string, RouteGuts>;

export const appRoutes: RouteMap = new Map([
  ["/ui", { Component: PageUIDemo }],
]);

export type IsographRoute = IsographEntrypoint<any, RouteEntrypoint>;

export type RouteEntrypoint = {
  Body: React.FC;
  title: string;
};

iso(`entrypoint Query.EntrypointBlog`);
const entrypointBlog = isoEntrypoint(`entrypoint Query.EntrypointBlog`);
iso(`entrypoint Query.EntrypointBlogPost`);
const entrypointBlogPost = isoEntrypoint(`entrypoint Query.EntrypointBlogPost`);
iso(`entrypoint Query.EntrypointContentFoundryApp`);
const entrypointContentFoundryApp = isoEntrypoint(`entrypoint Query.EntrypointContentFoundryApp`);

// const appEntrypoint = iso(`entrypoint Query.AppHome`) ?? appEntrypointModule;

export const isographAppRoutes = new Map<string, IsographRoute>([
  ["/", entrypointContentFoundryApp],
  ["/blog/:slug", entrypointBlogPost],
  ["/blog", entrypointBlog],
]);

export const toolRoutes: RouteMap = new Map([
  ["/tools/jupyter-notebook", {
    Component: fileHandlerFactory("jupyter-notebook-open"),
  }],
  ["/tools/jupyter-console", {
    Component: fileHandlerFactory("jupyter-console-open"),
  }],
  ["/tools/sapling", {
    Component: fileHandlerFactory("sapling-open"),
  }],
]);
