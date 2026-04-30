import { Link } from 'react-router-dom'
import { CLINICS } from '../../data/clinics'

const TEAM_CARDS = [
  {
    name: 'Dr. Yousaf Kamal',
    blurb:
      'Has run marathons across three continents. The endurance and focus required at mile 26 are the same qualities he brings to every implant procedure.',
    bg: 'blue',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Dr. Nayab Farooq',
    blurb:
      'An avid painter who finds that the patience and precision of art translates perfectly to the delicate craft of root canal therapy.',
    bg: 'white',
  },
  {
    name: 'Dr. Umair Usman',
    blurb:
      'A cycling enthusiast who believes the rhythm and balance found on the road mirrors the harmony needed in restorative dentistry.',
    bg: 'gray',
  },
  {
    name: 'Dr. Amna Hassan',
    blurb:
      'Loves hiking and mountaineering. The focus required at altitude is the same precision she brings to every oral surgery procedure.',
    bg: 'lightblue',
  },
  {
    name: 'Dr. Aqsa Malik',
    blurb:
      'A yoga practitioner who channels mindfulness and attention to detail into designing perfect, comfortable aligner treatment plans.',
    bg: 'blue',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Dr. Hassan Ali',
    blurb:
      'Passionate about cooking — the curiosity to understand textures and nuances in food is the same curiosity he applies to patient care.',
    bg: 'gray',
  },
]

const BG: Record<string, string> = {
  blue: 'bg-skyBrand',
  white: 'bg-white',
  gray: 'bg-[#ededeb]',
  lightblue: 'bg-skyBrand/15',
}

const TEXT: Record<string, string> = {
  blue: 'text-ink',
  white: 'text-ink',
  gray: 'text-ink',
  lightblue: 'text-ink',
}

const LINK_COLOR: Record<string, string> = {
  blue: 'text-ink/70 hover:text-ink',
  white: 'text-skyBrand hover:text-skyBrand/80',
  gray: 'text-skyBrand hover:text-skyBrand/80',
  lightblue: 'text-skyBrand hover:text-skyBrand/80',
}

function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21C12 21 5 13.5 5 8.5a7 7 0 0 1 14 0c0 5-7 12.5-7 12.5z"/>
      <circle cx="12" cy="8.5" r="2.5"/>
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <line x1="9" y1="7" x2="15" y2="7"/>
      <line x1="9" y1="11" x2="15" y2="11"/>
      <line x1="9" y1="15" x2="12" y2="15"/>
    </svg>
  )
}
function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9"/>
      <polyline points="12 7 12 12 15.5 14.5"/>
    </svg>
  )
}

