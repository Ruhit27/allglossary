---
description: A tool that combines a project's many code files into a few optimized files for the browser.
---

A modern [frontend](./Frontend.md) project might have hundreds of [JavaScript](./JavaScript.md) and [CSS](./CSS.md) files, plus libraries. Sending each separately would mean hundreds of [requests](./Request%20and%20response.md). A bundler — such as Vite, webpack or esbuild — packs them into a handful of files.

While bundling, it also shrinks code by removing spaces and unused parts, converts newer code so older [browsers](./Browser.md) understand it, and gives each file a unique name so the [cache](./Cache.md) picks up new versions. Most [frameworks](./Framework.md) include one, so you rarely configure it by hand.

Bundlers are a big lever for [web performance](./Web%20performance.md): they decide how much code each page has to download.

_Avoid:_ "bundler" and "framework" as the same — a framework shapes how a site is written; a bundler packages the result for the browser.

_Usage:_

"Our main script is 3 MB."

"The bundler is including a whole charting library on every page. Let's load it only on the dashboard."
