---
description: A website that loads once and then updates the page with JavaScript instead of loading new pages.
---

On a traditional [website](./Website.md), clicking a link loads a whole new [web page](./Web%20page.md) from the [server](./Server.md). An SPA loads one page up front and then uses [JavaScript](./JavaScript.md) to swap content in place, fetching data from an [API](./API.md) as needed. Gmail and many dashboards work this way.

The result feels app-like and smooth: no white flash between screens. It relies on [client-side rendering](./Client-side%20rendering.md), usually through a [framework](./Framework.md).

The costs: the first load can be slow because there's a lot of JavaScript to download, and pages can be harder for [search engines](./Search%20engine%20optimization%20%28SEO%29.md) to read. Many teams now mix in [server-side rendering](./Server-side%20rendering.md) to get both.

_Avoid:_ "single-page" meaning the app has only one screen — it can have many screens; it just doesn't load a new page for each.

_Usage:_

"Why does the back button break on our app?"

"It's an SPA, and we're not updating the URL when the screen changes. The router needs fixing."
