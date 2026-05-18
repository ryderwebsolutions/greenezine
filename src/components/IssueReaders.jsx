import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString()

function ReaderShell({ eyebrow, title, description, action, children }) {
  return (
    <div className="rounded-[2rem] border border-stone-200 bg-white shadow-[0_30px_80px_-40px_rgba(32,49,42,0.35)] overflow-hidden">
      <div className="border-b border-stone-200 bg-gradient-to-r from-stone-50 via-white to-sage-50/70 px-5 py-4 sm:px-8 sm:py-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-sage-700">{eyebrow}</p>
            <h2 className="mt-2 font-serif text-2xl text-stone-900 sm:text-3xl">{title}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">{description}</p>
          </div>
          {action}
        </div>
      </div>
      {children}
    </div>
  )
}

export function EmbeddedIssueFrame({ title, src, href }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <ReaderShell
      eyebrow="Digital issue"
      title={title}
      description="Flip through the full edition in an embedded reading environment. If the embed is slow to load, you can open the issue directly in a new tab."
      action={
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-700 transition hover:border-sage-400 hover:text-sage-700"
        >
          Open Issue
        </a>
      }
    >
      <div className="relative bg-stone-100 px-3 py-3 sm:px-5 sm:py-5">
        {!loaded && (
          <div className="absolute inset-x-3 top-3 z-10 flex items-center justify-center rounded-[1.5rem] bg-white/90 px-6 py-12 text-center shadow-sm backdrop-blur sm:inset-x-5 sm:top-5">
            <div>
              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-sage-200 border-t-sage-700" />
              <p className="mt-4 font-serif text-xl text-stone-900">Loading the edition</p>
              <p className="mt-2 max-w-md text-sm text-stone-600">Preparing the interactive flipbook. If this takes too long, use the open button above.</p>
            </div>
          </div>
        )}

        <div className="relative w-full overflow-hidden rounded-[1.5rem] bg-white shadow-[0_25px_60px_-35px_rgba(28,42,36,0.45)]" style={{ paddingBottom: '141.4%' }}>
          <iframe
            src={src}
            title={title}
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    </ReaderShell>
  )
}

export function LocalPdfReader({ title, file, href }) {
  const containerRef = useRef(null)
  const [pageWidth, setPageWidth] = useState(720)
  const [numPages, setNumPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1)
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    const element = containerRef.current

    if (!element) {
      return undefined
    }

    const updateWidth = () => {
      const nextWidth = Math.max(280, Math.min(920, element.clientWidth - 32))
      setPageWidth(nextWidth)
    }

    updateWidth()

    const observer = new ResizeObserver(updateWidth)
    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const hasPrevious = pageNumber > 1
  const hasNext = numPages > 0 && pageNumber < numPages

  return (
    <ReaderShell
      eyebrow="Featured edition"
      title={title}
      description="Read the April edition directly inside Greenezine with a responsive document viewer designed for calm, immersive reading across desktop and mobile."
      action={
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-sage-800"
        >
          Open Full PDF
        </a>
      }
    >
      <div className="border-b border-stone-200 bg-stone-50/90 px-4 py-4 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => hasPrevious && setPageNumber((current) => current - 1)}
              disabled={!hasPrevious}
              className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-sage-400 hover:text-sage-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => hasNext && setPageNumber((current) => current + 1)}
              disabled={!hasNext}
              className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-sage-400 hover:text-sage-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
            <button
              type="button"
              onClick={() => setScale((current) => Math.max(0.8, Number((current - 0.1).toFixed(1))))}
              className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-sage-400 hover:text-sage-700"
            >
              Zoom out
            </button>
            <button
              type="button"
              onClick={() => setScale((current) => Math.min(1.8, Number((current + 0.1).toFixed(1))))}
              className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-sage-400 hover:text-sage-700"
            >
              Zoom in
            </button>
          </div>

          <div className="flex items-center gap-3 text-sm text-stone-600">
            <span className="font-medium text-stone-800">Page {pageNumber}{numPages ? ` of ${numPages}` : ''}</span>
            <span className="hidden h-1 w-1 rounded-full bg-stone-300 sm:inline-block" />
            <span className="hidden sm:inline">Responsive viewer</span>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="bg-[#f4f1ea] px-3 py-4 sm:px-8 sm:py-8">
        {loadError ? (
          <div className="mx-auto flex min-h-[480px] max-w-3xl flex-col items-center justify-center rounded-[1.75rem] border border-stone-200 bg-white px-6 py-16 text-center shadow-[0_20px_50px_-35px_rgba(36,52,46,0.45)]">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-sage-700">Reader unavailable</p>
            <h3 className="mt-3 font-serif text-3xl text-stone-900">Open the full April edition</h3>
            <p className="mt-3 max-w-lg text-sm leading-7 text-stone-600 sm:text-base">The in-page reader could not load on this device or browser. The full local PDF is still available and ready to open.</p>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-sage-800"
            >
              Open Full PDF
            </a>
          </div>
        ) : (
          <div className="mx-auto flex max-w-5xl justify-center overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white p-3 shadow-[0_25px_60px_-35px_rgba(36,52,46,0.45)] sm:p-6">
            <Document
              file={file}
              loading={
                <div className="flex min-h-[540px] items-center justify-center px-6 py-16 text-center">
                  <div>
                    <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-sage-200 border-t-sage-700" />
                    <p className="mt-4 font-serif text-2xl text-stone-900">Loading the April issue</p>
                    <p className="mt-2 max-w-md text-sm text-stone-600">Preparing the PDF viewer and page assets for a premium reading experience.</p>
                  </div>
                </div>
              }
              onLoadSuccess={({ numPages: pages }) => {
                setNumPages(pages)
                setPageNumber(1)
                setLoadError(false)
              }}
              onLoadError={() => setLoadError(true)}
              error=""
            >
              <Page
                pageNumber={pageNumber}
                width={Math.floor(pageWidth * scale)}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                loading=""
              />
            </Document>
          </div>
        )}
      </div>
    </ReaderShell>
  )
}