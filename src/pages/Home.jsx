import { useState } from 'react'
import { Link } from 'react-router-dom'
import { INSTAGRAM_URL, issues } from '../data/issues'

function IssueCard({ issue }) {
  const coverIsImage = issue.coverType === 'image'

  return (
    <Link
      to={`/issues/${issue.slug}`}
      className="group block h-full"
      aria-label={`Read ${issue.title}`}
    >
      <article className="flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sage-300 hover:shadow-[0_24px_50px_-34px_rgba(33,45,39,0.45)]">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#f4f0e8]">
          {coverIsImage ? (
            <img
              src={issue.coverSrc}
              alt={`${issue.title} cover`}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.015]"
            />
          ) : (
            <iframe
              src={issue.coverSrc}
              title={`${issue.title} cover preview`}
              loading="lazy"
              className="h-full w-full border-0 pointer-events-none"
            />
          )}

          {issue.featured && (
            <span className="absolute left-3 top-3 rounded-full bg-stone-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
              Latest
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col px-5 py-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-700">{issue.month} {issue.year}</p>
          <h3 className="mt-2 h-[4.2rem] overflow-hidden text-2xl leading-tight text-stone-900">{issue.title}</h3>
          <p className="mt-2 h-[2.8rem] overflow-hidden text-sm leading-6 text-stone-600">{issue.subtitle}</p>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-stone-500">{issue.readTime} read</span>
            <span className="font-medium text-sage-700">Open issue</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default function Home() {
  const [formOpen, setFormOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [invalid, setInvalid] = useState(false)

  const handleSend = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) { setInvalid(true); return }
    setInvalid(false)
    const subject = encodeURIComponent('Greenezine Enquiry')
    const body = encodeURIComponent('My email address: ' + email.trim())
    window.location.href = `mailto:info@greenezine.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-stone-200 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-12 right-0 h-72 w-72 rounded-full bg-[#e8efe8] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#f2ebe0] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] lg:items-end">
            <div>
              <p className="editorial-eyebrow">Greenezine editorial desk</p>
              <h1 className="mt-7 max-w-4xl text-5xl leading-[0.95] text-stone-900 sm:text-6xl lg:text-7xl">
                Ireland's Digital Sustainability Publication
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
                Exploring sustainability, innovation, energy, business, and environmental progress across Ireland.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link to="/issues/june-2026" className="btn-primary">
                  Read Latest Issue
                </Link>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2.5 px-7 py-3 bg-[#111] text-white text-xs font-medium tracking-[0.1em] uppercase rounded-sm shadow-[0_2px_20px_rgba(0,0,0,0.13)] hover:bg-[#1a1a1a] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-200">
                  <svg className="w-[15px] h-[15px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  Follow On Instagram
                </a>
                <button
                  onClick={() => setFormOpen(o => !o)}
                  aria-expanded={formOpen}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3 bg-transparent text-stone-900 text-xs font-medium tracking-[0.1em] uppercase rounded-sm border border-stone-900/25 hover:bg-stone-900/[0.04] hover:border-stone-900/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <svg className="w-[15px] h-[15px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                  marginTop: formOpen ? '0.75rem' : '0',
                  transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease, margin-top 0.4s ease',
                }}
                className="overflow-hidden max-w-md"
              >
                <div className="flex gap-2 flex-wrap">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setInvalid(false) }}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Enter your email address"
                    autoComplete="email"
                    className={`flex-1 min-w-[200px] px-4 py-3 border rounded-sm text-[0.8rem] font-light text-stone-900 bg-white placeholder:text-stone-400 focus:outline-none transition-all duration-200 ${invalid ? 'border-red-500' : 'border-stone-900/20 focus:border-stone-900/60 focus:shadow-[0_0_0_2px_rgba(0,0,0,0.06)]'}`}
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

            <aside className="rounded-[1.6rem] border border-stone-200 bg-white/85 p-6 shadow-[0_24px_52px_-40px_rgba(30,44,39,0.55)] backdrop-blur sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sage-700">Latest release</p>
              <h2 className="mt-3 text-3xl leading-tight text-stone-900 sm:text-4xl">June 2026</h2>
              <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">
                Our summer edition spotlighting green enterprise, environmental innovation, and sustainability stories shaping Ireland's eco-future.
              </p>
              <Link to="/issues/june-2026" className="mt-6 inline-flex items-center text-sm font-medium text-sage-700 transition hover:text-sage-800">
                Read full issue
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f4ec] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="editorial-eyebrow">Issue releases</p>
              <h2 className="mt-4 text-4xl text-stone-900 sm:text-5xl">January to June 2026</h2>
            </div>
            <Link to="/archive" className="text-sm font-medium text-sage-700 transition hover:text-sage-800">
              Browse archive
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {issues.map((issue) => (
              <IssueCard key={issue.slug} issue={issue} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
