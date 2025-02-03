#! /usr/bin/env -S deno run -A

import * as esbuild from "esbuild";
import { denoPlugins } from "@luca/esbuild-deno-loader";

import { getLogger } from "packages/logger.ts";
const logger = getLogger(import.meta);

const denoFileResolver = {
  name: "deno-file-resolver",
  setup(build: esbuild.PluginBuild) {
    build.onResolve({ filter: /\.(ts|js|tsx|jsx)$/ }, async (args) => {
      if (args.kind === "entry-point") {
        return;
      }
      const path = import.meta.resolve(args.path).split("file://")[1];
      const fileExists = await Deno.lstat(path).then(() => true).catch(() =>
        false
      );
      if (fileExists) {
        return {
          path,
        };
      }
      return null;
    });
  },
};

// const slimRelay = {
//   name: "slim-relay",
//   setup(build: esbuild.PluginBuild) {
//     build.onLoad({ filter: /\.(ts|js|tsx|jsx)$/ }, async (args) => {
//       const source = await Deno.readTextFile(args.path);
//       const graphqlTags = extractGraphqlTags(source);
//       let contents = source;
//       if (graphqlTags.length > 0) {
//         const relativeLocation =
//           args.path.split(Deno.env.get("BF_PATH") ?? "")[1];
//         const rootDirectory = relativeLocation.split("/")[1];

//         contents = await replaceTagsWithImports(
//           source,
//           graphqlTags,
//           rootDirectory,
//         );
//       }
//       const ext = args.path.match(/[^.]+$/);
//       const loader = (ext ? ext[0] : "ts") as esbuild.Loader;

//       logger.trace(`Loading local module: ${args.path}`);
//       return { contents, loader };
//     });
//   },
// };

const defaultOptions: esbuild.BuildOptions = {
  jsx: "automatic",
  minify: Deno.env.get("BF_ENV") === "PRODUCTION",
  sourcemap: "inline" as const,
  sourceRoot: Deno.env.get("BF_PATH"),
  write: true,
  bundle: true,
  outdir: "static/build",
  entryPoints: [
    "packages/app/ClientRoot.tsx",
  ],
  format: "esm",
};

export async function build(
  buildOptions: esbuild.BuildOptions = defaultOptions,
) {
  logger.info("Building...");
  const output = await esbuild.build({
    plugins: [
      ...denoPlugins(),
      // denoPlugin,
      // denoFileResolver,
      // slimRelay,
    ],
    treeShaking: true,
    ...defaultOptions,
    ...buildOptions,
  });

  esbuild.stop();
  logger.info("Building complete!!!");
  return output;
}

if (import.meta.main) {
  try {
    await Deno.mkdir("build", { recursive: true });
  } catch (e) {
    if (e.name !== "AlreadyExists") {
      throw e;
    }
  }
  try {
    await build();
  } catch (e) {
    logger.warn(
      // @ts-expect-error idk
      `Biscuts... Failed initial build: ${e.message}`,
    );

    throw e;
  }
}
