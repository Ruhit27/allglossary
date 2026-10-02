---
description: Restructuring existing code to make it clearer or simpler, without changing what it does.
---

Refactoring is tidying up: renaming confusing [variables](./Variable.md), splitting a giant [function](./Function.md) into smaller ones, removing duplicated code. The program's behavior stays exactly the same; only its internal structure improves. Like rewriting a messy paragraph to say the same thing more clearly.

It pays off because code is read and changed far more than it's written. Clean code makes future features faster and [bugs](./Bug.md) rarer. Refactoring regularly is how teams pay down [technical debt](./Technical%20debt.md).

The safety net is [testing](./Testing.md). With good tests you can refactor confidently, since anything accidentally broken shows up at once.

_Avoid:_ "refactoring" for any code change — if the behavior changes, it's a fix or a feature, not a refactor.

_Usage:_

"Did the refactor change the totals?"

"It shouldn't have — that's the point. The tests all pass, so the behavior is the same."
