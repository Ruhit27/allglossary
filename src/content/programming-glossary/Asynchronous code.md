---
description: Code that starts a slow task and carries on with other work instead of waiting for it to finish.
---

Some tasks take a while: downloading a file, asking a server for data, reading a big file from disk. Synchronous code waits, frozen, until each finishes. Asynchronous ("async") code starts the task, carries on with other work, and handles the result when it arrives — like ordering at a café and sitting down until your name is called.

This keeps programs responsive: an app can still scroll while it loads data. Most languages offer tools such as callbacks, promises, and the words `async` and `await` to write it clearly. It's closely tied to [events](./Event.md), since "the data arrived" is itself an event.

Async code is a common source of [bugs](./Bug.md): using a result before it has arrived, or results arriving in an unexpected order.

_Avoid:_ "asynchronous" as meaning parallel — async code may still run one thing at a time; it just doesn't sit waiting.

_Usage:_

"The page shows 'undefined' for a split second."

"We read the user's name before the async request finishes. Wait for the data, or show a loader."
