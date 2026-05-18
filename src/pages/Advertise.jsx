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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sage-50 to-eco-50 border-b border-sage-200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Advertise With Greenezine
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Reach environmentally conscious Irish audiences and position your brand as a sustainability leader.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Value Proposition */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Content */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Advertise With Greenezine?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Greenezine connects your brand with Ireland's most environmentally conscious audience.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Engaged Audience</h3>
                    <p className="text-gray-600 text-sm">Active readers passionate about sustainability</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Brand Alignment</h3>
                    <p className="text-gray-600 text-sm">Associate your business with quality sustainability content</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Premium Platform</h3>
                    <p className="text-gray-600 text-sm">Premium editorial quality and professional design</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opportunities Grid */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Advertising Opportunities</h3>
              
              <div className="space-y-4">
                {[
                  {
                    title: 'Featured Business Placement',
                    description: 'Showcase your sustainable business in our Featured Businesses section with logo, description, and CTA.',
                    price: 'Custom pricing',
                  },
                  {
                    title: 'Banner Advertising',
                    description: 'Prominent placement across website pages reaching thousands of eco-conscious Irish readers.',
                    price: 'Custom pricing',
                  },
                  {
                    title: 'Native Advertising',
                    description: 'Sponsored editorial content integrated naturally within magazine issues and newsletters.',
                    price: 'Custom pricing',
                  },
                  {
                    title: 'Newsletter Features',
                    description: 'Monthly newsletter sponsorship reaching engaged subscribers directly in their inbox.',
                    price: 'Custom pricing',
                  },
                  {
                    title: 'Issue Partnerships',
                    description: 'Partner with entire magazine editions for maximum brand exposure and alignment.',
                    price: 'Custom pricing',
                  },
                  {
                    title: 'Custom Solutions',
                    description: 'Work with our team to create bespoke advertising and partnership opportunities.',
                    price: 'Custom pricing',
                  },
                ].map((opportunity, index) => (
                  <div key={index} className="p-6 bg-white border border-sage-100 rounded-lg hover:border-sage-300 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-900">{opportunity.title}</h4>
                      <span className="text-sage-600 font-semibold text-sm">{opportunity.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{opportunity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-sage-50 to-eco-50 rounded-xl p-12 border border-sage-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Interested in Advertising?</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will be in touch with custom pricing and opportunities tailored to your brand.
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
                      Business/Organization
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
                      Phone (Optional)
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
                    Tell us about your enquiry
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:border-transparent resize-none"
                    placeholder="Describe your advertising interests and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-sage-600 text-white font-semibold rounded-lg hover:bg-sage-700 transition-colors"
                >
                  Submit Enquiry
                </button>

                <p className="text-sm text-gray-600 text-center">
                  We'll review your enquiry and get back to you within 1-2 business days.
                </p>
              </form>
            </div>
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
