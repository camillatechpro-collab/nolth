import { Lightbulb, Layers, Target } from 'lucide-react'
import { differentials } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { LogoEmblem } from '../ui/Logo'
import { HudCorners } from '../ui/HudCorners'

const pillars = [
  { icon: Lightbulb, label: 'Criatividade', text: 'Ideias que diferenciam sua marca.' },
  { icon: Layers, label: 'Tecnologia', text: 'Código moderno, seguro e escalável.' },
  { icon: Target, label: 'Estratégia', text: 'Cada decisão conectada a um objetivo.' },
]

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="relative py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading id="sobre-title" index="03" eyebrow="Sobre a NOLTH" title="Tecnologia com propósito, design com intenção." />
            <Reveal delay={100}>
              <p className="mt-6 text-lg leading-relaxed text-pretty text-ice/90 sm:text-xl">
                A NOLTH nasceu da vontade de transformar ideias em soluções digitais. Unimos criatividade, tecnologia e estratégia
                para desenvolver experiências que ajudam negócios a evoluir.
              </p>
              <p className="mt-5 leading-relaxed text-mist">
                Somos um estúdio digital enxuto e próximo: você fala diretamente com quem projeta e desenvolve a sua solução, com
                comunicação clara em todas as etapas.
              </p>
              <p className="mt-8 inline-flex items-center gap-3 border-l-2 border-cyan pl-4 font-mono text-xs tracking-[0.18em] text-mist uppercase">
                Fundada por <span className="text-ice">Camilla Fialho</span>
              </p>
            </Reveal>
          </div>

          <Reveal delay={150} className="relative">
            <HudCorners inset="-10px" />
            <div className="card relative overflow-hidden border-cyan/20 p-7 shadow-[0_0_60px_-20px_rgb(59_227_240/0.4)] sm:p-9">
              <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet/25 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <span className="absolute top-0 right-0 font-mono text-[11px] text-mist">manifesto.md</span>
                <div className="flex flex-col items-center pt-4 text-center">
                  <LogoEmblem className="w-36 sm:w-44" />
                  <img
                    src="/brand/nolth-wordmark.webp"
                    alt="NOLTH"
                    width={400}
                    height={71}
                    loading="lazy"
                    decoding="async"
                    className="mt-6 h-auto w-40 sm:w-48"
                  />
                  <p className="mt-6 font-display text-xl leading-snug text-ice sm:text-2xl">“Da ideia à experiência digital.”</p>
                </div>
                <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                  {pillars.map(({ icon: Icon, label, text }) => (
                    <li key={label} className="rounded-xl border border-line bg-ink/60 p-4">
                      <Icon className="h-5 w-5 text-mint" strokeWidth={1.8} aria-hidden="true" />
                      <p className="mt-3 font-display font-semibold text-ice">{label}</p>
                      <p className="mt-1 text-sm leading-snug text-mist">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Diferenciais */}
        <div id="diferenciais" className="mt-28 scroll-mt-24">
          <SectionHeading
            index="04"
            eyebrow="Diferenciais"
            title="Por que escolher a NOLTH."
            description="Mais do que entregar um projeto, construímos uma base digital sólida para o seu negócio crescer."
          />
          <Reveal
            as="ul"
            className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5"
          >
            {differentials.map(({ icon: Icon, title, description }, i) => (
              <li
                key={title}
                className={`group bg-ink p-6 transition hover:bg-ink-800 sm:p-7 ${i === differentials.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <Icon
                  className="h-6 w-6 text-violet-soft transition group-hover:-translate-y-0.5 group-hover:text-mint"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <h3 className="mt-6 text-lg leading-snug font-semibold text-ice">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{description}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
