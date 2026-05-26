import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Latest Edition', path: '/issues/april-2026' },
    { label: 'Archive', path: '/archive' },
    { label: 'About', path: '/about' },
    { label: 'Advertise', path: '/advertise' },
    { label: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

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
            to="/issues/april-2026"
            className="hidden md:inline-flex items-center rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-sage-800"
          >
            Read Latest Issue
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
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
          <div className="md:hidden pb-4 animate-slide-down">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-base font-medium ${
                    isActive(item.path)
                      ? 'bg-white text-stone-900 shadow-sm'
                      : 'text-stone-700 hover:bg-white hover:text-sage-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/issues/april-2026"
                onClick={() => setIsOpen(false)}
                className="mt-2 block rounded-2xl bg-stone-900 px-4 py-3 font-medium text-white hover:bg-sage-800"
              >
                Read Latest Issue
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
