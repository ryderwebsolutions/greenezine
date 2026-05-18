import FeaturedStories from '../components/FeaturedStories'

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sage-50 via-white to-eco-50 border-b border-sage-100">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-block px-3 py-1 bg-sage-100 rounded-full mb-6">
            <span className="text-sage-700 text-xs font-bold tracking-widest">ABOUT US</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ireland's Premium
            <br />
            <span className="bg-gradient-to-r from-sage-600 to-eco-600 bg-clip-text text-transparent">
              Sustainability Publication
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Greenezine is a curated digital publication dedicated to sustainability, environmental innovation, and the business leaders reshaping Ireland for a greener future.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We publish premium editorial content that celebrates Ireland's sustainability leaders, environmental innovators, and eco-conscious businesses driving meaningful change.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through carefully curated stories, industry insights, and featured business profiles, Greenezine amplifies the voices shaping Ireland's transition to a sustainable, green economy.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Cover</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-sage-50 rounded-lg border border-sage-200 hover:border-sage-300 transition-colors">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-2xl">♻️</span>
                      Sustainable Business
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Corporate sustainability initiatives, green business models, and eco-conscious companies leading the way.
                    </p>
                  </div>

                  <div className="p-6 bg-eco-50 rounded-lg border border-eco-200 hover:border-eco-300 transition-colors">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-2xl">⚡</span>
                      Renewable Energy
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Green energy solutions, solar, wind, and renewable infrastructure transforming Ireland.
                    </p>
                  </div>

                  <div className="p-6 bg-sage-50 rounded-lg border border-sage-200 hover:border-sage-300 transition-colors">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-2xl">🌱</span>
                      Innovation & Tech
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Green technology, climate innovation, and startups solving environmental challenges.
                    </p>
                  </div>

                  <div className="p-6 bg-eco-50 rounded-lg border border-eco-200 hover:border-eco-300 transition-colors">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-2xl">🏗️</span>
                      Green Construction
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Sustainable building, eco-architecture, and green development projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="p-6 bg-sage-50 rounded-xl border border-sage-200">
                  <div className="text-4xl font-bold text-sage-600 mb-2">50+</div>
                  <p className="text-gray-700 font-semibold">Featured Brands</p>
                  <p className="text-sm text-gray-600 mt-2">Sustainability leaders across Ireland</p>
                </div>

                <div className="p-6 bg-eco-50 rounded-xl border border-eco-200">
                  <div className="text-4xl font-bold text-eco-600 mb-2">4+</div>
                  <p className="text-gray-700 font-semibold">Monthly Editions</p>
                  <p className="text-sm text-gray-600 mt-2">Premium digital publications</p>
                </div>

                <div className="p-6 bg-sage-50 rounded-xl border border-sage-200">
                  <div className="text-4xl font-bold text-sage-600 mb-2">100+</div>
                  <p className="text-gray-700 font-semibold">Editorial Stories</p>
                  <p className="text-sm text-gray-600 mt-2">Curated sustainability content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-sage-50 border-y border-sage-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to editorial excellence, sustainability advocacy, and supporting Ireland's green economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white rounded-lg border border-sage-100 hover:border-sage-300 transition-colors">
              <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Curated</h3>
              <p className="text-gray-600 text-sm">Premium, hand-selected editorial content focused on quality over quantity.</p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-sage-100 hover:border-sage-300 transition-colors">
              <div className="w-12 h-12 bg-eco-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-eco-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Authoritative</h3>
              <p className="text-gray-600 text-sm">In-depth research and expertise establishing Greenezine as Ireland's sustainability media authority.</p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-sage-100 hover:border-sage-300 transition-colors">
              <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Impactful</h3>
              <p className="text-gray-600 text-sm">Amplifying voices driving meaningful environmental and business transformation.</p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-sage-100 hover:border-sage-300 transition-colors">
              <div className="w-12 h-12 bg-eco-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-eco-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.172l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Independent</h3>
              <p className="text-gray-600 text-sm">Editorially independent, focused on truth and advancing sustainability conversations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <FeaturedStories />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Be Part of Ireland's Sustainability Movement
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to Greenezine for monthly premium editions and exclusive sustainability insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 flex-1 max-w-md">
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
            <a href="/advertise" className="px-6 py-3 bg-sage-100 text-sage-700 font-semibold rounded-lg hover:bg-sage-200 transition-colors">
              Advertise
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
