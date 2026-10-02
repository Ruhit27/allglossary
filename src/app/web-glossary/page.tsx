import GlossaryPage, { glossaryMetadata } from "@/components/glossary/GlossaryPage";

export const metadata = glossaryMetadata("web-glossary");

export default function WebGlossaryPage() {
  return <GlossaryPage slug="web-glossary" />;
}
