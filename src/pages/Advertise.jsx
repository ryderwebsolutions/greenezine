import { useState } from 'react'
import { Link } from 'react-router-dom'

const packages = [
  {
    title: 'Featured business placement',
    details: [
      'Prominent placement in digital issues and selected site sections',
      'Brand profile with concise editorial framing',
      'Direct response call-to-action integration',
    ],
  },
  {
    title: 'Campaign placement',
    details: [
      'Issue-aligned visual placements',
      'Targeted schedule around monthly releases',
      'Creative formats tailored for mobile and desktop',
    ],
  },
  {
    title: 'Native partnership',
    details: [
      'Sponsored editorial format with clear disclosure',
      'Story-led campaign integration',
      'Custom scope based on publication calendar',
    ],
  },
]

const audience = [
  'Sustainability-focused professionals and business leaders',
  'Readers seeking practical climate and innovation reporting',
  'Organizations active in Irish environmental and energy progress',
]

export default function Advertise() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Thank you. Your enquiry has been received and our team will reply shortly.')
    setFormData({ name: '', business: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      <section className="border-b border-stone-200 bg-[linear-gradient(180deg,#f7f2e8_0%,#fcfaf6_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="editorial-eyebrow">Advertising</p>
          <h1 className="mt-6 text-5xl leading-[0.95] text-stone-900 sm:text-6xl">
            Reach a focused Irish sustainability audience.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-600 sm:text-xl">
            Greenezine offers publication-led partnerships for brands aligned with sustainability, innovation, and long-term environmental progress.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.05fr)_22rem]">
          <div>
            <h2 className="text-4xl text-stone-900 sm:text-5xl">Partnership approach</h2>
            <p className="mt-5 text-base leading-8 text-stone-600 sm:text-lg">
              We focus on restrained, high-quality placements that respect the reading experience while creating measurable visibility for relevant brands.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {packages.map((item) => (
                <article key={item.title} className="rounded-[1.2rem] border border-stone-200 bg-[#fbf9f4] p-6 shadow-sm">
                  <h3 className="text-2xl leading-tight text-stone-900">{item.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-stone-600">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[1.3rem] border border-stone-200 bg-[#f8f4ec] p-6 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-700">Audience profile</p>
            <ul className="mt-4 space-y-3 text-sm text-stone-600">
              {audience.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-[#fbf9f4] px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[1.5rem] border border-stone-200 bg-white p-7 shadow-sm sm:p-10">
          <h2 className="text-4xl text-stone-900 sm:text-5xl">Request partnership details</h2>
          <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
            Share your goals and timeline. We will respond with recommended options and a tailored commercial plan.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-stone-800">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-sage-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-stone-800">Business</label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-sage-600"
                  placeholder="Business name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-stone-800">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-sage-600"
                  placeholder="you@business.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-stone-800">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-sage-600"
                  placeholder="+353"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-stone-800">Campaign goals</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-sage-600"
                placeholder="Tell us what you want to achieve and your preferred campaign window."
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Send enquiry
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link to="/archive" className="btn-outline">Review issue archive</Link>
          <Link to="/contact" className="btn-outline">Contact the team</Link>
          <Link to="/issues/june-2026" className="btn-primary">Read latest edition</Link>
        </div>
      </section>
    </>
  )
}
