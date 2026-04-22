import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      if (pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = decodeURIComponent(hash.replace('#', ''))
    const el = document.getElementById(id)
    if (!el) return

    // Matches the fixed navbar height (78px) + a little breathing room
    const top = el.getBoundingClientRect().top + window.scrollY - 90
    window.scrollTo({ top, behavior: 'smooth' })
  }, [hash, pathname])

  return null
}

