# Studio Dental: branding handover

Scoped to the brand revamp you are taking on. How the colour system works, the
one trap in it, and how to continue the header inversion across the site.

## The palette

Defined as Tailwind tokens in `tailwind.config.cjs`:

    brand        #5FB979   mid green, carries dark text
    brandDeep    #256B3C   deep green, carries light text
    brandBright  #CFF3D3   bright green, for light accents on dark
    brandPale    #C6E6C4   pale fills
    creamBrand   #EEF6EC   page background, and light text on deep green
    ink          #123420   near-black green, body text
    ink2         #255138   secondary text
    muted        #4F6557   muted text

## The trap: hardcoded hexes

Many components hardcode the hex rather than use the token, because Tailwind
cannot read a token inside an arbitrary value like `bg-[#256B3C]` or an inline
`rgba()` shadow. So changing a colour is two moves, not one: edit the token, and
find-and-replace the old hex across `src/`. After any change this must return
nothing (swap in the values you just retired):

    grep -rniE "#5FB979|#256B3C|#C6E6C4|#EEF6EC|#123420|#255138|#4F6557" src/

Always check contrast before committing a colour. Dark text on a green fill
wants 4.5:1; light text on a dark fill the same. Everything currently in use
clears it.

## The inversion, to continue

The direction is: darker green as the surface, lighter shade as the text on
top. The header (`src/components/layout/Navbar.tsx`) is done as the model, in
its solid state: `bg-brandDeep` with `text-creamBrand`.

To carry it across the rest, the surfaces still on the old pattern
(`bg-brand` + `text-ink`) are:

- the hero stat panel and "Mission for life" badge — `src/pages/Hero/index.tsx`
- the "DHA Phase II" panel on the doctors page — `src/pages/TeamPage/index.tsx`
  (the F-7 panel there is already dark-with-light-text; use it as the model)
- the primary buttons: Book a consultation, All doctors, All services
- the mission banner — `src/components/MissionCampaignBanner.tsx`
- the service list rows and price cards

The move in each: swap `bg-brand` + `text-ink` for `bg-brandDeep` +
`text-creamBrand`, or `text-brandBright` where you want the greener, livelier
label rather than the near-white cream. Keep checking contrast as you go.
