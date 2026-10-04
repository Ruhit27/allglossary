---
description: The two ways a computer can run the code you write, what each is good at, and why most modern languages quietly use both.
published: 2026-10-04
---

Computers don't understand Python, [JavaScript](../web-glossary/JavaScript.md), or any other [programming language](../programming-glossary/Programming%20language.md). They understand very low-level machine instructions. Something has to bridge the gap between the [source code](../programming-glossary/Source%20code.md) you write and what the processor runs, and there are two classic ways to do it.

A [compiler](../programming-glossary/Compiler.md) translates the whole program ahead of time, then you run the translation. An [interpreter](../programming-glossary/Interpreter.md) reads your code and carries it out as it goes, one instruction after another.

Think of a book in a language you don't speak. A compiler is a translator who hands you a finished translation of the whole book: slow to produce, but fast to read, and any confusing passages were spotted before you started. An interpreter is a translator sitting beside you, reading it aloud in your language as you go: you can start straight away, but if page 300 makes no sense, you only find out when you reach page 300.

## Side by side

| | Compiler | Interpreter |
| --- | --- | --- |
| When translation happens | Before the program runs, as part of the [build](../programming-glossary/Build.md) | While the program runs |
| Starting up | Wait for compiling first | Run the code immediately |
| Finding mistakes | Many are caught before the program ever runs | Some only appear when that line is reached |
| Speed | Usually faster, since the translation is already done | Traditionally slower, though modern tricks close much of the gap |
| What you share | A ready-to-run file | The source code, plus a [runtime](../programming-glossary/Runtime.md) to run it |
| Typical languages | C, Rust, Go | Python, JavaScript |

## What a compiler gives you

Compiling is part of the [build](../programming-glossary/Build.md): the step that turns your project into something runnable. Because the compiler reads every line before anything runs, it catches whole categories of mistakes early. A [syntax](../programming-glossary/Syntax.md) slip stops the build. In many compiled languages, so does mixing up [data types](../programming-glossary/Data%20type.md), like treating a piece of text as a number.

That early warning is the big win. A mistake caught by the compiler costs you a minute; the same mistake found by a customer costs far more.

The result also tends to run fast, and you can hand someone a single ready-to-run file. They don't need your source code or any extra software installed.

The catch is the wait. Every change means compiling again before you can try it, and on big projects that can take minutes.

## What an interpreter gives you

With an interpreter, you write a line and run it immediately. That makes it wonderful for learning, experimenting, and quick scripts: you get feedback in seconds.

The interpreter is part of the [runtime](../programming-glossary/Runtime.md), the software that has to be installed wherever the code runs. That's why a Python script needs Python installed, and why "it works on my laptop but not on the server" is so often a runtime version mismatch.

The trade-off is that some mistakes hide. A typo in a rarely used branch of your program sits there quietly until the day that branch runs, and then you get a runtime [error](../programming-glossary/Error.md), perhaps an hour into a long job. Good [testing](../programming-glossary/Testing.md) is how interpreted-language teams make up for the missing compiler check.

## Why most languages blur the line

The neat split above is the textbook version. Real languages mix the two.

Java compiles your code ahead of time, but into an in-between form rather than machine instructions; a runtime then carries out that form and compiles the busiest parts to machine code while the program runs. JavaScript engines in web browsers do something similar: they start by interpreting, notice which code runs most, and compile that on the fly. Python quietly compiles your code into an in-between form before interpreting it.

So "is this language compiled or interpreted?" is often the wrong question. Ask how a particular language is usually run, and what that means for you: how quickly you can try changes, how early mistakes are caught, how fast the result runs, and what has to be installed for it to work.

## Which matters for you?

If you're learning, it barely matters. Start with whatever language fits what you want to build. Python and JavaScript are popular first languages partly because the interpreter gives instant feedback.

When you choose a language for real work, the difference turns into practical questions:

- **Speed matters most**, as in games, operating systems, or heavy number crunching: compiled languages like C, Rust, and Go are the usual choice.
- **Fast iteration matters most**, as in scripts, data analysis, or web prototypes: interpreted languages let you try ideas in seconds.
- **Catching mistakes early matters most**: lean on a compiler, or add type checking and tests to an interpreted language.
- **You need to share a single file**: compiled programs are easier to hand over, because nobody needs to install a runtime.

Either way, the computer still does exactly what it's told. A [bug](../programming-glossary/Bug.md) survives a compiler and an interpreter alike, if the instructions say the wrong thing. Translation only changes when you find out.
