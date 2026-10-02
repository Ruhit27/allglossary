---
description: Building a page's content in the browser with JavaScript, after it arrives mostly empty.
---

With client-side rendering, the [server](./Server.md) sends a near-blank [HTML](./HTML.md) page plus [JavaScript](./JavaScript.md). The [browser](./Browser.md) runs the script, which fetches data from an [API](./API.md) and builds the page in the [DOM](./DOM.md). This is how a typical [single-page application](./Single-page%20application%20%28SPA%29.md) works.

It's great for highly interactive tools where everything changes constantly, and it makes the server's job simple. But visitors see a blank screen or spinner until the JavaScript has loaded and run, which hurts [web performance](./Web%20performance.md) on slow phones, and search engines may not see the content.

The alternative is [server-side rendering](./Server-side%20rendering.md). Many [frameworks](./Framework.md) now do both: render first on the server, then let the browser take over.

_Avoid:_ "rendering" as only drawing pixels — here it means building the page's content, and client-side means the browser does that work.

_Usage:_

"Google shows our product pages with no description."

"They're client-side rendered, so the crawler sees an empty page. Let's render them on the server."
