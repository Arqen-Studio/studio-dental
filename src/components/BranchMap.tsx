type BranchMapProps = {
  /** Branch name, used in the iframe title for screen readers. */
  name: string
  address: string
  /**
   * A `https://www.google.com/maps/embed?pb=…` link from Google Maps
   * (Share → Embed a map). When set it pins the clinic's own Business listing;
   * until then the map is built from the address. `share.google` links cannot
   * be used here: Google refuses to load them inside a frame.
   */
  embedSrc?: string
  className?: string
}

export default function BranchMap({ name, address, embedSrc, className = '' }: BranchMapProps) {
  const src =
    embedSrc ??
    `https://www.google.com/maps?q=${encodeURIComponent(`Studio Dental, ${address}`)}&output=embed`

  return (
    <div className={`overflow-hidden rounded-md border border-line bg-surface-sunken ${className}`}>
      <iframe
        src={src}
        title={`Map of Studio Dental, ${name}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="block aspect-[4/3] w-full border-0"
      />
    </div>
  )
}
