import { Link } from 'react-router-dom'
import { INSTAGRAM_URL } from '../data/issues'

export default function Contact() {
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

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

          <div className="space-y-8">
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

            {/* Instagram */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Instagram</h3>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-sage-600 hover:text-sage-700 font-medium">
                  @greenzineireland
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-12 bg-sage-50 rounded-lg p-6 border border-sage-200">
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
      </section>
    </>
  )
}
