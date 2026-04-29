export type TeamDoctorCardProps = {
  name: string
  creds: string
  role: string
  image: string
  clinic: string
}

export function TeamDoctorCard({ name, creds, role, image, clinic }: TeamDoctorCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-soft-sm">
      <div className="aspect-[4/3] bg-[#c7c3c7]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="p-4">
        <h3 className="text-[1.35rem] font-semibold leading-tight text-[#83BFE3]">{name}</h3>
        <p className="mt-1 text-[0.82rem] leading-snug text-muted">{creds}</p>
        <p className="mt-1 text-[0.82rem] leading-snug text-muted">{role}</p>
        <span className="mt-4 inline-flex rounded-sm bg-[#87CEFA] px-3 py-1 text-[0.72rem] font-medium text-ink">
          {clinic}
        </span>
      </div>
    </article>
  )
}
