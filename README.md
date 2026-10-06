# evenpay.co.in

The public site for **Even Pay** — an Android app for splitting expenses.
Marketing page, privacy policy, and the landing page an invite link points at.

Next.js (App Router) + Tailwind, deployed on Vercel. Every route is static.

| route | what it is |
| --- | --- |
| `/` | the landing page |
| `/privacy` | the privacy policy. `#delete` is the account-deletion section Play links to separately |
| `/join/?code=…` | where an invite link points, seen only by somebody without the app installed |
| `/.well-known/assetlinks.json` | what makes an invite link open the app rather than a browser |

## Running it

    npm install
    npm run dev          # http://localhost:3000
    npm run build        # what Vercel runs
    npm run lint

## Before changing anything

Read [AGENTS.md](AGENTS.md). Three things here are depended on by the Android
app and break it *silently* when changed: the `/join` path, the assetlinks file,
and the `#delete` anchor. None of them fails with an error anybody sees.

## Deploying

Vercel, from this repo's root — no Root Directory setting, no build command to
override. Push to `main` and it ships.

The domain needs `evenpay.co.in` set as the **primary** domain with `www`
redirecting to it, not the reverse: the apex is the host the app declares, and
the assetlinks file has to be served there directly.
