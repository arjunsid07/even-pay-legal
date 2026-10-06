import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import { Logo, Wordmark } from '@/components/Logo';
import { PLAY_URL, SITE_URL } from '@/lib/site';
import './globals.css';

/**
 * The app's own typeface, so the site and the product read as one thing.
 * next/font self-hosts it, so there is no request to Google at runtime -- which
 * matters on a page whose whole job is to load fast on a bad connection.
 */
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Even Pay — split expenses without the awkwardness',
    template: '%s — Even Pay',
  },
  description:
    'Split bills with friends, flatmates and on trips. Works fully offline with no account, and splits to the exact paisa so a group can always settle to zero.',
  openGraph: {
    title: 'Even Pay — split expenses without the awkwardness',
    description:
      'Split bills with friends, flatmates and on trips. Works fully offline with no account.',
    url: SITE_URL,
    siteName: 'Even Pay',
    type: 'website',
  },
  // The invite page is per-group and has nothing to index.
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#07100F',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans antialiased">
        <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <Link href="/" aria-label="Even Pay home">
              <Wordmark />
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-muted transition hover:text-cream">
                Privacy
              </Link>
              <a
                href={PLAY_URL}
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
            <div className="flex items-center gap-3 text-faint">
              <Logo size={24} className="text-faint" />
              <span>Even Pay · Simple Tools Labs</span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-faint">
              <Link href="/privacy" className="transition hover:text-cream">
                Privacy policy
              </Link>
              <Link href="/privacy#delete" className="transition hover:text-cream">
                Delete your data
              </Link>
              <a href={PLAY_URL} className="transition hover:text-cream">
                Google Play
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
