import GlossaryPage, { glossaryTermMetadata, glossaryTermParams } from "@/components/glossary/GlossaryPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return glossaryTermParams("business-glossary");
}

export async function generateMetadata({ params }: PageProps<"/business-glossary/[term]">) {
  return glossaryTermMetadata("business-glossary", (await params).term);
}

export default async function TermPage({ params }: PageProps<"/business-glossary/[term]">) {
  return <GlossaryPage slug="business-glossary" term={(await params).term} />;
}
