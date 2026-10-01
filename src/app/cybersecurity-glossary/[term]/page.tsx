import GlossaryPage, { glossaryTermMetadata, glossaryTermParams } from "@/components/glossary/GlossaryPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return glossaryTermParams("cybersecurity-glossary");
}

export async function generateMetadata({ params }: PageProps<"/cybersecurity-glossary/[term]">) {
  return glossaryTermMetadata("cybersecurity-glossary", (await params).term);
}

export default async function TermPage({ params }: PageProps<"/cybersecurity-glossary/[term]">) {
  return <GlossaryPage slug="cybersecurity-glossary" term={(await params).term} />;
}
