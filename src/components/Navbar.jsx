import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { issues } from '../data/issues'

const latestIssue = issues.find((issue) => issue.featured) ?? issues[0]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Latest Edition', path: `/issues/${latestIssue.slug}` },
    { label: 'Archive', path: '/archive' },
    { label: 'About', path: '/about' },
    { label: 'Advertise', path: '/advertise' },
    { label: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <nav className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#fbfaf7]/95 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[4.75rem] items-center justify-between gap-6 py-3">
          {/* Logo/Brand */}
          <Link to="/" className="flex flex-shrink-0 items-center gap-3">
            <img
              src="/greenzinelogo.jpg"
              alt="Greenezine logo"
              className="h-11 w-11 rounded-full border border-stone-200 object-cover"
              loading="eager"
              decoding="async"
            />
            <div>
              <div className="font-serif text-3xl leading-none text-stone-900 sm:text-[2rem]">
                Greenezine
              </div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-sage-700">
                Irish sustainability publication
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`border-b pb-1 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'border-stone-900 text-stone-900'
                    : 'border-transparent text-stone-600 hover:text-sage-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to={`/issues/${latestIssue.slug}`}
            className="hidden md:inline-flex items-center rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-sage-800"
          >
            Read Latest Issue
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center rounded-full border border-stone-200 p-2 text-stone-700 hover:bg-white hover:text-sage-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <>
            <button
              aria-label="Close mobile menu backdrop"
              className="fixed inset-0 z-30 bg-stone-900/30 backdrop-blur-[1px] md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <div id="mobile-nav" className="fixed inset-x-4 top-[5.2rem] z-40 rounded-3xl border border-stone-200/90 bg-[#fbfaf7] p-4 shadow-[0_28px_60px_-36px_rgba(22,34,30,0.65)] md:hidden animate-slide-down">
              <div className="mb-3 flex items-center justify-between border-b border-stone-200 pb-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-700">Navigation</p>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation menu"
                  className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white p-2 text-stone-600 hover:text-sage-700"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-base font-medium ${
                      isActive(item.path)
                        ? 'bg-white text-stone-900 shadow-sm ring-1 ring-stone-200'
                        : 'text-stone-700 hover:bg-white hover:text-sage-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  to={`/issues/${latestIssue.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="mt-2 block rounded-2xl bg-stone-900 px-4 py-3 text-center font-medium text-white hover:bg-sage-800"
                >
                  Read Latest Issue
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
