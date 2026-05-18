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
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 sm:py-20 lg:px-8 lg:py-24 bg-[linear-gradient(180deg,#f7f3eb_0%,#fbfaf7_60%,#eef3ef_100%)] border-b border-stone-200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/70 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative">
          <div className="editorial-eyebrow mb-6">Magazine collection</div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-stone-900 mb-4">
            Issue Archive
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-8">
            Browse Greenezine's growing library of collectible digital editions, each framed like a premium monthly release.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white/70 border-b border-stone-200">
        <div className="max-w-7xl mx-auto grid gap-4 text-sm text-stone-600 md:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-sm">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage-700">Monthly editions</div>
            <p className="mt-2">Premium digital reading experience</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-sm">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage-700">Editorial themes</div>
            <p className="mt-2">Each issue carries a clear publication focus</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-sm">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage-700">Business platform</div>
            <p className="mt-2">Featured Irish brands and advertiser visibility</p>
          </div>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fbfaf7] lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            {allIssues.map((issue, index) => (
              <Link
                key={issue.slug}
                to={`/issues/${issue.slug}`}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <article className="grid h-full overflow-hidden rounded-[1.8rem] border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sage-300 hover:shadow-[0_30px_70px_-40px_rgba(33,45,39,0.35)] md:grid-cols-[15rem_minmax(0,1fr)]">
                  <div className="relative overflow-hidden bg-[linear-gradient(180deg,#faf7f0_0%,#e9f0eb_100%)] p-6">
                    <div className="flex h-full flex-col rounded-[1.4rem] border border-white/80 bg-white/80 p-6 shadow-sm">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sage-700">{issue.featured ? 'Featured edition' : 'Editorial release'}</div>
                      <div className="mt-auto pt-10 text-6xl font-semibold tracking-[-0.06em] text-stone-900">{issue.month.substring(0, 3).toUpperCase()}</div>
                      <div className="mt-1 font-serif text-3xl text-stone-500">{issue.year}</div>
                    </div>
                    {issue.featured && (
                      <div className="absolute top-4 left-4 rounded-full bg-stone-900 text-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] shadow-lg">
                        Latest Edition
                      </div>
                    )}
                  </div>

                  <div className="flex-1 p-8 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sage-700">{issue.month} {issue.year}</div>
                      <h2 className="text-4xl text-stone-900 mt-3 mb-2 leading-tight">
                        {issue.title}
                      </h2>
                      <p className="text-stone-500 font-medium text-sm mb-4">
                        {issue.subtitle}
                      </p>
                      <p className="text-stone-600 text-base leading-8 mb-4 max-w-2xl">
                        {issue.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between mt-8">
                      <div className="flex items-center gap-4 text-sm text-stone-500">
                        <span>{issue.readTime} read</span>
                        <span className="h-1 w-1 rounded-full bg-stone-300"></span>
                        <span>Collectible digital edition</span>
                      </div>
                      <div className="inline-flex items-center rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-700 transition group-hover:border-sage-400 group-hover:text-sage-700">
                        Read Edition
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f4efe6] py-16 px-4 sm:px-6 lg:px-8 border-t border-stone-200">
        <div className="max-w-4xl mx-auto text-center rounded-[2rem] border border-white/80 bg-white/85 p-8 shadow-sm sm:p-12">
          <h2 className="text-4xl text-stone-900 mb-4 sm:text-5xl">
            Stay Updated with Every Issue
          </h2>
          <p className="text-lg text-stone-600 mb-8 leading-8">
            Subscribe to get monthly digital editions delivered to your inbox.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-4 rounded-full border border-stone-300 bg-[#fbfaf7] focus:outline-none focus:ring-2 focus:ring-sage-600"
            />
            <button
              type="submit"
              className="btn-primary"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
