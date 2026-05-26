import { Link } from 'react-router-dom'
import { issues } from '../data/issues'

function ArchiveCard({ issue }) {
  return (
    <Link to={`/issues/${issue.slug}`} className="group block h-full" aria-label={`Open ${issue.title}`}>
      <article className="h-full overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sage-300 hover:shadow-[0_26px_55px_-38px_rgba(33,45,39,0.48)]">
        <div className="grid md:grid-cols-[12rem_minmax(0,1fr)]">
          <div className="relative aspect-[3/4] bg-[#f3eee3] md:aspect-auto">
            {issue.coverType === 'image' ? (
              <img
                src={issue.coverSrc}
                alt={`${issue.title} cover`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <iframe
                src={issue.coverSrc}
                title={`${issue.title} cover preview`}
                loading="lazy"
                className="h-full w-full border-0 pointer-events-none"
              />
            )}
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-7">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-700">{issue.month} {issue.year}</p>
              <h2 className="mt-2 text-3xl leading-tight text-stone-900 sm:text-4xl">{issue.title}</h2>
              <p className="mt-2 text-sm font-medium text-stone-500">{issue.subtitle}</p>
              <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">{issue.description}</p>
            </div>

            <div className="mt-6 flex items-center justify-between text-sm">
              <span className="text-stone-500">{issue.readTime} read</span>
              <span className="font-medium text-sage-700">Read issue</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default function Archive() {
  return (
    <>
      <section className="border-b border-stone-200 bg-[linear-gradient(180deg,#f7f2e8_0%,#fbfaf6_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="editorial-eyebrow">Publication archive</p>
          <h1 className="mt-6 text-5xl text-stone-900 sm:text-6xl">Issue Archive</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-stone-600">
            A monthly collection of Greenezine editions, designed as a consistent digital reading experience across desktop and mobile.
          </p>
        </div>
      </section>

      <section className="bg-[#fbf9f4] px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="mx-auto max-w-7xl space-y-6">
          {issues.map((issue) => (
            <ArchiveCard key={issue.slug} issue={issue} />
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-7xl text-center">
          <Link to="/issues/april-2026" className="btn-primary">
            Read Latest Issue
          </Link>
        </div>
      </section>
    </>
  )
}
