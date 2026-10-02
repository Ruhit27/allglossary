---
description: How fast a website loads and responds, especially on real phones and connections.
---

Speed is part of the experience. Slow pages lose visitors and sales, and search engines rank faster sites higher, which ties performance to [SEO](./Search%20engine%20optimization%20%28SEO%29.md). Google's "Core Web Vitals" measure three things: how fast the main content appears, how quickly the page reacts to taps, and whether things jump around as it loads.

Most speed problems come from sending too much or sending it from too far. Common fixes: smaller images, less [JavaScript](./JavaScript.md) (with help from the [bundler](./Bundler.md)), a good [cache](./Cache.md) setup, a [CDN](./Content%20delivery%20network%20%28CDN%29.md) close to visitors, fewer [requests](./Request%20and%20response.md), and [server-side rendering](./Server-side%20rendering.md) so content shows early.

Test on a mid-range phone with a slow connection. A site that feels instant on a developer's laptop can crawl elsewhere.

_Avoid:_ "performance" as only how fast the server answers — most of the waiting usually happens in the browser, downloading and running files.

_Usage:_

"The homepage feels fine to me."

"It takes eight seconds on a budget phone over 4G. The hero image alone is 5 MB."
