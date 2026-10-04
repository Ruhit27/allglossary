import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleBody from "@/components/blog/ArticleBody";
import JsonLd from "@/components/JsonLd";
import SiteHeader from "@/components/SiteHeader";
import { formatDate, getArticles } from "@/lib/articles";
import { glossaryConfig } from "@/lib/glossaries";
import { absoluteUrl, pageMetadata, SITE_NAME } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

function findArticle(slug: string) {
  const article = getArticles().find((a) => a.slug === slug);
  if (!article) notFound();
  return article;
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const article = findArticle((await params).slug);
  return pageMetadata({
    title: `${article.title} — ${SITE_NAME}`,
    description: article.description,
    path: `/blog/${article.slug}`,
    type: "article",
  });
}

const label = "font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-black/55";

export default async function ArticlePage({ params }: PageProps<"/blog/[slug]">) {
  const article = findArticle((await params).slug);
  const url = absoluteUrl(`/blog/${article.slug}`);
  const crumbs = [
    { name: SITE_NAME, url: absoluteUrl("/") },
    { name: "Blog", url: absoluteUrl("/blog") },
    { name: article.title, url },
  ];
  return (
    <main id="main-content" className="flex-1">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: article.title,
              description: article.description,
              url,
              datePublished: article.published,
              dateModified: article.updated ?? article.published,
              publisher: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.url })),
            },
          ],
        }}
      />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
        <SiteHeader />
        <Link href="/blog" className={`${label} mt-10 inline-block hover:text-black`}>
          ← Blog
        </Link>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tighter sm:text-5xl">{article.title}</h1>
        <p className="mt-4 text-lg text-black/70">{article.description}</p>
        <p className={`${label} mt-6`}>
          <time dateTime={article.published}>{formatDate(article.published)}</time>
          {article.updated && (
            <>
              {" · Updated "}
              <time dateTime={article.updated}>{formatDate(article.updated)}</time>
            </>
          )}
        </p>
        {article.glossaries.length > 0 && (
          <ul aria-label="Glossaries" className="mt-4 flex flex-wrap gap-2">
            {article.glossaries.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/${slug}`}
                  className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] rounded-full border border-black/25 px-3 py-1.5 text-black/60 transition-colors hover:text-black"
                >
                  {glossaryConfig(slug).card.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-10">
          <ArticleBody body={article.body} />
        </div>
      </article>
    </main>
  );
}
