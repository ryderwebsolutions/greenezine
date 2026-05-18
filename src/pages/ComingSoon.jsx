import { useState } from 'react'

const INSTAGRAM_URL = '[ADD INSTAGRAM URL HERE]'
const CONTACT_EMAIL = '[ADD GREENEZINE EMAIL HERE]'

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const isEmailConfigured = CONTACT_EMAIL.includes('@')
  const isInstagramConfigured = INSTAGRAM_URL.startsWith('http')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!email.trim()) {
      return
    }

    setSubscribed(true)
    setEmail('')
  }

  return (
    <section className="min-h-screen bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[85vh] w-full max-w-3xl items-center justify-center">
        <div className="w-full rounded-[2rem] border border-stone-200 bg-gradient-to-b from-white to-[#f8fbf9] px-6 py-10 text-center shadow-[0_35px_90px_-55px_rgba(28,42,36,0.4)] sm:px-10 sm:py-14">
          <div className="mx-auto mb-5 inline-flex rounded-full border border-sage-200 bg-sage-50 px-4 py-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sage-700">GREENEZINE</span>
          </div>

          <h1 className="text-5xl leading-[0.95] text-stone-900 sm:text-6xl">
            Website Coming Soon
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            We're currently building the new Greenezine digital publication experience. Subscribe below or contact us for enquiries.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-stone-300 bg-white px-5 py-4 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-sage-600"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-sage-800"
            >
              Subscribe
            </button>
          </form>

          {subscribed && (
            <p className="mt-4 text-sm font-medium text-sage-700">
              Thanks for subscribing.
            </p>
          )}

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={isInstagramConfigured ? INSTAGRAM_URL : '#'}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-[170px] items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-sage-400 hover:text-sage-700"
            >
              Instagram
            </a>
            <a
              href={isEmailConfigured ? `mailto:${CONTACT_EMAIL}` : '#'}
              className="inline-flex min-w-[170px] items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-sage-400 hover:text-sage-700"
            >
              Email Us
            </a>
          </div>

          <div className="mt-8 text-xs text-stone-500">
            <p>Instagram: {INSTAGRAM_URL}</p>
            <p>Email: {CONTACT_EMAIL}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
