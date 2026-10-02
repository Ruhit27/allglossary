---
description: The part of a program where a variable or function can be seen and used.
---

Not every name is visible everywhere. A [variable](./Variable.md) created inside a [function](./Function.md) exists only inside that function — that's its scope. Code outside can't see it, and the function's own copy disappears when it finishes. A variable created at the top level of a file may be visible throughout that file or [module](./Module.md).

Scope keeps programs manageable. Two functions can each have their own variable called `total` without interfering. The fewer places that can change a value, the easier it is to track down who changed it.

"Global" variables, visible everywhere, are convenient but risky: any part of the program can change them, which makes [bugs](./Bug.md) hard to trace.

_Avoid:_ "scope" meaning a project's scope of work — in code it's where a name is visible.

_Usage:_

"Why does changing the total here break the invoice page?"

"Both use the same global variable. Give each its own, with a narrower scope."
