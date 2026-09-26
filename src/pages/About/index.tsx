import { Link } from "react-router-dom";
import { useAutoplayVideo } from "../../hooks/useAutoplayVideo";
import { TEAM_DOCTORS } from "../../data/teamDoctors";

const CARD_BG = ["blue", "white", "gray", "lightblue"] as const;

// These cards exist to show the people rather than the credentials, so a
// doctor with no personal line yet would be an empty card. They appear here
// as soon as one is supplied.
const TEAM_CARDS = TEAM_DOCTORS.filter((doctor) => doctor.bio).map((doctor, i) => {
  const bg = CARD_BG[i % CARD_BG.length];
  return {
    name: doctor.name,
    blurb: doctor.bio,
    bg,
    image: bg === "blue" ? doctor.image : undefined,
  };
});

const BG: Record<string, string> = {
  blue: "bg-brand",
  white: "bg-white",
  gray: "bg-neutral-100",
  lightblue: "bg-brand/15",
};

const TEXT: Record<string, string> = {
  blue: "text-ink",
  white: "text-ink",
  gray: "text-ink",
  lightblue: "text-ink",
};

const LINK_COLOR: Record<string, string> = {
  blue: "text-ink/70 hover:text-ink",
  white: "text-brand hover:text-brand/80",
  gray: "text-brand hover:text-brand/80",
  lightblue: "text-brand hover:text-brand/80",
};

function VideoBlock({ src, poster }: { src: string; poster: string }) {
  const videoRef = useAutoplayVideo();
  return (
    <div className="relative mx-auto max-w-[46rem] 2xl:page-shell overflow-hidden rounded-2xl">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        className="aspect-video w-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default function About() {
  return (
    <>
      {/* ── 1. Split hero ── */}
      <section className="no-reveal grid min-h-screen lg:grid-cols-2">
        {/* Left, photo */}
        <div className="relative min-h-[50vw] overflow-hidden lg:min-h-screen">
          <img
            src="/images/clinic/interior-portrait-b.jpg"
            alt="Inside a Studio Dental clinic"
            className="absolute inset-0 h-full w-full object-cover object-center [animation:sd-hero-img-in_1.1s_cubic-bezier(0.25,0.46,0.45,0.94)_0.3s_both]"
          />
        </div>

        {/* Right, blue panel */}
        <div className="flex flex-col justify-center bg-brand px-8 py-16 md:px-12 lg:px-16 lg:pt-[calc(78px+3rem)]">
          <div className="w-full max-w-[31rem] [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.5s_both]">
            <h1 className="text-[clamp(2.4rem,4.5vw,3.8rem)] font-semibold leading-tight text-ink">
              About us
            </h1>
            <p className="mt-6 text-[1rem] leading-relaxed text-ink/80">
              Studio Dental brings world-class dentistry to Islamabad. Our two
              specialized clinics combine experience and leadership ,
              integrating advanced treatment with exceptional patient service.
            </p>
            <p className="mt-4 text-[1rem] leading-relaxed text-ink/80">
              In our clinics at DHA Phase II and F-7 Markaz, a large team of
              specialists takes care of patients, including implantologists,
              orthodontists, and oral surgeons who share their knowledge at
              international conferences.
            </p>
            <p className="mt-4 text-[1rem] leading-relaxed text-ink/80">
              Patients can receive all necessary dental services under one roof:
              from modern diagnostics and X-ray to implantation, orthodontics,
              restorative dentistry, and pediatric dental care.
            </p>
            <p className="mt-6 text-[0.85rem] font-normal uppercase tracking-widest text-ink/60">
              Experience. Quality. Excellence.
            </p>
            <p className="mt-3 text-[1.05rem] text-ink/60">At Studio Dental</p>
          </div>
        </div>
      </section>

      {/* ── 2. Text block ── */}
      <section className="reveal bg-[#EEF6EC] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[46rem] 2xl:page-shell px-5 md:px-8">
          <p className="text-[1rem] leading-relaxed text-ink/80">
            We are sure you know that all of us at Studio Dental love our work,
            are professionals in our field, and always take care of you. We want
            to tell you about ourselves from a slightly different angle, one we
            think you'll find interesting.
          </p>
          <p className="mt-5 text-[1rem] leading-relaxed text-ink/80">
            Behind the clinic doors, we are just like you: young and driven,
            parents rushing home to family, people who love to exercise, eat
            well, and travel. We love, dream, laugh, and we know that great
            work usually begins with a smile.
          </p>
        </div>
      </section>

      {/* ── 3. Video ── */}
      <section className="reveal bg-[#EEF6EC] px-5 pb-16 md:px-8 md:pb-20">
        <VideoBlock src="/videos/clinic-team-720.mp4" poster="/videos/clinic-team-poster.jpg" />
      </section>

      {/* ── 4. Full-bleed image with overlay text ── */}
      <section className="reveal relative min-h-[27rem] md:min-h-[34rem]">
        <img
          src="/images/clinic/lounge-wide.jpg"
          alt="The waiting lounge at Studio Dental"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/40" aria-hidden="true" />
        <div className="relative flex h-full min-h-[27rem] items-center justify-center md:min-h-[34rem]">
          <h2 className="text-center text-[clamp(1.8rem,4vw,3rem)] font-light text-white">
            Get to know us better :)
          </h2>
        </div>
      </section>

      {/* ── 5. Text block ── */}
      <section className="reveal bg-[#EEF6EC] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[46rem] 2xl:page-shell px-5 md:px-8">
          <p className="text-[1rem] leading-relaxed text-ink/80">
            We are all dentists with our own hobbies and passions, which often
            come in handy in our daily clinical work and in connecting with
            patients. Our interests range from marathon running to mountain
            climbing, from painting to yoga. Curious who does what and why?
          </p>
        </div>
      </section>

      {/* ── 6. Seamless 3-col team cards ── */}
      <section className="reveal">
        <div className="mx-auto grid max-w-[90rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_CARDS.map((card) => (
            <div
              key={card.name}
              className={`relative min-h-[16rem] p-8 md:min-h-[19rem] md:p-10 ${BG[card.bg]}`}
            >
              {card.image && (
                <>
                  <img
                    src={card.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-30"
                  />
                  <div
                    className="absolute inset-0 bg-brand/60"
                    aria-hidden="true"
                  />
                </>
              )}
              <div className="relative">
                <h3
                  className={`text-[1.15rem] font-semibold leading-tight ${TEXT[card.bg]}`}
                >
                  {card.name}
                </h3>
                <p
                  className={`mt-3 text-[0.92rem] leading-relaxed ${TEXT[card.bg]} opacity-80`}
                >
                  {card.blurb}
                </p>
                <Link
                  to="/doctors"
                  className={`mt-4 block text-[0.88rem] font-normal transition ${LINK_COLOR[card.bg]}`}
                >
                  In detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. Second video ── */}
      <section className="reveal bg-[#EEF6EC] px-5 py-16 md:px-8 md:py-20">
        <VideoBlock src="/videos/clinic-detail-720.mp4" poster="/videos/clinic-detail-poster.jpg" />
      </section>
    </>
  );
}
