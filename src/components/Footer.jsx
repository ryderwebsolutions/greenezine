import { Link } from 'react-router-dom'
import { INSTAGRAM_URL } from '../data/issues'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-200 bg-[#efe8dc] text-stone-900">
      <div className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block text-4xl text-stone-900">
              Greenezine
            </Link>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-sage-700">
              Irish sustainability publication
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
              A monthly digital publication on sustainability, innovation, energy, and environmental progress across Ireland.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/" className="text-stone-700 hover:text-sage-700">Home</Link></li>
              <li><Link to="/issues/april-2026" className="text-stone-700 hover:text-sage-700">Latest Edition</Link></li>
              <li><Link to="/archive" className="text-stone-700 hover:text-sage-700">Archive</Link></li>
              <li><Link to="/about" className="text-stone-700 hover:text-sage-700">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Contact</h4>
            <div className="mt-5 space-y-3 text-sm">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="block text-stone-700 hover:text-sage-700">
                Instagram
              </a>
              <Link to="/advertise" className="block text-stone-700 hover:text-sage-700">
                Advertising Enquiries
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-300/70 px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Greenezine. All rights reserved.</p>
          <p>Digital sustainability publication based in Ireland.</p>
        </div>
      </div>
    </footer>
  )
}
