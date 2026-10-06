<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# even-pay-legal: the public site at evenpay.co.in

This is the marketing site, the privacy policy, and the invite landing page for
the **Even Pay** Android app. The app lives in a separate, private repo
(`arjunsid07/even-pay`). Deployed by Vercel from this repo's root.

## Three things here are load-bearing. Changing them breaks the app silently.

Silently is the operative word: none of the three fails with an error anybody
sees. Each one degrades into "the invite link opens a browser instead of the
app", which is indistinguishable from the bug this site was rebuilt to fix.

### 1. `/join` must stay at `/join`

The app declares an Android App Link with `pathPrefix: "/join"` in its
`app.config.js`, hand-copied into `android/app/src/main/AndroidManifest.xml`.
Renaming or moving `src/app/join/` breaks **every invite link ever sent**, with
no error anywhere.

The invite URL is `https://evenpay.co.in/join/?code=<10 hex chars>`. The code is
in the query string rather than the path because this same URL has to work as a
web page for anybody without the app — a static page can only read `?code=`.

### 2. `/.well-known/assetlinks.json` must serve as JSON, from the apex, unredirected

`public/.well-known/assetlinks.json` is read by Android's verifier at install
time, not by a browser. It needs all of:

- **Real SHA-256 fingerprints**, one per signing certificate. The SHA-1
  registered for Google sign-in is a different digest of the same certificate
  and will not work here.

  **The upload key is in. The Play App Signing key is not, and that is the one
  that matters for anybody installing from Play.** An app installed from Play
  carries Google's signature, not yours, so until that fingerprint is added the
  link verifies for a locally built APK and for nothing else.

  Get it from Play Console → the app → Test and release → Setup → App signing →
  "App signing key certificate" → SHA-256, and add it as a second string in the
  array. Google holds that key; it cannot be derived from anything in either
  repo.

  Put nothing in that array that is not a real fingerprint. A placeholder is not
  an empty slot — an unparseable entry risks invalidating the whole statement,
  taking the valid fingerprint beside it down too.

  The upload key's own SHA-256 came from the keystore in the app repo:

      keytool -list -v -keystore credentials/upload-keystore.jks -alias upload
- **`content-type: application/json`**, set in `next.config.ts`.
- **To be served from the apex directly.** `evenpay.co.in` is the declared host,
  so `www` must redirect *to* the apex and not the other way round. Vercel's
  default when both domains are added is backwards; check it.

Verify on a device rather than assuming:

    adb shell pm get-app-links com.simpletoolslabs.evenpay

### 3. `/privacy#delete` is in the Play listing

Play stores the account-deletion URL separately from the policy URL, and both
point here. The `id="delete"` anchor on section 6 is what that second URL
targets, so it must keep existing.

The policy **wording** is carried over from the static page this replaced. It is
what a Play reviewer reads and what the data-safety declarations were made
against, so its claims have to keep matching the app's actual behaviour. Restyle
it freely; rewriting its substance means the date at the top moves too.

## There is deliberately only one copy of the policy

The site used to be a hand-copied duplicate of a `legal/` folder in the app
repo, published on GitHub Pages because Pages will not serve a private repo on a
free plan. The copies drifted — the published policy stopped matching the one in
version control and nobody noticed for a month.

So: this repo is the only home for the policy, the join page and assetlinks. The
app repo does not carry a copy, and must not be given one again. A deploy is a
push.

## What couples this repo to the app repo

Only two things, and both are in `src/lib/site.ts` here:

- `PACKAGE` — permanent once published to Play, and what the invite page's
  `intent://` fallback is built from.
- the host, `evenpay.co.in` — must equal the `host` in the app's
  `app.config.js` intent filter, or verification has nothing to match.
