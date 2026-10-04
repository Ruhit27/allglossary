import type { Metadata } from "next";
import ArticleList from "@/components/blog/ArticleList";
import JsonLd from "@/components/JsonLd";
import SiteHeader from "@/components/SiteHeader";
import { formatDate, getArticles } from "@/lib/articles";
import { LISTED_GLOSSARIES } from "@/lib/glossaries";
import { absoluteUrl, pageMetadata, SITE_NAME } from "@/lib/seo";

const DESCRIPTION = "Long-form explainers in plain English, linked to the terms in every glossary.";

export const metadata: Metadata = pageMetadata({
  title: `Blog — ${SITE_NAME}`,
  description: DESCRIPTION,
  path: "/blog",
});

export default function BlogPage() {
  const articles = getArticles();
  const tagged = new Set(articles.flatMap((a) => a.glossaries));
  return (
    <main id="main-content" className="flex-1">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${SITE_NAME} Blog`,
          url: absoluteUrl("/blog"),
          description: DESCRIPTION,
          blogPost: articles.map((a) => ({
            "@type": "BlogPosting",
            headline: a.title,
            url: absoluteUrl(`/blog/${a.slug}`),
            datePublished: a.published,
          })),
        }}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
        <SiteHeader />
        <h1 className="mt-10 font-mono text-3xl font-semibold uppercase tracking-tight sm:text-5xl">Blog</h1>
        <p className="mt-4 max-w-xl text-base text-black/70 sm:text-lg">{DESCRIPTION}</p>
        <ArticleList
          articles={articles.map((a) => ({
            slug: a.slug,
            title: a.title,
            description: a.description,
            date: formatDate(a.published),
            glossaries: a.glossaries,
          }))}
          glossaries={LISTED_GLOSSARIES.filter((g) => tagged.has(g.slug)).map((g) => ({
            slug: g.slug,
            title: g.card.title,
          }))}
        />
      </div>
    </main>
  );
}
