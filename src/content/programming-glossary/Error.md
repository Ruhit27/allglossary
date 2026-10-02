---
description: A problem that stops code from running correctly, usually reported with a message.
---

An error is the program saying "I can't do this". Syntax errors mean the code breaks the language's [syntax](./Syntax.md) and won't run at all. Runtime errors happen while the program runs — dividing by zero, reading a file that doesn't exist, using a value that's [null](./Null.md). Logic errors are the sneaky kind: no message at all, just wrong results.

Error messages are clues, not insults. They usually name the problem and the line where it happened, and reading them carefully is the first step in [debugging](./Debugging.md). Many languages report runtime errors as [exceptions](./Exception.md), which code can catch and handle.

Showing raw error messages to users is a bad idea: they're confusing, and can reveal details attackers would like to know.

_Avoid:_ "error" and "bug" as the same — an error is a symptom the program reports; a bug is the mistake behind it.

_Usage:_

"It just says 'error'."

"Check the logs — the full message will say which line failed and why."
