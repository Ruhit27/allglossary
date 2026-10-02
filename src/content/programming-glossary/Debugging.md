---
description: Finding and fixing the cause of a bug.
---

Debugging is detective work. You reproduce the problem reliably, narrow down where it happens, form a guess about why, and test the guess. Tools help: a debugger lets you pause a running program and inspect every [variable](./Variable.md); logs record what happened; reading [error](./Error.md) messages carefully often points straight at the culprit.

The hardest part is usually finding the [bug](./Bug.md), not fixing it. Good techniques include changing one thing at a time, cutting the problem down to the smallest example that still fails, and explaining the code out loud — even to a rubber duck. That one really is a famous technique.

Once fixed, a good habit is writing a [unit test](./Unit%20test.md) that would have caught it.

_Avoid:_ "debugging" as randomly changing code until it works — real debugging finds the cause first, then fixes it.

_Usage:_

"I changed a few things and now it works."

"Do we know which change fixed it? Otherwise the bug may still be hiding."
