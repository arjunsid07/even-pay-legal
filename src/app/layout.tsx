import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { SITE_URL } from '@/lib/site';
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
        {children}
      </body>
    </html>
  );
}
