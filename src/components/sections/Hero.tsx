import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { ParticleGlobe } from '../visual/ParticleGlobe'

const pillars = ['Sites', 'Landing pages', 'Sistemas web', 'Automação']

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden pt-[72px]">
      {/* Fundo: grade técnica + feixes de luz ciano e roxo */}
      <div className="bg-grid mask-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-[10%] -left-40 h-[520px] w-[300px] rounded-full bg-cyan/25 blur-[120px] sm:-left-24"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-[5%] h-[520px] w-[320px] rounded-full bg-violet/30 blur-[130px] sm:-right-24"
        aria-hidden="true"
      />

      {/* Elementos HUD laterais (desktop) */}
      <div className="pointer-events-none absolute top-1/2 left-8 hidden -translate-y-1/2 flex-col items-center lg:flex xl:left-12" aria-hidden="true">
        <span className="h-24 w-px bg-gradient-to-b from-transparent to-cyan/50" />
        <span className="my-3 flex h-14 w-7 flex-col items-center justify-center rounded-full border border-cyan/50 text-cyan/80">
          <ChevronUp className="h-3 w-3" />
          <ChevronDown className="h-3 w-3" />
        </span>
        <span className="h-24 w-px bg-gradient-to-t from-transparent to-cyan/50" />
      </div>
      <div className="pointer-events-none absolute top-1/2 right-8 hidden -translate-y-1/2 flex-col items-center gap-2 lg:flex xl:right-12" aria-hidden="true">
        <span className="h-10 w-[2px] bg-cyan shadow-[0_0_10px_var(--color-cyan)]" />
        <span className="h-40 w-px border-l border-dashed border-cyan/40" />
        <span className="h-2 w-2 rounded-full border border-cyan/70" />
      </div>

      <Container className="relative flex flex-col items-center pt-12 pb-20 text-center sm:pt-16 lg:pb-24">
        <p className="inline-flex items-center gap-2.5 border border-cyan/30 bg-cyan/[0.06] px-4 py-1.5 font-mono text-[11px] tracking-[0.18em] text-cyan uppercase">
          <span className="animate-pulse-ring h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
          Da ideia à experiência digital
        </p>

        <h1
          id="hero-title"
          className="relative z-10 mt-7 max-w-5xl text-[40px] leading-[0.98] font-bold tracking-[-0.01em] text-balance uppercase sm:text-6xl lg:text-[84px]"
        >
          <span className="text-gradient">Seu negócio merece ir além.</span>
        </h1>

        <div className="relative -my-10 h-[330px] w-full max-w-[720px] sm:-my-16 sm:h-[460px] lg:-my-20 lg:h-[540px]">
          <ParticleGlobe />
        </div>

        <p className="relative z-10 max-w-xl text-lg leading-relaxed text-pretty text-ice/85 sm:text-xl">
          Criamos experiências digitais que conectam tecnologia, design e resultados.
        </p>

        <div className="relative z-10 mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <ButtonLink href="#servicos" size="lg">
            Conheça nossos serviços
            <ArrowRight className="h-5 w-5 transition group-hover/btn:translate-x-1" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="#contato" variant="secondary" size="lg">
            Solicite um orçamento
          </ButtonLink>
        </div>

        <ul
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[12px] tracking-[0.12em] text-mist uppercase"
          aria-label="O que fazemos"
        >
          {pillars.map((p) => (
            <li key={p} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rotate-45 bg-cyan" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
