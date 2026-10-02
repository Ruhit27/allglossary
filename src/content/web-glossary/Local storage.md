---
description: Space in the browser where a website can save data on your device that stays after you close the tab.
---

A small storage area each [website](./Website.md) gets inside your [browser](./Browser.md). [JavaScript](./JavaScript.md) on the page can save things there — a dark-mode preference, a half-written draft, a game's high score — and read them on your next visit.

Unlike a [cookie](./Cookie.md), data in local storage is not sent to the [server](./Server.md) with every [request](./Request%20and%20response.md); it stays on your device. That makes it good for things only the page itself needs. It's also not shared between browsers or devices, and it vanishes if you clear site data or use private browsing.

Never keep anything sensitive there, like passwords: any script running on the page can read it.

_Avoid:_ "local storage" as a backup — it lives in one browser on one device and can be wiped at any time.

_Usage:_

"I lost my saved settings when I switched to my laptop."

"They were in local storage on your other browser. We'd need to save them to your account to sync them."