function VideoBlock({ poster }: { poster: string }) {
  return (
    <div className="relative mx-auto max-w-[920px] 2xl:max-w-[1240px] overflow-hidden rounded-2xl">
      <img src={poster} alt="" className="aspect-video w-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
        <button
          aria-label="Play video"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-skyBrand shadow-sky transition hover:scale-105 hover:bg-skyBrand/90"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="ml-1 text-ink" aria-hidden="true">
            <polygon points="5,3 19,12 5,21"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <>
      {/* ── 1. Split hero ── */}
      <section className="grid min-h-screen lg:grid-cols-2">
        {/* Left — photo */}
        <div className="relative min-h-[50vw] overflow-hidden lg:min-h-screen">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=75"
            alt="Studio Dental team"
            className="absolute inset-0 h-full w-full object-cover object-center [animation:sd-hero-img-in_1.1s_cubic-bezier(0.25,0.46,0.45,0.94)_0.3s_both]"
          />
        </div>

        {/* Right — blue panel */}
        <div className="flex flex-col justify-center bg-skyBrand px-8 py-16 md:px-12 lg:px-16 lg:pt-[calc(78px+3rem)]">
          <div className="w-full max-w-[620px] [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.5s_both]">
            <h1 className="text-[clamp(2.4rem,4.5vw,3.8rem)] font-semibold leading-tight text-ink">
              About us
            </h1>
            <p className="mt-6 text-[0.875rem] leading-relaxed text-ink/80">
              Studio Dental brings world-class dentistry to Islamabad. Our two specialized
              clinics combine experience and leadership — integrating advanced treatment with
              exceptional patient service.
            </p>
            <p className="mt-4 text-[0.875rem] leading-relaxed text-ink/80">
              In our clinics at DHA Phase II and F-7 Markaz, a large team of specialists
              takes care of patients — including implantologists, orthodontists, and oral
              surgeons who share their knowledge at international conferences.
            </p>
            <p className="mt-4 text-[0.875rem] leading-relaxed text-ink/80">
              Patients can receive all necessary dental services under one roof: from modern
              diagnostics and X-ray to implantation, orthodontics, restorative dentistry,
              and pediatric dental care.
            </p>
            <p className="mt-6 text-[0.75rem] font-normal uppercase tracking-widest text-ink/50">
              Experience. Quality. Excellence.
            </p>
            <p className="mt-3 text-[0.95rem] text-ink/60">At Studio Dental</p>
          </div>
        </div>
      </section>

      {/* ── 2. Text block ── */}
      <section className="reveal bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-[920px] 2xl:max-w-[1240px] px-5 md:px-8">
          <p className="text-[0.875rem] leading-relaxed text-ink/80">
            We are sure you know that all of us at Studio Dental love our work, are
            professionals in our field, and always take care of you. We want to tell you
            about ourselves from a slightly different angle — one we think you'll find
            interesting.
          </p>
          <p className="mt-5 text-[0.875rem] leading-relaxed text-ink/80">
            Behind the clinic doors, we are just like you: young and driven, parents
            rushing home to family, people who love to exercise, eat well, and travel. We
            love, dream, laugh — and we know that great work usually begins with a smile.
          </p>
        </div>
      </section>

      {/* ── 3. Video ── */}
      <section className="reveal bg-white px-5 pb-16 md:px-8 md:pb-20">
        <VideoBlock poster="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=70" />
      </section>

      {/* ── 4. Full-bleed image with overlay text ── */}
      <section className="reveal relative min-h-[540px] md:min-h-[680px]">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=70"
          alt="Studio Dental team"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/40" aria-hidden="true" />
        <div className="relative flex h-full min-h-[540px] items-center justify-center md:min-h-[680px]">
          <h2 className="text-center text-[clamp(1.8rem,4vw,3rem)] font-light text-white">
            Get to know us better :)
          </h2>
        </div>
      </section>

      {/* ── 5. Text block ── */}
      <section className="reveal bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-[920px] 2xl:max-w-[1240px] px-5 md:px-8">
          <p className="text-[0.875rem] leading-relaxed text-ink/80">
            We are all dentists with our own hobbies and passions — which often come in
            handy in our daily clinical work and in connecting with patients. Our interests
            range from marathon running to mountain climbing, from painting to yoga.
            Curious who does what and why?
          </p>
        </div>
      </section>

      {/* ── 6. Seamless 3-col team cards ── */}
      <section className="reveal">
        <div className="mx-auto grid max-w-[1800px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_CARDS.map((card) => (
            <div
              key={card.name}
              className={`relative min-h-[320px] p-8 md:min-h-[380px] md:p-10 ${BG[card.bg]}`}
            >
              {card.image && (
                <>
                  <img
                    src={card.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-30"
                  />
                  <div className="absolute inset-0 bg-skyBrand/60" aria-hidden="true" />
                </>
              )}
              <div className="relative">
                <h3 className={`text-[1.15rem] font-semibold leading-tight ${TEXT[card.bg]}`}>
                  {card.name}
                </h3>
                <p className={`mt-3 text-[0.82rem] leading-relaxed ${TEXT[card.bg]} opacity-80`}>
                  {card.blurb}
                </p>
                <Link
                  to="/doctors"
                  className={`mt-4 block text-[0.78rem] font-normal transition ${LINK_COLOR[card.bg]}`}
                >
                  In detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. Second video ── */}
      <section className="reveal bg-white px-5 py-16 md:px-8 md:py-20">
        <VideoBlock poster="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=70" />
      </section>

      {/* ── 8. Contacts ── */}
      <section className="reveal bg-white pb-20">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
          <h2 className="mb-6 text-[clamp(1.6rem,3vw,2.2rem)] font-normal text-ink">Contacts</h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {CLINICS.map((clinic) => (
              <div key={clinic.id} className="rounded-xl border border-black/8 bg-white p-7 shadow-soft-sm md:p-9">
                <h3 className="mb-5 text-[1.35rem] font-semibold text-ink">{clinic.city}</h3>

                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 text-skyBrand"><PinIcon /></span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.82rem] text-ink">{clinic.address}</p>
                    <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer"
                      className="mt-1 block text-[0.85rem] font-normal text-skyBrand transition hover:underline">
                      Location on the map
                    </a>
                    <div className="mt-3 h-px w-10 bg-skyBrand/60" />
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 text-skyBrand"><PhoneIcon /></span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.78rem] text-ink2">Tel. for registration:</p>
                    <a href={`tel:${clinic.phone.replace(/\s/g, '')}`}
                      className="block text-[0.82rem] font-normal text-skyBrand transition hover:underline">
                      {clinic.phone}
                    </a>
                    <p className="mt-1 text-[0.78rem] text-ink2">E-mail:</p>
                    <a href={`mailto:${clinic.email}`}
                      className="block break-all text-[0.82rem] font-normal text-skyBrand transition hover:underline">
                      {clinic.email}
                    </a>
                    <Link to="/contact-us"
                      className="mt-1 block text-[0.88rem] font-medium text-skyBrand transition hover:underline">
                      Contact
                    </Link>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 text-skyBrand"><ClockIcon /></span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.78rem] text-ink2">Working hours:</p>
                    {clinic.hours.map((h) => (
                      <p key={h} className="text-[0.82rem] text-ink">{h}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
