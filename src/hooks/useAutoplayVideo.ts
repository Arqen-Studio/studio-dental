import { useEffect, useRef } from 'react'

/**
 * Chrome only honours autoplay when the element is muted as the video loads.
 * React assigns `muted` as a property rather than an attribute, so the browser
 * sees an unmuted video and blocks playback. Force it, then start manually.
 */
export function useAutoplayVideo() {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    video.muted = true
    video.defaultMuted = true
    video.playsInline = true
    void video.play().catch(() => {})
  }, [])

  return ref
}
