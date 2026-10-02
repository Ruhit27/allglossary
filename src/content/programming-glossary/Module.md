---
description: A file or self-contained unit of code that groups related functions together.
---

As [programs](./Program.md) grow, putting all the [code](./Code.md) in one file becomes unmanageable. A module is a separate unit — usually a file — holding related code, like everything about payments or everything about email. Other parts of the program "import" what they need from it.

Modules hide their inner details and expose only what others should use, a bit like a shop with a counter: you order from the front, not by wandering into the kitchen. That means you can change a module's insides without breaking the rest, as long as the front stays the same.

A [library](./Library.md) is often a set of modules, and a [package manager](./Package%20manager.md) distributes them.

_Avoid:_ "module" as a course unit — in code it's a separate piece of the program that others import.

_Usage:_

"Where's the code that sends invoices?"

"In the billing module. Everything about invoices lives there."
