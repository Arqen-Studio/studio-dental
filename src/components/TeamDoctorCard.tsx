import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { doctorInitials } from '../data/teamDoctors'

export type TeamDoctorCardProps = {
  slug: string
  name: string
  creds: string
  role: string
  image: string
  clinic: string
}

/** A doctor's photo, full name, role, credentials and branch (design system, DoctorCard). */
export function TeamDoctorCard({ slug, name, creds, role, image, clinic }: TeamDoctorCardProps) {
  const branch = clinic.split(',')[0].trim()
  return (
    <Link to={`/doctors/${slug}`} className="sd-doctor h-full">
      <span className="sd-doctor__photo">
        {image ? (
          <img src={image} alt={name} loading="lazy" />
        ) : (
          <span className="sd-doctor__initials" role="img" aria-label={name}>
            {doctorInitials(name)}
          </span>
        )}
      </span>
      <span className="sd-doctor__body">
        <span className="sd-doctor__name">{name}</span>
        {role && <span className="sd-doctor__role">{role}</span>}
        {creds && <span className="sd-doctor__cred">{creds}</span>}
        {branch && (
          <span className="sd-badge sd-badge--brand">
            <MapPin className="sd-icon" size={14} strokeWidth={1.75} aria-hidden />
            {branch}
          </span>
        )}
      </span>
    </Link>
  )
}
