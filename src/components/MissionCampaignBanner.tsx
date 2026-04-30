import { Link } from 'react-router-dom'

/** Healthcare portrait — Unsplash (royalty-free). Replace with `public/` asset when ready. */
const CAMPAIGN_IMG =
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1400&q=80'

export default function MissionCampaignBanner() {
  return (
    <Link
      to="/mission-campaign"
      className="group relative block min-h-[260px] overflow-hidden rounded-[24px] shadow-soft-md outline-none ring-offset-2 ring-offset-creamBrand transition hover:shadow-soft-lg focus-visible:ring-2 focus-visible:ring-skyBrand md:min-h-[300px] md:rounded-[28px]"
      aria-label="A mission for life — New image campaign. Open campaign page."
    >
      <div className="flex min-h-[inherit] flex-col-reverse md:flex-row">
        {/* Left: light panel */}
        <div className="relative flex flex-1 flex-col justify-end border border-black/10 bg-creamBrand px-8 pb-12 pt-10 md:border-r md:px-12 md:pb-14 md:pr-12 md:pt-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              background:
                'radial-gradient(ellipse 90% 70% at 0% 100%, rgba(135, 206, 250, 0.35) 0%, transparent 55%)',
            }}
            aria-hidden="true"
          />
          <h2 className="relative z-[1] font-heading text-[clamp(1.5rem,4vw,2.35rem)] font-extrabold leading-[1.08] tracking-tight text-ink">
            A mission for life
          </h2>
          <p className="relative z-[1] mt-2 text-[0.95rem] font-medium text-muted md:text-[1.05rem]">
            New image campaign
          </p>
        </div>

        {/* Right: photo + blend + circular CTA (skyBrand) */}
        <div className="relative h-52 w-full shrink-0 md:h-auto md:w-[min(46%,420px)] md:min-h-[300px]">
          <img
            src={CAMPAIGN_IMG}
            alt=""
            className="h-full w-full object-cover object-[center_22%]"
            loading="lazy"
            decoding="async"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent md:bg-gradient-to-r md:from-ink/35 md:via-ink/10 md:to-transparent"
            aria-hidden="true"
          />

          <span
            className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-skyBrand text-ink shadow-sky transition duration-300 group-hover:scale-105 group-hover:bg-skyBrand/95 md:right-8 md:h-14 md:w-14"
            aria-hidden="true"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              className="translate-x-px md:h-[24px] md:w-[24px]"
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
