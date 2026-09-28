import { Link } from "react-router-dom";
import { useAutoplayVideo } from "../../hooks/useAutoplayVideo";
import { TEAM_DOCTORS } from "../../data/teamDoctors";

const CARD_BG = ["photo", "white", "gray", "mist"] as const;

// These cards exist to show the people rather than the credentials, so a
// doctor with no personal line yet would be an empty card. They appear here
// as soon as one is supplied.
const TEAM_CARDS = TEAM_DOCTORS.filter((doctor) => doctor.bio).map((doctor, i) => {
  const bg = CARD_BG[i % CARD_BG.length];
  return {
    name: doctor.name,
    blurb: doctor.bio,
    bg,
    image: bg === "photo" ? doctor.image : undefined,
  };
});

const BG: Record<string, string> = {
  photo: "bg-surface",
  white: "bg-surface-raised",
  gray: "bg-surface-sunken",
  mist: "bg-brand-soft",
};

const TEXT: Record<string, string> = {
  photo: "text-ink",
  white: "text-ink",
  gray: "text-ink",
  mist: "text-ink",
};

const LINK_COLOR: Record<string, string> = {
  photo: "text-ink hover:underline",
  white: "text-brand hover:underline",
  gray: "text-brand hover:underline",
  mist: "text-brand hover:underline",
};

function VideoBlock({ src, poster }: { src: string; poster: string }) {
  const videoRef = useAutoplayVideo();
  return (
    <div className="relative mx-auto max-w-[46rem] 2xl:page-shell overflow-hidden rounded-md">
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
      <section className="grid min-h-screen lg:grid-cols-2">
        {/* Left, photo */}
        <div className="relative min-h-[50vw] overflow-hidden lg:min-h-screen">
          <img
            src="/images/clinic/interior-portrait-b.jpg"
            alt="Inside a Studio Dental clinic"
            className="absolute inset-0 h-full w-full object-cover object-center [animation:sd-hero-img-in_1.1s_cubic-bezier(0.25,0.46,0.45,0.94)_0.3s_both]"
          />
        </div>

        {/* Right, Ink panel */}
        <div className="flex flex-col justify-center bg-surface-sunken px-8 py-16 md:px-12 lg:px-16 lg:pt-[calc(78px+3rem)]">
          <div className="w-full max-w-[31rem] [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.5s_both]">
            <h1 className="h1 text-ink">
              About
            </h1>
            <p className="mt-6 body text-ink-muted">
              Studio Dental has two clinics in Islamabad, bringing together
              experienced dentists, modern treatment and careful patient service.
            </p>
            <p className="mt-4 body text-ink-muted">
              In our clinics at DHA Phase II and F-7 Markaz, a large team of
              specialists takes care of patients, including implantologists,
              orthodontists and oral surgeons.
            </p>
            <p className="mt-4 body text-ink-muted">
              Patients can receive all necessary dental services under one roof:
              from modern diagnostics and X-ray to implantation, orthodontics,
              restorative dentistry, and pediatric dental care.
            </p>
            <p className="mt-6 eyebrow text-ink-muted">
              Experience. Quality. Excellence.
            </p>
            <p className="mt-3 body text-ink-muted">At Studio Dental</p>
          </div>
        </div>
      </section>

      {/* ── 2. Text block ── */}
      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto w-full max-w-[46rem] 2xl:page-shell px-5 md:px-8">
          <p className="body text-ink-muted">
            We are sure you know that all of us at Studio Dental love our work,
            are professionals in our field, and always take care of you. We want
            to tell you about ourselves from a slightly different angle, one we
            think you'll find interesting.
          </p>
          <p className="mt-5 body text-ink-muted">
            Behind the clinic doors, we are just like you: young and driven,
            parents rushing home to family, people who love to exercise, eat
            well, and travel. We love, dream, laugh, and we know that great
            work usually begins with a smile.
          </p>
        </div>
      </section>

      {/* ── 3. Video ── */}
      <section className="bg-surface px-5 pb-16 md:px-8 md:pb-20">
        <VideoBlock src="/videos/clinic-team-720.mp4" poster="/videos/clinic-team-poster.jpg" />
      </section>

      {/* ── 4. Full-bleed image with overlay text ── */}
      <section data-theme="dark" className="relative min-h-[27rem] md:min-h-[34rem]">
        <img
          src="/images/clinic/lounge-wide.jpg"
          alt="The waiting lounge at Studio Dental"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-scrim" aria-hidden="true" />
        <div className="relative flex h-full min-h-[27rem] items-center justify-center md:min-h-[34rem]">
          <h2 className="text-center h1 text-ink">
            Meet the team
          </h2>
        </div>
      </section>

      {/* ── 5. Text block ── */}
      <section className="bg-surface-sunken py-16 md:py-20">
        <div className="mx-auto w-full max-w-[46rem] 2xl:page-shell px-5 md:px-8">
          <p className="body text-ink-muted">
            We are all dentists with our own hobbies and passions, which often
            come in handy in our daily clinical work and in connecting with
            patients. Our interests range from marathon running to mountain
            climbing, from painting to yoga. Curious who does what and why?
          </p>
        </div>
      </section>

      {/* ── 6. Seamless 3-col team cards ── */}
      <section>
        <div className="mx-auto grid max-w-[90rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_CARDS.map((card) => (
            <div
              key={card.name}
              data-theme={card.image ? "dark" : undefined}
              className={`relative min-h-[16rem] p-8 md:min-h-[19rem] md:p-10 ${BG[card.bg]}`}
            >
              {card.image && (
                <>
                  <img
                    src={card.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                  <div
                    className="absolute inset-0 bg-scrim"
                    aria-hidden="true"
                  />
                </>
              )}
              <div className="relative">
                <h3
                  className={`h4 ${TEXT[card.bg]}`}
                >
                  {card.name}
                </h3>
                <p
                  className={`mt-3 body ${TEXT[card.bg]} opacity-80`}
                >
                  {card.blurb}
                </p>
                <Link
                  to="/doctors"
                  className={`mt-4 block body font-normal transition ${LINK_COLOR[card.bg]}`}
                >
                  In detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. Second video ── */}
      <section className="bg-surface-sunken px-5 py-16 md:px-8 md:py-20">
        <VideoBlock src="/videos/clinic-detail-720.mp4" poster="/videos/clinic-detail-poster.jpg" />
      </section>
    </>
  );
}
