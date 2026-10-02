---
description: A three-digit number in a server's response that says how the request went, such as 200 or 404.
---

Every [response](./Request%20and%20response.md) starts with a status code. The first digit tells you the category.

| Range | Meaning | Common example |
| --- | --- | --- |
| 2xx | Success | 200: here it is |
| 3xx | Go elsewhere | 301: this moved permanently to a new [URL](./URL.md) |
| 4xx | The [client](./Client.md) asked for something wrong | 404: not found; 403: not allowed |
| 5xx | The [server](./Server.md) failed | 500: something broke; 503: too busy or down |

Status codes are written for software, not people, but a few have become famous because sites show them on error pages. They also matter to search engines: a page that returns 404 gets dropped from results, which is why [SEO](./Search%20engine%20optimization%20%28SEO%29.md) cares about redirects.

_Avoid:_ "404" meaning the whole site is down — it means only that one address wasn't found.

_Usage:_

"Users see 'Page not found' after we renamed the blog posts."

"Set up 301 redirects from the old URLs, so they go to the new ones instead of returning 404."
