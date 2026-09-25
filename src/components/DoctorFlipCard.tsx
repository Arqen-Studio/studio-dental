export type DoctorFlipCardProps = {
  name: string
  creds: string
  about: string
  image: string
  highlights: string[]
  animationIndex?: number
}

export function DoctorFlipCard({
  name,
  creds,
  about,
  image,
  highlights,
  animationIndex = 0,
}: DoctorFlipCardProps) {
  return (
    <div className="relative h-[480px] [transform-style:preserve-3d] transition duration-700 ease-out group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0 overflow-hidden rounded-lg border border-black/10 bg-white shadow-soft-sm [backface-visibility:hidden]">
        <div className="relative h-56 w-full overflow-hidden bg-black/[0.04]" aria-hidden="true">
          <img
            src={image}
            alt=""
            loading="lazy"
            className="h-full w-full animate-[sd-doctor-float_8s_ease-in-out_infinite] object-cover transition duration-700 ease-out group-hover:scale-110"
            style={{ animationDelay: `${(animationIndex % 4) * 0.5}s` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
        </div>
        <div className="flex h-[256px] flex-col p-5">
          <h3 className="min-h-[2.6rem] text-[1.1rem] leading-tight text-[#3F6F4B] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
            {name}
          </h3>
          <p className="mt-2 min-h-[4.4rem] text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-brand [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5] overflow-hidden">
            {creds}
          </p>
          <ul className="mt-4 grid gap-1.5">
            {highlights.map((item) => (
              <li key={item} className="truncate text-[0.8rem] text-ink2">
                - {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden rounded-lg border border-black/10 bg-ink text-creamBrand shadow-soft-md [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <img src={image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-78" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/52 via-ink/46 to-ink/58" aria-hidden="true" />
        <div className="relative z-10 flex h-full flex-col p-5">
          <div className="flex items-start">
            <div>
              <h3 className="text-[1.1rem] font-semibold text-[#3F6F4B]">{name}</h3>
              <p className="mt-1 text-[0.66rem] font-semibold uppercase tracking-[0.07em] text-brand [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
                {creds}
              </p>
            </div>
          </div>
          <p className="mt-4 text-[0.79rem] leading-relaxed text-creamBrand/90 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:7] overflow-hidden">
            {about}
          </p>
          <div className="mt-auto pt-4 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/90 px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-ink2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
