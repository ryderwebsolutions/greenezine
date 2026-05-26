import { Link } from 'react-router-dom'

const coverage = [
  {
    title: 'Sustainability and climate progress',
    description:
      'Reporting on practical environmental change, policy movement, and measurable impact across Irish communities and sectors.',
  },
  {
    title: 'Innovation and energy',
    description:
      'Coverage of renewable energy, low-carbon systems, and Irish innovation shaping a more resilient economy.',
  },
  {
    title: 'Business and leadership',
    description:
      'Profiles, interviews, and analysis focused on organizations building credible sustainability strategies.',
  },
  {
    title: 'Built environment and modern living',
    description:
      'Editorial features on greener construction, design, and day-to-day decisions that improve long-term outcomes.',
  },
]

const values = [
  {
    title: 'Clarity',
    text: 'Clear editorial framing without noise, overstatement, or trend-driven formatting.',
  },
  {
    title: 'Credibility',
    text: 'Publication standards designed to build trust with readers, partners, and advertisers.',
  },
  {
    title: 'Consistency',
    text: 'A monthly release rhythm and platform experience that feels stable and established.',
  },
]

export default function About() {
  return (
    <>
      <section className="border-b border-stone-200 bg-[linear-gradient(180deg,#f7f2e8_0%,#fcfaf6_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="editorial-eyebrow">About Greenezine</p>
          <h1 className="mt-6 text-5xl leading-[0.95] text-stone-900 sm:text-6xl">
            A modern Irish publication focused on sustainability.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-600 sm:text-xl">
            Greenezine publishes monthly digital editions exploring sustainability, innovation, energy, and business progress across Ireland.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.1fr)_22rem]">
          <div>
            <h2 className="text-4xl text-stone-900 sm:text-5xl">Editorial mission</h2>
            <p className="mt-5 text-base leading-8 text-stone-600 sm:text-lg">
              We publish reporting and curated issue content that helps readers understand real sustainability progress in Ireland.
              The objective is simple: useful editorial structure, strong visual clarity, and trustworthy publication standards.
            </p>
          </div>

          <aside className="rounded-[1.3rem] border border-stone-200 bg-[#f8f4ec] p-6 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-700">Publication format</p>
            <ul className="mt-4 space-y-3 text-sm text-stone-600">
              <li>Monthly digital editions</li>
              <li>Issue-first editorial structure</li>
              <li>Consistent mobile and desktop reading</li>
              <li>Irish sustainability focus</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-[#fbf9f4] px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl text-stone-900 sm:text-5xl">What we cover</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {coverage.map((item) => (
              <article key={item.title} className="rounded-[1.2rem] border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl leading-tight text-stone-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl text-stone-900 sm:text-5xl">Editorial values</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {values.map((item) => (
              <article key={item.title} className="rounded-[1.2rem] border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl text-stone-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/archive" className="btn-primary">Browse archive</Link>
            <Link to="/advertise" className="btn-outline">Advertising partnerships</Link>
            <Link to="/contact" className="btn-outline">Contact editorial team</Link>
          </div>
        </div>
      </section>
    </>
  )
}
