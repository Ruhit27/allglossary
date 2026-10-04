---
description: The journey from pressing Enter to seeing a page, one step at a time, and what each step looks like when it goes wrong.
published: 2026-10-04
---

You type an address, press Enter, and a page appears in about a second. In that second your [browser](../web-glossary/Browser.md) finds a computer somewhere in the world, opens a private line to it, asks for a page, and turns the answer into what you see. Usually it does all of that dozens of times over.

Knowing the steps is useful even if you never build a website. When a site "doesn't work", the error you get tells you which step failed, and that usually tells you whose problem it is.

Let's follow one address: https://example.com/shop.

## 1. The browser reads the address

A [URL](../web-glossary/URL.md) has parts. "https" is the scheme: it says to use [HTTPS](../web-glossary/HTTPS.md), the encrypted way of talking to websites. "example.com" is the [domain name](../web-glossary/Domain%20name.md): which site. "/shop" is the path: which page on that site.

If what you typed isn't a valid address, say just the word "shoes", the browser sends it to your search engine instead. That's why the address bar doubles as a search box.

## 2. It looks up where the site lives

Computers don't find each other by name. They use numeric [IP addresses](../web-glossary/IP%20address.md), like 203.0.113.42. Turning "example.com" into a number is the job of the [Domain Name System](../web-glossary/Domain%20Name%20System%20%28DNS%29.md), or DNS: the internet's contact list.

First the browser checks whether it already knows the answer from a recent visit. Answers are kept in a [cache](../web-glossary/Cache.md) for a while, at several levels. If not, your device asks a DNS resolver, usually run by your [internet service provider](../web-glossary/Internet%20service%20provider%20%28ISP%29.md), which finds the answer and passes it back.

## 3. It opens a private line

Now the browser connects to that address. Because the scheme is HTTPS, the two sides first agree on [encryption](../cybersecurity-glossary/Encryption.md), using a technology called [TLS](../cybersecurity-glossary/Transport%20Layer%20Security%20%28TLS%29.md), so nobody in between, like the café Wi-Fi or your provider, can read or change what follows.

During that setup the site shows a [certificate](../cybersecurity-glossary/Digital%20certificate.md) proving it really is example.com. If the certificate is missing, expired, or for a different name, the browser stops and shows a full-page warning. That warning means the browser can't confirm who it's talking to, so treat it seriously.

## 4. It asks for the page

With the line open, the browser sends a [request](../web-glossary/Request%20and%20response.md) in [HTTP](../web-glossary/HTTP.md), the common language of the web. In plain English it says: "GET me /shop, I prefer English, and here are the [cookies](../web-glossary/Cookie.md) you gave me last time." The cookies are how the site knows you're still logged in.

## 5. The server answers

On the other end, a [server](../web-glossary/Server.md) receives the request. Often the first thing to answer is a [CDN](../web-glossary/Content%20delivery%20network%20%28CDN%29.md): a network of copies stored close to visitors, so someone in Tokyo isn't waiting on a computer in Frankfurt. If the CDN has a fresh copy, it answers straight away.

Otherwise the request reaches the site's own [web server](../web-glossary/Web%20server.md). For a simple page it just sends a file. For a shop it may run code, ask a [database](../web-glossary/Database.md) for today's prices, and build the page on the spot.

The response starts with a three-digit [status code](../web-glossary/Status%20code.md): 200 means "here it is", 301 means "this moved, go there instead", 404 means "no such page", and 500 means "something broke on our side". Then comes the content itself, a file of [HTML](../web-glossary/HTML.md).

## 6. The browser builds the page

The HTML is a plain-text description of the page: this is a heading, this is a paragraph, this is a picture. The browser reads it and builds a live structure from it called the [DOM](../web-glossary/DOM.md).

The HTML also mentions other files it needs: [CSS](../web-glossary/CSS.md) stylesheets for the look, [JavaScript](../web-glossary/JavaScript.md) for the behavior, images, fonts. Each one is another request and response, repeating steps 4 and 5, or steps 2 to 5 for files that live on another domain. A typical page makes dozens. Files the browser has fetched before often come straight from its cache, which is why a site loads faster the second time.

## 7. You see it, and it comes alive

The browser combines the structure and the styles, works out where everything goes on your screen, and draws it. Meanwhile the JavaScript runs: menus open, the cart updates, more products load as you scroll. Some pages are built almost entirely by JavaScript in the browser; others arrive fully formed from the server. That trade-off is a whole topic of its own.

## When it goes wrong

Each step fails in its own recognisable way, which makes the error a useful clue.

| What you see | Which step failed | Whose problem it usually is |
| --- | --- | --- |
| "Server not found" or "This site can't be reached" | Step 2: the DNS lookup | A typo, your connection, or the site's DNS settings |
| A full-page certificate warning | Step 3: the private line | The site's certificate, or a network meddling with your traffic |
| "404 Not Found" | Step 5: no such page | A broken link, or a page that moved without a redirect |
| "500" or "503" | Step 5: the server failed | The site, so trying again later is all you can do |
| A blank or half-broken page | Steps 6 and 7: building the page | Usually a JavaScript error or a file that didn't load |

Next time a site misbehaves, check which row you're in. "It can't find the site" and "the site found me and then fell over" are very different problems, and now you can tell them apart.
