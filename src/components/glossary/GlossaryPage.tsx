import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { glossaryConfig } from "@/lib/glossaries";
import { getGlossary } from "@/lib/glossary";
import { absoluteUrl, pageMetadata, SITE_NAME } from "@/lib/seo";
import GlossaryExplorer from "./GlossaryExplorer";

export function glossaryMetadata(slug: string): Metadata {
  const config = glossaryConfig(slug);
  return pageMetadata({
    title: `${config.name} — ${SITE_NAME}`,
    description: config.card.description,
    path: `/${slug}`,
  });
}

/** Every term page under a glossary, prerendered at build time. */
export function glossaryTermParams(slug: string) {
  if (glossaryConfig(slug).hidden) return [];
  return getGlossary(slug).terms.map((t) => ({ term: t.slug }));
}

export function glossaryTermMetadata(slug: string, termSlug: string): Metadata {
  const term = getGlossary(slug).terms.find((t) => t.slug === termSlug);
  if (!term || glossaryConfig(slug).hidden) notFound();
  return pageMetadata({
    title: `${term.title} — ${glossaryConfig(slug).name}`,
    description: term.description,
    path: `/${slug}/${term.slug}`,
    type: "article",
  });
}

function structuredData(slug: string, termSlug?: string) {
  const config = glossaryConfig(slug);
  const data = getGlossary(slug);
  const setUrl = absoluteUrl(`/${slug}`);
  const termSet = { "@type": "DefinedTermSet", "@id": setUrl, name: config.name, url: setUrl };
  const term = termSlug ? data.terms.find((t) => t.slug === termSlug) : undefined;
  const crumbs = [
    { name: SITE_NAME, url: absoluteUrl("/") },
    { name: config.name, url: setUrl },
    ...(term ? [{ name: term.title, url: absoluteUrl(`/${slug}/${term.slug}`) }] : []),
  ];
  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.url })),
  };
  const main = term
    ? {
        "@type": "DefinedTerm",
        name: term.title,
        description: term.description,
        url: absoluteUrl(`/${slug}/${term.slug}`),
        inDefinedTermSet: termSet,
      }
    : {
        ...termSet,
        description: config.card.description,
        hasDefinedTerm: data.terms.map((t) => ({
          "@type": "DefinedTerm",
          name: t.title,
          description: t.description,
          url: absoluteUrl(`/${slug}/${t.slug}`),
        })),
      };
  return { "@context": "https://schema.org", "@graph": [main, breadcrumb] };
}

/** A glossary's explorer; with `term`, it opens on that term's entry. */
export default function GlossaryPage({ slug, term }: { slug: string; term?: string }) {
  if (glossaryConfig(slug).hidden) notFound();
  const data = getGlossary(slug);
  if (term && !data.terms.some((t) => t.slug === term)) notFound();
  return (
    <main id="main-content" className="flex-1">
      <JsonLd data={structuredData(slug, term)} />
      <GlossaryExplorer data={data} config={glossaryConfig(slug)} initialTerm={term} />
    </main>
  );
}
