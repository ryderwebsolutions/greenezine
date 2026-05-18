import { Link } from 'react-router-dom'

export default function Archive() {
  const allIssues = [
    {
      slug: 'april-2026',
      title: 'April 2026 Edition',
      description: 'Our latest issue featuring innovation in sustainable business, eco-conscious startups, and Ireland\'s green economy.',
      month: 'April',
      year: 2026,
      featured: true,
    },
    {
      slug: 'march-2026',
      title: 'March 2026 Edition',
      description: 'Explore stories on sustainable living, environmental conservation, and green community initiatives.',
      month: 'March',
      year: 2026,
    },
    {
      slug: 'february-2026',
      title: 'February 2026 Edition',
      description: 'Discover green business innovations, corporate sustainability, and renewable energy solutions.',
      month: 'February',
      year: 2026,
    },
    {
      slug: 'january-2026',
      title: 'January 2026 Edition',
      description: 'Our launch edition featuring Ireland\'s sustainability leaders, eco-entrepreneurs, and environmental voices.',
      month: 'January',
      year: 2026,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sage-50 to-eco-50 border-b border-sage-200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            Issue Archive
          </h1>
          <p className="text-xl text-gray-600">
            Browse all Greenezine editions
          </p>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allIssues.map((issue, index) => (
              <Link
                key={issue.slug}
                to={`/issues/${issue.slug}`}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-white rounded-xl overflow-hidden border border-sage-100 hover:border-sage-300 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-lg hover:-translate-y-1">
                  {/* Cover Image */}
                  <div className="relative h-64 bg-gradient-to-br from-sage-100 to-eco-100 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-6xl font-bold text-sage-700 mb-2">
                        {issue.month.substring(0, 3)}
                      </div>
                      <div className="text-3xl font-light text-sage-600">{issue.year}</div>
                      {issue.featured && (
                        <div className="absolute top-4 right-4 bg-sage-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          Latest
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sage-700 transition-colors">
                      {issue.title}
                    </h3>
                    <p className="text-gray-600 text-sm flex-1 mb-4 leading-relaxed">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sage-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-sage-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Every Issue
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to get the latest edition delivered to your inbox every month.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-sage-600 text-white font-semibold rounded-lg hover:bg-sage-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
