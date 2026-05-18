import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sage-50 to-eco-50 border-b border-sage-200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-eco-100 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            About Greenezine
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A modern Irish digital publication dedicated to sustainability, innovation, and environmental leadership.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Our Mission */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Greenezine is a premium digital publication focused on sustainability, innovation, local businesses, and environmentally conscious living across Ireland. We curate stories that matter, featuring the people, ideas, and initiatives shaping Ireland's sustainable future.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to elevate green business practices, celebrate environmental leadership, and inspire a community of sustainability-focused readers and advertisers.
            </p>
          </div>

          {/* What We Cover */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Cover</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-sage-700">Sustainability Stories</h3>
                <p className="text-gray-700">
                  In-depth features on environmental innovation, green business practices, and sustainability solutions making real impact.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-sage-700">Business & Innovation</h3>
                <p className="text-gray-700">
                  Profiles of eco-conscious entrepreneurs, sustainable startups, and businesses leading corporate environmental responsibility.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-sage-700">Community Initiatives</h3>
                <p className="text-gray-700">
                  Grassroots environmental projects, local green initiatives, and community-driven sustainability across Ireland.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-sage-700">Environmental Leadership</h3>
                <p className="text-gray-700">
                  Voices shaping Ireland's environmental policy, climate action, and the transition to a circular economy.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-sage-50 rounded-lg border border-sage-200">
                <div className="w-12 h-12 bg-sage-600 text-white rounded-lg flex items-center justify-center mb-4 text-xl font-bold">
                  🌍
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Editorial Integrity</h3>
                <p className="text-gray-700 text-sm">
                  Rigorous, fact-based journalism focused on sustainability's real-world impact.
                </p>
              </div>

              <div className="p-6 bg-eco-50 rounded-lg border border-eco-200">
                <div className="w-12 h-12 bg-eco-600 text-white rounded-lg flex items-center justify-center mb-4 text-xl font-bold">
                  ♻️
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sustainability First</h3>
                <p className="text-gray-700 text-sm">
                  A commitment to environmental responsibility in everything we do.
                </p>
              </div>

              <div className="p-6 bg-sage-50 rounded-lg border border-sage-200">
                <div className="w-12 h-12 bg-sage-600 text-white rounded-lg flex items-center justify-center mb-4 text-xl font-bold">
                  📱
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Modern & Digital</h3>
                <p className="text-gray-700 text-sm">
                  Premium digital storytelling designed for today's audience.
                </p>
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div className="bg-gradient-to-r from-sage-50 to-eco-50 rounded-xl p-12 border border-sage-200 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Interested in advertising, partnerships, or submissions? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-sage-600 text-white font-semibold rounded-lg hover:bg-sage-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/advertise"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-sage-600 font-semibold rounded-lg border-2 border-sage-200 hover:bg-sage-50 transition-colors"
              >
                Advertise With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-sage-50 border-t border-sage-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Subscribe to Greenezine
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest edition delivered to your inbox every month.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-600 border border-sage-200"
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
