---
description: A mistake in a program that makes it behave wrongly.
---

A bug is any flaw that makes software do something it shouldn't: crash, show the wrong total, let the wrong person in. The name is older than computers, but it was popularized by a real moth found stuck in an early computer in 1947.

Bugs come from mistakes in logic, typos, misunderstood requirements, unexpected input like [null](./Null.md), or timing problems in [concurrency](./Concurrency.md). Some cause an obvious [error](./Error.md); others quietly produce wrong results, which is worse. Finding and fixing them is [debugging](./Debugging.md).

All software has bugs. [Testing](./Testing.md) and [code review](./Code%20review.md) catch many before users see them, and every fixed bug is a good candidate for a new test so it can't sneak back.

_Avoid:_ calling every unwanted behavior a bug — if the program does what was asked but the request was wrong, that's a missing feature.

_Usage:_

"Is the rounding a bug or the intended behavior?"

"Check the spec. If it says round down, it's working as designed — we just don't like the design."
