---
description: A bundle of related data and the actions that work on it, treated as one thing in a program.
---

An object groups facts and behavior about one thing. A bank-account object might hold data — owner, balance — and offer actions, called methods, like deposit and withdraw. The rest of the program asks the object to do things rather than fiddling with its data directly.

Objects are usually created from a [class](./Class.md), which acts as their blueprint: many account objects, one Account class. Programming built around objects is [object-oriented programming](./Object-oriented%20programming.md). An object's current data is its [state](./State.md).

In some languages, notably JavaScript, "object" also just means a set of labeled values — what other languages call a [dictionary](./Dictionary.md).

_Avoid:_ "object" as a physical thing — in code it's a bundle of data and behavior, which may represent something real or purely abstract.

_Usage:_

"Can I just change the balance field directly?"

"Go through the account object's withdraw method. It checks there's enough money first."
