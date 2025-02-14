import { assertEquals, assertStringIncludes } from "@std/assert";
import { afterEach, beforeEach, describe, it } from "@std/testing/bdd";
import { join } from "@std/path";
import { ensureDir, emptyDir } from "@std/fs";

const TEST_DIR = "test_content";
const TEST_BLOG_DIR = join(TEST_DIR, "blog");

describe("contentLint", () => {
  beforeEach(async () => {
    await ensureDir(TEST_BLOG_DIR);
  });

  afterEach(async () => {
    await emptyDir(TEST_DIR);
  });

  it("should identify missing front matter", async () => {
    const testFile = join(TEST_BLOG_DIR, "test.md");
    await Deno.writeTextFile(testFile, "# Test Content\n\nThis is a test.");

    const { contentLint } = await import("../contentLint.bff.ts");
    const result = await contentLint([], TEST_BLOG_DIR);

    assertEquals(result, 1);
  });

  it("should identify missing required fields", async () => {
    const testFile = join(TEST_BLOG_DIR, "test.md");
    await Deno.writeTextFile(
      testFile,
      "---\ntitle: Test\n---\n# Test Content\n\nThis is a test."
    );

    const { contentLint } = await import("../contentLint.bff.ts");
    const result = await contentLint([], TEST_BLOG_DIR);

    assertEquals(result, 1);
  });

  it("should pass valid content", async () => {
    const testFile = join(TEST_BLOG_DIR, "test.md");
    await Deno.writeTextFile(
      testFile,
      `---
title: "Test"
author: "Test Author"
summary: "Test Summary"
cta: "Read More"
---
# Test Content

This is a test.`
    );

    const { contentLint } = await import("../contentLint.bff.ts");
    const result = await contentLint([], TEST_BLOG_DIR);

    assertEquals(result, 0);
  });

  it("should fix missing front matter with --fix flag", async () => {
    const testFile = join(TEST_BLOG_DIR, "test.md");
    const initialContent = "# Test Content\n\nThis is a test.";
    await Deno.writeTextFile(testFile, initialContent);

    const { contentLint } = await import("../contentLint.bff.ts");
    const result = await contentLint(["--fix"], TEST_BLOG_DIR);

    assertEquals(result, 0);

    const fixedContent = await Deno.readTextFile(testFile);
    assertStringIncludes(fixedContent, "---");
    assertStringIncludes(fixedContent, "title:");
    assertStringIncludes(fixedContent, "author:");
    assertStringIncludes(fixedContent, "summary:");
    assertStringIncludes(fixedContent, "cta:");
    assertStringIncludes(fixedContent, initialContent);
  });

  it("should fix missing required fields with --fix flag", async () => {
    const testFile = join(TEST_BLOG_DIR, "test.md");
    await Deno.writeTextFile(
      testFile,
      "---\ntitle: Test\n---\n# Test Content\n\nThis is a test."
    );

    const { contentLint } = await import("../contentLint.bff.ts");
    const result = await contentLint(["--fix"], TEST_BLOG_DIR);

    assertEquals(result, 0);

    const fixedContent = await Deno.readTextFile(testFile);
    assertStringIncludes(fixedContent, "author:");
    assertStringIncludes(fixedContent, "summary:");
    assertStringIncludes(fixedContent, "cta:");
  });
});