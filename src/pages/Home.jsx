import { Link } from 'react-router-dom'
import FeaturedStories from '../components/FeaturedStories'

export default function Home() {
  const latestIssues = [
    {
      slug: 'april-2026',
      title: 'April 2026 Edition',
      subtitle: 'Sustainability Innovation & Green Business',
      description: 'Latest insights on sustainable innovation, eco-conscious businesses, and Ireland\'s green economy.',
      month: 'April',
      year: 2026,
      featured: true,
    },
    {
      slug: 'march-2026',
      title: 'March 2026',
      subtitle: 'Community Initiatives & Conservation',
      description: 'Discover stories on sustainable living and environmental impact.',
      month: 'March',
      year: 2026,
    },
    {
      slug: 'february-2026',
      title: 'February 2026',
      subtitle: 'Green Business & Renewable Energy',
      description: 'Green initiatives and business innovations across Ireland.',
      month: 'February',
      year: 2026,
    },
    {
      slug: 'january-2026',
      title: 'January 2026',
      subtitle: 'Ireland\'s Sustainability Leaders',
      description: 'Our launch edition featuring Ireland\'s sustainability leaders.',
      month: 'January',
      year: 2026,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white/70 blur-3xl"></div>
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-sage-100/70 blur-3xl"></div>
          <div className="absolute bottom-0 left-20 h-80 w-80 rounded-full bg-eco-100/60 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)] lg:gap-16">
            <div className="animate-fade-in">
              <div className="editorial-eyebrow mb-6">Irish digital publication</div>

              <h1 className="max-w-4xl text-5xl leading-[0.95] text-stone-900 sm:text-6xl lg:text-7xl">
                Ireland's sustainability stories, businesses, and ideas - beautifully published.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
                Greenezine is a digital publication spotlighting eco-conscious businesses, green innovation, and sustainable living across Ireland.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link to="/issues/april-2026" className="btn-primary">
                  Read Latest Issue
                </Link>
                <Link to="/archive" className="btn-outline">
                  View Archive
                </Link>
                <Link to="/advertise" className="btn-outline">
                  Advertise With Us
                </Link>
              </div>

              <div className="mt-10 grid gap-4 text-sm text-stone-600 sm:grid-cols-3">
                <div className="rounded-2xl border border-stone-200 bg-white/80 px-5 py-4 shadow-sm">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage-700">Authority</div>
                  <p className="mt-2 leading-6">Sustainability-Focused Magazine</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white/80 px-5 py-4 shadow-sm">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage-700">Publishing rhythm</div>
                  <p className="mt-2 leading-6">Monthly Editions and Features</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white/80 px-5 py-4 shadow-sm">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage-700">Platform</div>
                  <p className="mt-2 leading-6">Eco Business Platform</p>
                </div>
              </div>

              <div className="mt-10 border-t border-stone-200 pt-6 text-sm text-stone-500">
                Trusted by Irish sustainability brands, green-minded readers, and advertiser partners across the country.
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -inset-8 rounded-[2rem] bg-white/50 blur-3xl"></div>
              <div className="relative rounded-[2rem] border border-stone-200 bg-white/85 p-5 shadow-[0_35px_90px_-45px_rgba(28,42,36,0.45)] backdrop-blur sm:p-7">
                <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_12rem]">
                  <div className="rounded-[1.8rem] border border-stone-200 bg-[linear-gradient(180deg,#faf7f0_0%,#e9f0eb_100%)] p-8 sm:p-10">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sage-700">Featured Issue</p>
                      <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">APRIL 2026</span>
                    </div>
                    <div className="mt-10 text-7xl font-semibold tracking-[-0.08em] text-stone-900 sm:text-8xl">APR</div>
                    <div className="mt-1 font-serif text-4xl text-stone-500">2026</div>
                    <div className="mt-8 h-px w-full bg-gradient-to-r from-stone-300 via-sage-400 to-transparent"></div>
                    <h2 className="mt-8 text-4xl leading-tight text-stone-900 sm:text-5xl">Sustainability Innovation & Green Business</h2>
                    <p className="mt-5 max-w-md text-sm leading-7 text-stone-600 sm:text-base">A premium digital edition exploring eco-conscious business, environmental transformation, and modern sustainable living across Ireland.</p>
                    <Link to="/issues/april-2026" className="mt-8 inline-flex items-center rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-sage-800">
                      Read Edition
                    </Link>
                  </div>

                  <div className="rounded-[1.8rem] border border-stone-200 bg-[#f7f3eb] p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-700">Inside this issue</p>
                    <div className="mt-6 space-y-6 text-sm leading-7 text-stone-600">
                      <p>Eco-conscious business profiles</p>
                      <p>Climate innovation and renewable energy</p>
                      <p>Green construction and modern living</p>
                    </div>
                    <div className="mt-10 border-t border-stone-200 pt-5 text-sm text-stone-500">Premium digital release</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Tagline */}
      <section className="border-y border-stone-200 bg-white/70 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-5 text-sm text-stone-600 md:grid-cols-4">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-700">Publication</div>
              <p className="mt-2">Monthly editorial editions</p>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-700">Focus</div>
              <p className="mt-2">Sustainability, renewable energy, green business</p>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-700">Audience</div>
              <p className="mt-2">Eco-conscious readers and decision-makers</p>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-700">Platform</div>
              <p className="mt-2">Featured Irish businesses and advertiser visibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <FeaturedStories />

      {/* Latest Magazine Issues */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fbfaf7] lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="editorial-eyebrow mb-4">Magazine archive</div>
              <h2 className="text-5xl text-stone-900 sm:text-6xl">
              Latest Issues
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-stone-600">Collectible editorial editions with refined teasers, premium cover treatments, and a calmer publication rhythm.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestIssues.map((issue, index) => (
              <Link
                key={issue.slug}
                to={`/issues/${issue.slug}`}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <article className="relative bg-white rounded-[1.8rem] overflow-hidden border border-stone-200 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-[0_25px_60px_-35px_rgba(33,45,39,0.35)] hover:-translate-y-1 hover:border-sage-300">
                  <div className="relative bg-[linear-gradient(180deg,#faf7f0_0%,#ebf2ed_100%)] overflow-hidden p-6">
                    <div className="rounded-[1.4rem] border border-white/80 bg-white/80 p-6 shadow-sm">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sage-700">{issue.featured ? 'Featured issue' : 'Monthly edition'}</div>
                      <div className="mt-8 text-5xl font-semibold tracking-[-0.06em] text-stone-900">
                        {issue.month.substring(0, 3).toUpperCase()}
                      </div>
                      <div className="mt-1 font-serif text-3xl text-stone-500">{issue.year}</div>
                    </div>
                    {issue.featured && (
                      <div className="absolute top-4 right-4 rounded-full bg-stone-900 text-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] shadow-lg">
                        Latest
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-700">{issue.month} {issue.year}</div>
                    <h3 className="mt-3 text-3xl leading-tight text-stone-900">
                      {issue.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-stone-500">
                      {issue.subtitle}
                    </p>
                    <p className="text-stone-600 text-sm flex-1 mt-4 mb-4 leading-7">
                      {issue.description}
                    </p>
                    <div className="flex items-center justify-between mt-4 text-sm">
                      <span className="text-stone-500">Collectible digital edition</span>
                      <div className="text-sage-700 font-medium">
                      Read Issue
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/archive"
              className="btn-outline"
            >
              Browse Full Archive
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-[#f4efe6] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-stone-200">
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-[2rem] border border-white/80 bg-white/85 p-8 sm:p-12 text-center shadow-[0_30px_80px_-40px_rgba(28,42,36,0.35)] backdrop-blur">
          <div className="editorial-eyebrow mb-5">Newsletter</div>
          <h2 className="text-4xl sm:text-5xl text-stone-900">
            Stay updated with sustainability insights, featured businesses, and monthly digital editions.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-stone-600 leading-8 max-w-2xl mx-auto">
            A calmer, more editorial subscription experience for readers who want curated sustainability reporting and publication updates without the noise.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-4 rounded-full border border-stone-300 bg-[#fbfaf7] text-stone-900 focus:outline-none focus:ring-2 focus:ring-sage-600"
            />
            <button
              type="submit"
              className="btn-primary"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-stone-500 mt-4">
            No spam. Just curated editions, featured businesses, and new editorial releases.
          </p>
        </div>
      </section>
    </>
  )
}
