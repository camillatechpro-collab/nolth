/** Trilhos laterais decorativos (estilo HUD), visíveis só em telas bem largas. */
export function SideRails() {
  const text = 'font-mono text-[11px] tracking-[0.35em] text-mist/60 uppercase [writing-mode:vertical-rl]'
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-y-0 z-30 hidden w-full 2xl:block">
      <div className="absolute inset-y-0 left-0 flex w-16 flex-col items-center justify-end gap-8 border-r border-line pb-12">
        <span className={`${text} rotate-180`}>NOLTH Digital Studio</span>
        <span className="h-16 w-px bg-gradient-to-b from-cyan/60 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 flex w-16 flex-col items-center justify-start gap-8 border-l border-line pt-28">
        <span className="h-16 w-px bg-gradient-to-t from-orchid/60 to-transparent" />
        <span className={text}>Da ideia à experiência digital</span>
      </div>
    </div>
  )
}
