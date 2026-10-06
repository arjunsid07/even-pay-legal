import type { Metadata } from 'next';
import { CONTACT, PACKAGE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'What Even Pay stores, who processes it, and how to delete it. Even Pay works without an account; until you sign in, nothing leaves your phone.',
};

/**
 * The privacy policy.
 *
 * The WORDING here is carried over unchanged from the page this replaces. It is
 * the URL a Play reviewer opens and the one in the listing's data-safety
 * section, so its claims have to keep matching both the app's behaviour and the
 * declarations already made to Google. Restyling it was safe; rewriting it is
 * not a thing to do casually, and the date at the top has to move if the
 * substance ever does.
 *
 * `#delete` is load-bearing: Play stores it as the account-deletion URL
 * separately from the policy URL, so that anchor must keep existing.
 */

function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mt-12 scroll-mt-28 text-xl font-semibold tracking-tight text-cream">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-7 text-base font-semibold text-cream">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed">{children}</p>;
}

function Mail() {
  return (
    <a href={`mailto:${CONTACT}`} className="font-semibold text-teal hover:underline">
      {CONTACT}
    </a>
  );
}

function Table({ head, rows }: { head: [string, string]; rows: [string, string][] }) {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-line">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-surface">
            <th className="w-2/5 px-4 py-3 font-semibold text-cream">{head[0]}</th>
            <th className="px-4 py-3 font-semibold text-cream">{head[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b]) => (
            <tr key={a} className="border-t border-line align-top">
              <td className="px-4 py-3 text-cream">{a}</td>
              <td className="px-4 py-3">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Privacy() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <header className="border-b border-line pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-faint">
          Last updated 1 September 2026 · Applies to the Even Pay Android app (
          <code className="rounded bg-surface px-1.5 py-0.5 text-[0.85em]">{PACKAGE}</code>)
        </p>
      </header>

      <p className="mt-8 text-lg leading-relaxed text-cream">
        Even Pay works without an account. Until you choose to sign in, everything you record stays
        on your phone and is never sent anywhere.
      </p>
      <P>
        This policy explains what changes when you do sign in, what we store, who processes it, and
        how to get rid of it. It describes the app as it actually behaves — not as a template.
      </P>

      <H2>1. Using the app without an account</H2>
      <P>You can install Even Pay and use every feature without signing in. In that state:</P>
      <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
        <li>Expenses, people, groups and balances are stored only in a database on your device.</li>
        <li>None of it is transmitted to us or to anyone else.</li>
        <li>
          Uninstalling the app deletes all of it permanently. There is no copy to restore.
        </li>
      </ul>
      <P>The only network activity in this state is advertising (section 5).</P>

      <H2>2. What we store when you sign in</H2>
      <P>
        Signing in uses Google Sign-In and creates an account so your data can sync across devices
        and be shared with people you split with. From that point the following is stored on our
        servers:
      </P>
      <Table
        head={['Data', 'Why']}
        rows={[
          [
            'Your email address, display name and profile picture URL, from your Google account',
            'To identify your account and show your name to people you share expenses with',
          ],
          [
            'Your expenses: description, amount, currency, category, date, who paid and how it was split',
            "This is the app's purpose",
          ],
          ['Groups you create and who is in them', 'Same'],
          ['Settlements you record', 'Same'],
          [
            'A notification token for each device you sign in on',
            'To tell you when somebody adds an expense that includes you. Deleted when you sign out (section 6)',
          ],
          [
            'Whether you have purchased the ad-free upgrade',
            'So the purchase follows your account rather than one phone',
          ],
        ]}
      />
      <P>
        We do not collect your location, contacts list, photos, phone number, device identifiers
        beyond the notification token, or any payment details. Purchases are handled entirely by
        Google Play; we never see your card.
      </P>

      <H2>3. Information about other people</H2>
      <P>
        This section matters more than most, because Even Pay is about other people&rsquo;s money as
        well as your own.
      </P>
      <P>
        When you add somebody to split with, you type their name, and optionally their email
        address. If you are signed in, that name and email are stored on our servers so the expense
        can be shared.
      </P>
      <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
        <li>
          <strong className="text-cream">Nothing is sent to that address by us.</strong> There is no
          invitation email. The address is used only to recognise that person if they later sign in
          to Even Pay themselves.
        </li>
        <li>
          If they do sign in with that verified address, the expenses they were already part of
          become visible <em>to them</em> — that is the point of adding it.
        </li>
        <li>
          You are responsible for having a reasonable basis to enter someone else&rsquo;s email
          address. If you would not be comfortable telling them you had, do not enter it. A name
          alone works perfectly well.
        </li>
      </ul>

      <H2>4. Who processes your data</H2>
      <Table
        head={['Who', 'What they handle']}
        rows={[
          [
            'Supabase',
            'Hosts the database, authentication and server functions. Your account and expense data live here.',
          ],
          [
            'Google — Sign-In',
            'Authenticates you. We receive your email, name and picture; Google does not receive your expenses.',
          ],
          [
            'Google — Firebase Cloud Messaging',
            'Delivers notifications. It receives the notification text, which names the person and the amount you owe.',
          ],
          ['Google — AdMob', 'Serves the banner advert. See section 5.'],
          ['Google Play', 'Processes the ad-free purchase.'],
        ]}
      />

      <H2>5. Advertising</H2>
      <P>
        The free version shows a single banner advert on list screens. There are no full-screen or
        video adverts.
      </P>
      <P>
        Google AdMob may use an advertising identifier to select adverts and measure them. You can
        reset or delete that identifier in Android&rsquo;s settings under Settings → Privacy → Ads.
        AdMob&rsquo;s own policy is at{' '}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          className="text-teal hover:underline"
        >
          policies.google.com/technologies/partner-sites
        </a>
        .
      </P>
      <P>
        Buying the one-off ad-free upgrade removes the banner permanently for your account. Every
        other feature is free either way — the purchase does not unlock anything.
      </P>

      <H2 id="delete">6. Deleting your data</H2>
      <div className="mt-5 rounded-2xl border border-line bg-surface p-6">
        <h3 className="text-base font-semibold text-cream">Delete your account and its data</h3>
        <p className="mt-3 leading-relaxed">
          Email <Mail /> from the address you signed in with, with the subject{' '}
          <strong className="text-cream">Delete my account</strong>. Your account and the data
          listed below are deleted within 30 days, and we will confirm when it is done.
        </p>
        <p className="mt-3 leading-relaxed">
          <strong className="text-cream">Deleted:</strong> your account and sign-in identity, your
          profile (name, email, picture), your notification tokens, and your record of the ad-free
          purchase.
        </p>
      </div>

      <H3>What is not deleted, and why</H3>
      <P>
        Expenses you shared with other people are not deleted, because they are not solely yours. An
        expense recorded between you and three friends is part of <em>their</em> ledger too, and
        removing it would silently change what those people are owed. Your rows are unlinked from
        your identity instead: they revert to being ordinary contact entries in the ledgers of the
        people who added you, exactly as they were before you signed in.
      </P>
      <P>
        If you want an expense itself removed, delete it in the app, or ask the person who created
        it to.
      </P>

      <H3>Signing out, and uninstalling</H3>
      <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
        <li>
          <strong className="text-cream">Signing out</strong> removes this device&rsquo;s
          notification token and unlinks your account locally. Your expenses stay on the phone and
          on the server.
        </li>
        <li>
          <strong className="text-cream">Uninstalling</strong> destroys the on-device copy. If you
          never signed in, that is everything, and it is unrecoverable.
        </li>
      </ul>

      <H2>7. Retention</H2>
      <P>
        Data is kept while your account exists. Rows are marked deleted rather than erased
        immediately, so that a device that has been offline cannot resurrect them when it reconnects
        and so money history stays auditable. Deleted rows are purged on the schedule described in
        section 6.
      </P>

      <H2>8. Security</H2>
      <P>
        Traffic between the app and our servers is encrypted in transit. Access to your data is
        enforced at the database level: a signed-in account can read only its own data and data
        belonging to groups and expenses it is part of. This is enforced by the database itself
        rather than by the app, so a modified client cannot read somebody else&rsquo;s ledger.
      </P>
      <P>
        No system is perfect. If you believe you have found a security problem, please email{' '}
        <Mail /> rather than posting it publicly, and we will respond.
      </P>

      <H2>9. Children</H2>
      <P>
        Even Pay is not directed at children under 13, and we do not knowingly collect their data.
        If you believe a child has created an account, email us and we will delete it.
      </P>

      <H2>10. Your rights</H2>
      <P>
        You can ask for a copy of your data, ask for it to be corrected, or ask for it to be
        deleted, using the address below. If you are in a jurisdiction that grants you additional
        rights over your personal data, those rights apply.
      </P>

      <H2>11. Changes</H2>
      <P>
        If this policy changes materially, the date at the top changes and the app will tell you the
        next time you open it. Continuing to use Even Pay after that means you accept the revised
        policy.
      </P>

      <H2>12. Contact</H2>
      <P>
        <Mail />
      </P>
    </article>
  );
}
