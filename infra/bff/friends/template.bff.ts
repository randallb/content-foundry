import { register } from "infra/bff/bff.ts";
import { getLogger } from "packages/logger.ts";
import * as path from "@std/path";

const logger = getLogger(import.meta);

/**
 * Looks in `startDir` for a file named `__TEMPLATE__{extension}`, and if not found,
 * keeps moving one directory up until it either finds the file or reaches the top of
 * the drive (when `path.dirname(currentDir) === currentDir`).
 */
async function findTemplateFile(startDir: string, extension: string): Promise<string | null> {
  // Always deal with absolute paths to avoid `.`, `..`, or symlinks messing us up
  let currentDir = path.resolve(startDir);

  while (true) {
    // Attempt the template in the current directory
    const candidate = path.join(currentDir, `__TEMPLATE__${extension}`);
    try {
      // If stat succeeds, we found the template
      await Deno.stat(candidate);
      return candidate;
    } catch {
      // If it fails, no file here, so move up
      const parent = path.dirname(currentDir);
      if (parent === currentDir) {
        // Once parent == currentDir, we’re at the root—stop searching
        break;
      }
      currentDir = parent;
    }
  }
  return null;
}

register(
  "template",
  "Create a new file from a template, searching up the directory tree for __TEMPLATE__",
  async (args: string[]) => {
    if (args.length < 1) {
      logger.error("Usage: bff template <filename>");
      return 1;
    }

    const filename = args[0];
    const extension = path.extname(filename);
    const cwd = Deno.cwd();

    // Search upward for __TEMPLATE__{extension}
    const templatePath = await findTemplateFile(cwd, extension);
    let templateContent = "";

    if (templatePath) {
      // Found a matching template up the tree
      templateContent = await Deno.readTextFile(templatePath);
      logger.info(`Using template from: ${templatePath}`);
    } else {
      // No template found anywhere above—create a local empty one
      const localTemplate = path.join(cwd, `__TEMPLATE__${extension}`);
      await Deno.writeTextFile(localTemplate, "");
      logger.info(`No template found. Created empty template at: ${localTemplate}`);
    }

    // Write out the new file from the template content (which may be empty if brand-new)
    const newFilePath = path.join(cwd, filename);
    await Deno.writeTextFile(newFilePath, templateContent);

    logger.info(`Created ${filename} ${templatePath ? "from a found template" : "(blank)"}!`);
    return 0;
  },
);