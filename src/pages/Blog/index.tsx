import { Link } from 'react-router-dom'

const POSTS = [
  {
    title: 'New brand campaign launched',
    excerpt:
      'A renewed Studio Dental visual identity focused on long-term oral health and confident smiles.',
  },
  {
    title: 'All-on-4 treatment overview',
    excerpt:
      'Learn how full-jaw restoration on 4 implants can rebuild comfort, function, and aesthetics.',
  },
  {
    title: 'Orthodontics with aligners or braces',
    excerpt:
      'Compare nearly invisible aligners with classic braces to choose your ideal straightening plan.',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="bg-creamBrand py-10 md:py-16">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="mb-6 flex max-w-[760px] flex-col gap-3 md:mb-9">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-skyBrand/30 bg-skyBrand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink2">
            <span className="h-1.5 w-1.5 rounded-full bg-skyBrand" aria-hidden="true" />
            News
          </span>
          <h2>Latest updates from our clinics.</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="rounded-lg border border-black/10 bg-creamBrand p-6 shadow-soft-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-soft-md"
            >
              <h3 className="text-[1.15rem]">{p.title}</h3>
              <p className="mt-3 text-[0.96rem] leading-relaxed text-muted">{p.excerpt}</p>
              <Link to="/contact-us" className="mt-4 inline-flex text-[0.9rem] font-semibold text-ink2 transition hover:text-ink">
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
