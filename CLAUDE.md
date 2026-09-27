# Studio Dental website

Marketing site for Studio Dental, a dental clinic in Islamabad with two branches (DHA Phase II, F-7 Markaz).
Vite + React 19 + TypeScript + React Router 7 + Tailwind v4 (config via `@config` in `src/styles/index.css`). Deployed on Vercel; `api/enquiry.ts` is the contact form endpoint.

## Commands

- `npm run dev` (port 5173), `npm run build` (runs `tsc -b`), `npm run lint`
- Always finish a task with `npm run build && npm run lint` passing.

## Source of truth for design

The brand and design system were finalised in September 2026. They override every earlier colour or layout decision in this repo, including the old guidance in `HANDOVER.md`.

- `docs/brand/studio-dental-design-system.html`: tokens, component rules and the exact HTML markup for each component. Read the comment at the top of the file first.
- `docs/brand/tokens.css`: the canonical CSS custom properties and type classes.
- `docs/brand/tokens.json`: the same tokens as data, with a usage note on every token.
- `docs/brand/reference-components.css`: reference component CSS (`sd-` classes).
- `docs/brand/studio-dental-brand-guide.html`: the visual brand guide (logo, imagery, voice).
- `docs/brand/IMPLEMENTATION_PLAN.md`: the task list for the rebrand, in order.

## Rules

- **Colours only through tokens.** No hex, `rgb()` or `oklch()` literals in `src/` outside the token file. No arbitrary colour utilities such as `bg-[#EEF6EC]`.
- **Retired:** mint `#5FB979`, `#256B3C`, `#EEF6EC`, `#C6E6C4`, `#CFF3D3`, `#123420`, `#255138`, `#4F6557`, and every green gradient.
- **Type:** Bricolage Grotesque 500/600 for headings 22px and up only; Archivo 400/500/600 for everything else. Use the type scale in `tokens.css` (`.display`, `.h1`–`.h4`, `.lead`, `.body`, `.small`, `.label`, `.eyebrow`). Nothing under 13px. Body text stays 16px on phones.
- **Spacing and shape:** 4px scale (`--space-1` to `--space-10`); radii `--radius-sm` 8, `--radius-md` 16, `--radius-lg` 24, `--radius-pill`. No other values.
- **Content is visible at rest.** No count-up from zero, no sections hidden until they scroll into view.
- **Accessibility:** 44×44px minimum tap targets, visible focus ring (`--focus`), text contrast 4.5:1 in both themes, one `h1` per page.
- **Copy:** follow the voice rules in the design system (specific, no superlatives, `Rs 150,000`, `+92 329 9961999`, `Mon–Fri, 10:00–20:00`, `15 March 2026`). Never invent facts: years of experience, doctor credentials, prices and opening hours come from `src/data/` or the client. If a fact is missing, leave a visible `[TODO: …]` and list it in your summary.

## Checks

After colour work, this must print nothing:

    grep -rniE "#5FB979|#256B3C|#C6E6C4|#CFF3D3|#EEF6EC|#123420|#255138|#4F6557|gradient" src/

Before calling a UI task done, screenshot the changed pages at 390, 768 and 1440px wide and look at them.
