import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="flex-1 flex items-center justify-center px-4 py-12 md:py-20">
      {/* Subtle background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-sage-50 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-50 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="w-full max-w-3xl animate-fade-in">
        {/* Publication Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-block px-4 py-1.5 bg-sage-50 border border-sage-200 rounded-full hover:border-sage-300 transition-colors">
            <span className="text-sage-700 text-xs font-bold tracking-widest">PUBLICATION • ISSUE 04/2026</span>
          </div>
        </div>

        {/* Main Headline - Premium Typography */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 text-center mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Ireland's
          <br />
          <span className="bg-gradient-to-r from-sage-600 to-eco-600 bg-clip-text text-transparent">
            Sustainability
          </span>
          <br />
          Platform
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-gray-600 text-center mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Premium editorial content on sustainable innovation, eco-business leadership, and environmental transformation reshaping Ireland.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/issues/april-2026"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sage-600 to-eco-600 text-white font-semibold rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Read Latest Edition
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/archive"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage-600 font-semibold rounded-lg border-2 border-sage-200 hover:border-sage-400 hover:bg-sage-50 transition-all duration-300"
          >
            Browse Archive
          </Link>
          <Link
            to="/advertise"
            className="inline-flex items-center justify-center px-8 py-4 bg-sage-100 text-sage-700 font-semibold rounded-lg hover:bg-sage-200 transition-colors"
          >
            Advertise
          </Link>
        </div>

        {/* Trust Signal */}
        <div className="text-center text-sm text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p>✓ Trusted by Ireland's Leading Sustainable Businesses</p>
        </div>
      </div>
    </div>
  )
}
