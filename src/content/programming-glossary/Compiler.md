---
description: A program that translates source code into a form the computer can run directly, before it runs.
---

A compiler reads all of a program's [source code](./Source%20code.md) and translates it, in one go, into machine instructions — or into an in-between form — that can run later. Languages like C, Rust, Go and Java use compilers. The translation step is part of the [build](./Build.md).

Because it reads everything first, a compiler catches many mistakes before the program ever runs: [syntax](./Syntax.md) slips, and in many languages, mixing up [data types](./Data%20type.md), like treating text as a number. Compiled programs also tend to run fast, since the translation work is already done.

The alternative is an [interpreter](./Interpreter.md), which translates as it goes. Many modern languages blend the two.

_Avoid:_ "compiling" as running the program — compiling only translates it; running is a separate step.

_Usage:_

"It compiled, so it works!"

"It compiled, so the syntax is fine. Whether it does the right thing is what the tests are for."
