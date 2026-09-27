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
      className="block h-full overflow-hidden rounded-lg border border-line bg-surface-raised shadow-1 transition-shadow duration-300 hover:shadow-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
    <article className="flex h-full flex-col overflow-hidden">
      <div className="aspect-[4/3] flex-none bg-surface-sunken">
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
        <h3 className="h4 text-brand">{name}</h3>
        {creds && <p className="mt-1 small text-ink-muted">{creds}</p>}
        {role && <p className="mt-1 small text-ink-muted">{role}</p>}
        {clinic && (
          <div className="mt-auto pt-4">
            <span className="inline-flex rounded-sm bg-brand-soft px-3 py-1 small font-medium text-brand">
              {clinic}
            </span>
          </div>
        )}
      </div>
    </article>
    </Link>
  )
}
