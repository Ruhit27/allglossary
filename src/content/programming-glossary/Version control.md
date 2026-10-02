---
description: A system that records every change to a project's code, so people can collaborate and undo mistakes.
---

Version control keeps the complete history of a project: every change, who made it, when, and a message saying why. You can compare versions, see who wrote a line, and roll back to any earlier point. Git is by far the most common tool, with sites like GitHub and GitLab hosting projects online.

It lets many people work on the same [source code](./Source%20code.md) at once. Each person works on a separate branch, then merges their changes back — usually after [code review](./Code%20review.md). When two people change the same lines, Git asks a human to resolve the conflict.

Once you've used it, working without it feels reckless. It's an undo button for an entire project.

_Avoid:_ "Git" and "GitHub" as the same — Git is the version control tool; GitHub is a website that hosts Git projects.

_Usage:_

"I broke everything and don't remember what I changed."

"Ask version control. It'll show exactly what changed, and we can undo it."
