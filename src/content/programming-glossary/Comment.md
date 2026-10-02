---
description: A note in code written for people, which the computer ignores.
---

Comments are lines marked with a special symbol (`#` in Python, `//` in JavaScript) that the computer skips entirely. They're for the people who read the [code](./Code.md) later, including the author six months on.

The best comments explain why, not what. The code already says what it does; a comment adds what it can't, such as "Retry three times because the payment provider sometimes times out" or "Tax rule from the 2024 regulation". Longer explanations of how to use code belong in [documentation](./Documentation.md).

Comments can go stale. If the code changes but the comment doesn't, the comment now lies. Clear names often replace the need for a comment altogether.

_Avoid:_ commenting what every line does — explain why something is done; clear names should already show what.

_Usage:_

"Why does it wait two seconds here?"

"There's no comment. Let's find out and add one explaining why, so nobody deletes it."
