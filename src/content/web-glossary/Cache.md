---
description: A store of copies kept close by, so things load faster next time.
---

Fetching something fresh is slow; reusing a copy is fast. A cache keeps copies. Your [browser](./Browser.md) caches images, stylesheets and scripts so the second visit to a site loads quicker. A [CDN](./Content%20delivery%20network%20%28CDN%29.md) caches files near visitors around the world. [DNS](./Domain%20Name%20System%20%28DNS%29.md) answers are cached too, and [servers](./Server.md) cache [database](./Database.md) results.

The [server](./Server.md) decides how long copies may be kept, using headers in its [response](./Request%20and%20response.md). Long cache times give great [web performance](./Web%20performance.md); short ones keep things fresh.

The classic cache problem is a stale copy: you've changed something, but people still see the old version until the cache expires. Many sites solve this by giving each new file version a new name.

_Avoid:_ "just clear your cache" as the fix for everything — if many users see the problem, it needs fixing on the site.

_Usage:_

"The new logo shows for me but not my boss."

"Their browser has the old one cached. A hard refresh will show the new logo."
