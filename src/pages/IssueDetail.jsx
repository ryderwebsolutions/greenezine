import { useParams } from 'react-router-dom'

export default function IssueDetail() {
  const { slug } = useParams()

  // Define issue details
  const issues = {
    'january-2026': {
      title: 'January 2026 Edition',
      month: 'January',
      year: 2026,
      description: 'Our launch edition featuring Ireland\'s sustainability leaders, eco-entrepreneurs, and environmental voices shaping change.',
      content: 'Discover stories on sustainable business, green innovation, and Ireland\'s path to environmental leadership.',
      embedUrl: 'http://gogreenezine.com/flipbook-january/',
      isEmbedded: true,
    },
    'february-2026': {
      title: 'February 2026 Edition',
      month: 'February',
      year: 2026,
      description: 'Green business innovations, corporate sustainability initiatives, and renewable energy solutions across Ireland.',
      content: 'Explore how Irish companies are leading the sustainability movement and creating positive environmental impact.',
      embedUrl: 'http://gogreenezine.com/flipbooks-february/',
      isEmbedded: true,
    },
    'march-2026': {
      title: 'March 2026 Edition',
      month: 'March',
      year: 2026,
      description: 'Stories on sustainable living, environmental conservation, and the green community initiatives building momentum.',
      content: 'Discover how Irish communities are embracing sustainable practices and creating local environmental solutions.',
      embedUrl: 'https://gogreenezine.com/flipbook-march/',
      isEmbedded: true,
    },
    'april-2026': {
      title: 'April 2026 Edition',
      month: 'April',
      year: 2026,
      description: 'The latest edition of Greenezine featuring breakthrough sustainability innovations, eco-conscious businesses, and Ireland\'s green future.',
      content: 'A comprehensive look at the business leaders, environmental innovators, and sustainability champions shaping Ireland\'s transition to a green economy.',
      isNative: true,
    },
  }

  const issue = issues[slug]

  if (!issue) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Issue Not Found</h1>
          <p className="text-gray-600">This issue doesn't exist. Please check the archive.</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sage-50 to-eco-50 border-b border-sage-200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-eco-100 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Content */}
            <div className="flex-1">
              <div className="inline-block px-4 py-1.5 bg-sage-100 border border-sage-200 rounded-full mb-6">
                <span className="text-sage-700 text-sm font-semibold tracking-wide">{issue.month.toUpperCase()} {issue.year}</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                {issue.title}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
                {issue.description}
              </p>

              <p className="text-gray-700 leading-relaxed">
                {issue.content}
              </p>
            </div>

            {/* Magazine Cover */}
            <div className="flex-1 h-96 sm:h-[500px] flex items-center justify-center">
              <div className="relative w-full h-full bg-gradient-to-br from-sage-100 to-eco-100 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl font-bold text-sage-700 mb-2">
                    {issue.month.substring(0, 3)}
                  </div>
                  <div className="text-4xl font-light text-sage-600">{issue.year}</div>
                  <div className="h-0.5 w-12 bg-sage-600 mx-auto my-4"></div>
                  <p className="text-sm text-gray-700 px-4">Greenezine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Embedded Flipbook for Jan/Feb/Mar */}
          {issue.isEmbedded && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Read {issue.month} {issue.year} Edition
              </h2>
              
              <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden" style={{ paddingBottom: '141.4%' }}>
                <iframe
                  src={issue.embedUrl}
                  title={issue.title}
                  className="absolute inset-0 w-full h-full border-0 rounded-lg"
                  allowFullScreen
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                />
              </div>

              <div className="mt-8 p-6 bg-sage-50 rounded-lg border border-sage-200">
                <p className="text-sm text-gray-600">
                  <strong>Tip:</strong> Use the flipbook controls to navigate through pages, adjust zoom, and explore the full editorial experience.
                </p>
              </div>
            </div>
          )}

          {/* Native April Flipbook */}
          {issue.isNative && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Read {issue.month} {issue.year} Edition
              </h2>
              
              {/* PDF Viewer */}
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-sage-100 to-eco-100">
                  <div className="text-center px-4">
                    <div className="mb-6">
                      <svg className="w-16 h-16 mx-auto text-sage-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">April 2026 Digital Edition</h3>
                    <p className="text-gray-600 mb-6">Premium interactive magazine reading experience</p>
                    <a
                      href="https://drive.google.com/file/d/1DXEAvcnEGgcmuQJI6QNs49n2yfnnrVcM/view?usp=drive_web"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-sage-600 text-white font-semibold rounded-lg hover:bg-sage-700 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      View Full Edition
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-lg border border-sage-100">
                  <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Interactive Content</h3>
                  <p className="text-sm text-gray-600">Fully interactive and immersive editorial experience</p>
                </div>

                <div className="p-6 bg-white rounded-lg border border-sage-100">
                  <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Customizable View</h3>
                  <p className="text-sm text-gray-600">Adjust zoom, brightness, and reading preferences</p>
                </div>

                <div className="p-6 bg-white rounded-lg border border-sage-100">
                  <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Mobile Friendly</h3>
                  <p className="text-sm text-gray-600">Read seamlessly on any device</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-sage-50 border-t border-sage-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-gray-600 font-medium">Explore More Issues</p>
            </div>
            <div className="flex gap-4">
              <a href="/archive" className="px-6 py-3 bg-white border-2 border-sage-200 text-sage-700 font-semibold rounded-lg hover:bg-sage-50 transition-colors">
                View Archive
              </a>
              <a href="/" className="px-6 py-3 bg-sage-600 text-white font-semibold rounded-lg hover:bg-sage-700 transition-colors">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
