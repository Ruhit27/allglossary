---
description: Ready-made code written by others that you add to your program instead of writing it yourself.
---

Lots of problems are already solved: reading spreadsheets, handling dates and time zones, drawing charts, sending email. A library packages that solution as [functions](./Function.md) and [modules](./Module.md) you can call. Most programs use dozens, often installed with a [package manager](./Package%20manager.md).

The difference from a [framework](./Framework.md) is who's in charge. Your code calls a library when it wants to; a framework calls your code and decides the overall structure.

Every library you use becomes a [dependency](./Dependency.md): something your program relies on, which needs updating and may have its own [bugs](./Bug.md) or security issues.

_Avoid:_ "library" as a collection of books or documents — in code it's reusable code you add to your own.

_Usage:_

"Should we write our own date handling?"

"No — time zones are full of traps. Use a well-known library."
