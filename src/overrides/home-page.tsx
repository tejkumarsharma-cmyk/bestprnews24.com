import Link from 'next/link'
import { ArrowRight, CheckCircle2, Star } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const HOME_PAGE_OVERRIDE_ENABLED = true

const mediaLogos = ['FOX', 'ABC', 'NBC', 'MSN', 'Yahoo', 'Bing']

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=80',
    quote: 'Our launch moved from idea to major mentions in 48 hours.',
    text: 'Distribution quality is night-and-day compared to basic PR wires.',
  },
  {
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=700&q=80',
    quote: 'The newsroom layout made our story feel instantly credible.',
    text: 'We saw stronger engagement from journalists and partners.',
  },
  {
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=80',
    quote: 'We now publish every announcement through bestprnews24.com.',
    text: 'The platform is simple, fast, and built for real media visibility.',
  },
]

const howItWorks = [
  'Pick your plan and finalize your release details.',
  'Publish to a media-ready release page instantly.',
  'Get distributed and tracked across search and press channels.',
  'Monitor reach, engagement, and pickup in one place.',
]

const reviewCards = [
  { name: 'Nina Patel', rating: 5, text: 'Excellent support and very clean publication pages. Our client loved the final presentation.' },
  { name: 'Jordan Lee', rating: 5, text: 'Fast approval flow and strong visibility. Great for startup product launch announcements.' },
  { name: 'Shawn Brooks', rating: 4, text: 'The quality of layout and shareability stands out. Would like even more integrations.' },
  { name: 'Ari Gomez', rating: 5, text: 'Our SEO team saw improved indexing speed for published releases.' },
  { name: 'Maya Chen', rating: 5, text: 'Simple process, premium feel, and strong trust sections for conversion.' },
  { name: 'Luca Ray', rating: 4, text: 'Very polished interface on both desktop and mobile.' },
]

const faqItems = [
  {
    q: 'How quickly can my release go live?',
    a: 'Most releases can be published quickly after submission details are completed and verified.',
  },
  {
    q: 'Do you support analytics and performance tracking?',
    a: 'Yes. Pricing plans include visibility metrics and engagement-level insights for performance reviews.',
  },
  {
    q: 'Can agencies manage multiple client releases?',
    a: 'Yes. Agencies can run separate submissions and coordinate campaigns with clear publishing workflows.',
  },
  {
    q: 'Will my releases be mobile friendly?',
    a: 'Absolutely. Every page is optimized for responsive reading and social sharing across devices.',
  },
]

