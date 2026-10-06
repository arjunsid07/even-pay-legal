import Image from 'next/image';
import { PLAY_URL } from '@/lib/site';

/**
 * The landing page.
 *
 * The claims here are deliberately the ones the app can actually keep, and they
 * are the unusual ones: no account, real offline, exact arithmetic. "Split bills
 * easily" is what every competitor says and tells nobody anything.
 */

const FEATURES = [
  {
    title: 'No account needed',
    body: 'Install it and start splitting. Signing in is an upgrade for syncing and sharing, never a wall in front of the thing you opened the app to do.',
  },
  {
    title: 'Works with people who do not have it',
    body: 'Splitting a cab with a flatmate who will never install this is the normal case, not the edge case. Add them by name and settle up later.',
  },
  {
    title: 'Properly offline',
    body: 'Everything is recorded on your phone first and synced afterwards. On a trek, in a basement restaurant, on a flight — it makes no difference.',
  },
  {
    title: 'The numbers always add up',
    body: 'Split 100 three ways and it is 33, 33 and 34 — never 33.33 each. Amounts are whole paise throughout, so a group can always settle to exactly zero.',
  },
  {
    title: 'Groups remember how you split',
    body: 'Set a group to split evenly, by shares or by percentage once, and every new expense in it starts out that way.',
  },
  {
    title: 'Your data, exportable and deletable',
    body: 'Export any group or your whole history as a CSV. Delete your account from inside the app. Nothing is held hostage.',
  },
];

const SCREENS = [
  {
    src: '/screens/home.png',
    alt: 'The Even Pay home screen, showing an overall balance above a list of groups',
    label: 'Everything you owe, and are owed, on one screen',
  },
  {
    src: '/screens/group.png',
    alt: 'A group screen listing its expenses and each member’s balance',
    label: 'A group keeps its own history and balances',
  },
  {
    src: '/screens/expenses.png',
    alt: 'A list of expenses grouped under month headings',
    label: 'Every expense, grouped by month',
  },
  {
    src: '/screens/friends.png',
    alt: 'The friends list showing a balance beside each person',
    label: 'Per-person balances, settled or not',
  },
  {
    src: '/screens/activity.png',
    alt: 'The activity screen with a search field over past expenses',
    label: 'Search everything you have ever recorded',
  },
];

export default function Home() {
  return (
    <>
      {/* ------------------------------- hero ------------------------------- */}
      <section className="relative overflow-hidden">
        {/* One soft teal wash behind the fold. Cheap, and it stops the page
            reading as a wall of near-black. */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-18rem] h-[36rem] w-[64rem] -translate-x-1/2 rounded-full bg-teal/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 sm:pt-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-teal">
                Free · No account required
              </p>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-cream sm:text-6xl">
                Split expenses without
                <br className="hidden sm:block" /> the awkward maths.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed">
                Even Pay keeps track of who paid for what — on trips, in flatshares, over
                dinner — and tells everyone exactly what they owe. It works offline, it works
                without an account, and it works with people who have never heard of it.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={PLAY_URL}
                  className="rounded-full bg-teal px-7 py-3.5 text-base font-semibold text-on-teal transition hover:bg-action"
                >
                  Get it on Google Play
                </a>
                <a
                  href="#how"
                  className="rounded-full border border-line px-7 py-3.5 text-base font-semibold text-cream transition hover:border-teal hover:text-teal"
                >
                  See how it works
                </a>
              </div>
              <p className="mt-5 text-sm text-faint">
                Android · Free, with a one-off upgrade to remove the single banner ad
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[280px]">
              <PhoneFrame src="/screens/home.png" alt="Even Pay home screen" priority />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- features ----------------------------- */}
      <section id="how" className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            Built around how people actually split money
          </h2>
          <p className="mt-4 max-w-2xl text-lg">
            Not around how a spreadsheet would like them to.
          </p>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-ink p-7">
                <h3 className="text-lg font-semibold text-cream">{f.title}</h3>
                <p className="mt-3 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- screenshots --------------------------- */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">A look at it</h2>
          <div className="mt-12 flex snap-x snap-mandatory gap-7 overflow-x-auto pb-6">
            {SCREENS.map((s) => (
              <figure key={s.src} className="w-[230px] flex-none snap-start sm:w-[250px]">
                <PhoneFrame src={s.src} alt={s.alt} />
                <figcaption className="mt-4 text-sm leading-snug text-faint">{s.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------- close ------------------------------ */}
      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            Stop doing this in your head
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg">
            Record it once, and let everybody see the same number.
          </p>
          <a
            href={PLAY_URL}
            className="mt-9 inline-block rounded-full bg-teal px-8 py-4 text-base font-semibold text-on-teal transition hover:bg-action"
          >
            Get it on Google Play
          </a>
        </div>
      </section>
    </>
  );
}

/**
 * A screenshot in a phone-shaped bezel.
 *
 * The sources are 1080x2400, declared at that ratio so next/image can serve
 * something sized for the viewport. The alternative is shipping 380KB of PNG
 * per phone to somebody on mobile data, which is exactly who this page is for.
 */
function PhoneFrame({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-line bg-surface p-2 shadow-2xl shadow-black/40">
      <Image
        src={src}
        alt={alt}
        width={1080}
        height={2400}
        priority={priority}
        sizes="(max-width: 640px) 70vw, 280px"
        className="h-auto w-full rounded-[1.5rem]"
      />
    </div>
  );
}
