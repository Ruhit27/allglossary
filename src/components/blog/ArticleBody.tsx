import Link from "next/link";
import type { ReactNode } from "react";
import { termHref } from "@/lib/articles";
import { isTable, isWebsite, LINK_CLASS, renderInline, Table } from "@/lib/glossary-content";

/** Inline text in an Article, where a link goes to a Term's page or another website. */
function linked(text: string): ReactNode[] {
  return renderInline(text, (label, target, key) =>
    isWebsite(target) ? (
      <a key={key} href={target} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
        {label}
      </a>
    ) : (
      <Link key={key} href={termHref(target)} className={LINK_CLASS}>
        {label}
      </Link>
    ),
  );
}

/** Renders an Article's body: paragraphs, "##"/"###" headings, "-" lists, and tables. */
export default function ArticleBody({ body }: { body: string }) {
  const nodes = body.split(/\n{2,}/).flatMap((block, i) => {
    if (block.startsWith("### "))
      return <h3 key={i} className="mt-4 text-xl font-bold tracking-tight">{linked(block.slice(4))}</h3>;
    if (block.startsWith("## "))
      return <h2 key={i} className="mt-6 text-2xl font-extrabold tracking-tighter">{linked(block.slice(3))}</h2>;
    const lines = block.split("\n");
    if (isTable(lines)) return <Table key={i} lines={lines} renderCell={linked} />;
    // A list may follow a lead-in line with no blank line between them.
    const firstItem = lines.findIndex((l) => l.startsWith("- "));
    const lead = firstItem === -1 ? lines : lines.slice(0, firstItem);
    const items = firstItem === -1 ? [] : lines.slice(firstItem);
    return [
      lead.length > 0 && <p key={`${i}p`}>{linked(lead.join(" "))}</p>,
      items.length > 0 && (
        <ul key={`${i}ul`} className="flex list-disc flex-col gap-2 pl-5">
          {items.map((l, k) => <li key={k}>{linked(l.replace(/^- /, ""))}</li>)}
        </ul>
      ),
    ];
  });
  return <div className="flex flex-col gap-4 text-[17px] leading-relaxed">{nodes}</div>;
}
