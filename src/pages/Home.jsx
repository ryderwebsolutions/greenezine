import { Link } from 'react-router-dom'

export default function Home() {
  const latestIssues = [
    {
      slug: 'april-2026',
      title: 'April 2026 Edition',
      description: 'Explore the latest insights on sustainable innovation, eco-conscious businesses, and Ireland\'s green future.',
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
      <section className="relative min-h-screen bg-white">
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-eco-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block px-4 py-1.5 bg-sage-100 border border-sage-200 rounded-full w-fit">
                <span className="text-sage-700 text-sm font-semibold tracking-wide">APRIL 2026 EDITION</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Ireland's Sustainability<br />
                  <span className="text-sage-600">Digital Publication</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed">
                  Discover curated stories on sustainable innovation, eco-conscious businesses, and environmental leadership shaping Ireland's future.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/issues/april-2026"
                  className="inline-flex items-center justify-center px-8 py-3 bg-sage-600 text-white font-semibold rounded-lg hover:bg-sage-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Read April Edition
                </Link>
                <Link
                  to="/archive"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-sage-600 font-semibold rounded-lg border-2 border-sage-200 hover:bg-sage-50 transition-colors"
                >
                  View Archive
                </Link>
              </div>
            </div>

            {/* Magazine Cover Visual */}
            <div className="relative h-96 sm:h-[500px] lg:h-full animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-sage-100 to-eco-100 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Magazine Cover Placeholder */}
                <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="bg-sage-600 text-white px-4 py-2 rounded text-xs font-bold tracking-widest mb-6">
                    LATEST ISSUE
                  </div>
                  <div className="text-6xl font-bold text-sage-700 mb-2">APRIL</div>
                  <div className="text-4xl font-light text-sage-600 mb-6">2026</div>
                  <div className="h-0.5 w-12 bg-sage-600 mb-6"></div>
                  <p className="text-gray-700 text-sm max-w-xs">
                    Ireland's Sustainability Magazine
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section with Tagline */}
      <section className="bg-sage-50 py-12 px-4 sm:px-6 lg:px-8 border-y border-sage-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              Ireland's sustainability-focused digital publication
            </h2>
            <p className="text-gray-600">Curated editorial. Premium content. Environmental consciousness.</p>
          </div>
        </div>
      </section>

      {/* Recent Issues Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Issues</h2>
            <p className="text-lg text-gray-600">Read our most recent editions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestIssues.map((issue, index) => (
              <Link
                key={issue.slug}
                to={`/issues/${issue.slug}`}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-white rounded-lg overflow-hidden border border-sage-100 hover:border-sage-300 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-md">
                  {/* Cover Image */}
                  <div className="relative h-56 bg-gradient-to-br from-sage-100 to-eco-100 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className={`text-5xl font-bold mb-2 ${issue.featured ? 'text-sage-700' : 'text-sage-600'}`}>
                        {issue.month.substring(0, 3)}
                      </div>
                      <div className="text-2xl font-light text-sage-600">{issue.year}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sage-700 transition-colors">
                      {issue.title}
                    </h3>
                    <p className="text-gray-600 text-sm flex-1 mb-4">
                      {issue.description}
                    </p>
                    <span className="text-sage-600 font-semibold text-sm group-hover:text-sage-700 transition-colors">
                      Read Issue →
                    </span>
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
              View Full Archive →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-sage-600 to-eco-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe to Greenezine
          </h2>
          <p className="text-sage-100 mb-8">
            Get the latest sustainability stories and insights delivered to your inbox monthly.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-sage-600 font-semibold rounded-lg hover:bg-sage-50 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
