import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-200 bg-[#f4efe6] text-stone-900">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-sm sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sage-700">Partners and community</p>
            <div className="mt-5 grid gap-4 text-sm font-medium text-stone-600 sm:grid-cols-2 lg:grid-cols-5">
              <span>Create Dublin</span>
              <span>Irish Design Forum</span>
              <span>Green Makers Guild</span>
              <span>Eco Business Platform</span>
              <span>Climate Innovation Network</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="font-serif text-4xl text-stone-900 inline-block">
                Greenezine
              </Link>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sage-700">
                Sustainability-focused magazine
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                A premium modern Irish publication spotlighting sustainable businesses, ideas, and monthly editorial editions.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Magazine</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-sm text-stone-600 hover:text-sage-700 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/issues/april-2026" className="text-sm text-stone-600 hover:text-sage-700 transition-colors">
                    Latest Edition
                  </Link>
                </li>
                <li>
                  <Link to="/archive" className="text-sm text-stone-600 hover:text-sage-700 transition-colors">
                    Archive
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-sm text-stone-600 hover:text-sage-700 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/featured-businesses" className="text-sm text-stone-600 hover:text-sage-700 transition-colors">
                    Featured Businesses
                  </Link>
                </li>
                <li>
                  <Link to="/advertise" className="text-sm text-stone-600 hover:text-sage-700 transition-colors">
                    Advertise
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-stone-600 hover:text-sage-700 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Get In Touch</h4>
              <a
                href="mailto:gogreenzine@icloud.com"
                className="text-sage-700 hover:text-sage-800 font-medium text-sm transition-colors block mb-4"
              >
                gogreenzine@icloud.com
              </a>
              <p className="text-stone-600 text-sm mb-4 leading-7">
                Available for partnerships, advertising enquiries, and editorial collaborations.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-stone-500">
                <span>Irish Digital Publication</span>
                <span>Monthly Editions</span>
                <span>Featured Irish Businesses</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-6 px-4 sm:px-6 lg:px-8 border-t border-stone-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-stone-500 text-sm">
            © {currentYear} Greenezine. Premium Irish sustainability publication and media platform.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0 text-sm text-stone-500">
            <a href="#" className="hover:text-sage-700 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-sage-700 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
