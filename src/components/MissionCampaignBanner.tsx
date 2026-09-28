import { Link } from 'react-router-dom'

const CAMPAIGN_IMG = '/images/doctors/dr-yousuf.jpg'

export default function MissionCampaignBanner() {
  return (
    <Link
      to="/mission-campaign"
      className="group relative block min-h-[15rem] overflow-hidden rounded-lg shadow-1 outline-none ring-offset-2 ring-offset-surface transition hover:shadow-2 focus-visible:ring-2 focus-visible:ring-brand md:min-h-[19rem]"
      aria-label="A mission for life. Open campaign page."
    >
      <div className="flex min-h-[inherit] flex-col-reverse md:flex-row">
        {/* Left: Evergreen panel */}
        <div className="relative flex flex-1 flex-col justify-center bg-brand px-8 py-12 md:h-[21rem] md:border-r md:px-12 md:py-14">
          <h2 className="relative z-[1] font-heading text-[clamp(1.5rem,4vw,2.35rem)] font-extrabold leading-[1.08] tracking-tight text-on-brand">
            A mission for life
          </h2>
          <p className="relative z-[1] mt-2 text-[0.95rem] font-medium text-on-brand/80 md:text-[1.05rem]">
            What we stand for
          </p>
        </div>

        {/* Right: photo + circular CTA */}
        <div className="relative h-52 w-full shrink-0 md:h-[21rem] md:w-[min(46%,420px)]">
          <img
            src={CAMPAIGN_IMG}
            alt="Dr. Yousaf Kamal"
            className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
            loading="lazy"
            decoding="async"
          />

          <span
            className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-raw-porcelain text-raw-ink shadow-1 transition duration-300 group-hover:scale-105 group-hover:bg-raw-mist md:right-8 md:h-14 md:w-14"
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
