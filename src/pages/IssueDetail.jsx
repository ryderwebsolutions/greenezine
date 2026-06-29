import { Link, useParams } from 'react-router-dom'
import { UnifiedIssueReader } from '../components/IssueReaders'
import { issues, issuesBySlug } from '../data/issues'

export default function IssueDetail() {
  const { slug } = useParams()
  const issue = issuesBySlug[slug]

  if (!issue) {
    return (
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[1.4rem] border border-stone-200 bg-white p-10 text-center shadow-sm">
          <h1 className="text-4xl text-stone-900">Issue Not Found</h1>
          <p className="mt-4 text-stone-600">This edition is not available. Please visit the archive.</p>
          <Link to="/archive" className="btn-primary mt-8">
            Open Archive
          </Link>
        </div>
      </section>
    )
  }

  const currentIndex = issues.findIndex((item) => item.slug === issue.slug)
  const previousIssue = issues[currentIndex + 1]
  const nextIssue = issues[currentIndex - 1]

  return (
    <>
      <section className="border-b border-stone-200 bg-[linear-gradient(180deg,#f6f2e9_0%,#fcfaf6_100%)] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_18rem] lg:items-end">
            <div>
              <p className="editorial-eyebrow">{issue.month} {issue.year}</p>
              <h1 className="mt-6 text-5xl leading-[0.95] text-stone-900 sm:text-6xl">{issue.title}</h1>
              <p className="mt-5 text-lg text-sage-800 sm:text-xl">{issue.subtitle}</p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">{issue.description}</p>
              <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-stone-500">
                <span>{issue.readTime} read</span>
                <span className="h-1 w-1 rounded-full bg-stone-300" />
                <span>Greenezine digital issue</span>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.3rem] border border-stone-200 bg-white shadow-sm">
              <div className="aspect-[3/4] bg-[#f3eee3]">
                {issue.coverType === 'image' ? (
                  <img src={issue.coverSrc} alt={`${issue.title} cover`} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-3 bg-[#edeae2] text-center">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sage-700">{issue.month} {issue.year}</span>
                    <span className="text-sm text-stone-400">PDF coming soon</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <UnifiedIssueReader
            title={`${issue.month} ${issue.year} Edition`}
            readerUrl={issue.readerUrl}
            openUrl={issue.openUrl}
            readerType={issue.readerType}
            pagesDir={issue.pagesDir}
            pageCount={issue.pageCount}
          />
        </div>
      </section>

      <section className="border-t border-stone-200 bg-[#f8f5ee] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            {previousIssue ? (
              <Link to={`/issues/${previousIssue.slug}`} className="btn-outline">
                Previous: {previousIssue.month}
              </Link>
            ) : null}
            {nextIssue ? (
              <Link to={`/issues/${nextIssue.slug}`} className="btn-outline">
                Next: {nextIssue.month}
              </Link>
            ) : null}
          </div>

          <Link to="/archive" className="btn-primary">
            View Full Archive
          </Link>
        </div>
      </section>
    </>
  )
}
