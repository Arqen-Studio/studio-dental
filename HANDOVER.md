# Studio Dental website: handover

Everything you need to carry the site the rest of the way. The branding pass is
yours; this explains how the pieces fit so nothing has to be reverse
engineered.

Last updated 26 September 2026.

## Running it

    npm install
    npm run dev      # http://localhost:5173
    npm run build    # type-checks src AND api, then builds

The build type-checks the api folder as well as src (via tsconfig.api.json), so
a green build genuinely covers the serverless function too.

## Where things live

- `src/pages/` — one folder per route. Routes are wired in `src/App.tsx`.
- `src/components/` — shared UI. `layout/Navbar.tsx`, `layout/Footer.tsx`,
  `ContactDrawer.tsx` (the floating "Online registration" form),
  `ContactFormSection.tsx` (the reusable enquiry block).
- `src/data/` — the single sources of truth:
  - `prices.ts` — every rate, transcribed from the two client PDFs. Verified
    line by line against them. Branch-only items are stored as null.
  - `services.ts` — the nine services. Each references price categories in
    prices.ts. Do not add a service that has no price lines.
  - `teamDoctors.ts` — the fourteen doctors. Eight have full profiles; six are
    name and photo only, pending forms.
  - `clinics.ts` — the two branches. Read this rather than re-typing addresses.
- `api/enquiry.ts` — the Vercel edge function behind every contact form.
- `docs/` — client-questions.md (what the clinic still owes) and
  enquiry-spreadsheet.md (the Google Sheet setup).

## The colour system, and the gotcha

The palette is defined as Tailwind tokens in `tailwind.config.cjs`:

    brand        #5FB979   mid green, carries dark text
    brandDeep    #256B3C   deep green, carries light text
    brandBright  #CFF3D3   bright green, for light accents on dark
    brandPale    #C6E6C4   pale fills
    creamBrand   #EEF6EC   page background, and light text on deep green
    ink          #123420   near-black green, body text
    ink2         #255138   secondary text
    muted        #4F6557   muted text

The gotcha: many components hardcode the hex rather than use the token, because
Tailwind cannot read a token inside an arbitrary value like `bg-[#256B3C]` or an
inline rgba shadow. So a palette change is two moves: edit the tokens, and
find-and-replace the old hexes across `src/`. After any change, this must return
nothing:

    grep -rniE "#5FB979|#256B3C|#CFF3D3|#C6E6C4|#EEF6EC|#123420|#255138|#4F6557" src/ | grep -v "the new values"

Verify contrast before committing a colour. Dark text on a green fill wants
4.5:1; light text on a dark fill the same. The greens in use all clear it.

## The inversion, if you continue it

The header (`layout/Navbar.tsx`) has been flipped to the direction Humayun
asked for: deep green surface, light text on top, in its solid (scrolled)
state. To carry the same inversion across the rest, the surfaces to turn are:

- the mid-green hero stat panel and "Mission for life" badge (Hero)
- the "DHA Phase II" light panel on the doctors page (the F-7 panel is already
  dark-on-light-text and can stay as the model)
- the primary buttons (Book a consultation, All doctors, All services)
- the service list rows and price cards

The pattern in each: swap `bg-brand` + `text-ink` for `bg-brandDeep` +
`text-creamBrand` (or `text-brandBright` where you want the greener, livelier
label). Keep checking contrast as you go.

## The contact forms

Three forms, all posting to `/api/enquiry`: the floating drawer, the reusable
section (team, services, blog, contact pages), and the contact page form. The
function validates, drops bot submissions, writes a row to the Google Sheet,
then emails the clinic through Resend. A reply from the inbox goes straight to
the patient.

Environment variables, all set in Vercel, none in the repo:

    RESEND_API_KEY      required, from resend.com
    ENQUIRY_TO          currently tech@arqen.studio (see below)
    ENQUIRY_SHEET_URL   the Google Apps Script /exec URL
    ENQUIRY_FROM        not set yet; needs a verified domain

The flow is verified end to end: a test enquiry returned 200, wrote a sheet row
and delivered the email.

The one launch blocker on this: Resend is still in sandbox, so it will only
deliver to the account holder. That is why ENQUIRY_TO points at tech@arqen for
now. Before launch, verify a domain at resend.com/domains, set ENQUIRY_FROM to
an address on it, and change ENQUIRY_TO to the clinic's inbox. Until then,
pointing ENQUIRY_TO at the clinic would make every enquiry fail.

## What is still owed, and by whom

- The clinic: see `docs/client-questions.md`. Twelve things needed (photos,
  doctor forms, a privacy policy, DNS access for the domain) and twenty
  questions (mostly which doctor performs what, and a few price list gaps).
- You: the branding pass, and the launch tasks below.

## Before launch

- Verify the sending domain in Resend, then repoint ENQUIRY_TO at the clinic.
- Add the custom domain in Vercel so the site is not on a .vercel.app address.
- Six doctors still show as name and photo only, and Dr. Umair has no surname
  on record (the one we had was invented and removed). Their pages are thin
  until their forms arrive.
- The homepage still says "17+ years" and the clinic hub cards all read
  "CLINICS"; both are open questions for the clinic.

## Deployment

Production deploys from `main` on Vercel. Push to main and it redeploys. The
site is at studio-dental-omega.vercel.app until a custom domain is added.
