'use client';

import { useSearchParams } from 'next/navigation';
import { PACKAGE, PLAY_URL } from '@/lib/site';

/**
 * The parts of the invite page that depend on ?code=.
 *
 * Split out as the only client component on the page so the install button
 * above it is in the static HTML — see the note in page.tsx.
 */

/**
 * Invite codes are `encode(gen_random_bytes(5), 'hex')` — ten hex characters.
 * The range accepted is wider on purpose: this is a filter against junk, not a
 * format check, and the generator could change. Nothing that fails it is ever
 * put into a URL or shown as if it were a real code.
 */
const CODE = /^[0-9a-f]{6,32}$/i;

export function JoinActions() {
  const raw = useSearchParams().get('code') ?? '';
  const code = CODE.test(raw) ? raw.toLowerCase() : null;

  if (!code) {
    return (
      <p className="mt-8 text-sm leading-relaxed text-faint">
        This invite link is incomplete. Ask whoever sent it to share it again from the group&rsquo;s
        settings, or to read out the invite code.
      </p>
    );
  }

  /**
   * The custom-scheme fallback, for a phone that has the app but where App Link
   * verification has not completed — the only case that reaches this page with
   * Even Pay installed.
   *
   * It is a link and not a redirect on load. As a redirect it either did
   * nothing (in-app browsers cannot follow an intent URL) or bounced to the
   * Play listing for an app already on the phone. Both read as a dead link.
   */
  const intent =
    `intent://join/${code}#Intent;scheme=evenpay;package=${PACKAGE};` +
    `S.browser_fallback_url=${encodeURIComponent(PLAY_URL)};end`;

  return (
    <>
      <a
        href={intent}
        className="mt-3 w-full rounded-full border border-line px-7 py-4 text-base font-semibold text-cream transition hover:border-teal hover:text-teal"
      >
        Already have it? Open the group
      </a>

      <div className="mt-10 w-full rounded-2xl border border-line bg-surface p-6">
        <p className="text-sm leading-relaxed text-faint">
          Or open Even Pay, tap <strong className="text-cream">Join a group</strong> on the home
          screen, and enter
        </p>
        <p className="mt-3 font-mono text-2xl font-bold tracking-[0.2em] text-cream">{code}</p>
      </div>
    </>
  );
}
