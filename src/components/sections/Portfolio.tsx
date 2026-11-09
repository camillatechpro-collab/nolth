import type { CSSProperties } from 'react'
import { ArrowRight, Info } from 'lucide-react'
import { projects } from '../../data/portfolio'
import type { ProjectType } from '../../data/services'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { ProjectMockup } from '../mockups/ProjectMockup'
import { FeaturedProject } from './FeaturedProject'

const accentRgb = { cyan: '59 227 240', violet: '185 140 255' } as const

export function Portfolio({ onInterest }: { onInterest: (type: ProjectType) => void }) {
  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="relative overflow-hidden border-y border-line bg-ink-900/60 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-violet/15 blur-[140px]"
        aria-hidden="true"
      />
      <Container className="relative">
        <SectionHeading
          id="portfolio-title"
          index="02"
          eyebrow="Portfólio"
          title="Projetos que saem do papel."
          description="Um sistema real desenvolvido pela NOLTH, que você pode experimentar agora, e conceitos que mostram nossa abordagem em diferentes segmentos."
          align="center"
        />

        <FeaturedProject />

        <h3 className="mt-24 text-center font-display text-xl font-bold tracking-[0.08em] text-ice uppercase sm:text-2xl">Conceitos demonstrativos</h3>

        <Reveal className="mt-6 flex justify-center">
          <p className="inline-flex items-start gap-2.5 rounded-xl border border-cyan/25 bg-cyan/[0.06] px-4 py-3 text-left text-sm text-ice/85">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
            <span>
              Os conceitos abaixo são <strong className="font-semibold text-ice">demonstrativos e fictícios</strong>: as marcas não
              existem e foram criadas apenas para ilustrar nosso trabalho.
            </span>
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const style = { '--accent': accentRgb[project.accent] } as CSSProperties
            return (
              <Reveal as="li" key={project.id} delay={i * 110}>
                <article style={style} className="group flex h-full flex-col">
                  {/* Moldura neon */}
                  <div className="relative rounded-2xl border-2 border-[rgb(var(--accent)/0.75)] p-1.5 shadow-[0_0_28px_-6px_rgb(var(--accent)/0.55),inset_0_0_18px_-8px_rgb(var(--accent)/0.6)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_0_44px_-4px_rgb(var(--accent)/0.75),inset_0_0_22px_-8px_rgb(var(--accent)/0.7)]">
                    <ProjectMockup variant={project.variant} label={`Ilustração do projeto demonstrativo ${project.title}`} />
                    <span className="absolute right-4 bottom-4 rounded-md border border-white/10 bg-ink/85 px-2 py-1 font-mono text-[10px] tracking-wider text-[rgb(var(--accent))] uppercase backdrop-blur">
                      Projeto demonstrativo
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col px-1 pt-6">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-xl font-bold tracking-[0.06em] text-ice uppercase">{project.title}</h3>
                      <span className="shrink-0 font-mono text-[11px] text-[rgb(var(--accent))]">{project.category}</span>
                    </div>
                    <p className="mt-3 text-[15px] leading-relaxed text-mist">{project.description}</p>
                    <ul className="mt-4 space-y-1 text-sm text-ice/80" aria-label="Destaques">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2">
                          <span className="h-1 w-1 rotate-45 bg-[rgb(var(--accent))]" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
                      {project.stack.map((tech) => (
                        <li key={tech} className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-mist">
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6">
                      <button
                        type="button"
                        onClick={() => onInterest(project.serviceType)}
                        className="inline-flex items-center gap-2 rounded-md font-display text-[12px] font-semibold tracking-[0.12em] text-[rgb(var(--accent))] uppercase transition hover:text-ice"
                      >
                        Quero um projeto assim
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                      </button>
                    </div>
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
