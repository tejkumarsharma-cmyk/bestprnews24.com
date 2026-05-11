import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

export function FooterOverride() {
  return (
    <footer className="bg-[#1c062b] text-[#f3def5]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <p className="text-xl font-bold text-white">{SITE_CONFIG.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-7 text-[#e2bee6]">
            Launch distribution-ready press releases with credibility-focused presentation, clear calls-to-action, and search-friendly structure.
          </p>
          <p className="mt-5 inline-flex rounded-full border border-[#FFCC00]/35 bg-[#FFCC00]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#FFCC00]">
            Media Press Release
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FFCC00]">Company</p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link href="/about" className="hover:text-white">About Us</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/updates" className="hover:text-white">Latest News</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FFCC00]">Resources</p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link href="/create/mediaDistribution" className="hover:text-white">Submit Release</Link>
            <Link href="/search" className="hover:text-white">Search</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-[#d7b2db] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <p>Built for announcements, launches, and media-ready storytelling.</p>
        </div>
      </div>
    </footer>
  )
}
