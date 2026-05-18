import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Advertise() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your enquiry! We\'ll be in touch shortly.')
    setFormData({ name: '', business: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sage-50 via-white to-eco-50 border-b border-sage-100">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-4xl mx-auto relative text-center">
          <div className="inline-block px-3 py-1 bg-sage-100 rounded-full mb-6">
            <span className="text-sage-700 text-xs font-bold tracking-widest">ADVERTISING PLATFORM</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Reach Ireland's
            <br />
            <span className="bg-gradient-to-r from-sage-600 to-eco-600 bg-clip-text text-transparent">
              Eco-Conscious Audience
            </span>
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-4">
            Greenezine is not just a magazine. It's an advertising and media platform connecting your brand with Ireland's sustainability leaders.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reach eco-conscious consumers, showcase your sustainable brand, and connect with the businesses and decision-makers driving Ireland's green economy.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-sage-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-600 mb-2">10K+</div>
              <p className="text-gray-600 font-semibold">Monthly Readers</p>
              <p className="text-sm text-gray-500 mt-1">Engaged sustainability audience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-eco-600 mb-2">50+</div>
              <p className="text-gray-600 font-semibold">Featured Brands</p>
              <p className="text-sm text-gray-500 mt-1">Trusted partners</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-600 mb-2">4</div>
              <p className="text-gray-600 font-semibold">Issues Per Year</p>
              <p className="text-sm text-gray-500 mt-1">Premium circulation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-eco-600 mb-2">100%</div>
              <p className="text-gray-600 font-semibold">Green Audience</p>
              <p className="text-sm text-gray-500 mt-1">Sustainability focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Advertise With Greenezine?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium positioning for brands that are defining Ireland's sustainability movement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-sage-50 rounded-xl border border-sage-200 hover:border-sage-300 transition-colors">
              <div className="w-16 h-16 bg-sage-200 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM6 20h12a6 6 0 006-6V4a6 6 0 00-6-6H6a6 6 0 00-6 6v10a6 6 0 006 6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reach Green-Minded Consumers</h3>
              <p className="text-gray-700">
                Connect directly with engaged Irish consumers actively seeking sustainable brands and eco-conscious products.
              </p>
            </div>

            <div className="p-8 bg-eco-50 rounded-xl border border-eco-200 hover:border-eco-300 transition-colors">
              <div className="w-16 h-16 bg-eco-200 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-eco-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Showcase Your Sustainable Brand</h3>
              <p className="text-gray-700">
                Position your business as a sustainability leader and gain credibility within Ireland's eco-conscious market.
              </p>
            </div>

            <div className="p-8 bg-sage-50 rounded-xl border border-sage-200 hover:border-sage-300 transition-colors">
              <div className="w-16 h-16 bg-sage-200 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.946 3.42 3.42 0 011.946 1.946 3.42 3.42 0 001.946-1.946 3.42 3.42 0 011.946 1.946 3.42 3.42 0 001.946-1.946 3.42 3.42 0 011.946 1.946 3.42 3.42 0 001.946-1.946 3.42 3.42 0 011.946 1.946 3.42 3.42 0 001.946-1.946 3.42 3.42 0 011.946 1.946" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Editorial Platform</h3>
              <p className="text-gray-700">
                Premium design, professional curation, and editorial excellence creates trusted environment for your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Insights */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-sage-50 border-y border-sage-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Audience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connected with decision-makers and sustainability leaders across Ireland
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Who Reads Greenezine?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">Sustainability Professionals</p>
                    <p className="text-gray-600 text-sm">Environmental consultants, CSR managers, sustainability officers</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">Business Leaders</p>
                    <p className="text-gray-600 text-sm">Entrepreneurs, executives, and decision-makers in green business</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">Eco-Conscious Consumers</p>
                    <p className="text-gray-600 text-sm">Active buyers of sustainable and green products & services</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">Environmental Advocates</p>
                    <p className="text-gray-600 text-sm">Community leaders and NGO professionals shaping Ireland's climate action</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Media Value & Benefits</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <p className="font-bold text-gray-900">Highly Engaged Audience</p>
                    <p className="text-gray-600 text-sm">Active readers who share, discuss, and act on content</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-bold text-gray-900">Targeted Positioning</p>
                    <p className="text-gray-600 text-sm">Reach specific niches: renewable energy, green business, eco-tech</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="font-bold text-gray-900">Brand Authority</p>
                    <p className="text-gray-600 text-sm">Association with premium, trusted editorial content</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">📈</span>
                  <div>
                    <p className="font-bold text-gray-900">Business Growth</p>
                    <p className="text-gray-600 text-sm">Direct access to your target market with high purchase intent</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Options */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advertising Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible options designed for businesses of all sizes seeking to reach Ireland's sustainability audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Featured Placement */}
            <div className="rounded-xl border-2 border-sage-200 overflow-hidden hover:border-sage-300 transition-colors">
              <div className="bg-sage-50 p-6 border-b border-sage-200">
                <h3 className="text-xl font-bold text-gray-900">Featured Business</h3>
                <p className="text-sage-600 font-bold text-2xl mt-2">Custom</p>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-gray-700 font-semibold">Premium showcase in:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Featured Businesses page</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Magazine issues & newsletter</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Logo, description, CTA</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Social media promotion</span>
                  </li>
                </ul>
                <button className="w-full mt-6 px-4 py-3 bg-sage-600 text-white font-semibold rounded-lg hover:bg-sage-700 transition-colors">
                  Get Quote
                </button>
              </div>
            </div>

            {/* Banner Advertising */}
            <div className="rounded-xl border-2 border-eco-200 overflow-hidden hover:border-eco-300 transition-colors">
              <div className="bg-eco-50 p-6 border-b border-eco-200">
                <h3 className="text-xl font-bold text-gray-900">Banner Campaign</h3>
                <p className="text-eco-600 font-bold text-2xl mt-2">Custom</p>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-gray-700 font-semibold">Strategic placements:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Homepage & key pages</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Magazine sidebar</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Newsletter integration</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Flex durations</span>
                  </li>
                </ul>
                <button className="w-full mt-6 px-4 py-3 bg-eco-600 text-white font-semibold rounded-lg hover:bg-eco-700 transition-colors">
                  Get Quote
                </button>
              </div>
            </div>

            {/* Native Advertising */}
            <div className="rounded-xl border-2 border-sage-200 overflow-hidden hover:border-sage-300 transition-colors">
              <div className="bg-sage-50 p-6 border-b border-sage-200">
                <h3 className="text-xl font-bold text-gray-900">Native Advertising</h3>
                <p className="text-sage-600 font-bold text-2xl mt-2">Custom</p>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-gray-700 font-semibold">Sponsored content:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Editorial-style features</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Magazine integration</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Custom storytelling</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Multi-channel promotion</span>
                  </li>
                </ul>
                <button className="w-full mt-6 px-4 py-3 bg-sage-600 text-white font-semibold rounded-lg hover:bg-sage-700 transition-colors">
                  Get Quote
                </button>
              </div>
            </div>
          </div>

          {/* Additional Options */}
          <div className="bg-sage-50 rounded-xl p-8 border border-sage-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Opportunities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <p className="flex gap-2">
                <span>📰</span>
                <span><strong>Newsletter Features</strong> — Reach engaged subscribers in monthly newsletter</span>
              </p>
              <p className="flex gap-2">
                <span>🤝</span>
                <span><strong>Issue Partnerships</strong> — Partner with entire magazine editions</span>
              </p>
              <p className="flex gap-2">
                <span>🎤</span>
                <span><strong>Thought Leadership</strong> — Executive interviews and contributed articles</span>
              </p>
              <p className="flex gap-2">
                <span>⚙️</span>
                <span><strong>Custom Solutions</strong> — Bespoke campaigns tailored to your goals</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-sage-50 to-eco-50 rounded-2xl p-12 border border-sage-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Let's Grow Your Brand</h2>
            <p className="text-gray-600 mb-8">
              Our team will work with you to create custom advertising and partnership solutions tailored to your business goals.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Business/Brand
                  </label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:border-transparent"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:border-transparent"
                    placeholder="+353 (0)"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Tell us about your advertising interests
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:border-transparent resize-none"
                  placeholder="Describe your business, goals, and what advertising opportunities interest you most..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-sage-600 text-white font-semibold text-lg rounded-lg hover:bg-sage-700 transition-colors"
              >
                Get Your Custom Quote
              </button>

              <p className="text-sm text-gray-600 text-center">
                We'll review your enquiry and be in touch within 1 business day with custom pricing and partnership options.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Businesses CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-sage-50 border-t border-sage-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Discover Featured Businesses
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how other sustainability-focused businesses are already featured on Greenezine.
          </p>
          <Link
            to="/featured-businesses"
            className="inline-flex items-center px-8 py-3 bg-sage-600 text-white font-semibold rounded-lg hover:bg-sage-700 transition-colors"
          >
            View Featured Businesses
          </Link>
        </div>
      </section>
    </>
  )
}
