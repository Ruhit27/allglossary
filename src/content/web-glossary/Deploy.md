---
description: Putting a new version of a website live, so visitors see the changes.
---

Deploying takes code that works on a developer's machine and puts it on the [servers](./Server.md) the public uses. Often that includes building it — running the [bundler](./Bundler.md), generating a [static site](./Static%20site.md) — then uploading the result to the [hosting](./Hosting.md).

Many teams deploy automatically: when changes are merged into the main branch in [version control](./Version%20control.md), a pipeline tests, builds and deploys them within minutes. Preview deploys give each proposed change its own temporary link to check before it goes live.

A good deploy setup makes rolling back easy. If the new version breaks something, you can switch to the previous one in seconds. After deploying, you may need to clear a [CDN](./Content%20delivery%20network%20%28CDN%29.md) [cache](./Cache.md).

_Avoid:_ "deployed" meaning "finished" — a deploy makes changes live, but they still need checking and can be rolled back.

_Usage:_

"The site broke right after lunch."

"That's when we deployed. Roll back to this morning's version while we find the bug."
