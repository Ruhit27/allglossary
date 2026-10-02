---
description: A website made of ready-built files that are the same for every visitor.
---

A static site's pages are built once — by hand or with a "static site generator" — and stored as plain [HTML](./HTML.md), [CSS](./CSS.md) and [JavaScript](./JavaScript.md) files. When someone visits, the [server](./Server.md) just hands over the file; nothing is built on demand.

That makes static sites fast, cheap, secure and easy to [host](./Hosting.md): they fit perfectly on a [CDN](./Content%20delivery%20network%20%28CDN%29.md). Blogs, documentation, portfolios and marketing sites are often static.

The limit is personalization. Anything different per visitor — logins, carts, live data — needs JavaScript calling an [API](./API.md), or a switch to [server-side rendering](./Server-side%20rendering.md). To change a static site you rebuild and [deploy](./Deploy.md) it.

_Avoid:_ "static" meaning no interactivity — static pages can still use JavaScript; they just aren't built per visitor.

_Usage:_

"Our blog costs a lot to host for so little traffic."

"Make it a static site. It could run on a free CDN plan."
