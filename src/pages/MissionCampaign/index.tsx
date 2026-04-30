export default function MissionCampaign() {
  return (
    <section className="bg-gradient-to-b from-skyBrand via-[#e6f5fc] to-white pb-16 pt-[calc(78px+2rem)] md:pb-24 md:pt-[calc(78px+2.5rem)]">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-skyBrand/30 bg-skyBrand/15 px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink2">
          <span className="h-1.5 w-1.5 rounded-full bg-skyBrand" aria-hidden="true" />
          Campaign
        </span>
        <h1 className="mt-4 max-w-[20ch] font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight tracking-tight text-ink">
          A mission for life
        </h1>
        <p className="mt-4 max-w-[60ch] text-[1.05rem] text-muted">
          New image campaign — content for this page can be updated with your story, media kit, and calls to action.
        </p>
      </div>
    </section>
  )
}
