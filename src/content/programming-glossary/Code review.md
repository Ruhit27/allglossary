---
description: Having another programmer read and check your code changes before they become part of the project.
---

In a code review, a teammate reads a proposed change — usually shown as a diff of added and removed lines — and comments on it: possible [bugs](./Bug.md), confusing names, missing [tests](./Testing.md), simpler approaches. The author responds or makes fixes, and once approved the change is merged. Platforms built on [version control](./Version%20control.md), like GitHub, make this routine.

Review catches mistakes, but its bigger benefit is shared understanding. More than one person knows each part of the code, and team habits spread naturally.

Good reviews are kind and specific, about the code rather than the person. Small changes get much better reviews than huge ones.

_Avoid:_ "code review" as a final exam to pass — it's a conversation that improves the code and spreads knowledge.

_Usage:_

"This change touches 60 files. Can you review it today?"

"Can you split it into smaller pieces? I'll catch far more that way."
