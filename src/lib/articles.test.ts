import { mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { getArticles } from "./articles";
import { GLOSSARIES } from "./glossaries";

let dir: string;

function blog(files: Record<string, string>) {
  dir = mkdtempSync(join(tmpdir(), "blog-"));
  for (const [name, text] of Object.entries(files)) writeFileSync(join(dir, name), text);
  return dir;
}

afterEach(() => rmSync(dir, { recursive: true, force: true }));

describe("getArticles", () => {
  it("loads a published Article from its file", () => {
    const [article] = getArticles(
      blog({
        "What a token is.md": "---\ndescription: Tokens, plainly.\npublished: 2026-09-01\n---\n\nA body.\n",
      }),
    );
    expect(article).toMatchObject({
      slug: "what-a-token-is",
      title: "What a token is",
      description: "Tokens, plainly.",
      published: "2026-09-01",
      updated: undefined,
      body: "A body.",
    });
  });

  it("leaves out drafts and lists the newest first", () => {
    const titles = getArticles(
      blog({
        "Old.md": "---\ndescription: d\npublished: 2026-01-05\n---\nx",
        "New.md": "---\ndescription: d\npublished: 2026-03-10\n---\nx",
        "Middle.md": "---\ndescription: d\npublished: 2026-02-20\n---\nx",
        "Unfinished.md": "---\ndescription: d\npublished: 2026-04-01\ndraft: true\n---\nx",
      }),
    ).map((a) => a.title);
    expect(titles).toEqual(["New", "Middle", "Old"]);
  });

  it("tags an Article with each Glossary whose Terms it links to", () => {
    const [article] = getArticles(
      blog({
        "Tagged.md":
          "---\ndescription: d\npublished: 2026-01-05\n---\n" +
          "A [function](../programming-glossary/Function.md) and an [agent](../ai-glossary/Agent.md), " +
          "then [AFK](../ai-glossary/AFK.md) again.",
      }),
    );
    expect(article.glossaries).toEqual(["ai-glossary", "programming-glossary"]);
  });

  const hidden = GLOSSARIES.find((g) => g.hidden)!.slug;
  const hiddenTerm = readdirSync(join(process.cwd(), "src/content", hidden)).find((f) => f !== "_curriculum.md")!;

  it.each([
    ["a hidden Glossary", `../${hidden}/${encodeURIComponent(hiddenTerm.slice(0, -3))}.md`, "hidden"],
    ["an unknown Glossary", "../cooking-glossary/Salt.md", "unknown glossary"],
    ["a Term that doesn't exist", "../ai-glossary/Not%20a%20term.md", "unknown term"],
    ["something that isn't a Term", "./Another%20article.md", "not a Term"],
    ["a website", "https://example.com", "not a Term"],
    ["a part of a Term", "../ai-glossary/Agent.md#usage", "not a Term"],
  ])("fails when an Article links to %s", (_, target, message) => {
    const dir = blog({ "Broken.md": `---\ndescription: d\npublished: 2026-01-05\n---\nSee [this](${target}).` });
    expect(() => getArticles(dir)).toThrow(message);
  });

  it.each([
    ["no description", "published: 2026-01-05", "missing description"],
    ["no published date", "description: d", "published"],
    ["a published date that isn't YYYY-MM-DD", "description: d\npublished: 5 Jan 2026", "published"],
    ["an impossible published date", "description: d\npublished: 2026-02-30", "published"],
    ["an updated date that isn't YYYY-MM-DD", "description: d\npublished: 2026-01-05\nupdated: soon", "updated"],
    ["a draft flag that isn't true", "description: d\npublished: 2026-01-05\ndraft: yes", "draft"],
    ["an updated date before it was published", "description: d\npublished: 2026-01-05\nupdated: 2025-12-31", "before"],
  ])("fails when an Article has %s", (_, frontmatter, message) => {
    const dir = blog({ "Bad.md": `---\n${frontmatter}\n---\nx` });
    expect(() => getArticles(dir)).toThrow(message);
  });

  it("fails when two Articles would share a URL", () => {
    const dir = blog({
      "What a token is.md": "---\ndescription: d\npublished: 2026-01-05\n---\nx",
      "What a token is?.md": "---\ndescription: d\npublished: 2026-01-06\n---\nx",
    });
    expect(() => getArticles(dir)).toThrow("what-a-token-is");
  });

  it("loads every Article in the repo, drafts included", () => {
    expect(() => getArticles()).not.toThrow();
  });
});
