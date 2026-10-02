---
description: The result a function hands back to the code that called it.
---

When a [function](./Function.md) finishes, it can send a value back. A function `add(2, 3)` returns 5; a function `find_user("ada@example.com")` might return that user's details, or [null](./Null.md) if there's no such user. The calling code can store the return value in a [variable](./Variable.md) or use it straight away in an [expression](./Expression.md).

Not every function returns something useful. A function that only saves a file or shows a message may return nothing; it exists for its side effects.

A common [bug](./Bug.md) is ignoring the return value — calling a function that reports "this failed" and carrying on as if it worked.

_Avoid:_ "return" meaning going back to an earlier step — it means the function is done and is handing back its result.

_Usage:_

"Saving fails silently."

"The save function returns false on failure, but we never check what it returns."
