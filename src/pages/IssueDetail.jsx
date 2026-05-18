import { Link, useParams } from 'react-router-dom'
import { EmbeddedIssueFrame, LocalPdfReader } from '../components/IssueReaders'

export default function IssueDetail() {
  const { slug } = useParams()

  // Define issue details
  const issues = {
    'january-2026': {
      title: 'January 2026 Edition',
      subtitle: 'Ireland\'s Sustainability Leaders & Innovators',
      month: 'January',
      year: 2026,
      description: 'Our launch edition featuring Ireland\'s sustainability leaders, eco-entrepreneurs, and environmental voices shaping change.',
      content: 'Discover stories on sustainable business, green innovation, and Ireland\'s path to environmental leadership.',
      embedUrl: 'http://gogreenezine.com/flipbook-january/',
      isEmbedded: true,
      readTime: '26 min',
    },
    'february-2026': {
      title: 'February 2026 Edition',
      subtitle: 'Green Business & Renewable Energy Solutions',
      month: 'February',
      year: 2026,
      description: 'Green business innovations, corporate sustainability initiatives, and renewable energy solutions across Ireland.',
      content: 'Explore how Irish companies are leading the sustainability movement and creating positive environmental impact.',
      embedUrl: 'http://gogreenezine.com/flipbooks-february/',
      isEmbedded: true,
      readTime: '24 min',
    },
    'march-2026': {
      title: 'March 2026 Edition',
      subtitle: 'Community Initiatives & Environmental Conservation',
      month: 'March',
      year: 2026,
      description: 'Stories on sustainable living, environmental conservation, and the green community initiatives building momentum.',
      content: 'Discover how Irish communities are embracing sustainable practices and creating local environmental solutions.',
      embedUrl: 'https://gogreenezine.com/flipbook-march/',
      isEmbedded: true,
      readTime: '22 min',
    },
    'april-2026': {
      title: 'April 2026 Edition',
      subtitle: 'Sustainability Innovation & Green Business Leadership',
      month: 'April',
      year: 2026,
      description: 'This month\'s Greenezine edition explores sustainability innovation, eco-conscious business, environmental transformation, and modern green living across Ireland.',
      content: 'A curated editorial release featuring sustainable business ideas, climate-minded leadership, and stories shaping a calmer, greener future across Ireland.',
      pdfUrl: '/Magazine_April_Final.pdf',
      isLocalPdf: true,
      readTime: '25 min',
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
      <section className="relative overflow-hidden border-b border-stone-200 bg-[linear-gradient(180deg,#f7f3eb_0%,#fbfaf7_48%,#eef3ef_100%)] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-white/70 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-sage-100/70 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-stone-200 bg-white/90 px-4 py-2 shadow-sm">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-sage-700">{issue.month.toUpperCase()} {issue.year}</span>
                <span className="h-1 w-1 rounded-full bg-stone-300"></span>
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">Featured edition</span>
              </div>

              <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[0.95] text-stone-900 sm:text-6xl lg:text-7xl">
                {issue.month} {issue.year}
              </h1>

              <p className="mt-6 max-w-2xl font-sans text-lg font-medium text-sage-800 sm:text-xl">
                {issue.subtitle}
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">
                {issue.description}
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600">
                {issue.content}
              </p>

              <div className="mt-8 flex flex-col gap-4 text-sm text-stone-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                <span className="font-medium text-stone-900">{issue.readTime} reading time</span>
                <span className="hidden h-1 w-1 rounded-full bg-stone-300 sm:inline-block"></span>
                <span>Irish digital publication</span>
                <span className="hidden h-1 w-1 rounded-full bg-stone-300 sm:inline-block"></span>
                <span>Sustainability-focused magazine</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-6 rounded-[2.2rem] bg-white/50 blur-2xl"></div>
              <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-[linear-gradient(180deg,#fdfcf8_0%,#eef3ef_100%)] p-8 shadow-[0_35px_90px_-45px_rgba(28,42,36,0.45)] sm:p-10">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-sage-700">Featured issue</p>
                    <p className="mt-3 max-w-[14rem] font-serif text-3xl leading-tight text-stone-900 sm:text-4xl">Sustainability Innovation & Green Business</p>
                  </div>
                  <span className="rounded-full border border-stone-200 bg-white px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">APRIL 2026</span>
                </div>

                <div className="mt-14 rounded-[1.5rem] border border-white/80 bg-white/80 p-8 shadow-inner">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-sage-700">Greenezine</p>
                  <div className="mt-5 text-7xl font-semibold tracking-[-0.06em] text-stone-900 sm:text-8xl">APR</div>
                  <div className="mt-2 font-serif text-3xl text-stone-500">2026</div>
                  <div className="mt-8 h-px w-full bg-gradient-to-r from-stone-200 via-sage-400 to-transparent"></div>
                  <p className="mt-8 max-w-xs font-sans text-sm leading-7 text-stone-600">A curated release on eco-conscious business, modern sustainability, and environmental leadership across Ireland.</p>
                  <Link
                    to="/issues/april-2026"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-sage-800"
                  >
                    Read Edition
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Content Section */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {issue.isEmbedded && (
            <EmbeddedIssueFrame
              title={`${issue.month} ${issue.year} Edition`}
              src={issue.embedUrl}
              href={issue.embedUrl}
            />
          )}

          {issue.isLocalPdf && (
            <LocalPdfReader
              title={`${issue.month} ${issue.year} Edition`}
              file={issue.pdfUrl}
              href={issue.pdfUrl}
            />
          )}

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-stone-200 bg-[#faf7f0] p-6 shadow-sm">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-sage-700">Editorial focus</p>
              <h3 className="mt-3 font-serif text-2xl text-stone-900">Curated sustainability reporting</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">Beautifully framed stories on eco-business, climate innovation, and modern green living in Ireland.</p>
            </div>
            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-sage-700">Reading experience</p>
              <h3 className="mt-3 font-serif text-2xl text-stone-900">Responsive and immersive</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">Smooth controls, elegant framing, and a reliable fallback keep the issue usable across mobile and desktop.</p>
            </div>
            <div className="rounded-[1.5rem] border border-stone-200 bg-[#f4f7f3] p-6 shadow-sm">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-sage-700">Publication signal</p>
              <h3 className="mt-3 font-serif text-2xl text-stone-900">Irish digital edition</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">Part of a growing monthly publication spotlighting sustainability-focused businesses, ideas, and communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="border-t border-stone-200 bg-stone-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <p className="font-serif text-2xl text-stone-900">Explore more issues</p>
              <p className="mt-1 text-sm text-stone-600">Browse the archive and discover previous monthly editions.</p>
            </div>
            <div className="flex gap-4">
              <Link to="/archive" className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-sage-400 hover:text-sage-700">
                View Archive
              </Link>
              <Link to="/" className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-sage-800">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
