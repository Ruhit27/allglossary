---
description: A program that reads source code and carries it out line by line, without a separate translation step first.
---

An interpreter runs [source code](./Source%20code.md) directly: it reads an instruction, does it, then moves on to the next. Python and JavaScript are usually run this way. You write code and run it immediately — handy for experimenting and learning.

The trade-off: some mistakes only show up when the interpreter reaches that line, which might be in a rarely used corner of the program. Interpreted code has also traditionally been slower than code from a [compiler](./Compiler.md), though modern interpreters close much of that gap with clever tricks.

The interpreter is part of the [runtime](./Runtime.md): the program that must be installed for your code to run.

_Avoid:_ "interpreted" meaning slow or toy-like — huge real systems run on interpreted languages like Python and JavaScript.

_Usage:_

"The script crashed after an hour."

"The interpreter only reached that broken line once the big job finished. A test would have caught it sooner."
