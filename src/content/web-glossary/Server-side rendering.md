---
description: Building a page's full HTML on the server for each request, so it arrives ready to show.
---

With server-side rendering (SSR), the [server](./Server.md) builds the complete [HTML](./HTML.md) — with the actual products, articles or comments filled in — and sends that. The [browser](./Browser.md) can show it right away. [JavaScript](./JavaScript.md) then loads and makes the page interactive.

Pages appear faster, which helps [web performance](./Web%20performance.md), and [search engines](./Search%20engine%20optimization%20%28SEO%29.md) see the full content. The trade-off is that the server does work on every request, so it needs more power than a [static site](./Static%20site.md).

SSR is the classic way the web worked, and it has come back through modern [frameworks](./Framework.md) that blend it with [client-side rendering](./Client-side%20rendering.md).

_Avoid:_ "server-side rendering" as meaning no JavaScript — the page arrives ready, but JavaScript often still runs to make it interactive.

_Usage:_

"The dashboard flashes a spinner before anything shows."

"If we render it on the server, people will see their numbers straight away."
