# Studio Dental rebrand: implementation plan

Work through the phases in order. Each phase should end with `npm run build && npm run lint` passing and a short summary of what changed. Stop after each phase so the result can be reviewed before the next one starts.

Design references are in this folder (see `CLAUDE.md` at the repo root). When a detail is not covered here, follow `studio-dental-design-system.html`.

---

## Phase 1: Foundation (tokens, fonts, base styles)

1. **Tokens.** Copy `docs/brand/tokens.css` into `src/styles/tokens.css` and import it at the top of `src/styles/index.css`, after `@import 'tailwindcss'`.
2. **Tailwind mapping.** In `tailwind.config.cjs`, replace the colour block with names that point at the CSS variables:
   `surface`, `surface-raised`, `surface-sunken`, `line`, `line-strong`, `ink`, `ink-muted`, `brand`, `brand-hover`, `on-brand`, `brand-500`, `brand-soft`, `accent`, `accent-fill`, `success`, `warning`, `warning-soft`, `error`, `error-soft`, `info`, `info-soft`, `focus`, and the raw `raw-*` colours. Each one is `'var(--name)'`.
   Map `borderRadius` to `sm` 8px, `md` 16px, `lg` 24px, and `full` for pills. Map `boxShadow` to `shadow-1/2/3`. Remove the old `brand` shadow.
   **Watch out:** the old `brand` was mint and carried dark text. The new `brand` is Evergreen and carries white text (`on-brand`). Audit every `bg-brand`, `text-brand` and `border-brand` use, because `bg-brand text-ink` is now a contrast failure.
3. **Replace hard-coded colours.** About 60 hex literals and roughly 400 arbitrary values sit in `src/` (most are `#256B3C` and `#EEF6EC`). Replace them with token utilities using the migration table in the design system (section 08). Include `--page-transition-curtain` in `index.css` and any inline `rgba()` shadows.
4. **Root font size.** `index.css` sets `html` to 18/20/21/22.5/27px across breakpoints, so every rem size is fractional. Set it to 16px at all widths, then move text to the type classes. Keep the wide-screen `.page-shell` widening, but express it with the `--container` tokens.
5. **Fonts.** In `index.html`, load only Archivo 400/500/600 and Bricolage Grotesque (opsz) 500/600. Remove weight 800 everywhere it is used (`font-extrabold`, `font-[800]`) and use 600.
6. **Focus ring.** Add a global `:focus-visible` rule: 2px `--focus` outline, 2px offset.

Done when: the grep in `CLAUDE.md` prints nothing, the site builds, and no page has lost contrast (spot-check buttons and the header).

## Phase 2: Shared components

Port the markup and classes from the design system's component sections. You can keep the existing file names.

| Component | File(s) | Key changes |
|---|---|---|
| Site header | `src/components/layout/Navbar.tsx` | Light Porcelain bar with a hairline, not a solid green bar. Transparent-over-hero only if the hero is an Ink band; never white text over a light section. Nav labels: Treatments, Prices, Doctors, Clinics, Journal (they must match page titles). Phone and "Book a consultation" on desktop; the mobile sheet ends with a full-width booking button. |
| Logo | Navbar, Footer | Refined wordmark: Bricolage 600, −3% tracking, arch emblem (SVG in the design system Logo section). Header uses no descriptor. |
| Buttons | everywhere | Pill buttons: primary Evergreen, secondary Ink outline, ghost, inverse on Ink. Sizes 44/48/56px. Label starts with a verb. |
| Floating "Online registration" button | `ContactDrawer.tsx` trigger | Compact Ink pill labelled "Book". It must not cover content on mobile: add bottom padding to the page, or dock it into a bottom bar on phones. |
| Section header | all sections | Eyebrow + one heading + optional lead, left-aligned. Replace the pattern of a small centred H2 above a large left-aligned headline. |
| Footer | `src/components/layout/Footer.tsx` | Ink band (`data-theme="dark"`). **Remove** "Report potential ethical, corruption, violence or harassment-related violations…" and "Touched by digitouch!". "Tel. for registration:" becomes "Phone". "Location on the map" becomes "Get directions". Social icons link to the clinic's real profiles; remove any profile the clinic does not have (Facebook, LinkedIn and YouTube currently link to the platform home pages). |
| Contact form | `ContactFormSection.tsx`, `ContactDrawer.tsx` | Use Field/Checkbox styles: visible labels, 48px controls, errors that say how to fix. There must be only one "Let's get in touch" heading per page; it currently renders twice. |

