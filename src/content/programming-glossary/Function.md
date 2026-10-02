---
description: A named, reusable block of code that does one job, which you can run whenever you need it.
---

A function wraps a few lines of [code](./Code.md) under a name, like `calculate_tax`. Instead of repeating those lines everywhere, you "call" the function by name. You can give it inputs, called [parameters](./Parameter.md), and it can hand back a result, its [return value](./Return%20value.md): `calculate_tax(100)` might return 20.

Functions are the main way programmers break big problems into small, understandable pieces. Each one should do one thing and have a name that says what. A [library](./Library.md) is largely a collection of useful functions written by someone else.

Functions can call other functions, and even themselves — that's [recursion](./Recursion.md). Depending on the language they may be called methods, procedures or subroutines.

_Avoid:_ "function" meaning purpose or role — in code it's a specific named block you can call.

_Usage:_

"We calculate shipping the same way in five places."

"Put it in one function and call it from all five. Then a price change is one edit."
