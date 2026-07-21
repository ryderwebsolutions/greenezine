// Renders every page of a PDF to public/flipbook-<slug>/pages/<n>.jpg
// Usage: node scripts/pdf-to-flipbook.mjs <pdf-path> <output-slug>
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import * as mupdf from 'mupdf'

const [, , pdfPath, slug] = process.argv
if (!pdfPath || !slug) {
  console.error('Usage: node scripts/pdf-to-flipbook.mjs <pdf-path> <output-slug>')
  process.exit(1)
}

const outDir = path.resolve('public', `flipbook-${slug}`, 'pages')
await mkdir(outDir, { recursive: true })

const buf = await readFile(path.resolve(pdfPath))
const doc = mupdf.Document.openDocument(buf, 'application/pdf')
const pageCount = doc.countPages()
console.log(`${slug}: ${pageCount} pages`)

const matrix = mupdf.Matrix.identity

for (let i = 0; i < pageCount; i++) {
  const page = doc.loadPage(i)
  const pixmap = page.toPixmap(matrix, mupdf.ColorSpace.DeviceRGB, false, true)
  const jpg = pixmap.asJPEG(85, false)
  await writeFile(path.join(outDir, `${i + 1}.jpg`), jpg)
  pixmap.destroy()

  if ((i + 1) % 25 === 0 || i + 1 === pageCount) console.log(`  ${slug}: ${i + 1}/${pageCount}`)
}

console.log(`${slug}: done -> ${outDir}`)
