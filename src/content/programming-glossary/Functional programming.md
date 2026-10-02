---
description: A style of programming built from functions that take inputs and return outputs, without changing anything else.
---

Functional programming treats a program as a chain of [functions](./Function.md), each turning inputs into outputs — like formulas in a spreadsheet. A "pure" function always gives the same [return value](./Return%20value.md) for the same [parameters](./Parameter.md), and changes nothing outside itself. Instead of modifying data, you create new data from old.

Avoiding hidden changes to [state](./State.md) makes code easier to test and reason about, and safer for [concurrency](./Concurrency.md), since nothing is being changed behind your back. Languages like Haskell are built around it; JavaScript, Python and others borrow many of its ideas.

It contrasts with [object-oriented programming](./Object-oriented%20programming.md), though in practice most codebases mix the two.

_Avoid:_ "functional" meaning "working" — here it means built from functions, not that the code simply functions.

_Usage:_

"This function gives different answers each time I test it."

"It reads a global value that something else changes. Pass that value in as a parameter to make it pure."
