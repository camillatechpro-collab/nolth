import { useState } from 'react'
import { BadgeCheck, Check, ExternalLink, MousePointerClick, Play } from 'lucide-react'
import { featuredProject as p } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { Button, ButtonLink } from '../ui/Button'
import { HudCorners } from '../ui/HudCorners'
import { DemoViewer } from '../ui/DemoViewer'

/** Sistema real em destaque no portfólio, com demonstração interativa. */
export function FeaturedProject() {
  const [open, setOpen] = useState(false)

  return (
    <Reveal className="relative mt-14">
      <HudCorners inset="-10px" />
      <article
        aria-labelledby="destaque-titulo"
        className="relative grid gap-10 overflow-hidden rounded-2xl border border-cyan/40 bg-ink-800/70 p-6 shadow-[0_0_60px_-18px_rgb(59_227_240/0.55)] backdrop-blur-sm sm:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12"
      >
        <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-cyan/15 blur-3xl" aria-hidden="true" />

        {/* Texto */}
        <div className="relative">
          <p className="inline-flex items-center gap-2 rounded-md border border-cyan/40 bg-cyan/10 px-2.5 py-1 font-mono text-[11px] tracking-wider text-cyan uppercase">
            <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Sistema desenvolvido pela NOLTH
          </p>
          <h3 id="destaque-titulo" className="mt-5 font-display text-4xl font-bold tracking-[0.04em] text-ice uppercase sm:text-5xl">
            <span className="text-gradient">{p.name}</span>
          </h3>
          <p className="mt-2 font-display text-lg text-ice/90">{p.tagline}</p>
          <p className="mt-4 leading-relaxed text-mist">{p.description}</p>

          <ul className="mt-6 space-y-2.5">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[15px] text-ice/85">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
            {p.stack.map((t) => (
              <li key={t} className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-mist">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button onClick={() => setOpen(true)} aria-haspopup="dialog">
              <Play className="h-4 w-4" aria-hidden="true" />
              Experimentar o sistema
            </Button>
            <ButtonLink href={p.demoUrl} external variant="secondary">
              Abrir em nova aba
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <p className="mt-4 text-xs text-mist/80">
            Demonstração com dados fictícios. Na tela de entrada, use um dos acessos de demonstração para navegar por cada perfil.
          </p>
        </div>

        {/* Prévia ao vivo */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Abrir a demonstração do ${p.name}`}
          className="group relative block w-full rounded-xl border-2 border-cyan/60 bg-ink-900 p-1.5 text-left shadow-[0_0_40px_-8px_rgb(59_227_240/0.6)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_-6px_rgb(59_227_240/0.8)]"
        >
          <div className="mb-1.5 flex items-center gap-1 px-1">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
            <span className="ml-2 truncate font-mono text-[10px] text-mist">nolth.com.br/demos/hoseg</span>
          </div>
          {/* O sistema real, reduzido (sem interação) como miniatura */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-white">
            <iframe
              src={p.demoUrl}
              title={`Prévia do sistema ${p.name}`}
              loading="lazy"
              tabIndex={-1}
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 h-[250%] w-[250%] origin-top-left scale-[0.4] border-0"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition duration-300 group-hover:bg-ink/55">
              <span className="flex translate-y-2 items-center gap-2 rounded-lg bg-cyan px-4 py-2.5 font-display text-[13px] font-semibold tracking-[0.08em] text-ink uppercase opacity-0 shadow-[0_0_24px_rgb(59_227_240/0.7)] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <MousePointerClick className="h-4 w-4" aria-hidden="true" />
                Experimentar
              </span>
            </span>
          </div>
        </button>
      </article>

      <DemoViewer open={open} onClose={() => setOpen(false)} title={p.name} url={p.demoUrl} />
    </Reveal>
  )
}
