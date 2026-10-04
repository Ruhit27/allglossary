"use client";

import Link from "next/link";
import { useState } from "react";
import { clsx } from "clsx";

export type ArticleListItem = {
  slug: string;
  title: string;
  description: string;
  date: string;
  /** Glossary slugs. */
  glossaries: string[];
};

const label = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";

/** The Blog's Articles, filterable by the Glossaries they link into. */
export default function ArticleList({
  articles,
  glossaries,
}: {
  articles: ArticleListItem[];
  /** Every Glossary at least one Article is tagged with, in site order. */
  glossaries: { slug: string; title: string }[];
}) {
  const [filter, setFilter] = useState<string | null>(null);
  const shown = filter ? articles.filter((a) => a.glossaries.includes(filter)) : articles;
  const titles = new Map(glossaries.map((g) => [g.slug, g.title]));

  if (!articles.length) return <p className="mt-12 text-black/60">No articles yet. Check back soon.</p>;

  return (
    <>
      {glossaries.length > 1 && (
        <div role="group" aria-label="Filter by glossary" className="mt-10 flex flex-wrap gap-2">
          {[{ slug: null, title: "All" }, ...glossaries].map((g) => (
            <button
              key={g.slug ?? "all"}
              type="button"
              aria-pressed={filter === g.slug}
              onClick={() => setFilter(g.slug)}
              className={clsx(
                label,
                "cursor-pointer rounded-full border px-3 py-1.5 transition-colors",
                filter === g.slug ? "border-black bg-black text-white" : "border-black/25 text-black/60 hover:text-black",
              )}
            >
              {g.title}
            </button>
          ))}
        </div>
      )}
      <ul className="mt-10 flex flex-col divide-y divide-black/10 border-y border-black/10">
        {shown.map((a) => (
          <li key={a.slug}>
            <Link href={`/blog/${a.slug}`} className="group block py-6">
              <p className={clsx(label, "text-black/50")}>
                {a.date}
                {a.glossaries.map((g) => ` · ${titles.get(g)}`).join("")}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tighter group-hover:underline group-hover:underline-offset-4">
                {a.title}
              </h2>
              <p className="mt-2 text-black/70">{a.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
