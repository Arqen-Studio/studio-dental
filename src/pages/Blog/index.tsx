import React from "react";
import { Link } from "react-router-dom";
import ContactFormSection from "../../components/ContactFormSection";

type Post = {
  id: string;
  date: string;
  title: string;
  image: string;
  clinic: "dha" | "f7" | "both";
};

// Two known-working images rotated across cards
const IMG_A = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=70";
const IMG_B = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=70";

const POSTS: Post[] = [
  { id: "1", date: "2026-03-15", title: "How often should you visit the dentist?",                            image: IMG_A, clinic: "both" },
  { id: "2", date: "2026-02-28", title: "Dental implants: what to expect before, during and after.",         image: IMG_B, clinic: "dha"  },
  { id: "3", date: "2026-02-10", title: "Clear aligners vs braces, which is right for you?",               image: IMG_A, clinic: "f7"   },
  { id: "4", date: "2026-01-22", title: "Gum disease, seek treatment as early as possible.",               image: IMG_B, clinic: "both" },
  { id: "5", date: "2025-12-18", title: "Studio Dental DHA Phase II: updated working hours for 2026.",      image: IMG_A, clinic: "dha"  },
  { id: "6", date: "2025-12-05", title: "New zirconia crowns now available at F-7 Markaz.",                 image: IMG_B, clinic: "f7"   },
  { id: "7", date: "2025-11-14", title: "How to brush your teeth properly, a simple guide.",               image: IMG_A, clinic: "both" },
  { id: "8", date: "2025-10-30", title: "What is a root canal and does it hurt?",                           image: IMG_B, clinic: "both" },
];

const CLINICS = [
  { id: "dha", label: "DHA Phase II" },
  { id: "f7",  label: "F-7 Markaz" },
] as const;

const PAGE_SIZE = 6;

export default function Blog() {
  const [activeClinic, setActiveClinic] = React.useState<"dha" | "f7">("dha");
  const [gridKey, setGridKey] = React.useState(0);
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);

  function switchClinic(id: "dha" | "f7") {
    setActiveClinic(id);
    setVisibleCount(PAGE_SIZE);
    setGridKey((k) => k + 1);
  }

  const filtered = POSTS.filter(
    (p) => p.clinic === activeClinic || p.clinic === "both"
  );
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <>
      {/* ── Hero ── */}
      <section className="no-reveal bg-skyBrand pb-10 pt-[calc(78px+2.5rem)]">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8 [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.45s_both]">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[clamp(2.8rem,5vw,4.2rem)] font-extrabold leading-none tracking-tight text-ink">
              News
            </h1>
            <div className="mt-4 h-px w-16 bg-ink/25" />

            {/* Clinic filter tabs */}
            <div className="mt-8 flex gap-2">
              {CLINICS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => switchClinic(c.id)}
                  className={[
                    "rounded-full px-6 py-2.5 text-[0.9rem] font-semibold transition duration-200",
                    activeClinic === c.id
                      ? "bg-ink text-creamBrand"
                      : "bg-white/30 text-ink hover:bg-white/55",
                  ].join(" ")}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cards grid ── */}
      <section className="bg-[#f9f9f9] py-0">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div
          key={gridKey}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10"
        >
          {visible.map((post, i) => (
            <article
              key={post.id}
              className={[
                "flex h-full flex-col overflow-hidden rounded-2xl shadow-sm",
                i % 4 === 1 || i % 4 === 2 ? "bg-skyBrand/10" : "bg-white",
              ].join(" ")}
              style={{
                animation: `sd-hero-text-in 0.55s cubic-bezier(0.25,0.46,0.45,0.94) ${i * 80}ms both`,
              }}
            >
              {/* Image */}
              <div className="aspect-[3/2] flex-none overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-6 py-5 md:px-8 md:py-6">
                <p className="text-[0.78rem] font-semibold text-skyBrand/80">{post.date}</p>
                <h2 className="mt-2 text-[1rem] font-bold leading-snug text-ink md:text-[1.1rem]">
                  {post.title}
                </h2>
                <div className="mt-auto flex justify-end pt-4">
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center justify-center rounded-full bg-skyBrand px-6 py-2.5 text-[0.85rem] font-semibold text-ink transition duration-200 hover:bg-skyBrand/80"
                  >
                    More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="flex justify-center pb-10">
            <button
              type="button"
              onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
              className="inline-flex items-center justify-center rounded-full bg-skyBrand px-8 py-3.5 text-[0.9rem] font-semibold text-ink transition duration-200 hover:bg-skyBrand/80"
            >
              More
            </button>
          </div>
        )}
      </div>
      </section>

      <ContactFormSection />
    </>
  );
}
