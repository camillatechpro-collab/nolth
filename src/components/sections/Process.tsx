import { processSteps } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

export function Process() {
  return (
    <section id="processo" aria-labelledby="processo-title" className="relative border-t border-line bg-ink-900/60 py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="processo-title"
          index="05"
          eyebrow="Processo de trabalho"
          title="Um caminho claro, do briefing à entrega."
          description="Etapas bem definidas para você saber exatamente o que acontece em cada fase do seu projeto."
          align="center"
        />

        <ol className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {/* Linha conectora (desktop) */}
          <span
            className="pointer-events-none absolute top-[27px] right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-cyan/0 via-cyan/50 to-orchid/0 lg:block"
            aria-hidden="true"
          />
          {processSteps.map(({ icon: Icon, title, description, output }, i) => (
            <Reveal as="li" key={title} delay={i * 120} className="relative">
              <div className="flex flex-col items-start lg:items-center lg:text-center">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-ink-800 text-cyan shadow-[0_0_0_6px_var(--color-ink-900)]">
                  <Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-cyan font-mono text-[11px] font-semibold text-ink shadow-[0_0_12px_rgb(59_227_240/0.6)]">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-6 text-lg font-semibold text-ice">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-mist">{description}</p>
                <span className="mt-4 rounded-md border border-mint/20 bg-mint/5 px-2.5 py-1 font-mono text-[11px] text-mint">
                  → {output}
                </span>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
