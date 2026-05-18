import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="border-t border-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="text-2xl font-bold text-sage-400 mb-4 inline-block">
                GREENEZINE
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ireland's sustainability-focused digital publication. Curated editorial for the green economy.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold text-white mb-6">Magazine</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-sage-400 transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/issues/april-2026" className="text-gray-400 hover:text-sage-400 transition-colors text-sm">
                    Latest Edition
                  </Link>
                </li>
                <li>
                  <Link to="/archive" className="text-gray-400 hover:text-sage-400 transition-colors text-sm">
                    Archive
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-sage-400 transition-colors text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/featured-businesses" className="text-gray-400 hover:text-sage-400 transition-colors text-sm">
                    Featured Businesses
                  </Link>
                </li>
                <li>
                  <Link to="/advertise" className="text-gray-400 hover:text-sage-400 transition-colors text-sm">
                    Advertise
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-sage-400 transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-6">Get In Touch</h4>
              <a
                href="mailto:gogreenzine@icloud.com"
                className="text-sage-400 hover:text-sage-300 font-medium text-sm transition-colors block mb-4"
              >
                gogreenzine@icloud.com
              </a>
              <p className="text-gray-400 text-sm mb-4">
                Available for partnerships and enquiries
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-sage-400 hover:bg-sage-400 hover:text-gray-900 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-sage-400 hover:bg-sage-400 hover:text-gray-900 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-sage-400 hover:bg-sage-400 hover:text-gray-900 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800"></div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Greenezine. All rights reserved. Ireland's sustainability digital publication.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0 text-sm text-gray-500">
            <a href="#" className="hover:text-sage-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-sage-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
