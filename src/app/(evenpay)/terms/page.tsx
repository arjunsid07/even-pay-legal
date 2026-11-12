import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT, PACKAGE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms for using Even Pay: it records who owes whom but never moves money, you are responsible for what you enter and who you add, and the app is free with an optional one-off upgrade to remove the banner ad.',
};

/**
 * Even Pay's terms of service.
 *
 * Every factual claim here has to agree with the privacy policy at /privacy,
 * which describes how the app actually behaves: no account needed, Google
 * Sign-In for sync, a single banner ad, a one-off upgrade that unlocks nothing
 * else, and deletion by email with shared expenses unlinked rather than erased.
 * If the app changes any of that, both pages change together, and the date at
 * the top of each moves.
 *
 * This URL may be pasted into the Play listing and is linked from
 * simpletoolslabs.co.in, so it must stay at /terms.
 */

function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mt-12 scroll-mt-28 text-xl font-semibold tracking-tight text-cream">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">{children}</ul>;
}

function B({ children }: { children: React.ReactNode }) {
  return <strong className="text-cream">{children}</strong>;
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="font-semibold text-teal hover:underline">
      {children}
    </Link>
  );
}

function Mail() {
  return (
    <a href={`mailto:${CONTACT}`} className="font-semibold text-teal hover:underline">
      {CONTACT}
    </a>
  );
}

