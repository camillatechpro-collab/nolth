import { useRef, type CSSProperties, type PointerEvent, type ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { ButtonLink } from '../ui/Button'
import { Bars, CenterSite, CodeLines, HoloPanel, LineChart, Ring, Wire } from '../visual/HoloPanels'

/** Posiciona um painel no palco (desktop) e aplica flutuação suave. */
function Float({ className, delay = '0s', children }: { className: string; delay?: string; children: ReactNode }) {
  return (
    <div className={`lg:absolute ${className}`}>
      <div className="animate-float" style={{ animationDelay: delay, animationDuration: '8s' }}>
        {children}
      </div>
    </div>
  )
}

const tiltLeft = 'lg:[transform:perspective(900px)_rotateY(26deg)]'
const tiltRight = 'lg:[transform:perspective(900px)_rotateY(-26deg)]'

export function Showcase() {
  const stageRef = useRef<HTMLDivElement>(null)

  // Leve inclinação 3D acompanhando o ponteiro (somente mouse, sem "reduzir movimento")
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = stageRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--ry', `${x * 6}deg`)
    el.style.setProperty('--rx', `${-y * 5}deg`)
  }
  const onLeave = () => {
    stageRef.current?.style.setProperty('--ry', '0deg')
    stageRef.current?.style.setProperty('--rx', '0deg')
  }

  return (
    <section id="experiencia" aria-labelledby="experiencia-title" className="relative overflow-hidden py-24 sm:py-28">
      {/* Feixes de luz */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute -top-40 -left-32 h-[900px] w-[260px] rotate-[-35deg] bg-gradient-to-b from-cyan/30 via-cyan/5 to-transparent blur-2xl" />
        <span className="absolute -top-40 -right-32 h-[900px] w-[260px] rotate-[35deg] bg-gradient-to-b from-orchid/30 via-violet/5 to-transparent blur-2xl" />
        <span className="absolute -bottom-40 left-[15%] h-[500px] w-[160px] rotate-[25deg] bg-gradient-to-t from-cyan/15 to-transparent blur-2xl" />
        <span className="absolute -right-[5%] -bottom-40 h-[500px] w-[160px] rotate-[-25deg] bg-gradient-to-t from-orchid/15 to-transparent blur-2xl" />
      </div>

      <Container className="relative">
        {/* Assinatura neon */}
        <Reveal className="text-center" >
          <p
            aria-hidden="true"
            className="font-display text-[56px] leading-none font-bold tracking-[0.06em] text-transparent [-webkit-text-stroke:1.5px_#3BE3F0] [filter:drop-shadow(0_0_10px_rgb(59_227_240/0.8))_drop-shadow(0_0_28px_rgb(124_108_255/0.5))] sm:text-[88px] lg:text-[112px]"
          >
            NOLTH
          </p>
          <p className="mt-3 font-display text-sm font-semibold tracking-[0.42em] text-cyan uppercase [text-shadow:0_0_14px_rgb(59_227_240/0.7)] sm:text-base">
            Digital Studio
          </p>
        </Reveal>

        {/* Palco */}
        <Reveal delay={120}>
          <div
            onPointerMove={onMove}
            onPointerLeave={onLeave}
            className="mt-14 [perspective:1600px]"
            role="img"
            aria-label="Ilustração de um site em desenvolvimento cercado por painéis de desempenho, gráficos, código e wireframes."
          >
            <div
              ref={stageRef}
              style={{ '--rx': '0deg', '--ry': '0deg' } as CSSProperties}
              className="relative transition-transform duration-500 ease-out lg:h-[640px] lg:[transform:rotateX(var(--rx))_rotateY(var(--ry))]"
            >
              {/* Linhas de conexão (desktop) */}
              <svg
                viewBox="0 0 1000 640"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
                fill="none"
                stroke="url(#conn)"
                strokeWidth="1"
              >
                <defs>
                  <linearGradient id="conn" x1="0" x2="1">
                    <stop offset="0" stopColor="#3BE3F0" stopOpacity="0.7" />
                    <stop offset="1" stopColor="#B98CFF" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
                <path d="M110 180 V240 H230" />
                <path d="M130 420 H200 V380 H230" />
                <path d="M385 510 V455" />
                <path d="M600 500 V455" />
                <path d="M890 180 V240 H770" />
                <path d="M880 448 V410 H770" />
                {[
                  [110, 180],
                  [230, 240],
                  [130, 420],
                  [385, 510],
                  [600, 500],
                  [890, 180],
                  [770, 240],
                  [880, 448],
                ].map(([x, y]) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#101522" stroke="#3BE3F0" />
                ))}
              </svg>

              {/* Tela central curva */}
              <div className="relative z-10 mx-auto max-w-[680px] lg:absolute lg:top-[7%] lg:left-1/2 lg:w-[54%] lg:max-w-none lg:-translate-x-1/2">
                <div className="rounded-2xl border-2 border-cyan/70 bg-ink-900/80 p-2 shadow-[0_0_50px_-6px_rgb(59_227_240/0.6),0_0_120px_-30px_rgb(124_108_255/0.8),inset_0_0_24px_-10px_rgb(59_227_240/0.8)] [transform:perspective(1200px)_rotateX(4deg)]">
                  <div className="mb-1.5 flex gap-1 px-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan/70" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                  </div>
                  <CenterSite />
                </div>
                {/* Suporte */}
                <div className="mx-auto hidden h-8 w-px bg-gradient-to-b from-cyan/70 to-transparent lg:block" />
              </div>

              {/* Painéis decorativos extras (desktop) */}
              <Float className={`hidden lg:block lg:top-[3%] lg:left-0 lg:w-[21%] ${tiltLeft}`} delay="0.3s">
                <HoloPanel>
                  <Wire />
                </HoloPanel>
              </Float>
              <Float className={`hidden lg:block lg:top-[58%] lg:left-[2%] lg:z-20 lg:w-[11%] ${tiltLeft}`} delay="1.4s">
                <HoloPanel tone="violet" className="flex justify-center">
                  <Ring value={100} label="100%" size={70} tone="violet" />
                </HoloPanel>
              </Float>
              <Float className={`hidden lg:block lg:top-[68%] lg:left-[9%] lg:w-[20%] ${tiltLeft}`} delay="2.1s">
                <HoloPanel>
                  <Wire />
                </HoloPanel>
              </Float>
              <Float className={`hidden lg:block lg:top-[3%] lg:right-0 lg:w-[21%] ${tiltRight}`} delay="0.9s">
                <HoloPanel tone="violet">
                  <Wire />
                </HoloPanel>
              </Float>
              <Float className={`hidden lg:block lg:top-[70%] lg:right-0 lg:w-[21%] ${tiltRight}`} delay="1.1s">
                <HoloPanel tone="violet" title="Métricas criativas">
                  <Wire variant="grid" />
                </HoloPanel>
              </Float>
              <Float className="hidden lg:block lg:top-[80%] lg:left-[32%] lg:w-[12%]" delay="0.5s">
                <HoloPanel className="flex flex-col items-center">
                  <Ring value={92} label="SEO" size={62} />
                </HoloPanel>
              </Float>

              {/* Painéis principais: grade no mobile, flutuando no desktop */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:contents">
                <Float className={`lg:top-[35%] lg:left-[12%] lg:z-20 lg:w-[19%] ${tiltLeft}`} delay="0.8s">
                  <HoloPanel title="Qualidade">
                    <div className="flex justify-between gap-1">
                      <Ring value={92} label="90+" size={40} />
                      <Ring value={96} label="A11Y" size={40} tone="violet" />
                      <Ring value={88} label="UX" size={40} />
                    </div>
                    <p className="mt-2 font-mono text-[8px] text-mist">metas por entrega</p>
                  </HoloPanel>
                </Float>
                <Float className={`lg:top-[33%] lg:right-[11%] lg:z-20 lg:w-[18%] ${tiltRight}`} delay="1.6s">
                  <HoloPanel tone="violet" title="Interatividade">
                    <LineChart tone="violet" />
                  </HoloPanel>
                </Float>
                <Float className="lg:top-[78%] lg:left-[50%] lg:z-20 lg:w-[19%]" delay="2.4s">
                  <HoloPanel title="</> Código">
                    <CodeLines />
                  </HoloPanel>
                </Float>
                <Float className={`lg:top-[52%] lg:right-[16%] lg:z-20 lg:w-[15%] ${tiltRight}`} delay="0.2s">
                  <HoloPanel tone="violet" title="Fluxo visual">
                    <Bars />
                  </HoloPanel>
                </Float>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Texto */}
        <Reveal className="mx-auto mt-16 max-w-2xl text-center lg:mt-20">
          <h2 id="experiencia-title" className="text-[26px] leading-[1.1] font-bold text-balance text-ice uppercase sm:text-[34px]">
            Tecnologia que você vê. <span className="text-gradient">Resultados que você mede.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-pretty text-mist sm:text-lg">
            Design, código e desempenho trabalhando juntos: cada projeto NOLTH é construído com metas claras de velocidade,
            acessibilidade e experiência do usuário.
          </p>
          <p className="mt-3 font-mono text-[11px] text-mist/60">Ilustração: os indicadores representam metas de qualidade, não resultados de clientes.</p>
          <ButtonLink href="#servicos" variant="secondary" className="mt-8">
            Ver o que fazemos
            <ArrowRight className="h-4 w-4 transition group-hover/btn:translate-x-1" aria-hidden="true" />
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  )
}