function shortSummary(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Open this release to read the full story and media details.'
  return value.length > 120 ? `${value.slice(0, 117).trimEnd()}...` : value
}

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 10, { fresh: true })
  const academyCards = posts.slice(0, 6)

  return (
    <div className="min-h-screen bg-[#f8f4f9] text-[#22072f]">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80')",
            }}
          />
          <div className="hero-overlay absolute inset-0 bg-black/40" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <div className="text-white">
              <p className="inline-flex rounded-full border border-[#FFCC00]/40 bg-[#FFCC00]/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFCC00]">
                Media Press Release
              </p>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Get your story in front of millions — instantly.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#f8dff8]">
                Publish high-impact press releases with premium layout, trust-focused presentation, and immediate visibility across digital media surfaces.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/create/mediaDistribution"
                  className="inline-flex items-center gap-2 rounded-full bg-[#EB5B00] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#B12C00]"
                >
                  Launch Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="grid max-w-[360px] grid-cols-3 gap-4">
                {mediaLogos.map((logo) => (
                  <div
                    key={logo}
                    className="flex h-24 w-24 items-center justify-center rounded-full border border-[#ffffff2b] bg-[#ffffff17] text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#640D5F]">Featured Placement</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Your brand in the right place</h2>
          <div className="brand-card-shadow mx-auto mt-8 max-w-md rounded-3xl border border-[#ebd4ef] bg-white p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-[#a4569a]">Featured Network</p>
            <p className="brand-gradient-text mt-3 text-4xl font-black">FOX</p>
            <p className="mt-2 text-lg font-semibold text-[#2a1230]">280M+ Views</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.quote} className="hover-rise overflow-hidden rounded-3xl border border-[#f0d9cc] bg-white">
                <img src={item.image} alt="Client success" className="h-44 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <p className="text-lg font-semibold text-[#B12C00]">{item.quote}</p>
                  <p className="mt-3 text-sm leading-7 text-[#5c3752]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a4569a]">Audience Focus</p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight">Who is this for?</h3>
            <p className="mt-4 max-w-xl text-sm leading-8 text-[#5c3752]">
              Whether you are launching a startup, scaling agency visibility, or announcing strategic company milestones, this platform is built for fast and credible communication.
            </p>
            <ul className="mt-6 space-y-3">
              {['Startups', 'Agencies', 'Entrepreneurs', 'Everyone'].map((label) => (
                <li key={label} className="flex items-center gap-3 rounded-2xl border border-[#ecd1ea] bg-white px-4 py-3 text-sm font-semibold text-[#3a1b4a]">
                  <CheckCircle2 className="h-4 w-4 text-[#EB5B00]" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#ead2eb] bg-white p-4">
            <div className="grid gap-3 sm:grid-cols-1">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                alt="Diverse group collaborating"
                className="h-full min-h-[320px] w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-[#ead2eb] bg-white p-4">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
              alt="Publishing workflow"
              className="h-full min-h-[330px] w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a4569a]">How It Works</p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight">Pick. Publish. Be Seen.</h3>
            <div className="mt-6 space-y-4">
              {howItWorks.map((step, index) => (
                <div key={step} className="rounded-2xl border border-[#e8d0e9] bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B12C00]">Step {index + 1}</p>
                  <p className="mt-2 text-sm leading-7 text-[#4e2a41]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 bg-[#2b0a3e]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-white md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-[#FFCC00]">5 Star Rated</p>
                <p className="mt-2 text-lg font-bold">4.9/5 Average</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-[#FFCC00]">Approved</p>
                <p className="mt-2 text-lg font-bold">Editorial Review</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-[#FFCC00]">Reviews</p>
                <p className="mt-2 text-lg font-bold">Verified Feedback</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a4569a]">Academy / Blog</p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight">Insights from recent releases</h3>
            </div>
            <Link href="/updates" className="rounded-full border border-[#cfafd4] bg-white px-5 py-2.5 text-sm font-semibold text-[#640D5F] hover:bg-[#f6edf7]">
              Explore
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {academyCards.map((post) => (
              <article key={post.id} className="hover-rise rounded-3xl border border-[#ead2eb] bg-white p-5">
                <img
                  src="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=700&q=80"
                  alt="Blog card cover"
                  className="h-36 w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <h4 className="mt-4 text-lg font-semibold text-[#2f1139]">{post.title}</h4>
                <p className="mt-2 text-sm leading-7 text-[#5c3752]">{shortSummary(post.summary)}</p>
                <Link href={`/updates/${post.slug}`} className="mt-4 inline-flex text-sm font-semibold text-[#EB5B00] hover:text-[#B12C00]">
                  Read Story
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold tracking-tight">Customer Reviews</h3>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviewCards.map((review) => (
              <article key={review.name} className="rounded-2xl border border-[#edd4ee] bg-white p-5">
                <div className="flex items-center gap-1 text-[#EB5B00]">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-7 text-[#4f2a42]">{review.text}</p>
                <p className="mt-4 text-sm font-semibold text-[#2f1139]">{review.name}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h3 className="text-center text-3xl font-bold tracking-tight">Frequently asked questions</h3>
          <div className="mt-8 rounded-3xl border border-[#ead2eb] bg-white p-5 sm:p-7">
            <Accordion type="single" collapsible>
              {faqItems.map((item, index) => (
                <AccordionItem key={item.q} value={`faq-${index}`} className="border-[#f0dff2]">
                  <AccordionTrigger className="text-left text-base font-semibold text-[#2f1139] hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-[#5c3752]">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="bg-[#FFCC00]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7f2d00]">Newsletter</p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#2f1139]">Be the First to Know</h3>
              <p className="mt-3 max-w-lg text-sm leading-7 text-[#5e2e10]">
                Receive publishing insights, release strategy notes, and weekly media visibility tips directly in your inbox.
              </p>
              <form className="mt-6 flex w-full flex-col gap-3 sm:max-w-lg sm:flex-row" action="/updates">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="h-12 flex-1 rounded-full border border-[#dda900] bg-white px-5 text-sm text-[#3a1b4a] outline-none ring-[#640D5F] focus:ring-2"
                />
                <button type="submit" className="h-12 rounded-full bg-[#640D5F] px-6 text-sm font-semibold text-white hover:bg-[#4f094b]">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="overflow-hidden rounded-3xl border border-[#e5b600] bg-white/35 p-3">
              <img
                src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80"
                alt="Newsletter"
                className="h-full min-h-[220px] w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
