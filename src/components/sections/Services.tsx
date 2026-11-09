import type { CSSProperties } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { services, type ProjectType } from '../../data/services'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

interface ServicesProps {
  onInterest: (type: ProjectType) => void
}

/** Cor de destaque de cada card, do ciano ao roxo (como na identidade visual). */
const accents = ['59 227 240', '96 180 250', '124 108 255', '185 140 255']

export function Services({ onInterest }: ServicesProps) {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="servicos-title"
          index="01"
          eyebrow="Serviços"
          title="Soluções digitais pensadas para o seu crescimento."
          description="Do primeiro site à automação completa da operação: cada entrega une estratégia, design e engenharia de alto nível."
          align="center"
        />

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon
            const style = { '--accent': accents[i] } as CSSProperties
            return (
              <Reveal as="li" key={service.type} delay={i * 90} className="h-full">
                <article
                  style={style}
                  className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[rgb(var(--accent)/0.28)] p-6 shadow-[0_0_0_0_rgb(var(--accent)/0)] backdrop-blur-sm transition duration-500 hover:-translate-y-1.5 hover:border-[rgb(var(--accent)/0.7)] hover:shadow-[0_0_40px_-6px_rgb(var(--accent)/0.45)] sm:p-7"
                >
                  {/* Brilho do topo */}
                  <span
                    className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[rgb(var(--accent)/0.22)] blur-3xl transition duration-500 group-hover:bg-[rgb(var(--accent)/0.38)]"
                    aria-hidden="true"
                  />

                  <div className="relative flex items-start justify-between">
                    <span
                      className="font-display text-[44px] leading-none font-bold text-[rgb(var(--accent))] [text-shadow:0_0_24px_rgb(var(--accent)/0.55)]"
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </span>
                    <span className="font-mono text-[10px] tracking-wider text-[rgb(var(--accent)/0.8)] uppercase">{service.tag}</span>
                  </div>

                  {/* Prisma de vidro com o ícone */}
                  <div className="relative my-8 flex justify-center [perspective:600px]" aria-hidden="true">
                    <span className="relative flex h-24 w-24 items-center justify-center rounded-[22px] border border-white/20 bg-gradient-to-br from-[rgb(var(--accent)/0.55)] via-[rgb(var(--accent)/0.18)] to-violet/30 shadow-[0_20px_50px_-12px_rgb(var(--accent)/0.6),inset_0_1px_0_rgb(255_255_255/0.35)] transition duration-700 [transform:rotateX(14deg)_rotateY(-18deg)] group-hover:[transform:rotateX(0deg)_rotateY(0deg)_translateY(-4px)]">
                      <span className="absolute inset-[6px] rounded-[17px] border border-white/10" />
                      <Icon className="relative h-10 w-10 text-white drop-shadow-[0_0_12px_rgb(var(--accent))]" strokeWidth={1.6} />
                    </span>
                  </div>

                  <h3 className="relative font-display text-lg font-bold tracking-[0.04em] text-ice uppercase">{service.title}</h3>
                  <p className="relative mt-3 text-[15px] leading-relaxed text-mist">{service.description}</p>
                  <ul className="relative mt-5 space-y-2 border-t border-white/10 pt-5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-ice/85">
                        <Check className="h-4 w-4 shrink-0 text-[rgb(var(--accent))]" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="relative mt-auto pt-7">
                    <button
                      type="button"
                      onClick={() => onInterest(service.type)}
                      className="flex w-full items-center justify-between rounded-lg border border-[rgb(var(--accent)/0.4)] px-4 py-3 font-display text-[12px] font-semibold tracking-[0.12em] text-ice uppercase transition hover:border-[rgb(var(--accent))] hover:bg-[rgb(var(--accent)/0.12)]"
                      aria-label={`Tenho interesse em ${service.title}`}
                    >
                      Tenho interesse
                      <ArrowUpRight
                        className="h-4 w-4 text-[rgb(var(--accent))] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
