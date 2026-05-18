import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Latest Edition', path: '/issues/april-2026' },
    { label: 'Archive', path: '/archive' },
    { label: 'Featured Businesses', path: '/featured-businesses' },
    { label: 'About', path: '/about' },
    { label: 'Advertise', path: '/advertise' },
    { label: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-sage-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="text-2xl font-bold text-sage-700">
              GREENEZINE
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-sage-700 border-b-2 border-sage-600'
                    : 'text-gray-700 hover:text-sage-700'
                } pb-1`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/issues/april-2026"
            className="hidden md:inline-block px-5 py-2 bg-sage-600 text-white rounded-md text-sm font-medium hover:bg-sage-700 transition-colors"
          >
            Read Latest Issue
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-sage-700 hover:bg-sage-50 focus:outline-none"
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
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path)
                      ? 'bg-sage-100 text-sage-700'
                      : 'text-gray-700 hover:bg-sage-50 hover:text-sage-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/issues/april-2026"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md bg-sage-600 text-white font-medium hover:bg-sage-700 mt-2"
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
