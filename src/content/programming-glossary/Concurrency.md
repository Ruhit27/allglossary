---
description: A program dealing with several tasks at overlapping times, such as serving many users at once.
---

Concurrency means a program makes progress on several things during the same period — handling a thousand website visitors, or downloading files while updating the screen. Sometimes tasks truly run at the same instant on different processor cores (that's parallelism); sometimes the computer just switches between them very quickly.

It makes software faster and more responsive, but it's notoriously tricky. When two tasks change the same [state](./State.md) at once, results can depend on exact timing — a "race condition". Two people booking the last seat at the same moment might both succeed. These [bugs](./Bug.md) are hard to reproduce, since they appear only under particular timing.

[Asynchronous code](./Asynchronous%20code.md) is one common way to handle concurrency; [functional programming](./Functional%20programming.md) reduces its risks by avoiding shared changing state.

_Avoid:_ "concurrent" and "parallel" as the same — concurrent tasks overlap in time; parallel ones run at the exact same instant.

_Usage:_

"We sold the same concert ticket twice."

"Two purchases ran concurrently and both saw the seat as free. The check and the booking need to happen as one step."
