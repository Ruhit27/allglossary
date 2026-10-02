---
description: A style of programming that organizes code around objects: bundles of data and the actions on that data.
---

Object-oriented programming (OOP) models a program as a set of [objects](./Object.md) that talk to each other — customers, orders, products — each defined by a [class](./Class.md). Each object looks after its own [state](./State.md) and exposes only certain actions, hiding the details inside. This hiding is called encapsulation.

OOP became dominant in the 1990s through languages like Java, C++ and C#, and is still everywhere. It suits programs with lots of things that each have their own data and rules.

It's one style among several. [Functional programming](./Functional%20programming.md) takes a different approach, and many modern languages let you mix both.

_Avoid:_ "object-oriented" as meaning modern or better — it's one style that fits some problems well and others awkwardly.

_Usage:_

"Should everything in the app be a class?"

"Not necessarily. Use classes where something has its own data and rules; plain functions are fine elsewhere."
