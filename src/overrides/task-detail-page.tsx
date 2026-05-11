import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Facebook, Linkedin, Link2, Twitter } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPostBySlug, fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

export async function TaskDetailPageOverride({ slug }: { task: TaskKey; slug: string }) {
  const post = await fetchTaskPostBySlug('mediaDistribution', slug)
  if (!post) notFound()
  const recent = (await fetchTaskPosts('mediaDistribution', 10, { fresh: true })).filter((item) => item.slug !== slug).slice(0, 6)
  const content = (post.content || {}) as Record<string, unknown>
  const html = formatRichHtml((content.body as string) || post.summary || '', 'Post body will appear here.')
  const shareUrl = `/updates/${post.slug}`

  return (
    <div className="min-h-screen bg-[#f8f4f9] text-[#22072f]">
      <NavbarShell />
      <section className="bg-[#2a0a3f] py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FFCC00]">Single Press Release</p>
          <h1 className="mt-3 max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#ead3ef]">
            Official media release from {post.authorName || 'Editorial Desk'} with timeline, story context, and distribution-ready detail.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-[#e4c8eb]">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>›</span>
            <Link href="/updates" className="hover:text-white">Latest News</Link>
            <span>›</span>
            <span className="truncate text-white">{post.title}</span>
          </div>
        </div>
      </section>

      <main className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_310px] lg:px-8">
        <article className="rounded-3xl border border-[#e7cde9] bg-white p-5 sm:p-8">
          <div className="overflow-hidden rounded-2xl border border-[#ecd9ef]">
            <img
              src="https://images.unsplash.com/photo-1551818255-e6e10975cd17?auto=format&fit=crop&w=1400&q=80"
              alt="Featured press release"
              className="h-[280px] w-full object-cover sm:h-[380px]"
            />
          </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#efdff1] bg-[#faf5fb] px-4 py-3 text-sm">
            <div className="flex flex-wrap items-center gap-3 text-[#5b3554]">
              <span>By {post.authorName || 'Editorial Desk'}</span>
            </div>
            <div className="flex items-center gap-2">
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`} className="rounded-full border border-[#ddc3e0] p-2 text-[#640D5F] hover:bg-white">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Share on X</span>
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} className="rounded-full border border-[#ddc3e0] p-2 text-[#640D5F] hover:bg-white">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Share on Facebook</span>
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} className="rounded-full border border-[#ddc3e0] p-2 text-[#640D5F] hover:bg-white">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">Share on LinkedIn</span>
              </a>
              <a href={shareUrl} className="rounded-full border border-[#ddc3e0] p-2 text-[#640D5F] hover:bg-white">
                <Link2 className="h-4 w-4" />
                <span className="sr-only">Copy link</span>
              </a>
            </div>
          </div>

          <div className="prose prose-lg mt-8 max-w-none prose-headings:text-[#2f1139] prose-p:text-[#51314b] prose-a:text-[#B12C00]">
            <RichContent html={html} />
          </div>

          <section className="mt-10 border-t border-[#f0dff2] pt-8">
            <h2 className="text-2xl font-semibold text-[#2f1139]">Related articles</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {recent.slice(0, 4).map((item) => (
                <Link key={item.id} href={`/updates/${item.slug}`} className="rounded-2xl border border-[#ecd6ef] bg-[#faf5fb] p-4 hover:bg-[#f4e9f7]">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#9a558f]">Related Story</p>
                  <p className="mt-2 text-base font-semibold leading-7 text-[#34173d]">{item.title}</p>
                </Link>
              ))}
            </div>
          </section>
        </article>

        <aside className="space-y-5">
          <div className="rounded-3xl border border-[#e7cfe9] bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a4569a]">Latest News</p>
            <div className="mt-4 space-y-3">
              {recent.slice(0, 5).map((item) => (
                <Link key={item.id} href={`/updates/${item.slug}`} className="block rounded-xl border border-[#eddcf0] bg-[#faf6fc] px-4 py-3 hover:bg-[#f3e8f6]">
                  <p className="text-sm leading-6 text-[#4e2a41]">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#e7cfe9] bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a4569a]">Launch Your Story</p>
            <p className="mt-3 text-sm leading-7 text-[#5b3554]">
              Ready to publish your own release? Create a distribution-ready story page in minutes.
            </p>
            <Link
              href="/create/mediaDistribution"
              className="mt-4 inline-flex rounded-full bg-[#EB5B00] px-4 py-2 text-sm font-semibold text-white hover:bg-[#B12C00]"
            >
              Submit Release
            </Link>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  )
}
