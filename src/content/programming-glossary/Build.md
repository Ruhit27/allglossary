---
description: Turning source code into a finished program that's ready to run or ship, or the result of doing so.
---

A build takes [source code](./Source%20code.md) and produces something runnable. Depending on the project, that may involve a [compiler](./Compiler.md) translating the code, a [package manager](./Package%20manager.md) fetching [dependencies](./Dependency.md), tests being run, and files being bundled and shrunk. The output — an app, a website, an installer — is also called "a build".

Builds are usually automated with one command, so they're identical every time. Many teams run a build automatically on every change, so a broken build is spotted within minutes.

"It works on my machine" is the classic build problem: something on the developer's computer isn't captured in the build, so it fails elsewhere.

_Avoid:_ "build" as writing the code — building is the automated step that turns written code into a runnable program.

_Usage:_

"The build is red."

"Someone's change broke a test. Let's fix it before anyone ships on top of it."