export default function Terms() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <header className="border-b border-line pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-faint">
          Last updated 12 November 2026 · Applies to the Even Pay Android app (
          <code className="rounded bg-surface px-1.5 py-0.5 text-[0.85em]">{PACKAGE}</code>)
        </p>
      </header>

      <div className="mt-8 rounded-2xl border border-line bg-surface p-6 leading-relaxed">
        <B>The short version.</B> Even Pay keeps a record of who paid for what and who owes whom. It
        never moves money, so settling up happens outside the app, between you and the people you
        split with. The balances are only as accurate as what gets entered. It is free to use, with
        a single banner ad that a one-off purchase removes.
      </div>

      <H2>1. Agreement</H2>
      <P>
        These terms apply to the Even Pay Android application (&ldquo;the app&rdquo;), provided by
        Arjun Sidana as SimpleTools Labs (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By installing or using
        the app you agree to them. If you do not agree, please uninstall the app.
      </P>
      <P>
        How the app handles your data is described in the{' '}
        <A href="/privacy">Privacy Policy</A>, which forms part of these terms.
      </P>

      <H2>2. What Even Pay is, and is not</H2>
      <P>
        Even Pay is a record-keeping tool. It helps you and the people you share costs with keep
        track of expenses, work out balances and record settlements.
      </P>
      <UL>
        <li>
          <B>It does not transfer, hold or collect money.</B> It is not a bank, a wallet, a payment
          service or a lender. Recording a settlement in the app notes that a payment happened; it
          does not make one.
        </li>
        <li>
          <B>It does not enforce debts.</B> A balance in Even Pay is a calculation from the
          expenses entered, not a bill, an invoice or a legally binding claim. Whether and how
          anyone pays is between the people involved.
        </li>
        <li>
          <B>It is not financial, tax or legal advice.</B> If you need a record for tax or
          accounting purposes, check it against your own receipts.
        </li>
      </UL>

      <H2>3. Using the app</H2>
      <P>
        We grant you a personal, non-exclusive, non-transferable licence to use the app on devices
        you own or control, for any lawful purpose. You may not copy, modify, resell or redistribute
        the app, attempt to reverse engineer it except where the law allows, or try to access data
        that does not belong to you or to groups and expenses you are part of.
      </P>
      <P>
        Every feature works without an account. Signing in is optional, and is what lets your data
        sync across devices and be shared with the people you split with.
      </P>

      <H2>4. Your account</H2>
      <UL>
        <li>
          Signing in uses Google Sign-In. You are responsible for keeping access to that Google
          account secure, since anyone who can sign in as you can see and change your shared
          expenses.
        </li>
        <li>
          You can sign out at any time, and you can have your account deleted as described in{' '}
          <A href="/privacy#delete">section 6 of the Privacy Policy</A>.
        </li>
        <li>
          We may suspend or delete an account that is used to abuse other people, to harass the
          people it adds, or to interfere with the service. Where we reasonably can, we will tell
          you first and explain why.
        </li>
      </UL>

      <H2>5. What you enter, and who you add</H2>
      <P>
        You are responsible for the expenses, amounts, splits, settlements, names and email
        addresses you enter.
      </P>
      <UL>
        <li>
          <B>Accuracy is yours.</B> Even Pay calculates balances exactly from what is entered, but
          it cannot know whether what was entered is right. Check an expense before you rely on the
          balance it produces.
        </li>
        <li>
          <B>Other people.</B> Only add somebody&rsquo;s email address if you have a reasonable
          basis to, as the Privacy Policy explains; a name alone works perfectly well. Do not use
          the app to record false debts, to pressure or harass anyone, or to store anything
          unlawful or abusive in expense descriptions or names.
        </li>
        <li>
          <B>Shared expenses are shared.</B> Once you are signed in, the people in a group, and the
          people included in an expense, can see it. Members of a group can add, edit and delete
          its expenses, and anyone included in an expense can correct or delete it. A change
          somebody else makes to a shared expense changes your balance too.
        </li>
      </UL>

      <H2>6. Your data</H2>
      <P>
        What you record belongs to you, and you can export it as a CSV file at any time. If you
        never sign in, your data exists only on your phone: uninstalling the app or losing the phone
        destroys it permanently, and we cannot recover it. Export anything you want to keep.
      </P>
      <P>
        Expenses you share with other people are part of their records as well as yours. That is
        why deleting your account unlinks those expenses from your identity rather than erasing
        them from other people&rsquo;s ledgers, as the{' '}
        <A href="/privacy#delete">Privacy Policy</A> describes.
      </P>

      <H2>7. Ads and the ad-free upgrade</H2>
      <P>
        The free version shows a single banner advert, served by Google AdMob. You can remove it
        with a one-off in-app purchase through Google Play. The purchase removes the banner and
        nothing else: every other feature is free either way.
      </P>
      <P>
        Payment, billing and refunds are handled by Google Play under its own terms and refund
        policy; we never see your payment details. If you are signed in, the purchase follows your
        account rather than one phone.
      </P>

      <H2>8. Changes and availability</H2>
      <P>
        We may update the app, change or remove features, or stop offering it. Syncing and sharing
        depend on online services that can occasionally be unavailable; the app keeps working on
        your phone in the meantime and syncs when it can. If we ever stop running the online
        service, we will try to give notice in the app first, so you have time to export your
        data.
      </P>

      <H2>9. No warranty</H2>
      <P>
        The app is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without warranties
        of any kind, to the fullest extent permitted by law. We do not guarantee that it will be
        error-free or uninterrupted, or that balances will be correct when the expenses behind them
        are not.
      </P>

      <H2>10. Limitation of liability</H2>
      <P>
        To the fullest extent permitted by law, we are not liable for any indirect, incidental or
        consequential loss; for any loss of data; for any money owed, paid, unpaid or disputed
        between you and other people; or for decisions made on the basis of balances shown in the
        app. Our total liability for any claim is limited to the amount you paid us for the app, if
        any. Nothing in these terms limits rights you have under consumer protection laws that
        cannot be excluded.
      </P>

      <H2>11. Governing law</H2>
      <P>
        These terms are governed by the laws of India. This does not take away any mandatory
        protection you have under the laws of the country where you live.
      </P>

      <H2>12. Changes to these terms</H2>
      <P>
        If these terms change materially, the date at the top changes and the updated version is
        posted at this address. Continuing to use Even Pay after a change means you accept the
        revised terms.
      </P>

      <H2>13. Contact</H2>
      <P>
        Questions about these terms or the app: <Mail />
      </P>
    </article>
  );
}
