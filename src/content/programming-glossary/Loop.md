---
description: Code that repeats a set of instructions, either for each item in a list or until something is true.
---

Computers are great at doing the same thing many times. A loop says "do this for every item" (a for loop — for each email in the inbox, check it for spam) or "keep doing this while something is true" (a while loop — keep asking for a password until it's correct).

Loops usually work through an [array](./Array.md) or other [data structure](./Data%20structure.md). Each pass through the loop is called an iteration. Combined with [conditions](./Condition.md), loops let a short [program](./Program.md) handle millions of items.

The classic loop [bug](./Bug.md) is the infinite loop — the "stop" condition never becomes true, so the program spins forever and seems to freeze.

_Avoid:_ "loop" for any repeated user action — in code it's the program repeating itself, not the person clicking again.

_Usage:_

"The app froze when I imported an empty file."

"The loop waits for a row that never comes. It needs a way to stop when the file is empty."
