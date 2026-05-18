import { Link } from 'react-router-dom'

export default function FeaturedBusinesses() {
  const businesses = [
    {
      name: 'EcoLeaf Solutions',
      category: 'Sustainable Technology',
      description: 'Leading provider of eco-friendly smart home solutions and renewable energy integration.',
      logo: '🌿',
    },
    {
      name: 'GreenGrow Foods',
      category: 'Organic Agriculture',
      description: 'Premium organic produce from sustainable Irish farms, delivered carbon-neutral.',
      logo: '🥬',
    },
    {
      name: 'Clean Water Systems',
      category: 'Water Conservation',
      description: 'Innovative water treatment and conservation technologies for businesses and communities.',
      logo: '💧',
    },
    {
      name: 'Renewable Energy Partners',
      category: 'Clean Energy',
      description: 'Solar and wind energy solutions powering sustainable businesses across Ireland.',
      logo: '⚡',
    },
    {
      name: 'EcoPackaging Ltd',
      category: 'Sustainable Materials',
      description: 'Biodegradable and compostable packaging solutions for eco-conscious brands.',
      logo: '📦',
    },
    {
      name: 'Green Urban Spaces',
      category: 'Urban Development',
      description: 'Creating sustainable green spaces and eco-friendly urban communities.',
      logo: '🏙️',
    },
    {
      name: 'Carbon Offset Ireland',
      category: 'Climate Action',
      description: 'Supporting businesses in achieving carbon neutrality through verified offset programs.',
      logo: '🌍',
    },
    {
      name: 'Circular Economy Hub',
      category: 'Waste Reduction',
      description: 'Helping businesses transition to circular economy models and reduce waste.',
      logo: '♻️',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sage-50 to-eco-50 border-b border-sage-200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            Featured Businesses
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover sustainability-focused and eco-conscious businesses shaping Ireland's green future.
          </p>
        </div>
      </section>

      {/* Businesses Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businesses.map((business, index) => (
              <div
                key={business.name}
                className="group bg-white rounded-lg border border-sage-100 hover:border-sage-300 overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Logo Area */}
                <div className="h-32 bg-gradient-to-br from-sage-50 to-eco-50 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
                  {business.logo}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3">
                    <div className="inline-block px-3 py-1 bg-sage-100 rounded-full">
                      <span className="text-xs font-semibold text-sage-700">{business.category}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sage-700 transition-colors">
                    {business.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                    {business.description}
                  </p>

                  <button className="text-sage-600 font-semibold text-sm group-hover:text-sage-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advertise CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sage-600 to-eco-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Is Your Business Ready to Be Featured?
          </h2>
          <p className="text-lg text-sage-100 mb-8">
            Showcase your sustainability initiatives and reach environmentally conscious audiences across Ireland.
          </p>
          <Link
            to="/advertise"
            className="inline-flex items-center px-8 py-4 bg-white text-sage-600 font-bold text-lg rounded-lg hover:bg-sage-50 transition-colors shadow-lg"
          >
            Learn About Advertising
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
