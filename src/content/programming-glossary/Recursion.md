---
description: When a function solves a problem by calling itself on a smaller piece of the same problem.
---

Some problems contain smaller copies of themselves. To count all the files in a folder, you count the files in it, plus — for each folder inside — count *its* files the same way. A [function](./Function.md) that does this calls itself; that's recursion.

Every recursive function needs a base case: a point where the problem is small enough to answer directly (an empty folder has zero files). Without one, it calls itself forever until the program runs out of memory and crashes — a famous [error](./Error.md) called a stack overflow.

Recursion is elegant for nested things like folders, family trees and menus within menus. Anything done with recursion can also be done with a [loop](./Loop.md); programmers pick whichever reads more clearly.

_Avoid:_ "recursion" as any repetition — it specifically means a function calling itself, unlike a loop.

_Usage:_

"The menu builder crashes on one category."

"That category is listed as its own parent, so the recursion never reaches a base case."
