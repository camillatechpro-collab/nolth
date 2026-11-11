import { useState, type ReactNode } from 'react'
import { BadgeCheck, Check, ExternalLink, Maximize2, MousePointerClick, Play } from 'lucide-react'
import type { FeaturedProject as Project } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { Button, ButtonLink } from '../ui/Button'
import { HudCorners } from '../ui/HudCorners'
import { DemoViewer } from '../ui/DemoViewer'
import { GithubIcon } from '../icons/SocialIcons'

type Viewer = { kind: 'demo' } | { kind: 'image'; index: number } | null

/** Sistema real em destaque no portfólio: demonstração interativa e/ou galeria de telas. */
export function FeaturedProject({ project: p, reverse = false }: { project: Project; reverse?: boolean }) {
  const [viewer, setViewer] = useState<Viewer>(null)
  const [shot, setShot] = useState(0)
  const titleId = `destaque-${p.id}`
  const embed = p.embedUrl ?? p.demoUrl
  const images = p.preview.type === 'gallery' ? p.preview.images : []

  return (
    <Reveal className="relative mt-14">
      <HudCorners inset="-10px" />
      <article
        aria-labelledby={titleId}
        className="relative grid gap-10 overflow-hidden rounded-2xl border border-cyan/40 bg-ink-800/70 p-6 shadow-[0_0_60px_-18px_rgb(59_227_240/0.55)] backdrop-blur-sm sm:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12"
      >
        <div
          className={`pointer-events-none absolute -top-32 h-72 w-72 rounded-full bg-cyan/15 blur-3xl ${reverse ? '-right-24' : '-left-24'}`}
          aria-hidden="true"
        />

        {/* Texto */}
        <div className={`relative ${reverse ? 'lg:order-2' : ''}`}>
          <p className="inline-flex items-center gap-2 rounded-md border border-cyan/40 bg-cyan/10 px-2.5 py-1 font-mono text-[11px] tracking-wider text-cyan uppercase">
            <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Sistema desenvolvido pela NOLTH
          </p>
          <h3 id={titleId} className="mt-5 font-display text-3xl font-bold tracking-[0.04em] text-ice uppercase sm:text-[40px] sm:leading-tight">
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
            {embed ? (
              <Button onClick={() => setViewer({ kind: 'demo' })} aria-haspopup="dialog">
                <Play className="h-4 w-4" aria-hidden="true" />
                Experimentar o sistema
              </Button>
            ) : (
              images.length > 0 && (
                <Button onClick={() => setViewer({ kind: 'image', index: shot })} aria-haspopup="dialog">
                  <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  Ver telas do sistema
                </Button>
              )
            )}
            {p.demoUrl && (
              <ButtonLink href={p.demoUrl} external variant="secondary">
                Abrir em nova aba
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            )}
            {p.extraLink && (
              <ButtonLink href={p.extraLink.href} external variant="secondary">
                {p.extraLink.label}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            )}
            {p.repoUrl && (
              <ButtonLink href={p.repoUrl} external variant="secondary">
                <GithubIcon width={16} height={16} />
                Ver código
              </ButtonLink>
            )}
          </div>
          <p className="mt-4 text-xs text-mist/80">{p.note}</p>
        </div>

        {/* Prévia */}
        <div className={`relative ${reverse ? 'lg:order-1' : ''}`}>
          {p.preview.type === 'live' && embed ? (
            <button
              type="button"
              onClick={() => setViewer({ kind: 'demo' })}
              aria-label={`Abrir a demonstração do ${p.name}`}
              className="group relative block w-full rounded-xl border-2 border-cyan/60 bg-ink-900 p-1.5 text-left shadow-[0_0_40px_-8px_rgb(59_227_240/0.6)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_-6px_rgb(59_227_240/0.8)]"
            >
              <BrowserBar label={`nolth · ${p.name.toLowerCase()}`} />
              {/* O sistema real, reduzido (sem interação) como miniatura */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-white">
                <iframe
                  src={embed}
                  title={`Prévia do sistema ${p.name}`}
                  loading="lazy"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 h-[250%] w-[250%] origin-top-left scale-[0.4] border-0"
                />
                <HoverCta icon={<MousePointerClick className="h-4 w-4" aria-hidden="true" />} label="Experimentar" />
              </div>
            </button>
          ) : (
            images.length > 0 && (
              <div>
                <button
                  type="button"
                  onClick={() => setViewer(embed ? { kind: 'demo' } : { kind: 'image', index: shot })}
                  aria-label={embed ? `Abrir a demonstração do ${p.name}` : `Ampliar a tela ${images[shot].label}`}
                  className="group relative block w-full rounded-xl border-2 border-cyan/60 bg-ink-900 p-1.5 text-left shadow-[0_0_40px_-8px_rgb(59_227_240/0.6)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_-6px_rgb(59_227_240/0.8)]"
                >
                  <BrowserBar label={`${p.name} · ${images[shot].label}`} />
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-ink">
                    <img
                      key={images[shot].src}
                      src={images[shot].src}
                      alt={images[shot].alt}
                      loading="lazy"
                      decoding="async"
                      width={1600}
                      height={1000}
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                    <HoverCta
                      icon={embed ? <MousePointerClick className="h-4 w-4" aria-hidden="true" /> : <Maximize2 className="h-4 w-4" aria-hidden="true" />}
                      label={embed ? 'Experimentar' : 'Ampliar'}
                    />
                  </div>
                </button>
                {/* Seletor de telas */}
                <div className="mt-3 flex flex-wrap justify-center gap-2" role="group" aria-label="Telas do sistema">
                  {images.map((img, i) => (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => setShot(i)}
                      aria-pressed={i === shot}
                      className={`rounded-md border px-3 py-1.5 font-mono text-[11px] tracking-wider uppercase transition ${
                        i === shot
                          ? 'border-cyan bg-cyan/15 text-cyan shadow-[0_0_12px_-2px_rgb(59_227_240/0.6)]'
                          : 'border-line text-mist hover:border-cyan/50 hover:text-ice'
                      }`}
                    >
                      {img.label}
                    </button>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </article>

      <DemoViewer
        open={viewer !== null}
        onClose={() => setViewer(null)}
        title={p.name}
        subtitle={viewer?.kind === 'image' ? images[viewer.index].label : (p.viewerLabel ?? 'demonstração · dados fictícios')}
        externalUrl={viewer?.kind === 'image' ? images[viewer.index].src : p.demoUrl}
      >
        {viewer?.kind === 'demo' && embed && (
          <iframe src={embed} title={`Sistema ${p.name} em funcionamento`} className="w-full flex-1 bg-white" />
        )}
        {viewer?.kind === 'image' && (
          <>
            <div className="min-h-0 flex-1 overflow-auto bg-ink p-2 sm:p-4">
              <img src={images[viewer.index].src} alt={images[viewer.index].alt} className="mx-auto h-auto w-full max-w-[1600px]" />
            </div>
            <div className="flex flex-wrap justify-center gap-2 border-t border-line p-3">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setViewer({ kind: 'image', index: i })}
                  aria-pressed={i === viewer.index}
                  className={`rounded-md border px-3 py-1.5 font-mono text-[11px] tracking-wider uppercase transition ${
                    i === viewer.index ? 'border-cyan bg-cyan/15 text-cyan' : 'border-line text-mist hover:text-ice'
                  }`}
                >
                  {img.label}
                </button>
              ))}
            </div>
          </>
        )}
      </DemoViewer>
    </Reveal>
  )
}

function BrowserBar({ label }: { label: string }) {
  return (
    <div className="mb-1.5 flex items-center gap-1 px-1">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan/70" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
      <span className="ml-2 truncate font-mono text-[10px] text-mist">{label}</span>
    </div>
  )
}

function HoverCta({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition duration-300 group-hover:bg-ink/55">
      <span className="flex translate-y-2 items-center gap-2 rounded-lg bg-cyan px-4 py-2.5 font-display text-[13px] font-semibold tracking-[0.08em] text-ink uppercase opacity-0 shadow-[0_0_24px_rgb(59_227_240/0.7)] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {icon}
        {label}
      </span>
    </span>
  )
}
