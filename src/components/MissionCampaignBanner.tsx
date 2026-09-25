import { Link } from 'react-router-dom'

const CAMPAIGN_IMG = '/images/doctors/dr-yousuf.jpg'

export default function MissionCampaignBanner() {
  return (
    <Link
      to="/mission-campaign"
      className="group relative block min-h-[15rem] overflow-hidden rounded-[24px] shadow-soft-md outline-none ring-offset-2 ring-offset-white transition hover:shadow-soft-lg focus-visible:ring-2 focus-visible:ring-brand md:min-h-[19rem] md:rounded-[28px]"
      aria-label="A mission for life. New image campaign. Open campaign page."
    >
      <div className="flex min-h-[inherit] flex-col-reverse md:flex-row">
        {/* Left: primary gradient panel */}
        <div className="relative flex flex-1 flex-col justify-center border border-brand/25 bg-gradient-to-br from-[#3F6F4B] via-brand to-[#D6E2CF] px-8 py-12 md:h-[21rem] md:border-r md:px-12 md:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{
              background:
                'radial-gradient(ellipse 85% 65% at 100% 0%, rgba(255, 255, 255, 0.45) 0%, transparent 52%), radial-gradient(ellipse 70% 55% at 0% 100%, rgba(28, 59, 37, 0.08) 0%, transparent 50%)',
            }}
            aria-hidden="true"
          />
          <h2 className="relative z-[1] font-heading text-[clamp(1.5rem,4vw,2.35rem)] font-extrabold leading-[1.08] tracking-tight text-ink">
            A mission for life
          </h2>
          <p className="relative z-[1] mt-2 text-[0.95rem] font-medium text-ink/72 md:text-[1.05rem]">
            What we stand for
          </p>
        </div>

        {/* Right: photo + blend + circular CTA (brand) */}
        <div className="relative h-52 w-full shrink-0 md:h-[21rem] md:w-[min(46%,420px)]">
          <img
            src={CAMPAIGN_IMG}
            alt="Dr. Yousaf Kamal"
            className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
            loading="lazy"
            decoding="async"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent md:bg-gradient-to-r md:from-[#3F6F4B]/25 md:via-ink/15 md:to-transparent"
            aria-hidden="true"
          />

          <span
            className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-ink shadow-brand transition duration-300 group-hover:scale-105 group-hover:bg-brand/95 md:right-8 md:h-14 md:w-14"
            aria-hidden="true"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              className="translate-x-px md:h-[1.2rem] md:w-[24px]"
              aria-hidden="true"
            >
              <path
                d="M10 7l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
