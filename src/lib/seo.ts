import type { Metadata } from "next";

export const SITE_URL = "https://www.allglossary.xyz";
export const SITE_NAME = "allglossary.xyz";

/** The shared social card, served by src/app/og.png/route.tsx. */
const OG_IMAGE = { url: "/og.png", width: 1200, height: 630, alt: "allglossary.xyz: glossaries in plain English" };

/**
 * Title, description, canonical URL, Open Graph, and X card for one page.
 * Child segments replace `openGraph` and `twitter` wholesale, so every page
 * builds the full set here instead of relying on the root layout.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  /** Path from the site root, such as "/ai-glossary". */
  path: string;
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
