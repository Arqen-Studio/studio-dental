import { Link } from 'react-router-dom'

export type TeamDoctorCardProps = {
  slug: string
  name: string
  creds: string
  role: string
  image: string
  clinic: string
}

export function TeamDoctorCard({ slug, name, creds, role, image, clinic }: TeamDoctorCardProps) {
  return (
    <Link
      to={`/doctors/${slug}`}
      className="block h-full overflow-hidden rounded-lg border border-black/10 bg-white shadow-soft-sm transition-shadow duration-300 hover:shadow-soft-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
    <article className="flex h-full flex-col overflow-hidden">
      <div className="aspect-[4/3] flex-none bg-[#C9D2C4]">
        {image && (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-[1.35rem] font-semibold leading-tight text-[#3F6F4B]">{name}</h3>
        {creds && <p className="mt-1 text-[0.82rem] leading-snug text-muted">{creds}</p>}
        {role && <p className="mt-1 text-[0.82rem] leading-snug text-muted">{role}</p>}
        {clinic && (
          <div className="mt-auto pt-4">
            <span className="inline-flex rounded-sm bg-[#8FB48A] px-3 py-1 text-[0.72rem] font-medium text-ink">
              {clinic}
            </span>
          </div>
        )}
      </div>
    </article>
    </Link>
  )
}
