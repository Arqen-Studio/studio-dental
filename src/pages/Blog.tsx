import { Link } from 'react-router-dom'

const POSTS = [
  {
    title: 'How often should you get a professional cleaning?',
    excerpt:
      'A practical guide to cleaning frequency based on lifestyle, gum health, and long-term prevention.',
  },
  {
    title: 'Invisalign vs braces: what is right for you?',
    excerpt:
      'Compare treatment goals, comfort, timelines, and maintenance before choosing your plan.',
  },
  {
    title: '5 habits to protect your smile every day',
    excerpt:
      'Simple at-home habits that reduce sensitivity, staining, and future restorative treatments.',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="bg-creamBrand py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="mb-8 flex max-w-[760px] flex-col gap-3 md:mb-12">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-skyBrand/30 bg-skyBrand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink2">
            <span className="h-1.5 w-1.5 rounded-full bg-skyBrand" aria-hidden="true" />
            Blog
          </span>
          <h2>Latest dental tips and updates.</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="rounded-lg border border-black/10 bg-white p-6 shadow-soft-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-soft-md"
            >
              <h3 className="text-[1.15rem]">{p.title}</h3>
              <p className="mt-3 text-[0.96rem] leading-relaxed text-muted">{p.excerpt}</p>
              <Link to="/contact-us" className="mt-4 inline-flex text-[0.9rem] font-semibold text-ink2 transition hover:text-ink">
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
