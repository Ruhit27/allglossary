import "server-only";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { isWebsite } from "@/lib/glossary-content";
import { GLOSSARIES } from "@/lib/glossaries";
import { termSlug } from "@/lib/term-slug";

export type Article = {
  slug: string;
  title: string;
  description: string;
  /** YYYY-MM-DD. */
  published: string;
  /** YYYY-MM-DD, set when the Article was revised after publishing. */
  updated?: string;
  draft: boolean;
  /** Slugs of the Glossaries whose Terms the Article links to, in site order. */
  glossaries: string[];
  body: string;
};

const CONTENT = join(process.cwd(), "src/content");
const BLOG = join(CONTENT, "blog");
const LINK_RE = /\[[^\]]+\]\(([^)]+)\)/g;
/** A link to a Term: ../<glossary>/<Term title>.md, with the title URL-encoded. */
const TERM_TARGET_RE = /^\.\.\/([^/]+)\/([^/]+)\.md$/;

/**
 * The page a Term link goes to, from its decoded target without ".md",
 * as `renderInline` passes it: "../ai-glossary/Token" → "/ai-glossary/token".
 */
export function termHref(target: string) {
  const [, glossary, title] = target.split("/");
  return `/${glossary}/${termSlug(title)}`;
}

/** Returns `value` if it's a real calendar date written YYYY-MM-DD. */
function checkDate(file: string, name: string, value: string) {
  const d = new Date(`${value}T00:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || isNaN(d.getTime()) || d.toISOString().slice(0, 10) !== value)
    throw new Error(`${file}: ${name} must be a date written YYYY-MM-DD, got "${value}"`);
  return value;
}

/** Checks one link target and returns the slug of the Glossary it points into. */
function linkedGlossary(file: string, target: string) {
  const m = target.match(TERM_TARGET_RE);
  if (!m) throw new Error(`${file} links to "${target}", which is not a Term`);
  const [, slug, title] = m;
  const config = GLOSSARIES.find((g) => g.slug === slug);
  if (!config) throw new Error(`${file} links to unknown glossary "${slug}"`);
  if (config.hidden) throw new Error(`${file} links into "${slug}", which is hidden`);
  const term = decodeURIComponent(title);
  if (term.startsWith("_") || !existsSync(join(CONTENT, slug, `${term}.md`)))
    throw new Error(`${file} links to unknown term "${term}" in "${slug}"`);
  return slug;
}

function parseArticle(dir: string, file: string): Article {
  const title = file.slice(0, -3);
  const text = readFileSync(join(dir, file), "utf8");
  const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`${file}: missing frontmatter`);
  const field = (name: string) => match[1].match(new RegExp(`^${name}:\\s*(.+)$`, "m"))?.[1].trim();
  const description = field("description");
  if (!description) throw new Error(`${file}: missing description`);
  const publishedRaw = field("published");
  if (!publishedRaw) throw new Error(`${file}: missing published date`);
  const published = checkDate(file, "published", publishedRaw);
  const updatedRaw = field("updated");
  const updated = updatedRaw ? checkDate(file, "updated", updatedRaw) : undefined;
  if (updated && updated < published) throw new Error(`${file}: updated ${updated} is before published ${published}`);
  const draft = field("draft");
  if (draft !== undefined && draft !== "true") throw new Error(`${file}: draft must be "true" or left out, got "${draft}"`);
  const body = match[2].trim();
  const linked = new Set(
    [...body.matchAll(LINK_RE)]
      .map((m) => m[1])
      .filter((target) => !isWebsite(target))
      .map((target) => linkedGlossary(file, target)),
  );
  return {
    slug: termSlug(title),
    title,
    description,
    published,
    updated,
    draft: draft === "true",
    glossaries: GLOSSARIES.map((g) => g.slug).filter((slug) => linked.has(slug)),
    body,
  };
}

/**
 * The published Articles in src/content/blog, newest first. Drafts are left
 * out but still checked, so a broken draft fails the build too.
 */
export function getArticles(dir = BLOG): Article[] {
  if (!existsSync(dir)) return [];
  const all = readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parseArticle(dir, f));
  const seen = new Map<string, string>();
  for (const a of all) {
    const other = seen.get(a.slug);
    if (other) throw new Error(`"${other}" and "${a.title}" would share the URL /blog/${a.slug}`);
    seen.set(a.slug, a.title);
  }
  return all
    .filter((a) => !a.draft)
    .sort((a, b) => b.published.localeCompare(a.published));
}

/** "2026-10-04" → "October 4, 2026". */
export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
