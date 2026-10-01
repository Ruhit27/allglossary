import GlossaryPage, { glossaryTermMetadata, glossaryTermParams } from "@/components/glossary/GlossaryPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return glossaryTermParams("ai-glossary");
}

export async function generateMetadata({ params }: PageProps<"/ai-glossary/[term]">) {
  return glossaryTermMetadata("ai-glossary", (await params).term);
}

export default async function TermPage({ params }: PageProps<"/ai-glossary/[term]">) {
  return <GlossaryPage slug="ai-glossary" term={(await params).term} />;
}
