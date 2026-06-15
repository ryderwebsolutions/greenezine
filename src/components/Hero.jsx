import { useState } from 'react'
import { Link } from 'react-router-dom'
import { INSTAGRAM_URL } from '../data/issues'

export default function Hero() {
  const [formOpen, setFormOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [invalid, setInvalid] = useState(false)

  const handleSend = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      setInvalid(true)
      return
    }
    setInvalid(false)
    const subject = encodeURIComponent('Greenezine Enquiry')
    const body = encodeURIComponent('My email address: ' + email.trim())
    window.location.href = `mailto:info@greenezine.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="flex-1 flex items-center justify-center px-4 py-12 md:py-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-sage-50 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-50 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="w-full max-w-3xl animate-fade-in">
        {/* Publication Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-block px-4 py-1.5 bg-sage-50 border border-sage-200 rounded-full hover:border-sage-300 transition-colors">
            <span className="text-sage-700 text-xs font-bold tracking-widest">PUBLICATION • ISSUE 06/2026</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 text-center mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Ireland's
          <br />
          <span className="bg-gradient-to-r from-sage-600 to-eco-600 bg-clip-text text-transparent">
            Sustainability
          </span>
          <br />
          Platform
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-gray-600 text-center mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Premium editorial content on sustainable innovation, eco-business leadership, and environmental transformation reshaping Ireland.
        </p>

        {/* Main CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/issues/june-2026"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sage-600 to-eco-600 text-white font-semibold rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Read Latest Edition
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/archive"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage-600 font-semibold rounded-lg border-2 border-sage-200 hover:border-sage-400 hover:bg-sage-50 transition-all duration-300"
          >
            Browse Archive
          </Link>
          <Link
            to="/advertise"
            className="inline-flex items-center justify-center px-8 py-4 bg-sage-100 text-sage-700 font-semibold rounded-lg hover:bg-sage-200 transition-colors"
          >
            Advertise
          </Link>
        </div>

        {/* Trust Signal */}
        <div className="text-center text-sm text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p>✓ Trusted by Ireland's Leading Sustainable Businesses</p>
        </div>

        {/* Instagram + Get in Touch */}
        <div className="mt-10 flex flex-col items-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-[220px] px-8 py-4 bg-[#111] text-white text-xs font-medium tracking-[0.1em] uppercase rounded-sm shadow-[0_2px_20px_rgba(0,0,0,0.13)] hover:bg-[#1a1a1a] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-200"
            >
              <svg className="w-[17px] h-[17px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Follow on Instagram
            </a>
            <button
              onClick={() => setFormOpen(o => !o)}
              aria-expanded={formOpen}
              className="inline-flex items-center justify-center gap-2.5 w-[220px] px-8 py-4 bg-transparent text-[#111] text-xs font-medium tracking-[0.1em] uppercase rounded-sm border border-black/25 hover:bg-black/[0.04] hover:border-black/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-[17px] h-[17px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 4L12 13 2 4"/>
              </svg>
              Get in Touch
            </button>
          </div>

          {/* Expandable email form */}
          <div
            style={{
              maxHeight: formOpen ? '120px' : '0',
              opacity: formOpen ? 1 : 0,
              marginTop: formOpen ? '0.25rem' : '0',
              transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease, margin-top 0.4s ease',
            }}
            className="overflow-hidden w-full max-w-[480px]"
          >
            <div className="flex gap-2 flex-wrap justify-center pt-1">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setInvalid(false) }}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Enter your email address"
                autoComplete="email"
                className={`flex-1 min-w-[200px] max-w-xs px-4 py-3 border rounded-sm text-[0.8rem] font-light text-[#111] bg-white placeholder:text-[#bbb] focus:outline-none transition-all duration-200 ${invalid ? 'border-red-500' : 'border-black/20 focus:border-black/60 focus:shadow-[0_0_0_2px_rgba(0,0,0,0.06)]'}`}
              />
              <button
                onClick={handleSend}
                className="px-6 py-3 bg-[#111] text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-sm hover:bg-[#1a1a1a] hover:-translate-y-px transition-all duration-200 whitespace-nowrap"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
