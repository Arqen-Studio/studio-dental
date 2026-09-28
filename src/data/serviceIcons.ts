import type { LucideIcon } from 'lucide-react'
import { Activity, Anchor, Baby, Crown, Droplets, Rows3, Shield, Sparkles, Stethoscope, Smile } from 'lucide-react'

/** Line icon for each treatment card, keyed by SERVICES_DATA id. */
const SERVICE_ICONS: Record<string, LucideIcon> = {
  'dental-implantation': Anchor,
  prosthetics: Crown,
  'dental-fillings': Shield,
  'teeth-straightening': Rows3,
  'aesthetic-fillings': Sparkles,
  'root-canal': Activity,
  'oral-hygiene': Droplets,
  'tooth-extraction': Stethoscope,
  'childrens-dentistry': Baby,
}

export const iconForService = (id: string): LucideIcon => SERVICE_ICONS[id] ?? Smile
