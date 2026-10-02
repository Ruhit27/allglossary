import GlossaryPage, { glossaryMetadata } from "@/components/glossary/GlossaryPage";

export const metadata = glossaryMetadata("programming-glossary");

export default function ProgrammingGlossaryPage() {
  return <GlossaryPage slug="programming-glossary" />;
}
