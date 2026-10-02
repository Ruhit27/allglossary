---
description: A system that records every change to a project's files, so a team can collaborate and undo mistakes.
---

Version control keeps the full history of a codebase: who changed what, when and why. You can see any earlier version, compare versions, and go back if something breaks. Git is the standard tool, and services like GitHub and GitLab host projects online.

It lets many people work at once. Each person works on their own branch; finished changes are reviewed and merged into the main branch. Many teams [deploy](./Deploy.md) automatically whenever the main branch changes, and send a [webhook](./Webhook.md) to other tools.

Version control is also how [open source](./Open%20source.md) works: anyone can copy a public project, propose changes, and the maintainers decide what to merge.

_Avoid:_ "Git" and "GitHub" as the same — Git is the version control tool; GitHub is a website that hosts Git projects.

_Usage:_

"I overwrote yesterday's work by accident."

"It's in version control. We can restore yesterday's version in a minute."
