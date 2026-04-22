export default function Contact() {
  return (
    <section id="contact" className="bg-creamBrand py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-skyBrand/30 bg-skyBrand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink2">
            <span className="h-1.5 w-1.5 rounded-full bg-skyBrand" aria-hidden="true" />
            Book a visit
          </span>
          <h2 className="mt-3 text-balance">Let&rsquo;s get you a healthier, happier smile.</h2>
          <p className="mt-4 max-w-[60ch] text-[1.05rem] text-muted">
            Tell us a little about yourself and we&rsquo;ll reach out within one
            business day to confirm your appointment.
          </p>

          <ul className="mt-8 grid gap-5">
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-skyBrand/15 text-skyBrand" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <strong className="block text-[0.98rem] font-semibold text-ink">Visit us</strong>
                <p className="mt-0.5 text-[0.92rem] text-muted">221 Aurora Lane, Suite 4, San Francisco, CA</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-skyBrand/15 text-skyBrand" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <strong className="block text-[0.98rem] font-semibold text-ink">Call / Text</strong>
                <p className="mt-0.5 text-[0.92rem] text-muted">(000) 000-0000 &middot; Mon&ndash;Sat 9am&ndash;7pm</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-skyBrand/15 text-skyBrand" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <div>
                <strong className="block text-[0.98rem] font-semibold text-ink">Email</strong>
                <p className="mt-0.5 text-[0.92rem] text-muted">hello@studiodental.com</p>
              </div>
            </li>
          </ul>
        </div>

        <form
          className="rounded-lg border border-black/10 bg-white p-6 shadow-soft-md md:p-9"
          noValidate
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[0.82rem] font-semibold tracking-wide text-ink2">
              Full name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Alex Morgan"
              required
              className="w-full rounded-sm border border-transparent bg-black/[0.04] px-4 py-3 text-[0.95rem] outline-none transition focus:border-skyBrand focus:bg-white focus:ring-4 focus:ring-skyBrand/25"
            />
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <label htmlFor="email" className="text-[0.82rem] font-semibold tracking-wide text-ink2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@email.com"
              required
              className="w-full rounded-sm border border-transparent bg-black/[0.04] px-4 py-3 text-[0.95rem] outline-none transition focus:border-skyBrand focus:bg-white focus:ring-4 focus:ring-skyBrand/25"
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="text-[0.82rem] font-semibold tracking-wide text-ink2">
                Service
              </label>
              <select
                id="service"
                name="service"
                defaultValue="General Check-up"
                className="w-full rounded-sm border border-transparent bg-black/[0.04] px-4 py-3 text-[0.95rem] outline-none transition focus:border-skyBrand focus:bg-white focus:ring-4 focus:ring-skyBrand/25"
              >
                <option>General Check-up</option>
                <option>Cosmetic &amp; Whitening</option>
                <option>Invisalign Consultation</option>
                <option>Implants / Crowns</option>
                <option>Kids&rsquo; Dentistry</option>
                <option>Emergency</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="date" className="text-[0.82rem] font-semibold tracking-wide text-ink2">
                Preferred date
              </label>
              <input
                id="date"
                type="date"
                name="date"
                className="w-full rounded-sm border border-transparent bg-black/[0.04] px-4 py-3 text-[0.95rem] outline-none transition focus:border-skyBrand focus:bg-white focus:ring-4 focus:ring-skyBrand/25"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <label htmlFor="message" className="text-[0.82rem] font-semibold tracking-wide text-ink2">
              Tell us a bit more (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Any specific concerns or questions?"
              className="min-h-[110px] w-full resize-y rounded-sm border border-transparent bg-black/[0.04] px-4 py-3 text-[0.95rem] outline-none transition placeholder:text-black/40 focus:border-skyBrand focus:bg-white focus:ring-4 focus:ring-skyBrand/25"
            />
          </div>

          <button
            type="button"
            className="mt-5 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-skyBrand px-7 py-4 text-[0.95rem] font-semibold text-ink transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-skyBrand/90 hover:shadow-sky disabled:opacity-95 disabled:hover:translate-y-0"
          >
            Request appointment
            <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black/10" aria-hidden="true">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>

          <p className="mt-3 text-[0.78rem] text-muted">
            By submitting, you agree to be contacted about your appointment. We
            never share your info.
          </p>
        </form>
      </div>
    </section>
  )
}
