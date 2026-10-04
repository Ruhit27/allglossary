import type { ReactNode } from "react";
import { termSlug } from "@/lib/term-slug";

/** A link to another website: https only, with no spaces or ")" in the address. */
const WEBSITE = String.raw`https:\/\/[^)\s]+`;
const WEBSITE_RE = new RegExp(`^${WEBSITE}$`);
const INLINE_RE = new RegExp(
  String.raw`\[([^\]]+)\]\((\.\.?\/[^)]+\.md|${WEBSITE})\)|` +
    /\*\*([^*]+)\*\*|`([^`]+)`|(?<![\w])_([^_]+)_(?![\w])|(?<![\w*])\*([^*]+)\*(?![\w*])/.source,
  "g",
);

/** Whether a link target is another website rather than a Term. */
export const isWebsite = (target: string) => WEBSITE_RE.test(target);

export const LINK_CLASS = "cursor-pointer underline decoration-dotted underline-offset-2 hover:decoration-solid";

/**
 * Renders bold, code, italics, and links. `link` gets each link's label and
 * target: a `.md` target decoded without ".md", such as "./Token" or
 * "../ai-glossary/Token", or an https URL as written.
 */
export function renderInline(
  text: string,
  link: (label: string, target: string, key: number) => ReactNode,
): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(INLINE_RE)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const key = m.index;
    if (m[1] !== undefined)
      out.push(link(m[1], isWebsite(m[2]) ? m[2] : decodeURIComponent(m[2].slice(0, -3)), key));
    else if (m[3] !== undefined) out.push(<strong key={key}>{renderInline(m[3], link)}</strong>);
    else if (m[4] !== undefined)
      out.push(
        <code key={key} className="rounded bg-black/[0.06] px-1 py-0.5 text-[0.9em]">
          {m[4]}
        </code>,
      );
    else out.push(<em key={key}>{renderInline(m[5] ?? m[6], link)}</em>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/** Inline text in a Term entry, where a link opens another Term in place. */
export function inline(text: string, onOpen: (slug: string) => void): ReactNode[] {
  return renderInline(text, (label, target, key) => {
    // Terms link only to their own Glossary ("./Token"); show anything else as plain text.
    if (!target.startsWith("./")) return label;
    const slug = termSlug(target.slice(2));
    return (
      <button key={key} type="button" onClick={() => onOpen(slug)} className={LINK_CLASS}>
        {label}
      </button>
    );
  });
}

const splitRow = (line: string) =>
  line
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((c) => c.trim());

/** Splits an entry into its definition and the "Usage" dialogue lines. */
export function splitEntry(body: string) {
  const [main, usage = ""] = body.split(/\n_Usage:_\n/);
  return {
    main: main.trim(),
    usage: usage
      .split(/\n{2,}/)
      .map((l) => l.trim().replace(/^"|"$/g, ""))
      .filter(Boolean),
  };
}

/** Renders a Markdown table block: a header row, a separator row, then body rows. */
export function Table({ lines, renderCell }: { lines: string[]; renderCell: (text: string) => ReactNode }) {
  const [head, , ...rows] = lines;
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-[14px]">
        <thead>
          <tr>
            {splitRow(head).map((c, k) => (
              <th
                key={k}
                className="border-b border-black/25 py-2 pr-4 font-mono text-[11px] font-medium uppercase tracking-widest opacity-60"
              >
                {renderCell(c)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, k) => (
            <tr key={k}>
              {splitRow(r).map((c, j) => (
                <td key={j} className="border-b border-black/10 py-2 pr-4 align-top">
                  {renderCell(c)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const isTable = (lines: string[]) => lines.length > 2 && lines.every((l) => l.trim().startsWith("|"));

/** Renders the definition part of an entry: paragraphs and tables. */
export function GlossaryBody({
  body,
  onOpen,
}: {
  body: string;
  onOpen: (slug: string) => void;
}) {
  const blocks = body.split(/\n{2,}/);
  const nodes: ReactNode[] = blocks.map((block, i) => {
    const lines = block.split("\n");
    if (isTable(lines)) return <Table key={i} lines={lines} renderCell={(c) => inline(c, onOpen)} />;
    return <p key={i}>{inline(lines.join(" "), onOpen)}</p>;
  });

  return <div className="flex flex-col gap-4 text-[16px] leading-relaxed">{nodes}</div>;
}
