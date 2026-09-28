import SectionHeader from "../../components/SectionHeader";
import { Link, useParams } from "react-router-dom";
import { POSTS, formatDate } from "../../data/journal";
import { CLINICS, telHref } from "../../data/clinics";


export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = POSTS.find((p) => p.id === id) ?? POSTS[0];
  const others = POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <>
      {/* ── Thin hero band ── */}
      <section className="bg-surface-sunken pt-[78px]">
        <div className="mx-auto w-full page-shell px-5 pb-8 pt-8 md:px-8 [animation:sd-hero-text-in_0.7s_cubic-bezier(0.25,0.46,0.45,0.94)_0.3s_both]">
          <Link
            to="/blog"
            className="inline-flex min-h-11 items-center gap-2 small font-semibold text-ink-muted transition hover:text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Journal
          </Link>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="bg-surface-raised">
        <div
          className="mx-auto w-full max-w-[39rem] px-5 py-14 md:px-8 md:py-20 [animation:sd-hero-text-in_0.8s_cubic-bezier(0.25,0.46,0.45,0.94)_0.2s_both]"
        >
          <p className="small font-semibold text-ink-muted">{formatDate(post.date)}</p>
          <h1 className="mt-3 h2 text-ink">
            {post.title}
          </h1>

          <p className="mt-8 body text-ink-muted">
            Regular dental check-ups are one of the most effective ways to maintain
            your oral health and catch problems early, before they become painful
            or expensive. Most dental professionals recommend visiting at least
            twice a year, but your individual needs may vary.
          </p>

          <p className="mt-5 body text-ink-muted">
            Patients who visit consistently tend to have healthier gums, fewer
            cavities, and a lower risk of tooth loss over time. During each visit,
            your dentist will examine your teeth, gums, and soft tissues, and a
            hygienist will professionally clean areas that brushing alone can't reach.
          </p>

          {/* Image */}
          <div className="my-10 overflow-hidden rounded-md [animation:sd-hero-img-in_1s_cubic-bezier(0.25,0.46,0.45,0.94)_0.4s_both]">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>

          <p className="body text-ink-muted">
            If you have a history of gum disease, a weakened immune system, or are
            prone to cavities, your dentist may recommend more frequent appointments,
            every three to four months. Children and older adults often benefit
            from more regular check-ins as well.
          </p>

          <p className="mt-5 body text-ink-muted">
            At Studio Dental, our team takes the time to understand your specific
            needs and build a schedule that works for your lifestyle. Whether you
            need a routine clean or a full treatment plan, we're here to make
            every visit comfortable and worthwhile.
          </p>

          <div className="mt-10 border-t border-line pt-8">
            <p className="small font-semibold text-ink-muted">Booking and information</p>
            {CLINICS.map((c) => (
              <p key={c.id} className="mt-2 body text-ink-muted">
                {c.name}: {c.address},{" "}
                <a href={telHref(c.phone)} className="inline-flex min-h-11 items-center text-brand underline underline-offset-2">
                  {c.phone}
                </a>
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* ── Other news ── */}
      <section className="bg-surface-sunken py-16 md:py-20">
        <div className="mx-auto w-full page-shell px-5 md:px-8">
          <SectionHeader eyebrow="Journal" title="More from the journal" />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {others.map((p, i) => (
              <article
                key={p.id}
                className={[
                  "flex h-full flex-col overflow-hidden rounded-md shadow-1",
                  i === 1 ? "bg-brand-soft" : "bg-surface-raised",
                ].join(" ")}
                style={{
                  animation: `sd-hero-text-in 0.55s cubic-bezier(0.25,0.46,0.45,0.94) ${i * 100}ms both`,
                }}
              >
                <div className="aspect-[3/2] flex-none overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col px-6 py-5 md:px-8 md:py-6">
                  <p className="small font-semibold text-ink-muted">{formatDate(p.date)}</p>
                  <h3 className="mt-2 h4 text-ink">
                    {p.title}
                  </h3>
                  <div className="mt-auto flex justify-end pt-4">
                    <Link
                      to={`/blog/${p.id}`}
                      className="sd-btn sd-btn--secondary sd-btn--sm"
                    >
                      Read the article
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
