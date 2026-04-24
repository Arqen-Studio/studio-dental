import { useState, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  service: string;
  date: string;
  message: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  service: "General Check-up",
  date: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [sent, setSent] = useState(false);

  const onChange =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm(INITIAL);
    }, 3200);
  };

  return (
    <section id="contact" className="bg-creamBrand py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-skyBrand/30 bg-skyBrand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink2">
            <span
              className="h-1.5 w-1.5 rounded-full bg-skyBrand"
              aria-hidden="true"
            />
            Book a visit
          </span>
          <h2 className="mt-3 text-balance">
            Let&rsquo;s get you a healthier, happier smile.
          </h2>
          <p className="mt-4 max-w-[60ch] text-[1.05rem] text-muted">
            Tell us a little about yourself and we&rsquo;ll reach out within one
            business day to confirm your appointment.
          </p>

          <ul className="mt-8 grid gap-5">
            <li className="flex items-start gap-4">
              <span
                className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-skyBrand/15 text-skyBrand"
                aria-hidden="true"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <use href="/svg/sprite.svg#icon-pin" />
                </svg>
              </span>
              <div>
                <strong className="block text-[0.98rem] font-semibold text-ink">
                  Visit us
                </strong>
                <p className="mt-0.5 text-[0.92rem] text-muted">
                  221 Aurora Lane, Suite 4, San Francisco, CA
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span
                className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-skyBrand/15 text-skyBrand"
                aria-hidden="true"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <use href="/svg/sprite.svg#icon-phone" />
                </svg>
              </span>
              <div>
                <strong className="block text-[0.98rem] font-semibold text-ink">
                  Call / Text
                </strong>
                <p className="mt-0.5 text-[0.92rem] text-muted">
                  (000) 000-0000 &middot; Mon&ndash;Sat 9am&ndash;7pm
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span
                className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-skyBrand/15 text-skyBrand"
                aria-hidden="true"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <use href="/svg/sprite.svg#icon-mail" />
                </svg>
              </span>
              <div>
                <strong className="block text-[0.98rem] font-semibold text-ink">
                  Email
                </strong>
                <p className="mt-0.5 text-[0.92rem] text-muted">
                  hello@studiodental.com
                </p>
              </div>
            </li>
          </ul>
        </div>

        <form
          className="rounded-lg border border-black/10 bg-white p-6 shadow-soft-md md:p-9"
          onSubmit={onSubmit}
          noValidate
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
              value={form.name}
              onChange={onChange("name")}
              placeholder="Ali Ahmad"
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
              value={form.email}
              onChange={onChange("email")}
              placeholder="hello@gmail.com"
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
                value={form.service}
                onChange={onChange("service")}
                className="w-full rounded-sm border border-transparent bg-black/[0.04] px-4 py-3 text-[0.95rem] outline-none transition focus:border-skyBrand focus:bg-white focus:ring-4 focus:ring-skyBrand/25"
              >
                <option>General Check-up</option>
                <option>Scaling</option>
                <option>Implants / Crowns</option>
                <option>Kids&rsquo; Dentistry</option>
                <option>Emergency</option>
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
                value={form.date}
                onChange={onChange("date")}
                className="w-full rounded-sm border border-transparent bg-black/[0.04] px-4 py-3 text-[0.95rem] outline-none transition focus:border-skyBrand focus:bg-white focus:ring-4 focus:ring-skyBrand/25"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-[0.82rem] font-semibold tracking-wide text-ink2"
            >
              Tell us a bit more (optional)
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={onChange("message")}
              rows={4}
              placeholder="Any specific concerns or questions?"
              className="min-h-[110px] w-full resize-y rounded-sm border border-transparent bg-black/[0.04] px-4 py-3 text-[0.95rem] outline-none transition placeholder:text-black/40 focus:border-skyBrand focus:bg-white focus:ring-4 focus:ring-skyBrand/25"
            />
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-skyBrand px-7 py-4 text-[0.95rem] font-semibold text-ink transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-skyBrand/90 hover:shadow-sky disabled:opacity-95 disabled:hover:translate-y-0"
            disabled={sent}
          >
            {sent ? "Thanks — we\u2019ll be in touch!" : "Request appointment"}
            {!sent && (
              <span
                className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black/10"
                aria-hidden="true"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <use href="/svg/sprite.svg#icon-arrow-right" />
                </svg>
              </span>
            )}
          </button>

          <p className="mt-3 text-[0.78rem] text-muted">
            By submitting, you agree to be contacted about your appointment. We
            never share your info.
          </p>
        </form>
      </div>
    </section>
  );
}
