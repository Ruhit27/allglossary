---
description: Something a program relies on to work, usually a library written by someone else.
---

If your code uses a [library](./Library.md) or [framework](./Framework.md), that's a dependency: your program can't run without it. Those libraries have dependencies of their own, so a modest project may rely on hundreds of packages, most of which nobody on the team ever chose directly. A [package manager](./Package%20manager.md) tracks them all.

Dependencies save enormous effort, but each is a commitment. They need updating for security fixes, they can break when they change, and occasionally they're abandoned or even compromised by attackers.

Teams keep dependencies reasonable: preferring well-maintained ones, pinning exact versions, and updating regularly rather than all at once every few years.

_Avoid:_ "dependency" as a weakness or addiction — in code it's simply something your program needs in order to run.

_Usage:_

"Why did the build break? We didn't change anything."

"A dependency released a new version with a breaking change. Pin the version we tested with."
