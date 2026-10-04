---
description: Passkeys, security keys, sign-in links, and signing in with another account, compared plainly so you know which to turn on.
published: 2026-10-04
---

Passwords have a basic flaw: they're a secret you have to type, so anyone who tricks you into typing it somewhere else has it. [Phishing](../cybersecurity-glossary/Phishing.md) pages, data leaks, and the reuse of one password on many sites all exploit that. Adding [multi-factor authentication](../cybersecurity-glossary/Multi-factor%20authentication%20%28MFA%29.md) helps a lot, but the password is still there to steal.

Several alternatives remove the password entirely, or make it matter much less. They're not equally strong, so here's what each one is, how it works, and where it falls short.

## At a glance

| Method | Resists phishing? | What you need | Best for |
| --- | --- | --- | --- |
| Passkeys | Yes | A phone, computer, or password manager | Everyday accounts, wherever they're offered |
| Security keys | Yes | A small physical key | Your most valuable accounts |
| Sign in with another account | As strong as that account | An account with Google, Apple, or your employer | Fewer passwords to manage |
| Email sign-in links | Partly | Access to your email | Accounts you rarely use |
| One-time codes by email or text | No | Your email or a phone number | Better than a password alone |

## The options, one by one

### 1. Passkeys

A passkey replaces the password with a pair of cryptographic keys, using the same well-tested maths that protects the rest of the web (see [cryptography](../cybersecurity-glossary/Cryptography.md)). The website keeps the public half, which is useless to a thief. The private half stays on your device, or is synced between your devices by your passkey provider, such as your phone's built-in password manager.

To sign in, you unlock it the way you unlock your phone: a fingerprint, your face, or a PIN. Your fingerprint or face never leaves your device; the website only learns that the check passed. That's straight from the [FIDO Alliance](https://fidoalliance.org/passkeys/), the industry group behind the standard.

The big win is that a passkey is tied to the real website. A lookalike phishing site can't use it, because the passkey simply won't work there. There's no secret for you to type into the wrong place. Passkeys are also always strong, so there's nothing to forget or reuse.

The catch: not every site offers them yet, and moving between phone ecosystems takes a little planning.

### 2. Security keys

A security key is a small physical device, usually plugged into a USB port or tapped against your phone, that does the same cryptographic job as a passkey, with the private key locked inside the hardware. Like passkeys, keys are tied to the real website, so phishing pages get nothing.

They're the strongest common option, and many security teams require them for administrators. The downsides are practical: you have to carry one, and you should register a spare in case you lose it.

### 3. Sign in with another account

"Sign in with Google" or "Sign in with Apple" lets one account vouch for you on many sites. At work, the same idea is called [single sign-on](../cybersecurity-glossary/Single%20sign-on%20%28SSO%29.md): you sign in to your company account once and get into everything else.

You have far fewer passwords to manage, which cuts down on reuse. But it concentrates the risk: if that one account is taken over, everything connected to it is exposed. This is only as safe as the account doing the vouching, so protect that account with a passkey or a security key.

### 4. Email sign-in links and codes

Some sites skip passwords by emailing you a link or a one-time code each time you sign in. There's nothing to remember or leak in a data breach.

The security now rests entirely on your email account, so whoever controls your inbox controls these accounts too. Codes can also be phished: a fake site can ask for the code and pass it on in real time. Fine for accounts you rarely use; not ideal for anything valuable.

### 5. Text-message codes

A code sent by text is usually a second step on top of a password, not a replacement. It's much better than a password alone, but it's the weakest common option. Texts can be intercepted, numbers can be hijacked by persuading a phone company to move them to a new SIM, and a phishing site can simply ask for the code. An authenticator app avoids the SIM-hijacking problem, but its codes can be phished the same way; only a passkey or a security key stops phishing.

## Biometrics aren't the secret

A fingerprint or face scan isn't an alternative to passwords on its own. It's how you unlock the real secret, a passkey, stored on your device. That's a good thing: you can't change your fingerprint if it leaks, so it's safer when it never leaves your phone.

## What to turn on today

- **Your email account first.** It can reset nearly every other password, so give it a passkey or a security key.
- **Then accounts holding money or work.** Banking, payments, your work account, and any account you use to sign in to others.
- **Use passkeys wherever a site offers them.** They're the best mix of strength and convenience available.
- **Use a password manager for everything else.** It makes every password unique, and it only fills them in on the real site, which also helps against phishing.
- **Keep recovery options up to date.** Backup codes, a spare security key, or a second device mean losing your phone isn't losing your accounts.

Passwords won't vanish overnight, but you don't have to wait. Every account you move to a passkey is one less secret waiting to be phished.
