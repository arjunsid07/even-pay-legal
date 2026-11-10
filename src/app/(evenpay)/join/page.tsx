import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Logo } from '@/components/Logo';
import { PLAY_URL } from '@/lib/site';
import { JoinActions } from './JoinActions';

export const metadata: Metadata = {
  title: 'Join a group',
  description: 'Open this invite in Even Pay, or install it and join with the code.',
  // Per-group and useless to a search engine; there is nothing here to index.
  robots: { index: false, follow: false },
};

/**
 * Where an Even Pay invite link points — and the page almost nobody sees.
 *
 * This URL is declared as an Android App Link in the app's app.config.js, so on
 * a phone with Even Pay installed Android routes it into the app directly and
 * this page is never rendered. What reaches it is: the app not installed, a
 * desktop browser, iOS, or a device where verification has not completed.
 *
 * ------------------------------------------------------------------------
 * Two things here are load-bearing and must not be "tidied"
 * ------------------------------------------------------------------------
 *
 * 1. THE PATH. The app's intent filter is pathPrefix "/join". Moving or
 *    renaming this route breaks every invite link ever sent, and it breaks
 *    them silently — the link opens a browser instead of the app, with nothing
 *    anywhere saying why.
 *
 * 2. THIS FILE STAYING A SERVER COMPONENT. Everything a person needs in order
 *    to act — what the page is, the install button — is in the static HTML, so
 *    it works before any JavaScript arrives and works if none ever does. Only
 *    the parts that genuinely depend on ?code= are a client component, and
 *    they degrade to nothing rather than to a broken page. This page is opened
 *    disproportionately inside chat-app browsers on bad connections, which is
 *    the worst place to need a hydrated bundle before showing a button.
 *
 * The previous version of this page redirected to intent://join/<code> on load.
 * That is what the App Link replaces: an intent URL is a no-op inside WhatsApp's
 * in-app browser, so nothing happened, browser_fallback_url never fired either,
 * and the page just sat there looking broken.
 */
export default function Join() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-5 py-20 text-center sm:py-28">
      <Logo size={56} className="text-teal" />

      <h1 className="mt-8 text-3xl font-bold leading-tight tracking-tight text-cream sm:text-4xl">
        You have been invited to a group
      </h1>
      <p className="mt-5 text-lg leading-relaxed">
        Even Pay splits expenses with the people you actually split them with. Install it, sign in,
        and you will land straight in the group.
      </p>

      <a
        href={PLAY_URL}
        className="mt-9 w-full rounded-full bg-teal px-7 py-4 text-base font-semibold text-on-teal transition hover:bg-action"
      >
        Get Even Pay
      </a>

      {/*
        Everything below needs the query string, which is only available in the
        browser. The fallback is deliberately empty rather than a spinner: the
        page above it is already complete and actionable, and a skeleton would
        imply something is missing when nothing is.
      */}
      <Suspense fallback={null}>
        <JoinActions />
      </Suspense>
    </div>
  );
}
