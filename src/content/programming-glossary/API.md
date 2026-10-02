---
description: Application Programming Interface: the defined way one piece of software lets other code use it.
---

An API is the "front counter" of a piece of software: a list of the [functions](./Function.md) or requests it offers, what inputs ([parameters](./Parameter.md)) each takes, and what it returns. A [library](./Library.md) has an API (the functions you can call); so do operating systems, and online services that other programs talk to over the internet.

The point is separation. You can use an API without knowing how it works inside, and its makers can improve the inside without breaking you, as long as the API stays the same. That's the same idea as a [module](./Module.md) exposing only what others need.

Good APIs are clearly documented ([documentation](./Documentation.md)) and change carefully, because other people's code depends on them.

_Avoid:_ "API" as only web services — any defined way for code to use other code is an API, including a library's functions.

_Usage:_

"Can we read the library's internal list?"

"It's not part of its API, so it could change any update. Use the official function instead."
