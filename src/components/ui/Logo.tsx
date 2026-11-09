interface LogoProps {
  className?: string
  /** Exibe o nome NOLTH e o complemento ao lado do emblema. */
  showText?: boolean
}

/** Logo oficial da NOLTH: emblema + logotipo (arquivos em /public/brand). */
export function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/brand/nolth-emblem-sm.webp"
        alt={showText ? '' : 'NOLTH Digital Studio'}
        width={44}
        height={41}
        decoding="async"
        className="h-10 w-auto shrink-0 drop-shadow-[0_0_10px_rgb(124_108_255/0.35)]"
      />
      {showText && (
        <span className="flex flex-col items-start leading-none">
          <img src="/brand/nolth-wordmark.webp" alt="NOLTH" width={96} height={17} decoding="async" className="h-[17px] w-auto" />
          <span className="mt-1.5 font-mono text-[9.5px] tracking-[0.3em] text-mist uppercase">Digital Studio</span>
        </span>
      )}
    </span>
  )
}

/** Emblema em tamanho grande, com brilho suave, para áreas de destaque. */
export function LogoEmblem({ className = '' }: { className?: string }) {
  return (
    <img
      src="/brand/nolth-emblem.webp"
      alt="Emblema da NOLTH Digital Studio"
      width={370}
      height={348}
      loading="lazy"
      decoding="async"
      className={`h-auto drop-shadow-[0_0_40px_rgb(124_108_255/0.35)] ${className}`}
    />
  )
}
