import type { Metadata } from 'next';
import { CONTACT, PS_PACKAGE, PS_PRIVACY_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms for using Pocket Scanner: your documents stay yours and on your phone, the app is ad-supported with an optional one-time purchase to remove ads.',
};

/**
 * Pocket Scanner's terms of service. This URL is the one in Pocket Scanner's
 * Play listing, so it must stay at `/pocket-scanner/terms`. The date at the top
 * moves whenever the substance changes.
 */

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 text-xl font-semibold tracking-tight text-cream">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed">{children}</p>;
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="font-semibold text-teal hover:underline">
      {children}
    </a>
  );
}

export default function Terms() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <header className="border-b border-line pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-faint">
          Last updated 10 November 2026 · Applies to the Pocket Scanner Android app (
          <code className="rounded bg-surface px-1.5 py-0.5 text-[0.85em]">{PS_PACKAGE}</code>)
        </p>
      </header>

      <div className="mt-8 rounded-xl border border-line bg-surface p-5 leading-relaxed">
        <strong className="text-cream">The short version.</strong> Pocket Scanner is free to use,
        supported by ads, with an optional one-time purchase that removes them. Your documents stay
        on your phone and are yours. Use the app lawfully, and keep your own copies of anything
        important.
      </div>

      <H2>Agreement</H2>
      <P>
        These terms apply to the Pocket Scanner Android application (&ldquo;the app&rdquo;),
        provided by Arjun Sidana (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By installing or using the
        app you agree to them. If you do not agree, please uninstall the app.
      </P>

      <H2>Using the app</H2>
      <P>
        We grant you a personal, non-exclusive, non-transferable licence to use the app on devices
        you own or control, for any lawful purpose. You may not copy, modify, resell or redistribute
        the app, or attempt to reverse engineer it except where the law allows.
      </P>

      <H2>Your documents</H2>
      <P>
        Everything you scan, edit and export belongs to you. The app processes it on your device
        only; we never receive, see or store it. See the <A href={PS_PRIVACY_URL}>Privacy Policy</A>{' '}
        for details.
      </P>
      <P>
        You are responsible for what you scan and share. Only scan documents you have the right to
        copy, and do not use the app to forge, alter or misrepresent documents, signatures or
        identity cards.
      </P>
      <P>
        Because your files exist only on your device, they are lost if you delete them, clear the
        app&rsquo;s data, uninstall the app or lose the device. Keep your own copies of anything
        important. If you protect a PDF with a password, we cannot recover that password for you.
      </P>

      <H2>Ads and purchases</H2>
      <P>
        The app shows ads served by Google AdMob. Some features can be unlocked by choosing to watch
        a rewarded ad; this is always optional.
      </P>
      <P>
        You can remove ads with a one-time in-app purchase made through Google Play. Payment,
        billing and refunds are handled by Google Play under its own terms and refund policy. The
        purchase is tied to your Google account and can be restored on a new device signed in to the
        same account.
      </P>

      <H2>Changes and availability</H2>
      <P>
        We may update the app, change or remove features, or stop offering it at any time. We will
        try to give notice in the app&rsquo;s release notes for significant changes.
      </P>

      <H2>No warranty</H2>
      <P>
        The app is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without warranties
        of any kind, to the fullest extent permitted by law. We do not guarantee that it will be
        error-free, that scans will be accurate or legible, or that exported files will be accepted
        by any particular recipient.
      </P>

      <H2>Limitation of liability</H2>
      <P>
        To the fullest extent permitted by law, we are not liable for any indirect, incidental or
        consequential loss, or for any loss of data or documents, arising from your use of the app.
        Our total liability for any claim is limited to the amount you paid us for the app, if any.
        Nothing in these terms limits rights you have under consumer protection laws that cannot be
        excluded.
      </P>

      <H2>Governing law</H2>
      <P>
        These terms are governed by the laws of India. This does not take away any mandatory
        protection you have under the laws of the country where you live.
      </P>

      <H2>Changes to these terms</H2>
      <P>
        If these terms change, the updated version will be posted at this address with a new date
        at the top. Continuing to use the app after a change means you accept the updated terms.
      </P>

      <H2>Contact</H2>
      <P>
        Questions about these terms or the app can be sent to{' '}
        <A href={`mailto:${CONTACT}`}>{CONTACT}</A>.
      </P>
    </article>
  );
}
