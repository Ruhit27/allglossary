---
description: The environment a program needs while it runs — or the time during which it's running.
---

"Runtime" has two linked meanings. First, the time when a program is actually running, as opposed to when it's being written or built. A runtime [error](./Error.md) is one that only appears while the program runs, not when it's compiled.

Second, the software a program needs installed to run. Python code needs the Python [interpreter](./Interpreter.md); JavaScript outside the browser often runs on Node.js. Those are runtimes. They supply the basics — memory, files, network access — that the program relies on.

Programs often require a particular runtime version. Code written for a new version may fail on an older one, a frequent cause of "works here, not there".

_Avoid:_ "runtime" as how long a program takes — that's run time or duration; runtime usually means the running phase or environment.

_Usage:_

"The script fails on the server but works on my laptop."

"The server has an older Python runtime. We need the same version on both."
