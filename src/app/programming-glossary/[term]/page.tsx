import GlossaryPage, { glossaryTermMetadata, glossaryTermParams } from "@/components/glossary/GlossaryPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return glossaryTermParams("programming-glossary");
}

export async function generateMetadata({ params }: PageProps<"/programming-glossary/[term]">) {
  return glossaryTermMetadata("programming-glossary", (await params).term);
}

export default async function TermPage({ params }: PageProps<"/programming-glossary/[term]">) {
  return <GlossaryPage slug="programming-glossary" term={(await params).term} />;
}
