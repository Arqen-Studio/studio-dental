import { useState } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { SERVICES_DATA } from "../../data/services";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-white py-10 md:py-16">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-8 px-5 md:px-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-skyBrand/30 bg-skyBrand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink2">
            <span
              className="h-1.5 w-1.5 rounded-full bg-skyBrand"
              aria-hidden="true"
            />
            Contacts
          </span>
          <h2 className="mt-3 text-balance">Visit Studio Dental in Islamabad.</h2>
          <p className="mt-4 max-w-[60ch] text-[1.05rem] text-muted">
            Studio Dental provides expert dental care with a focus on comfort,
            advanced technology, and affordable treatment.
          </p>

          <ul className="mt-8 grid gap-5">
            <li className="flex items-start gap-4">
              <span
                className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-skyBrand/15 text-skyBrand"
                aria-hidden="true"
              >
                <MapPin size={18} strokeWidth={2} aria-hidden />
              </span>
              <div>
                <strong className="block text-[0.98rem] font-semibold text-ink">Address</strong>
                <p className="mt-0.5 text-[0.92rem] text-muted">
                  1st Floor, Plaza No. 26, Main Iqbal Boulevard, Street 2, Sector A
                  DHA Phase II, Islamabad
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span
                className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-skyBrand/15 text-skyBrand"
                aria-hidden="true"
              >
                <MapPin size={18} strokeWidth={2} aria-hidden />
              </span>
              <div>
                <strong className="block text-[0.98rem] font-semibold text-ink">Address</strong>
                <p className="mt-0.5 text-[0.92rem] text-muted">
                  Office #:7, 2nd Floor, Near Shoe Planet, F-7 Markaz, Islamabad
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span
                className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-skyBrand/15 text-skyBrand"
                aria-hidden="true"
              >
                <Mail size={18} strokeWidth={2} aria-hidden />
              </span>
              <div>
                <strong className="block text-[0.98rem] font-semibold text-ink">Contact</strong>
                <p className="mt-0.5 text-[0.92rem] text-muted">
                  0329 9961999 | 032935199999
                </p>
                <p className="mt-0.5 text-[0.92rem] text-muted">
                  info@thestudiodental.com
                </p>
              </div>
            </li>
          </ul>
        </div>

        <form
          className="rounded-lg border border-black/10 bg-white p-6 shadow-soft-md md:p-9"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-[0.82rem] font-semibold tracking-wide text-ink2"
            >
                Full name
            </label>
            <input
              id="name"
              type="text"
              name="name"
                placeholder="Your full name"
              required
              className="w-full rounded-sm border border-transparent bg-black/[0.04] px-4 py-3 text-[0.95rem] outline-none transition focus:border-skyBrand focus:bg-white focus:ring-4 focus:ring-skyBrand/25"
            />
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[0.82rem] font-semibold tracking-wide text-ink2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
                placeholder="you@example.com"
              required
              className="w-full rounded-sm border border-transparent bg-black/[0.04] px-4 py-3 text-[0.95rem] outline-none transition focus:border-skyBrand focus:bg-white focus:ring-4 focus:ring-skyBrand/25"
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="service"
                className="text-[0.82rem] font-semibold tracking-wide text-ink2"
              >
                Service
              </label>
              <select
                id="service"
                name="service"
                defaultValue={SERVICES_DATA[0]?.title}
                className="w-full rounded-sm border border-transparent bg-black/[0.04] px-4 py-3 text-[0.95rem] outline-none transition focus:border-skyBrand focus:bg-white focus:ring-4 focus:ring-skyBrand/25"
              >
                {SERVICES_DATA.map((service) => (
                  <option key={service.id}>{service.title}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="date"
                className="text-[0.82rem] font-semibold tracking-wide text-ink2"
              >
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
            <label
              htmlFor="message"
              className="text-[0.82rem] font-semibold tracking-wide text-ink2"
            >
              Tell us more (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Any additional details for your consultation?"
              className="min-h-[110px] w-full resize-y rounded-sm border border-transparent bg-black/[0.04] px-4 py-3 text-[0.95rem] outline-none transition placeholder:text-black/40 focus:border-skyBrand focus:bg-white focus:ring-4 focus:ring-skyBrand/25"
            />
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-skyBrand px-7 py-4 text-[0.95rem] font-semibold text-ink transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-skyBrand/90 hover:shadow-sky disabled:opacity-95 disabled:hover:translate-y-0"
          >
            Send request
            <span
              className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black/10"
              aria-hidden="true"
            >
              <ArrowRight size={11} strokeWidth={2.5} className="text-ink" aria-hidden />
            </span>
          </button>

          {submitted && (
            <p role="status" className="mt-5 rounded-xl bg-skyBrand/15 px-5 py-4 text-[0.9rem] leading-relaxed text-ink">
              To book your appointment, please call{" "}
              <a href="tel:03299961999" className="font-semibold underline underline-offset-2">
                0329 9961999
              </a>{" "}
              and quote the treatment you are interested in.
            </p>
          )}

          <p className="mt-3 text-[0.78rem] text-muted">
            By submitting, you agree to be contacted regarding your registration.
            We never share your data.
          </p>
        </form>
      </div>
    </section>
  );
}
