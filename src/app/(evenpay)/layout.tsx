import Link from 'next/link';
import { Logo, Wordmark } from '@/components/Logo';
import { PLAY_URL } from '@/lib/site';

/**
 * Even Pay's header and footer. They live in this route group rather than the
 * root layout so the other apps hosted here (see `/pocket-scanner`) do not
 * carry Even Pay's branding. The group adds nothing to the URL: `/`,
 * `/privacy` and `/join` are exactly where they were.
 */
export default function EvenPayLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" aria-label="Even Pay home">
            <Wordmark />
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/terms" className="hidden text-muted transition hover:text-cream sm:inline">
              Terms
            </Link>
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
            <Link href="/terms" className="transition hover:text-cream">
              Terms of service
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
    </>
  );
}
