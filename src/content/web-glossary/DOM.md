---
description: Document Object Model: the browser's live, editable version of a page's structure.
---

When a [browser](./Browser.md) reads [HTML](./HTML.md), it builds a tree of objects — the page contains a body, which contains a header and a main area, which contain headings and paragraphs, and so on. That tree is the DOM.

The browser draws what you see from the DOM. [JavaScript](./JavaScript.md) changes the page by changing the DOM: adding an item to a list, hiding a message, swapping text. The original HTML file stays the same; only the live version changes.

Changing lots of the DOM at once can make a page feel sluggish, so [frameworks](./Framework.md) work hard to change only the parts that need it. That's one of their main jobs.

_Avoid:_ "DOM" and "HTML" as the same — HTML is the file that was sent; the DOM is the live structure the browser built from it, which scripts can then change.

_Usage:_

"View source doesn't show the new comment."

"View source shows the original HTML. Inspect the element instead — that shows the live DOM."
