---
description: The language that describes the structure and content of a web page: headings, paragraphs, links, images.
---

HyperText Markup Language. An HTML file is plain text with tags that label each piece of content: `<h1>` for a main heading, `<p>` for a paragraph, `<a>` for a [hyperlink](./Hyperlink.md), `<img>` for an image. The [browser](./Browser.md) reads these tags to understand what each part of the [web page](./Web%20page.md) is.

HTML is the skeleton of a page. [CSS](./CSS.md) decides how it looks, and [JavaScript](./JavaScript.md) makes it interactive, but without HTML there's nothing to style or animate. The browser turns the HTML into a live structure called the [DOM](./DOM.md).

Using the right tag for the right job matters. A real button tag works with a keyboard and screen readers; a plain box made to look like a button often doesn't. That's a big part of [accessibility](./Accessibility.md).

_Avoid:_ calling HTML a programming language — it describes content; it doesn't run logic.

_Usage:_

"Can we make the title bigger by changing it to an h1?"

"Use CSS to make it bigger. h1 says it's the page's main heading, which affects screen readers and search engines."
