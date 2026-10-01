import type { MetadataRoute } from "next";
import { GLOSSARIES } from "@/lib/glossaries";
import { getGlossary } from "@/lib/glossary";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), priority: 1 },
    ...GLOSSARIES.flatMap((g) => [
      { url: absoluteUrl(`/${g.slug}`), priority: 0.9 },
      ...getGlossary(g.slug).terms.map((t) => ({ url: absoluteUrl(`/${g.slug}/${t.slug}`), priority: 0.7 })),
    ]),
    { url: absoluteUrl("/stats"), priority: 0.4 },
    { url: absoluteUrl("/sponsor"), priority: 0.3 },
  ];
}
