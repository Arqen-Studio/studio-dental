import { Link, useParams } from "react-router-dom";

const IMG_A = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=75";
const IMG_B = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=70";

const POSTS = [
  { id: "1", date: "2026-03-15", title: "How often should you visit the dentist?",                       image: IMG_A },
  { id: "2", date: "2026-02-28", title: "Dental implants: what to expect before, during and after.",    image: IMG_B },
  { id: "3", date: "2026-02-10", title: "Clear aligners vs braces, which is right for you?",           image: IMG_A },
  { id: "4", date: "2026-01-22", title: "Gum disease, seek treatment as early as possible.",           image: IMG_B },
  { id: "5", date: "2025-12-18", title: "Studio Dental DHA Phase II: updated working hours for 2026.",  image: IMG_A },
  { id: "6", date: "2025-12-05", title: "New zirconia crowns now available at F-7 Markaz.",             image: IMG_B },
  { id: "7", date: "2025-11-14", title: "How to brush your teeth properly, a simple guide.",           image: IMG_A },
  { id: "8", date: "2025-10-30", title: "What is a root canal and does it hurt?",                       image: IMG_B },
];

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = POSTS.find((p) => p.id === id) ?? POSTS[0];
  const others = POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <>
      {/* ── Thin hero band ── */}
      <section className="no-reveal bg-brand pt-[78px]">
        <div className="mx-auto w-full max-w-[1240px] px-5 pb-8 pt-8 md:px-8 [animation:sd-hero-text-in_0.7s_cubic-bezier(0.25,0.46,0.45,0.94)_0.3s_both]">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-ink/70 transition hover:text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            News
          </Link>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="bg-white">
        <div
          className="mx-auto w-full max-w-[780px] px-5 py-14 md:px-8 md:py-20 [animation:sd-hero-text-in_0.8s_cubic-bezier(0.25,0.46,0.45,0.94)_0.2s_both]"
        >
          <p className="text-[0.82rem] font-semibold text-brand/80">{post.date}</p>
          <h1 className="mt-3 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight tracking-tight text-ink">
            {post.title}
          </h1>

          <p className="mt-8 text-[1rem] leading-relaxed text-muted">
            Regular dental check-ups are one of the most effective ways to maintain
            your oral health and catch problems early, before they become painful
            or expensive. Most dental professionals recommend visiting at least
            twice a year, but your individual needs may vary.
          </p>

          <p className="mt-5 text-[1rem] leading-relaxed text-muted">
            Patients who visit consistently tend to have healthier gums, fewer
            cavities, and a lower risk of tooth loss over time. During each visit,
            your dentist will examine your teeth, gums, and soft tissues, and a
            hygienist will professionally clean areas that brushing alone can't reach.
          </p>

          {/* Image */}
          <div className="my-10 overflow-hidden rounded-2xl [animation:sd-hero-img-in_1s_cubic-bezier(0.25,0.46,0.45,0.94)_0.4s_both]">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>

          <p className="text-[1rem] leading-relaxed text-muted">
            If you have a history of gum disease, a weakened immune system, or are
            prone to cavities, your dentist may recommend more frequent appointments
           , every three to four months. Children and older adults often benefit
            from more regular check-ins as well.
          </p>

          <p className="mt-5 text-[1rem] leading-relaxed text-muted">
            At Studio Dental, our team takes the time to understand your specific
            needs and build a schedule that works for your lifestyle. Whether you
            need a routine clean or a full treatment plan, we're here to make
            every visit comfortable and worthwhile.
          </p>

          <div className="mt-10 border-t border-ink/10 pt-8">
            <p className="text-[0.85rem] font-semibold text-ink/50">Registration and information:</p>
            <p className="mt-2 text-[0.9rem] text-ink/70">📍 Plaza No. 26, Main Iqbal Boulevard, DHA Phase II | 0329 9961999</p>
            <p className="mt-1 text-[0.9rem] text-ink/70">📍 Jinnah Super, F-7 Markaz, F-7 Markaz | 0329 9961999</p>
          </div>
        </div>
      </article>

      {/* ── Other news ── */}
      <section className="reveal bg-[#F4F7F2] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
          <h2 className="text-center text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-ink">
            Other news
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {others.map((p, i) => (
              <article
                key={p.id}
                className={[
                  "flex h-full flex-col overflow-hidden rounded-2xl shadow-sm",
                  i === 1 ? "bg-brand/10" : "bg-white",
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
                  <p className="text-[0.78rem] font-semibold text-brand/80">{p.date}</p>
                  <h3 className="mt-2 text-[1rem] font-bold leading-snug text-ink md:text-[1.1rem]">
                    {p.title}
                  </h3>
                  <div className="mt-auto flex justify-end pt-4">
                    <Link
                      to={`/blog/${p.id}`}
                      className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-2.5 text-[0.85rem] font-semibold text-ink transition duration-200 hover:bg-brand/80"
                    >
                      More
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
