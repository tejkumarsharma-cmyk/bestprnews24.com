'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = true

const navLinks = [
  { label: 'Latest News', href: '/updates' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#ffffff26] bg-[#200730]/95 text-white backdrop-blur-xl">
      <div className="border-b border-[#ffffff1f] bg-[#640D5F]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
          <p className="uppercase tracking-[0.18em] text-[#FFCC00]">bestprnews24.com</p>
          <div className="hidden items-center gap-5 text-[#f7dff7] md:flex">
            <span>Global Distribution</span>
            <span>Real Media Reach</span>
            <span>24/7 Submission</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FFCC00]/60 bg-[#FFCC00]/15 font-bold text-[#FFCC00]">
            PR
          </div>
          <div className="min-w-0">
            <p className="truncate text-lg font-bold tracking-tight text-white">{SITE_CONFIG.name}</p>
            <p className="truncate text-[11px] uppercase tracking-[0.2em] text-[#f2c7f0]">{SITE_CONFIG.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-[#f4d4f4] transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/search" className="hidden rounded-full border border-white/20 p-2.5 text-[#f2d0f4] transition hover:bg-white/10 sm:inline-flex">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Link>
          <Link
            href="/create/mediaDistribution"
            className="hidden rounded-full bg-[#EB5B00] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#B12C00] md:inline-flex"
          >
            Submit Release
          </Link>
          <button
            type="button"
            className="rounded-full border border-white/25 p-2.5 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/15 bg-[#250938] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#f4d4f4]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/create/mediaDistribution"
              className="rounded-xl bg-[#EB5B00] px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Submit Release
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