## Phase 3: Page sections

- **Hero** (`src/pages/Hero/index.tsx`)
  - Remove `useCountUp` and render the stats as static text; the same applies in `WhyUs`.
  - Stats sit in a row of three with no empty divider.
  - Use a clean photo (for example `public/images/clinic/interior-portrait.jpg` in the arch frame, or the walkaround video poster behind an Ink `--scrim`) instead of the washed-out etched-glass shot.
  - On mobile, keep the H1 to three lines at most (display style, 42px mobile).
- **Mission banner** (`MissionCampaignBanner.tsx`): no gradient. Use an Ink band or a `surface-raised` card with a photo.
- **Services showcase** (`HomeServicesShowcase.tsx`)
  - Use the ServiceCard component in a 3-column grid on desktop, 2 on tablet and 1 on mobile.
  - Show 6 cards (not 5) so rows fill.
  - Fix the divider line that currently runs through the description text.
  - Use the same service names as the /services page.
- **Doctors carousel** (`HomeDoctorsCarousel.tsx`, `TeamDoctorCard.tsx`, `DoctorFlipCard.tsx`)
  - Use the DoctorCard component: full name, role, credentials at 14px or larger, branch badge.
  - Hide doctors without a confirmed role from the homepage carousel until their profiles are complete.
- **Clinic hub tiles** (`HomeClinicHub.tsx`)
  - Each tile's eyebrow names what the tile is; currently every tile says "CLINICS".
  - Tile titles must not be clipped.
  - Rename the heading "Dental and implantology clinics, Studio Dental" to something like "Two clinics, one standard of care".
  - On mobile, use 2 columns or fewer tiles to shorten the page.
- **Prices** (`src/pages/Prices/index.tsx`, `ServiceDetail`): use the PriceTable layout (both clinics side by side, tabular figures, "Not offered" in muted text, the examination note underneath). Rename "Operation progress:" in `ServiceDetail/index.tsx` to "What happens, step by step".
- **Clinics / contact pages** (`src/pages/Clinics`, `src/pages/contact-us`)
  - Use the ClinicCard layout.
  - The `/clinics` page H1 must say "Clinics", not "Contacts".
  - Map links go to each branch's exact Google Business Profile (ask for the URLs if they are not in `src/data/clinics.ts`).
- **Doctor profile** (`src/pages/DoctorProfile`)
  - The H1 is the doctor's name, not their credentials.
  - Doctors with no profile data (currently Dr. Umair and others; see `docs/doctor-data-status.md`) should not have a near-empty page. Show a short fallback with the branch and a booking button, or keep them unlinked.
- **About** (`src/pages/About`): replace "Get to know us better :)" with "Meet the team". Remove unverifiable claims ("world-class", "share their knowledge at international conferences") unless the client confirms them.
- **Reveal-on-scroll** (`App.tsx`): sections must be fully visible without JavaScript. Either remove the reveal observer or start sections visible and animate only a small transform.

## Phase 4: Mobile pass (390px)

- Tap targets are at least 44px. The phone, map and contact links are currently about 25px tall.
- Stacked CTAs are full width and equal in size.
- No horizontal overflow on any page. The doctors carousel may scroll inside itself, with scroll snap.
- The header never overlaps content while it switches between transparent and solid.
- Aim for a homepage no taller than about 5,500px at 390px wide (it is about 7,800px today).

## Phase 5: Content reconciliation (flag, do not invent)

Make these consistent, using `src/data/` and `docs/client-questions.md`. Where the right answer is unknown, leave `[TODO: confirm with client]` and list it in your summary:

- Years of experience appear as 16, 17 and a counter across the site. Use one figure.
- `WhyUs` claims "5000 clients" and "10 specialists"; the team data lists 14 doctors.
- The homepage shows 6 services and /services shows 9, with different names. Use one naming list from `src/data/services.ts`.
- The mission page says every treatment is priced on the site, but some prices are missing or marked "Not offered". Make the copy match the data.
- Both branches share one Gmail address. Keep it unless the client supplies domain emails.
- Blog dates display as `2026-03-15`; format them as `15 March 2026`.
- Missing portraits: Dr. Nayab Farooq, Dr. Arfa Rehman, Dr. Rabia (use the initials fallback).

## Out of scope for this handoff

SEO and GEO work (prerendering, per-route meta, sitemap.xml, robots.txt, llms.txt, JSON-LD, proper 404 pages) is a separate follow-up. Do not change routing or the build setup for it in these phases.
