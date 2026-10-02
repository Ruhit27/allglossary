---
description: A ready-made structure for building a kind of program, which you fill in with your own code.
---

A framework provides the skeleton of an application — how it starts, how it's organized, how its parts talk to each other — and you write the pieces that are specific to your project. Examples include React and Django for websites, and Flutter for phone apps.

The key difference from a [library](./Library.md): with a library, your code calls it; with a framework, it calls your code. That's sometimes described as "don't call us, we'll call you". In return for following its rules, you skip a lot of repetitive setup.

Choosing a framework is a big, long-lasting decision. Your code becomes shaped around it, and it becomes one of your most important [dependencies](./Dependency.md).

_Avoid:_ "framework" and "library" as the same — a library is a tool you pick up; a framework is a structure you build inside.

_Usage:_

"Can we switch frameworks next sprint?"

"Not quickly. Most of our code is shaped around this one; switching is close to a rewrite."
