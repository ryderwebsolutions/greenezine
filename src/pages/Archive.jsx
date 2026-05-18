import { Link } from 'react-router-dom'

export default function Archive() {
  const allIssues = [
    {
      slug: 'april-2026',
      title: 'April 2026 Edition',
      subtitle: 'Sustainability Innovation & Green Business Leadership',
      description: 'Latest issue featuring innovation in sustainable business, eco-conscious startups, and Ireland\'s green economy.',
      month: 'April',
      year: 2026,
      featured: true,
      readTime: '25 min',
    },
    {
      slug: 'march-2026',
      title: 'March 2026 Edition',
      subtitle: 'Community Initiatives & Environmental Conservation',
      description: 'Explore stories on sustainable living, environmental conservation, and green community initiatives.',
      month: 'March',
      year: 2026,
      readTime: '22 min',
    },
    {
      slug: 'february-2026',
      title: 'February 2026 Edition',
      subtitle: 'Green Business & Renewable Energy Solutions',
      description: 'Discover green business innovations, corporate sustainability, and renewable energy solutions.',
      month: 'February',
      year: 2026,
      readTime: '24 min',
    },
    {
      slug: 'january-2026',
      title: 'January 2026 Edition',
      subtitle: 'Ireland\'s Sustainability Leaders & Innovators',
      description: 'Our launch edition featuring Ireland\'s sustainability leaders, eco-entrepreneurs, and environmental voices.',
      month: 'January',
      year: 2026,
      readTime: '26 min',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sage-50 via-white to-eco-50 border-b border-sage-100">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-block px-3 py-1 bg-sage-100 rounded-full mb-6">
            <span className="text-sage-700 text-xs font-bold tracking-widest">MAGAZINE COLLECTION</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            Issue Archive
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse all Greenezine monthly editions and digital publications
          </p>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {allIssues.map((issue, index) => (
              <Link
                key={issue.slug}
                to={`/issues/${issue.slug}`}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden border border-sage-100 hover:border-sage-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col md:flex-row">
                  {/* Cover */}
                  <div className="relative w-full md:w-56 h-56 bg-gradient-to-br from-sage-100 to-eco-100 overflow-hidden group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-6xl font-bold text-sage-700 mb-2">
                        {issue.month.substring(0, 3).toUpperCase()}
                      </div>
                      <div className="text-3xl font-light text-sage-600">{issue.year}</div>
                    </div>
                    {issue.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-sage-600 to-eco-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                        Latest Edition
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 group-hover:text-sage-700 transition-colors">
                        {issue.title}
                      </h2>
                      <p className="text-sage-600 font-semibold text-sm mb-4">
                        {issue.subtitle}
                      </p>
                      <p className="text-gray-700 text-base leading-relaxed mb-4 max-w-2xl">
                        {issue.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {issue.readTime} read
                        </span>
                        <span>•</span>
                        <span>{issue.month} {issue.year}</span>
                      </div>
                      <div className="flex items-center text-sage-600 font-semibold group-hover:text-sage-700 transition-colors">
                        Read Edition
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sage-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-sage-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Every Issue
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to get monthly digital editions delivered to your inbox.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
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
