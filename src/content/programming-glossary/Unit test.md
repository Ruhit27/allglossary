---
description: An automated test that checks one small piece of code, such as a single function, on its own.
---

A unit test runs one [function](./Function.md) or small [module](./Module.md) with chosen inputs and checks the result. Does `calculate_tax(100)` return 20? Does it handle 0? A negative number? [Null](./Null.md)? Each check is quick, focused and automatic.

Because each test covers a tiny area, a failing unit test points straight to the problem. A project may have thousands, run in seconds on every change. They're the foundation of [testing](./Testing.md) and make [refactoring](./Refactoring.md) far less scary.

Unit tests don't prove the pieces work together. A car whose every part passes inspection can still fail to start if they're connected wrong, so larger tests are needed too.

_Avoid:_ "unit" as a unit of measurement — here it means the smallest testable piece of code.

_Usage:_

"How do we know the new discount rule works?"

"Add unit tests for it: zero items, one item, and a very large order."
