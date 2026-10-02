import GlossaryPage, { glossaryTermMetadata, glossaryTermParams } from "@/components/glossary/GlossaryPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return glossaryTermParams("web-glossary");
}

export async function generateMetadata({ params }: PageProps<"/web-glossary/[term]">) {
  return glossaryTermMetadata("web-glossary", (await params).term);
}

export default async function TermPage({ params }: PageProps<"/web-glossary/[term]">) {
  return <GlossaryPage slug="web-glossary" term={(await params).term} />;
}
