/** Quatro cantoneiras decorativas no estilo HUD. Use dentro de um elemento com `position: relative`. */
export function HudCorners({ inset = '-6px', className = '' }: { inset?: string; className?: string }) {
  const s = { margin: 0 }
  return (
    <span aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`} style={s}>
      <span className="absolute h-[18px] w-[18px] border-t-2 border-l-2 border-cyan/80" style={{ top: inset, left: inset }} />
      <span className="absolute h-[18px] w-[18px] border-t-2 border-r-2 border-cyan/80" style={{ top: inset, right: inset }} />
      <span className="absolute h-[18px] w-[18px] border-b-2 border-l-2 border-orchid/80" style={{ bottom: inset, left: inset }} />
      <span className="absolute h-[18px] w-[18px] border-r-2 border-b-2 border-orchid/80" style={{ bottom: inset, right: inset }} />
    </span>
  )
}
