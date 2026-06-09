import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiryType: 'general',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', enquiryType: 'general', message: '' })
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
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Have questions, partnership ideas, or feedback? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:info@greenezine.com" className="text-sage-600 hover:text-sage-700 font-medium">
                        info@greenezine.com
                      </a>
                      <p className="text-gray-600 text-sm mt-1">We respond within 24-48 hours</p>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Response Time</h3>
                      <p className="text-gray-700">Mon-Fri: 9am - 5pm IST</p>
                      <p className="text-gray-600 text-sm mt-1">We aim to respond to all enquiries quickly</p>
                    </div>
                  </div>

                  {/* Enquiry Types */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3">We Handle</h3>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>✓ Advertising & Partnership Enquiries</li>
                        <li>✓ Content Submissions & Tips</li>
                        <li>✓ General Feedback & Suggestions</li>
                        <li>✓ Business Features & Sponsorships</li>
                        <li>✓ Newsletter Subscriptions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-sage-50 rounded-lg p-6 border border-sage-200">
                <h3 className="font-bold text-gray-900 mb-4">Quick Navigation</h3>
                <div className="space-y-3">
                  <Link to="/advertise" className="block text-sage-600 hover:text-sage-700 font-medium">
                    → Learn About Advertising
                  </Link>
                  <Link to="/about" className="block text-sage-600 hover:text-sage-700 font-medium">
                    → Read Our Story
                  </Link>
                  <Link to="/archive" className="block text-sage-600 hover:text-sage-700 font-medium">
                    → Browse Latest Issues
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl p-8 border border-sage-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                      Enquiry Type
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:border-transparent"
                    >
                      <option value="general">General Enquiry</option>
                      <option value="advertising">Advertising</option>
                      <option value="partnership">Partnership</option>
                      <option value="submission">Content Submission</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:border-transparent resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-sage-600 text-white font-semibold rounded-lg hover:bg-sage-700 transition-colors"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We respect your privacy and will only use your information to respond to your enquiry.
                  </p>
                </form>
              </div>

              {/* Social Links */}
              <div className="mt-8 bg-eco-50 rounded-lg p-6 border border-eco-200">
                <h3 className="font-bold text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-eco-600 hover:bg-eco-100 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-eco-600 hover:bg-eco-100 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 11-3.14 1.53 4 4 0 00.34-2.82c-.44 1.13-1.04 2.2-1.82 3.12A10 10 0 0123 3z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-eco-600 hover:bg-eco-100 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sage-600 to-eco-600">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe to Greenezine
          </h2>
          <p className="text-lg text-sage-100 mb-8">
            Get the latest edition delivered to your inbox every month.
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
