import type { Metadata } from 'next';
import Link from 'next/link';
import { PS_PLAY_URL, PS_PRIVACY_URL } from '@/lib/site';

// Absolute, or the root layout's "— Even Pay" template is appended.
export const metadata: Metadata = {
  title: { absolute: 'Pocket Scanner — scan documents to PDF' },
};

export default function PocketScanner() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 sm:py-28">
      <h1 className="text-4xl font-bold tracking-tight text-cream sm:text-5xl">Pocket Scanner</h1>
      <p className="mt-5 text-lg leading-relaxed">
        Scan documents to PDF, instantly. Pocket Scanner works offline, needs no account, and never
        uploads your scans: everything stays on your phone.
      </p>
      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <a
          href={PS_PLAY_URL}
          className="rounded-full bg-teal px-5 py-2.5 font-semibold text-on-teal transition hover:bg-action"
        >
          Get it on Google Play
        </a>
        <Link
          href="/pocket-scanner/terms"
          className="rounded-full border border-line px-5 py-2.5 font-semibold text-cream transition hover:border-teal"
        >
          Terms of service
        </Link>
        <a
          href={PS_PRIVACY_URL}
          className="rounded-full border border-line px-5 py-2.5 font-semibold text-cream transition hover:border-teal"
        >
          Privacy policy
        </a>
      </div>
    </section>
  );
}
