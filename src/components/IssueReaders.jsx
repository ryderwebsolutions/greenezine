import { useEffect, useRef, useState } from 'react'
import { PageFlip } from 'page-flip'

function ReaderShell({ eyebrow, title, description, action, children }) {
  return (
    <section className="overflow-hidden rounded-[1.6rem] border border-stone-200 bg-white shadow-[0_22px_48px_-34px_rgba(30,44,39,0.45)]">
      <div className="border-b border-stone-200 bg-[linear-gradient(90deg,#faf8f2_0%,#ffffff_45%,#f2f6f3_100%)] px-5 py-5 sm:px-8 sm:py-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sage-700">{eyebrow}</p>
            <h2 className="mt-2 text-2xl text-stone-900 sm:text-3xl">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">{description}</p>
          </div>
          {action}
        </div>
      </div>
      {children}
    </section>
  )
}

function LocalFlipbookReader({ pagesDir, pageCount }) {
  const containerRef = useRef(null)
  const flipRef = useRef(null)
  const [page, setPage] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el || flipRef.current) return

    const pf = new PageFlip(el, {
      width: 500,
      height: 707,
      size: 'stretch',
      minWidth: 150,
      maxWidth: 900,
      minHeight: 200,
      maxHeight: 1300,
      drawShadow: true,
      flippingTime: 600,
      usePortrait: true,
      autoSize: true,
      maxShadowOpacity: 0.4,
      showCover: true,
      mobileScrollSupport: true,
    })

    pf.loadFromImages(
      Array.from({ length: pageCount }, (_, i) => `${pagesDir}/${i + 1}.jpg`)
    )

    pf.on('flip', (e) => setPage(e.data))
    pf.on('init', () => setReady(true))

    flipRef.current = pf

    return () => {
      try { flipRef.current?.destroy() } catch {}
      flipRef.current = null
    }
  }, [pagesDir, pageCount])

  return (
    <div className="flex flex-col">
      <div className="relative bg-stone-900 px-4 py-8 sm:px-8">
        {!ready && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-stone-900">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-stone-600 border-t-stone-300" />
            <p className="mt-4 text-sm text-stone-400">Loading pages…</p>
          </div>
        )}
        <div ref={containerRef} style={{ height: '72vh', maxHeight: '840px' }} />
      </div>

      <div className="flex items-center justify-between border-t border-stone-200 bg-[#f8f5ee] px-6 py-4">
        <button
          onClick={() => flipRef.current?.flipPrev()}
          aria-label="Previous page"
          className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-300 hover:bg-stone-50 active:scale-95"
        >
          ← Prev
        </button>
        <span className="text-sm text-stone-500">
          {ready ? `Page ${page + 1} of ${pageCount}` : 'Loading…'}
        </span>
        <button
          onClick={() => flipRef.current?.flipNext()}
          aria-label="Next page"
          className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-300 hover:bg-stone-50 active:scale-95"
        >
          Next →
        </button>
      </div>
    </div>
  )
}

export function UnifiedIssueReader({ title, readerUrl, openUrl, readerType, pagesDir, pageCount }) {
  const [loaded, setLoaded] = useState(false)

  const isLocalFlipbook = readerType === 'flipbook-local'

  return (
    <ReaderShell
      eyebrow="Issue reader"
      title={title}
      description={
        isLocalFlipbook
          ? 'Click the page edges or use the arrows below to flip through the issue.'
          : 'A consistent, lightweight viewer across all editions. If your connection is slow, open the issue directly in a new tab.'
      }
      action={
        <a
          href={openUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-sage-800"
        >
          Open in New Tab
        </a>
      }
    >
      {isLocalFlipbook ? (
        <LocalFlipbookReader pagesDir={pagesDir} pageCount={pageCount} />
      ) : (
        <div className="relative bg-[#f2eee6] px-3 py-3 sm:px-6 sm:py-6">
          {!loaded && (
            <div className="absolute inset-x-3 top-3 z-10 rounded-[1.3rem] bg-white/90 px-6 py-10 text-center shadow-sm backdrop-blur sm:inset-x-6 sm:top-6">
              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-sage-200 border-t-sage-700" />
              <p className="mt-4 text-xl text-stone-900">Loading issue</p>
              <p className="mt-2 text-sm text-stone-600">Preparing the reading canvas for {title.toLowerCase()}.</p>
            </div>
          )}

          <div className="relative overflow-hidden rounded-[1.3rem] border border-stone-200 bg-white shadow-[0_20px_44px_-32px_rgba(30,44,39,0.55)]" style={{ paddingBottom: '141.4%' }}>
            <iframe
              src={readerUrl}
              title={title}
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={() => setLoaded(true)}
            />
          </div>

          {readerType === 'pdf' && (
            <p className="mt-4 text-center text-xs text-stone-500 sm:text-sm">
              Tip: on mobile, use the open button for a smoother native PDF experience.
            </p>
          )}
        </div>
      )}
    </ReaderShell>
  )
}
