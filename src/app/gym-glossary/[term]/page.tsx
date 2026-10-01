import GlossaryPage, { glossaryTermMetadata, glossaryTermParams } from "@/components/glossary/GlossaryPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return glossaryTermParams("gym-glossary");
}

export async function generateMetadata({ params }: PageProps<"/gym-glossary/[term]">) {
  return glossaryTermMetadata("gym-glossary", (await params).term);
}

export default async function TermPage({ params }: PageProps<"/gym-glossary/[term]">) {
  return <GlossaryPage slug="gym-glossary" term={(await params).term} />;
}
