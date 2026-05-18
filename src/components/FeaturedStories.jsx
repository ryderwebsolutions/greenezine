export default function FeaturedStories() {
  const stories = [
    {
      id: 1,
      title: "How Irish Tech Startups Are Leading the Green Revolution",
      category: "Business",
      excerpt: "Discover how Dublin-based sustainability startups are transforming renewable energy and green construction...",
      readTime: "6 min",
      featured: true,
    },
    {
      id: 2,
      title: "EV Infrastructure: Ireland's Path to Carbon-Neutral Transport",
      category: "Innovation",
      excerpt: "The expansion of electric vehicle charging networks across Ireland and what it means for businesses.",
      readTime: "4 min",
    },
    {
      id: 3,
      title: "Circular Economy: How Irish Businesses Are Reducing Waste",
      category: "Sustainability",
      excerpt: "Real examples of Irish companies implementing circular economy principles and the benefits they've seen.",
      readTime: "5 min",
    },
    {
      id: 4,
      title: "Building Green: The Future of Sustainable Construction in Ireland",
      category: "Development",
      excerpt: "New sustainable building materials and practices changing how Ireland builds for the future.",
      readTime: "7 min",
    },
  ]

  return (
    <section className="border-y border-stone-200 bg-[#f7f3eb] py-20 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <div className="editorial-eyebrow mb-4">Featured insights</div>
            <h2 className="text-5xl text-stone-900 sm:text-6xl">
              Latest editorial
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            Thoughtful sustainability reporting, renewable energy coverage, and eco-business intelligence to make Greenezine feel active, timely, and deeply publication-led.
          </p>
        </div>

        <div className="mb-12 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
          {stories.filter((story) => story.featured).map((story) => (
            <article
              key={story.id}
              className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_25px_60px_-35px_rgba(33,45,39,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_80px_-40px_rgba(33,45,39,0.4)]"
            >
              <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.82fr)]">
                <div className="p-8 sm:p-12">
                  <div className="inline-flex rounded-full border border-stone-200 bg-[#f7f3eb] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-700">
                    {story.category}
                  </div>
                  <h3 className="mt-5 text-4xl leading-tight text-stone-900 sm:text-5xl">
                    {story.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                    {story.excerpt}
                  </p>
                  <div className="mt-8 flex items-center gap-4 text-sm text-stone-500">
                    <span>{story.readTime} read</span>
                    <span className="h-1 w-1 rounded-full bg-stone-300"></span>
                    <span>Irish sustainability feature</span>
                  </div>
                  <button className="mt-8 inline-flex items-center rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-sage-800">
                    Read Story
                  </button>
                </div>

                <div className="relative min-h-[20rem] overflow-hidden bg-[linear-gradient(180deg,#edf4f0_0%,#d9e8e3_100%)] p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.9),transparent_35%)]"></div>
                  <div className="relative flex h-full flex-col justify-between rounded-[1.5rem] border border-white/70 bg-white/60 p-7 backdrop-blur">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sage-700">Editorial briefing</p>
                    <div>
                      <p className="font-serif text-3xl text-stone-900">Ireland, innovation, and greener systems</p>
                      <p className="mt-4 text-sm leading-7 text-stone-600">An editorial cover-style feature frame designed to make the publication feel active rather than issue-only.</p>
                    </div>
                    <div className="text-sm text-stone-500">Greenezine editorial desk</div>
                  </div>
                </div>
              </div>
            </article>
          ))}

          <div className="grid gap-5">
            {stories.filter((story) => !story.featured).map((story) => (
              <article
                key={story.id}
                className="group rounded-[1.6rem] border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-700">
                      {story.category}
                    </div>
                    <h3 className="mt-4 text-2xl leading-tight text-stone-900">
                      {story.title}
                    </h3>
                  </div>
                  <span className="text-sm text-stone-500">{story.readTime}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {story.excerpt}
                </p>
                <div className="mt-5 text-sm font-medium text-sage-700">Read Story</div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="btn-outline">
            View All Stories
          </button>
        </div>
      </div>
    </section>
  )
}
