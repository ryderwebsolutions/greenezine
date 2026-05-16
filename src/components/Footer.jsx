export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 py-8 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-forest-700 font-bold text-lg mb-2">GreenEzine</h3>
            <p className="text-gray-600 text-sm">
              A modern environmental publication dedicated to sustainable living and ecological awareness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-forest-700 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-forest-700 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-forest-700 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Get In Touch</h4>
            <a
              href="mailto:gogreenzine@icloud.com"
              className="text-forest-700 hover:text-forest-800 font-medium text-sm transition-colors"
            >
              gogreenzine@icloud.com
            </a>
            <p className="text-gray-600 text-sm mt-2">
              Available for partnerships and enquiries
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>&copy; {currentYear} GreenEzine. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-forest-700 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-forest-700 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-forest-700 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
