---
description: A network of servers around the world that keeps copies of a site's files close to visitors.
---

Data takes longer to travel far. A CDN solves that by storing copies of a site's images, scripts and pages on servers in many cities. A visitor in Tokyo gets files from a nearby Tokyo server, not from the original [server](./Server.md) in, say, Frankfurt.

A CDN is essentially a giant shared [cache](./Cache.md). It makes sites much faster, a key part of [web performance](./Web%20performance.md), and takes load off the original server so it survives traffic spikes. Many [hosting](./Hosting.md) providers include one automatically.

The trade-off is freshness. When you change a file, old copies may linger on the CDN until they expire or you clear ("purge") them.

_Avoid:_ "CDN" as hosting — a CDN keeps copies close to visitors; the original site still lives on its own server.

_Usage:_

"I fixed the typo but customers still see it."

"The CDN is serving the cached page. Purge it and the fix will show up."
