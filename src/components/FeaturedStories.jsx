export default function FeaturedStories() {
  const stories = [
    {
      id: 1,
      title: "How Irish Tech Startups Are Leading the Green Revolution",
      category: "Business",
      excerpt: "Discover how Dublin-based sustainability startups are transforming renewable energy and green construction...",
      readTime: "6 min",
      featured: true,
    },
    {
      id: 2,
      title: "EV Infrastructure: Ireland's Path to Carbon-Neutral Transport",
      category: "Innovation",
      excerpt: "The expansion of electric vehicle charging networks across Ireland and what it means for businesses.",
      readTime: "4 min",
    },
    {
      id: 3,
      title: "Circular Economy: How Irish Businesses Are Reducing Waste",
      category: "Sustainability",
      excerpt: "Real examples of Irish companies implementing circular economy principles and the benefits they've seen.",
      readTime: "5 min",
    },
    {
      id: 4,
      title: "Building Green: The Future of Sustainable Construction in Ireland",
      category: "Development",
      excerpt: "New sustainable building materials and practices changing how Ireland builds for the future.",
      readTime: "7 min",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-sage-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-sage-100 rounded-full mb-4">
            <span className="text-sage-700 text-xs font-bold tracking-widest">FEATURED INSIGHTS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Latest Editorial
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Curated stories on sustainability, green innovation, and eco-business transforming Ireland.
          </p>
        </div>

        {/* Featured Article (Large) */}
        <div className="mb-12">
          {stories.filter(s => s.featured).map((story) => (
            <div
              key={story.id}
              className="group bg-gradient-to-br from-sage-50 to-eco-50 rounded-2xl overflow-hidden border border-sage-100 hover:border-sage-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 bg-sage-200 rounded-full w-fit mb-4">
                    <span className="text-sage-700 text-xs font-bold tracking-widest">{story.category}</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-sage-700 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {story.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600 text-sm font-medium">{story.readTime} read</span>
                    <span className="text-sage-600 font-semibold group-hover:text-sage-700 transition-colors flex items-center">
                      Read Story
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Visual */}
                <div className="h-64 lg:h-full bg-gradient-to-br from-sage-200 to-eco-200 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🚀</div>
                      <p className="text-sm font-semibold text-sage-700">Editorial Visuals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.filter(s => !s.featured).map((story) => (
            <div
              key={story.id}
              className="group bg-white rounded-lg border border-sage-100 hover:border-sage-300 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Thumbnail */}
              <div className="h-40 bg-gradient-to-br from-sage-100 to-eco-100 relative overflow-hidden group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <div className="text-4xl">📰</div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="inline-block px-2 py-1 bg-sage-100 rounded w-fit mb-3">
                  <span className="text-sage-700 text-xs font-bold">{story.category}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sage-700 transition-colors leading-snug flex-1">
                  {story.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {story.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs font-medium">{story.readTime}</span>
                  <span className="text-sage-600 font-semibold text-sm group-hover:text-sage-700 transition-colors flex items-center">
                    Read
                    <svg className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-sage-100 text-sage-700 font-semibold rounded-lg hover:bg-sage-200 transition-colors">
            View All Stories →
          </button>
        </div>
      </div>
    </section>
  )
}
