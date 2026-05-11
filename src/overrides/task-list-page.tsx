import Link from 'next/link'
import { Search } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Read the full release for complete details and media context.'
  return value.length > 150 ? value.slice(0, 147).trimEnd() + '...' : value
}

function dateFilterMatch(dateValue: string, filter: string) {
  if (!filter || filter === 'all') return true
  const now = new Date()
  const date = new Date(dateValue)
  if (Number.isNaN(date.getTime())) return false
  if (filter === 'week') {
    const oneWeek = new Date(now)
    oneWeek.setDate(now.getDate() - 7)
    return date >= oneWeek
  }
  if (filter === 'month') {
    return date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth()
  }
  if (filter === 'year') {
    return date.getFullYear() === now.getFullYear()
  }
  return true
}

function getCategoryLabel(post: { content?: Record<string, unknown> | null }) {
  const category = typeof post?.content?.category === 'string' ? post.content.category : ''
  return category.trim() || 'General'
}

function normalize(value?: string) {
  return (value || '').trim().toLowerCase()
}

export async function TaskListPageOverride({
  task,
  category,
  query,
  date,
}: {
  task: TaskKey
  category?: string
  query?: string
  date?: string
}) {
  const posts = await fetchTaskPosts('mediaDistribution', 36, { fresh: true })
  const route = SITE_CONFIG.tasks.find((item) => item.key === task)?.route || '/updates'
  const selectedCategory = normalize(category) || 'all'
  const selectedDate = normalize(date) || 'all'
  const selectedQuery = normalize(query)
  const categoryOptions = ['all', ...new Set(posts.map((post) => normalize(getCategoryLabel(post))).filter(Boolean))]

  const filtered = posts.filter((post) => {
    const categoryLabel = normalize(getCategoryLabel(post))
    const text = `${post.title} ${post.summary || ''} ${categoryLabel}`.toLowerCase()
    const categoryMatch = selectedCategory === 'all' || categoryLabel === selectedCategory
    const queryMatch = !selectedQuery || text.includes(selectedQuery)
    const dateMatch = dateFilterMatch(post.publishedAt || '', selectedDate)
    return categoryMatch && queryMatch && dateMatch
  })

  return (
    <div className="min-h-screen bg-[#f8f4f9] text-[#22072f]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-[#2a0a3f] p-6 text-white sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FFCC00]">Latest News</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Read the latest stories from {SITE_CONFIG.name}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#e8ceee]">
            Discover fresh press releases with category and date filters built for fast newsroom scanning and deeper story discovery.
          </p>
          <form action={route} className="mt-6 grid gap-3 rounded-2xl bg-white/10 p-4 md:grid-cols-[1.2fr_0.7fr_0.7fr_auto]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
              <input
                name="q"
                defaultValue={query || ''}
                placeholder="Search latest news..."
                className="h-11 w-full rounded-xl border border-white/25 bg-white/12 pl-10 pr-4 text-sm text-white outline-none focus:border-[#FFCC00]"
              />
            </div>
            <select
              name="category"
              defaultValue={selectedCategory}
              className="h-11 rounded-xl border border-white/25 bg-white/12 px-3 text-sm text-white outline-none focus:border-[#FFCC00]"
            >
              {categoryOptions.map((item) => (
                <option key={item} value={item} className="text-black">
                  {item === 'all' ? 'All categories' : item.charAt(0).toUpperCase() + item.slice(1)}
                </option>
              ))}
            </select>
            <select
              name="date"
              defaultValue={selectedDate}
              className="h-11 rounded-xl border border-white/25 bg-white/12 px-3 text-sm text-white outline-none focus:border-[#FFCC00]"
            >
              <option value="all" className="text-black">All time</option>
              <option value="week" className="text-black">Past 7 days</option>
              <option value="month" className="text-black">This month</option>
              <option value="year" className="text-black">This year</option>
            </select>
            <button type="submit" className="h-11 rounded-xl bg-[#EB5B00] px-5 text-sm font-semibold text-white transition hover:bg-[#B12C00]">
              Filter
            </button>
          </form>
        </section>

        <section className="mt-8">
          {filtered.length ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post) => (
                <article key={post.id} className="hover-rise rounded-3xl border border-[#ead2eb] bg-white p-5">
                  <img
                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80"
                    alt="Press release card"
                    className="h-44 w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#9a558f]">{getCategoryLabel(post)}</p>
                  <h2 className="mt-2 text-xl font-semibold leading-snug text-[#301339]">{post.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#5c3752]">{excerpt(post.summary)}</p>
                  <div className="mt-5 flex items-center justify-end text-xs text-[#7d5c77]">
                    <span>{post.authorName || 'Editorial Desk'}</span>
                  </div>
                  <Link
                    href={`${route}/${post.slug}`}
                    className="mt-5 inline-flex rounded-full border border-[#d5bad8] bg-[#f9f1fb] px-4 py-2 text-sm font-semibold text-[#640D5F] transition hover:bg-[#f0e0f3]"
                  >
                    Read Release
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-[#d7bfd9] bg-white p-10 text-center text-sm text-[#6f4f67]">
              No news matched your current filters. Try broadening the category or date range.
            </div>
          )}
        </section>

        <section className="mt-12 rounded-3xl border border-[#e7cde9] bg-white p-6">
          <h3 className="text-xl font-semibold text-[#2e1239]">Need wider coverage for your next announcement?</h3>
          <p className="mt-2 text-sm leading-7 text-[#5c3752]">
            Publish through our media distribution workflow to position your story for stronger visibility.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/create/mediaDistribution" className="rounded-full bg-[#EB5B00] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#B12C00]">
              Submit Release
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
