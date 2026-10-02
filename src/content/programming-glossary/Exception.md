---
description: A signal raised when something goes wrong while code runs, which other code can catch and handle.
---

When code hits a problem it can't handle — a missing file, a lost network connection — it can "throw" (or "raise") an exception. Normal execution stops, and the exception travels back up through the [functions](./Function.md) that were called, until some code "catches" it and decides what to do: retry, show a friendly message, or log it.

If nothing catches it, the program crashes and shows the [error](./Error.md). Exceptions let the code that notices a problem be separate from the code that knows how to respond to it.

A dangerous shortcut is catching every exception and ignoring it. The program carries on as if nothing happened, hiding real [bugs](./Bug.md).

_Avoid:_ "exception" meaning a rare special case — in code it's the specific mechanism for signaling and handling errors.

_Usage:_

"Uploads fail but nobody gets told."

"The upload code catches the exception and does nothing. It should log it and tell the user."
