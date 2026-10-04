---
description: Two ways a website can build its pages, what each means for speed and search, and why most modern sites mix them.
published: 2026-10-04
---

Every [web page](../web-glossary/Web%20page.md) you see is [HTML](../web-glossary/HTML.md) in the end: a description of headings, paragraphs, pictures, and buttons that your [browser](../web-glossary/Browser.md) draws on screen. The question is who writes that HTML, and when.

There are two main answers. With [server-side rendering](../web-glossary/Server-side%20rendering.md), or SSR, the [server](../web-glossary/Server.md) builds the finished page and sends it. With [client-side rendering](../web-glossary/Client-side%20rendering.md), or CSR, the server sends an almost empty page plus [JavaScript](../web-glossary/JavaScript.md), and your browser builds the page itself.

A restaurant comparison works well. Server-side rendering is a kitchen that sends out a finished plate. Client-side rendering hands you the ingredients and a recipe card, and you cook at the table. Cooking at the table is flexible, and you can change things as you go, but you wait longer for the first bite.

## Side by side

| | Server-side rendering | Client-side rendering |
| --- | --- | --- |
| Who builds the page | The server, before sending it | The browser, after downloading the JavaScript |
| First thing a visitor sees | The real content | Often a blank screen or a spinner |
| Search engines | See the full content straight away | May not see the content at all |
| After it loads | Each new page is a fresh request | Changes happen in place, with no reload |
| Work for the server | Builds a page on every request | Mostly sends files and data |
| Best for | Content people arrive at: articles, shops, landing pages | Tools people stay in: email, dashboards, editors |

## How server-side rendering works

When you ask for a page, the server gathers what it needs, perhaps the product details from a [database](../web-glossary/Database.md), and fills it into the HTML. The browser receives a complete page and can show it immediately. JavaScript then loads and makes the interactive parts work.

This is how the web worked from the start, and it has two big strengths. Content appears quickly, which is a large part of [web performance](../web-glossary/Web%20performance.md), especially on slow phones. And search engines, which read your HTML to decide what a page is about, see everything. That matters a lot for [SEO](../web-glossary/Search%20engine%20optimization%20%28SEO%29.md).

The cost is that the server does work for every visitor, so it needs more power, and every move to a new page is a full round trip.

## How client-side rendering works

The browser downloads a nearly blank HTML page and a bundle of JavaScript. The script runs, fetches data from an [API](../web-glossary/API.md), and builds the page in the [DOM](../web-glossary/DOM.md), the browser's live version of the page.

Once that first load is done, the experience can feel like an app. Clicking around swaps content in place, with no white flash between screens. This is how a [single-page application](../web-glossary/Single-page%20application%20%28SPA%29.md) works, and it suits tools where people stay for a long time and everything changes constantly.

The costs come at the start. There's a lot of JavaScript to download and run before anything useful appears, which hurts on cheap phones and slow connections. And a search engine that reads the initial HTML may find almost nothing there.

## The third option: build it once

There's a simpler answer for pages that are the same for everyone: build them ahead of time. A [static site](../web-glossary/Static%20site.md) turns every page into a finished HTML file when the site is published. The server just hands the file over, which is fast, cheap, and easy to put on a [CDN](../web-glossary/Content%20delivery%20network%20%28CDN%29.md) close to visitors.

The article you're reading works this way: it was built into a finished page when the site was published. The limit is personalisation. Anything different for each visitor, like a shopping cart or a logged-in view, needs JavaScript or a server.

## Most sites now mix all three

The choice used to be all or nothing. Modern [frameworks](../web-glossary/Framework.md) let you decide page by page, and even piece by piece within a page. A shop might build its product pages ahead of time, render the search results on the server, and handle the cart with JavaScript in the browser.

A common pattern sends server-rendered HTML first, so the content shows quickly and search engines can read it, then lets JavaScript take over in the browser for the interactive parts. You get a fast first view and an app-like feel afterwards.

## How to choose

Ask two questions about each page.

- **Does it need to be found in search, or seen quickly by first-time visitors?** Articles, product pages, and landing pages: render on the server, or build ahead of time if the content is the same for everyone.
- **Is it a tool people sign into and use for a while?** Dashboards, editors, inboxes: client-side rendering is fine, since search engines can't see behind a login anyway, and returning visitors already have the JavaScript in their [cache](../web-glossary/Cache.md).

When in doubt, start with HTML from the server and add JavaScript where it earns its place. A page that shows its content first and becomes interactive second works for everyone: people on slow phones, people using assistive technology (see [accessibility](../web-glossary/Accessibility.md)), and search engines alike.
