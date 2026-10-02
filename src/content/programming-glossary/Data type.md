---
description: The kind of value something is — such as a number, text, or true/false — which decides what you can do with it.
---

Computers treat different kinds of values differently. Common data types are numbers (whole numbers and decimals), text ([strings](./String.md)), true/false ([booleans](./Boolean.md)), lists ([arrays](./Array.md)) and labeled collections ([dictionaries](./Dictionary.md)). There's often also a special "nothing" value, [null](./Null.md).

The type decides what makes sense: you can multiply two numbers, but multiplying two names is meaningless. Mixing types up is a classic source of [bugs](./Bug.md): "5" (text) plus 5 (a number) might give 10, "55", or an [error](./Error.md), depending on the language.

Some languages make you declare every [variable](./Variable.md)'s type and check it with the [compiler](./Compiler.md); others work it out as the program runs. Both styles are common.

_Avoid:_ treating "5" and 5 as the same — one is text and one is a number, and programs treat them very differently.

_Usage:_

"The total shows 1050 instead of 60."

"The 10 came in as text, so the program glued it to 50 instead of adding. Convert it to a number first."
