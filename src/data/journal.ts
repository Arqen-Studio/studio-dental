/**
 * Journal posts. [TODO: confirm with client] These are titles only: every
 * article page shows the same placeholder text, and the two news items
 * (working hours for 2026, zirconia crowns at F-7) are unconfirmed.
 */
export type Post = {
  id: string
  /** ISO date, shown as "15 March 2026". */
  date: string
  title: string
  image: string
  clinic: 'dha' | 'f7' | 'both'
}

const IMG_A = '/images/gallery/g2.jpg'
const IMG_B = '/images/gallery/g6.jpg'

export const POSTS: Post[] = [
  { id: '1', date: '2026-03-15', title: 'How often should you visit the dentist?', image: IMG_A, clinic: 'both' },
  { id: '2', date: '2026-02-28', title: 'Dental implants: what to expect before, during and after.', image: IMG_B, clinic: 'dha' },
  { id: '3', date: '2026-02-10', title: 'Clear aligners vs braces, which is right for you?', image: IMG_A, clinic: 'f7' },
  { id: '4', date: '2026-01-22', title: 'Gum disease, seek treatment as early as possible.', image: IMG_B, clinic: 'both' },
  { id: '5', date: '2025-12-18', title: 'Studio Dental DHA Phase II: updated working hours for 2026.', image: IMG_A, clinic: 'dha' },
  { id: '6', date: '2025-12-05', title: 'New zirconia crowns now available at F-7 Markaz.', image: IMG_B, clinic: 'f7' },
  { id: '7', date: '2025-11-14', title: 'How to brush your teeth properly, a simple guide.', image: IMG_A, clinic: 'both' },
  { id: '8', date: '2025-10-30', title: 'What is a root canal and does it hurt?', image: IMG_B, clinic: 'both' },
]

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

/** "2026-03-15" → "15 March 2026" (voice rule). */
export function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  return `${d} ${MONTHS[m - 1]} ${y}`
}
