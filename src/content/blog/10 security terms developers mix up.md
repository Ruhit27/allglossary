---
description: Ten pairs of security words that get swapped in code reviews and meetings, and the one-line difference that keeps each pair straight.
published: 2026-10-04
---

Security has a vocabulary problem. Many of its words sound alike, and people swap them in meetings, tickets, and [code reviews](../programming-glossary/Code%20review.md). Usually nobody notices. Occasionally the mix-up hides a real gap: a team that thinks "we encrypt passwords" may be storing them in a form an attacker can turn back into the real thing.

Here are ten words developers mix up most, each with the word it gets confused with, and the one-line difference worth remembering.

### 1. Authentication is not authorization

[Authentication](../cybersecurity-glossary/Authentication.md) answers "who are you?": checking a password, a passkey, or a code from your phone. [Authorization](../cybersecurity-glossary/Authorization.md) answers "what are you allowed to do?": whether this signed-in person may see this invoice or delete this project.

The classic bug is doing the first and forgetting the second. A user signs in correctly, then changes a number in the [URL](../web-glossary/URL.md) from their own order to someone else's, and the app shows it, because it only checked that someone was logged in. Every request needs both checks.

### 2. Encryption is not hashing

[Encryption](../cybersecurity-glossary/Encryption.md) scrambles data so that someone with the right key can unscramble it. [Hashing](../cybersecurity-glossary/Hashing.md) turns data into a fixed-size fingerprint that can't be reversed.

That difference decides how passwords should be stored. A system doesn't need to know your password, only whether what you typed matches. So it stores a hash, never an encrypted password: encrypted passwords can be decrypted by anyone who steals the key along with the database. A hash can't be reversed, but it can be guessed at, by hashing common passwords and comparing. That's why good systems add a unique random salt to each password and use a deliberately slow password-hashing method, making mass guessing expensive.

### 3. A vulnerability is not an exploit

A [vulnerability](../cybersecurity-glossary/Vulnerability.md) is a weakness: a missing check, an old [library](../programming-glossary/Library.md), a setting left wide open. An [exploit](../cybersecurity-glossary/Exploit.md) is the method or code that actually takes advantage of it.

The difference matters when you decide what to fix first. A vulnerability with a public, working exploit is far more urgent than one that's only theoretical, even if the two look equally bad on paper.

### 4. A threat is not a risk

A [threat](../cybersecurity-glossary/Threat.md) is something that could cause harm: a criminal group, a careless insider, a flood in the server room. [Risk](../cybersecurity-glossary/Risk.md) combines how likely that harm is with how bad it would be.

"There's a threat of [ransomware](../cybersecurity-glossary/Ransomware.md)" describes the world. "Ransomware is our biggest risk, because our [backups](../cybersecurity-glossary/Backup.md) sit on the same network" describes your situation, and only that second sentence tells you what to do next.

### 5. Ransomware is one kind of malware

[Malware](../cybersecurity-glossary/Malware.md) is any software built to do harm: spying, stealing, wrecking. Ransomware is the kind that locks your data, often by encrypting it, and demands payment to unlock it.

Calling every infection "ransomware" makes the response sound clearer than it is. A spyware infection quietly stealing data for months is a different emergency from a locked file server, and it calls for different first steps.

### 6. Phishing is one kind of social engineering

[Social engineering](../cybersecurity-glossary/Social%20engineering.md) is any trick that gets a person to weaken security, using urgency, authority, or trust. [Phishing](../cybersecurity-glossary/Phishing.md) is the message-based version: a fake email, text, or chat that leads to a fake login page or a harmful file.

Social engineering also covers phone calls pretending to be IT, someone following you through a door, and a fake supplier asking to change bank details. Training that only covers suspicious emails leaves those wide open.

### 7. MFA is not just "a second password"

[Multi-factor authentication](../cybersecurity-glossary/Multi-factor%20authentication%20%28MFA%29.md) means proof from at least two different kinds of evidence: something you know (a password), something you have (a phone or security key), or something you are (a fingerprint).

Two passwords are still one kind, so stealing both is no harder than stealing one. MFA works because a stolen password alone usually isn't enough to get in. It isn't unbreakable, since attackers can still trick people into approving a sign-in, but it stops most password theft from turning into a break-in.

### 8. HTTPS doesn't mean the site is safe

[HTTPS](../web-glossary/HTTPS.md) encrypts the connection between your [browser](../web-glossary/Browser.md) and a website, so nobody in between can read or change the traffic. It says nothing about who runs the site or whether they're honest.

Phishing sites use HTTPS too, because certificates are free and quick to get. The padlock means "private line", not "trustworthy caller". Check the [domain name](../web-glossary/Domain%20name.md) instead.

### 9. A VPN doesn't make you secure

A [VPN](../cybersecurity-glossary/Virtual%20private%20network%20%28VPN%29.md) creates a protected tunnel across a network you don't fully trust, such as café Wi-Fi or the internet between home and the office. It doesn't scan for malware, block phishing, or fix weak passwords.

The old model "inside the VPN means trusted" is exactly what [zero trust](../cybersecurity-glossary/Zero%20trust.md) replaces: every request is checked on identity and context, wherever it comes from.

### 10. A penetration test is not a red team exercise

A [penetration test](../cybersecurity-glossary/Penetration%20testing.md) is a scoped, authorized hunt for weaknesses in particular systems: "test our login and payment pages for two weeks." A [red team](../cybersecurity-glossary/Red%20team.md) plays a realistic attacker against the whole organization, to see whether the defenders notice and respond.

A pen test tells you where the holes are. A red team exercise tells you whether anyone would spot someone climbing through one. You need both, at different stages.

## Why the words matter

None of these pairs is a pedantic point. Each mix-up maps to a real mistake: a missing permission check, passwords stored in a form that can be reversed, trusting a padlock, or treating a VPN as a wall. Getting the words right in a code review is often the quickest way to notice that the code got the idea wrong.
