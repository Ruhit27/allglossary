---
description: Checking that software works as intended, often with code that checks other code automatically.
---

Testing means confirming a program does what it should — and doesn't do what it shouldn't. Some testing is manual: a person clicks through the app. Much of it is automated: programmers write test code that runs the real code with known inputs and checks the outputs. A computer can run thousands of these in seconds, after every change.

Tests come in sizes. [Unit tests](./Unit%20test.md) check one small piece; integration tests check pieces working together; end-to-end tests drive the whole app like a user would. Good tests make [refactoring](./Refactoring.md) safe, since you'll know immediately if something broke.

Tests can only show that bugs are there, never that none remain. Their value is in covering what matters most.

_Avoid:_ "tested" meaning "I tried it once" — real testing covers edge cases and runs again every time the code changes.

_Usage:_

"Can we skip the tests to ship faster?"

"That's how last month's checkout bug reached customers. The tests take two minutes."
