import GlossaryPage, { glossaryTermMetadata, glossaryTermParams } from "@/components/glossary/GlossaryPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return glossaryTermParams("nutrition-glossary");
}

export async function generateMetadata({ params }: PageProps<"/nutrition-glossary/[term]">) {
  return glossaryTermMetadata("nutrition-glossary", (await params).term);
}

export default async function TermPage({ params }: PageProps<"/nutrition-glossary/[term]">) {
  return <GlossaryPage slug="nutrition-glossary" term={(await params).term} />;
}
