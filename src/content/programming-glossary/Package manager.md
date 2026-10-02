---
description: A tool that finds, installs and updates the libraries a project depends on.
---

Instead of downloading [libraries](./Library.md) by hand, programmers use a package manager — npm for JavaScript, pip for Python, Cargo for Rust. You list what your project needs; the package manager fetches the right versions from an online registry, along with everything *they* need.

It keeps a record of exact versions, so everyone on the team — and the [build](./Build.md) servers — install identical [dependencies](./Dependency.md). One command sets up a new computer; another updates libraries to newer versions.

Registries hold millions of packages from anyone. Most are fine; a few are abandoned, buggy or even malicious, so it's worth checking before adding one.

_Avoid:_ "package" as a delivery or software product — here it's a library bundled for the package manager.

_Usage:_

"It works on my machine but not on yours."

"Your package manager installed a newer version of a library. Use the lockfile so we both get the same one."
