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
    <div className="relative h-[24rem] [transform-style:preserve-3d] transition duration-700 ease-out group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0 overflow-hidden rounded-lg border border-line bg-surface-raised shadow-1 [backface-visibility:hidden]">
        <div className="relative h-56 w-full overflow-hidden bg-surface-sunken" aria-hidden="true">
          <img
            src={image}
            alt=""
            loading="lazy"
            className="h-full w-full animate-[sd-doctor-float_8s_ease-in-out_infinite] object-cover transition duration-700 ease-out group-hover:scale-110"
            style={{ animationDelay: `${(animationIndex % 4) * 0.5}s` }}
          />

        </div>
        <div className="flex h-[12.8rem] flex-col p-5">
          <h3 className="min-h-[2.6rem] h4 text-brand [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
            {name}
          </h3>
          <p className="mt-2 min-h-[4.4rem] small uppercase text-brand [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5] overflow-hidden">
            {creds}
          </p>
          <ul className="mt-4 grid gap-1.5">
            {highlights.map((item) => (
              <li key={item} className="truncate small text-ink">
                - {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div data-theme="dark" className="absolute inset-0 overflow-hidden rounded-lg border border-line bg-surface text-ink shadow-2 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <img src={image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-78" />
        <div className="absolute inset-0 bg-scrim" aria-hidden="true" />
        <div className="relative z-10 flex h-full flex-col p-5">
          <div className="flex items-start">
            <div>
              <h3 className="h4 text-brand">{name}</h3>
              <p className="mt-1 small uppercase text-brand [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
                {creds}
              </p>
            </div>
          </div>
          <p className="mt-4 small text-ink [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:7] overflow-hidden">
            {about}
          </p>
          <div className="mt-auto pt-4 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full bg-surface-raised px-3 py-1 eyebrow text-ink"
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
