---
name: write-article
description: Draft an Article for the allglossary.xyz Blog, on a topic you give or one picked from three suggestions. Always writes a draft; you publish it.
disable-model-invocation: true
---

An **Article** is a long-form, plain-English explainer on the Blog that goes deeper than a Term and links out to Terms in any Glossary (see `CONTEXT.md`). You write **drafts** only: publishing is the human's step.

## 1. Settle the topic

If the user gave a topic, use it and move on.

Otherwise suggest exactly three, then wait for the user to pick one. Good candidates:

- A Term no Article links to yet.
- A word that is a Term in more than one listed Glossary, explained across fields (e.g. "token" in AI coding vs. in cybersecurity).
- A Term many other Terms link to, which earns a deeper look than its one-page entry.
- A question a newcomer would search for, answered through a handful of Terms.

Skip any topic an existing Article in `src/content/blog/` already covers. Done when the user has named the topic.

## 2. Read the Terms you'll lean on

Listed Glossaries are the entries in `src/lib/glossaries.ts` without `hidden: true`; their Terms live in `src/content/<glossary>/`. Read in full every Term the Article will explain or link to, so the Article agrees with each one. Done when you have read every Term you plan to link.

## 3. Write the draft

Create `src/content/blog/<Title>.md`. The file name is the title, in sentence case, using only characters a file name can hold, so leave out `/` and `:`.

```markdown
---
description: One plain sentence saying what the reader will understand by the end.
published: YYYY-MM-DD (today)
draft: true
---

Body.
```

The body uses the **same voice as Terms**. Open two or three Term files as the model: plain English, short paragraphs, everyday examples, and every jargon word explained or linked the moment it appears. Aim for 800–1,500 words.

- **Link each Term the first time it appears**: `[context window](../ai-glossary/Context%20window.md)`, with the Term title exactly as its file name and spaces written `%20`. Link only to Terms in listed Glossaries. The Article's Glossary tags come from these links, so link at least one Term.
- **Markup the site renders**: paragraphs, `##` and `###` headings, `- ` bullet lists (a lead-in line may sit directly above them), `**bold**`, `` `code` ``, and `_italic_`. Express everything else (tables, numbered lists, images, links to other websites, other Articles) as prose.

## 4. Check it

Run `npx vitest run src/lib/articles.test.ts`. That test loads every Article, drafts included, and fails on a bad date, a missing description, a `draft` value other than `true`, or any link that isn't to a Term in a listed Glossary. Done when it is green.

## 5. Hand it over

Give the user the file path and a two-line summary. To publish, they delete the `draft: true` line and set `published` to the publishing day. Leave `draft: true` in place: publishing is the user's call, made by editing the file themselves.
