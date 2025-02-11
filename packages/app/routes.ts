import { PageUIDemo } from "packages/app/pages/PageUIDemo.tsx";

import entrypointBlog from "packages/app/__generated__/__isograph/Query/EntrypointBlog/entrypoint.ts";
import entrypointBlogPost from "packages/app/__generated__/__isograph/Query/EntrypointBlogPost/entrypoint.ts";
import entrypointApp from "packages/app/__generated__/__isograph/Query/EntrypointContentFoundryApp/entrypoint.ts";
import type { IsographEntrypoint } from "@isograph/react";
import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { FinalCutProXML } from "packages/tools/FinalCutProXML.tsx";

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
  ["/fcp", { Component: FinalCutProXML }],
]);

export type IsographRoute = IsographEntrypoint<any, RouteEntrypoint>;

export type RouteEntrypoint = {
  Body: React.FC;
  title: string;
};

iso(`entrypoint Query.EntrypointBlog`);
iso(`entrypoint Query.EntrypointBlogPost`);
iso(`entrypoint Query.EntrypointContentFoundryApp`);

export const isographAppRoutes = new Map<string, IsographRoute>([
  ["/", entrypointApp],
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
