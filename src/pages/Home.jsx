import { Link } from 'react-router-dom'
import FeaturedStories from '../components/FeaturedStories'

export default function Home() {
  const latestIssues = [
    {
      slug: 'april-2026',
      title: 'April 2026 Edition',
      description: 'Latest insights on sustainable innovation, eco-conscious businesses, and Ireland\'s green economy.',
      month: 'April',
      year: 2026,
      featured: true,
    },
    {
      slug: 'march-2026',
      title: 'March 2026',
      description: 'Discover stories on sustainable living and environmental impact.',
      month: 'March',
      year: 2026,
    },
    {
      slug: 'february-2026',
      title: 'February 2026',
      description: 'Green initiatives and business innovations across Ireland.',
      month: 'February',
      year: 2026,
    },
    {
      slug: 'january-2026',
      title: 'January 2026',
      description: 'Our launch edition featuring Ireland\'s sustainability leaders.',
      month: 'January',
      year: 2026,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-32 bg-white">
        {/* Subtle background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-eco-100 rounded-full blur-3xl opacity-15"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <div className="inline-block px-4 py-1.5 bg-sage-100 border border-sage-200 rounded-full mb-6 hover:border-sage-300 transition-colors">
                  <span className="text-sage-700 text-xs font-bold tracking-widest">APRIL 2026 • FEATURED</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                  Ireland's <br />
                  <span className="bg-gradient-to-r from-sage-600 to-eco-600 bg-clip-text text-transparent">
                    Premium
                  </span>
                  <br />
                  Sustainability Magazine
                </h1>

                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-xl mb-8">
                  Premium editorial content on eco-business innovation, environmental leadership, and sustainable transformation across Ireland.
                </p>

                <p className="text-gray-600 mb-8 flex items-center gap-2">
                  <span className="text-2xl">📰</span>
                  Monthly Digital Publication • Featured Stories • Business Intelligence
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/issues/april-2026"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-sage-600 text-white font-semibold rounded-lg hover:bg-sage-700 hover:shadow-lg transition-all duration-300"
                >
                  Read April Edition
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/advertise"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-sage-600 font-semibold rounded-lg border-2 border-sage-200 hover:border-sage-400 hover:bg-sage-50 transition-all duration-300"
                >
                  Advertise
                </Link>
              </div>

              {/* Trust Signals */}
              <div className="pt-8 border-t border-sage-100 space-y-3">
                <p className="text-sm text-gray-600 font-medium">✓ Trusted by 50+ Irish Sustainability Brands</p>
                <p className="text-sm text-gray-600 font-medium">✓ Read by Eco-Conscious Decision Makers</p>
                <p className="text-sm text-gray-600 font-medium">✓ Monthly Digital Publication</p>
              </div>
            </div>

            {/* Magazine Cover Visual */}
            <div className="relative h-96 sm:h-[500px] lg:h-full animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-sage-100 via-eco-50 to-sage-50 rounded-3xl overflow-hidden shadow-2xl border border-sage-200">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                
                {/* Magazine Cover */}
                <div className="h-full flex flex-col items-center justify-center p-8 text-center relative z-10">
                  <div className="absolute top-8 left-8 bg-sage-600 text-white px-3 py-1 rounded text-xs font-bold tracking-widest">
                    FEATURED ISSUE
                  </div>
                  <div className="text-7xl font-bold text-sage-700 mb-2">APR</div>
                  <div className="text-4xl font-light text-sage-600 mb-6">2026</div>
                  <div className="h-1 w-16 bg-gradient-to-r from-sage-600 to-eco-600 mb-8 rounded-full"></div>
                  <p className="text-gray-700 text-sm max-w-xs font-medium">
                    Sustainability Innovation & Green Business Leadership
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Tagline */}
      <section className="bg-gradient-to-r from-sage-50 to-eco-50 py-12 px-4 sm:px-6 lg:px-8 border-y border-sage-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Premium Digital Publication for Ireland's Sustainability Movement
            </h2>
            <p className="text-lg text-gray-600">
              Curated Editorial • Featured Businesses • Industry Intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <FeaturedStories />

      {/* Latest Magazine Issues */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="inline-block px-3 py-1 bg-sage-100 rounded-full mb-4">
              <span className="text-sage-700 text-xs font-bold tracking-widest">MAGAZINE ARCHIVE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Latest Issues
            </h2>
            <p className="text-lg text-gray-600">
              Browse all monthly editions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestIssues.map((issue, index) => (
              <Link
                key={issue.slug}
                to={`/issues/${issue.slug}`}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-white rounded-xl overflow-hidden border border-sage-100 hover:border-sage-300 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-lg hover:-translate-y-2">
                  {/* Cover */}
                  <div className="relative h-64 bg-gradient-to-br from-sage-100 to-eco-100 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-5xl font-bold text-sage-700 mb-2">
                        {issue.month.substring(0, 3).toUpperCase()}
                      </div>
                      <div className="text-2xl font-light text-sage-600">{issue.year}</div>
                    </div>
                    {issue.featured && (
                      <div className="absolute top-4 right-4 bg-sage-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Latest
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sage-700 transition-colors">
                      {issue.title}
                    </h3>
                    <p className="text-gray-600 text-sm flex-1 mb-4 leading-relaxed line-clamp-2">
                      {issue.description}
                    </p>
                    <div className="flex items-center text-sage-600 font-semibold text-sm group-hover:text-sage-700 transition-colors">
                      Read Issue
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/archive"
              className="inline-flex items-center px-8 py-3 bg-sage-100 text-sage-700 font-semibold rounded-lg hover:bg-sage-200 transition-colors"
            >
              Browse Full Archive →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-sage-600 via-eco-600 to-sage-600 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Monthly Sustainability Insights
          </h2>
          <p className="text-lg text-sage-100 mb-8">
            Subscribe to Greenezine and receive featured stories, industry intelligence, and monthly digital editions.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sage-600"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-sage-600 font-semibold rounded-lg hover:bg-sage-50 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-sage-100 mt-4">
            ✓ No spam • Exclusive subscriber benefits • Curated weekly
          </p>
        </div>
      </section>
    </>
  )
}
