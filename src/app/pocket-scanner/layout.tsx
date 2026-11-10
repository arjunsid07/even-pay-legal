import type { Metadata } from 'next';
import Link from 'next/link';
import { PS_PLAY_URL, PS_PRIVACY_URL } from '@/lib/site';

/**
 * Pocket Scanner, a separate app by the same developer, hosted here so its
 * legal pages live on a real domain. Everything under `/pocket-scanner` gets
 * this header and footer instead of Even Pay's.
 */
export const metadata: Metadata = {
  title: {
    default: 'Pocket Scanner — scan documents to PDF',
    template: '%s — Pocket Scanner',
  },
  description:
    'Pocket Scanner turns your phone into a fast, private document scanner. Scan to PDF offline, with no account and nothing uploaded.',
};

export default function PocketScannerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/pocket-scanner" className="text-lg font-bold tracking-tight text-cream">
            Pocket Scanner
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/pocket-scanner/terms" className="text-muted transition hover:text-cream">
              Terms
            </Link>
            <a
              href={PS_PLAY_URL}
              className="rounded-full bg-teal px-4 py-2 font-semibold text-on-teal transition hover:bg-action"
            >
              Get the app
            </a>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span className="text-faint">Pocket Scanner</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-faint">
            <Link href="/pocket-scanner/terms" className="transition hover:text-cream">
              Terms of service
            </Link>
            <a href={PS_PRIVACY_URL} className="transition hover:text-cream">
              Privacy policy
            </a>
            <a href={PS_PLAY_URL} className="transition hover:text-cream">
              Google Play
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
