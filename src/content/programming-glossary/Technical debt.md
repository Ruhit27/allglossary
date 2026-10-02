---
description: The future cost of quick shortcuts in code, which make later changes slower until they're cleaned up.
---

When a team takes a shortcut to ship faster — skipping tests, copying code instead of sharing it, a hacky fix — they "borrow" time. Like financial debt it charges interest: every later change around that code is slower and riskier, and [bugs](./Bug.md) multiply.

Some technical debt is a smart trade-off: shipping a rough version to learn from real users can be worth it. The problem is debt nobody tracks or repays. Teams pay it down through [refactoring](./Refactoring.md), adding [tests](./Testing.md), and updating old [dependencies](./Dependency.md).

The term helps explain to non-programmers why "just adding a button" can take weeks in an old, tangled codebase.

_Avoid:_ "technical debt" for any code you dislike — it's specifically the cost of past shortcuts that slow down change now.

_Usage:_

"Why does a small change take two weeks now?"

"That part has years of technical debt. We need time to clean it up first."
