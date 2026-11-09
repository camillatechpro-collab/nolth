import type { CSSProperties, ReactNode } from 'react'

/* Peças visuais da vitrine holográfica. Todas decorativas (a seção tem uma descrição acessível). */

type Tone = 'cyan' | 'violet'
const toneRgb: Record<Tone, string> = { cyan: '59 227 240', violet: '185 140 255' }

interface PanelProps {
  tone?: Tone
  className?: string
  style?: CSSProperties
  title?: string
  children: ReactNode
}

/** Painel de vidro com borda neon. */
export function HoloPanel({ tone = 'cyan', className = '', style, title, children }: PanelProps) {
  return (
    <div
      style={{ '--tone': toneRgb[tone], ...style } as CSSProperties}
      className={`rounded-xl border border-[rgb(var(--tone)/0.5)] bg-[linear-gradient(150deg,rgb(var(--tone)/0.16),rgb(16_21_34/0.55)_45%,rgb(var(--tone)/0.08))] p-3 shadow-[0_0_30px_-8px_rgb(var(--tone)/0.6),inset_0_1px_0_rgb(255_255_255/0.12)] backdrop-blur-md ${className}`}
    >
      {title && (
        <p className="mb-2 font-display text-[10px] font-bold tracking-[0.14em] text-ice uppercase [text-shadow:0_0_10px_rgb(var(--tone)/0.8)]">
          {title}
        </p>
      )}
      {children}
    </div>
  )
}

/** Anel de progresso (indicador circular). */
export function Ring({ value, label, size = 46, tone = 'cyan' }: { value: number; label: string; size?: number; tone?: Tone }) {
  const r = 15.5
  const c = 2 * Math.PI * r
  const color = tone === 'cyan' ? '#3BE3F0' : '#B98CFF'
  return (
    <div className="flex flex-col items-center gap-1">
      <svg viewBox="0 0 36 36" width={size} height={size}>
        <circle cx="18" cy="18" r={r} fill="none" stroke="rgb(255 255 255 / 0.1)" strokeWidth="3" />
        <circle
          cx="18"
          cy="18"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={`${(value / 100) * c} ${c}`}
          transform="rotate(-90 18 18)"
          style={{ filter: `drop-shadow(0 0 3px ${color})` }}
        />
        <text x="18" y="21" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#F1F3F8" fontFamily="Space Grotesk Variable, sans-serif">
          {label}
        </text>
      </svg>
    </div>
  )
}

/** Linhas de um wireframe. */
export function Wire({ variant = 'page' }: { variant?: 'page' | 'grid' }) {
  if (variant === 'grid') {
    return (
      <div className="grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="relative aspect-[4/3] rounded-sm border border-white/25">
            <svg viewBox="0 0 10 7" preserveAspectRatio="none" className="absolute inset-0 h-full w-full stroke-white/25" strokeWidth="0.3">
              <path d="M0 0L10 7M10 0L0 7" />
            </svg>
          </span>
        ))}
        <span className="col-span-3 mt-1 h-1 w-2/3 rounded bg-white/30" />
        <span className="col-span-3 h-1 w-1/2 rounded bg-white/15" />
      </div>
    )
  }
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="h-1 w-6 rounded bg-white/50" />
        <span className="flex gap-1">
          <span className="h-1 w-3 rounded bg-white/20" />
          <span className="h-1 w-3 rounded bg-white/20" />
          <span className="h-1.5 w-5 rounded bg-[rgb(var(--tone)/0.8)]" />
        </span>
      </div>
      <div className="mt-2.5 grid grid-cols-[1fr_1.1fr] gap-2">
        <div className="space-y-1">
          <span className="block h-1.5 w-full rounded bg-white/70" />
          <span className="block h-1.5 w-3/4 rounded bg-white/70" />
          <span className="block h-1 w-full rounded bg-white/15" />
          <span className="mt-1.5 block h-2 w-8 rounded-sm bg-[rgb(var(--tone)/0.7)]" />
        </div>
        <span className="relative aspect-[4/3] rounded-sm border border-white/25">
          <svg viewBox="0 0 10 7" preserveAspectRatio="none" className="absolute inset-0 h-full w-full stroke-white/25" strokeWidth="0.25">
            <path d="M0 0L10 7M10 0L0 7" />
          </svg>
        </span>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-4 rounded-sm border border-white/15 bg-white/[0.04]" />
        ))}
      </div>
    </div>
  )
}

/** Gráfico de linha com área. */
export function LineChart({ tone = 'cyan' }: { tone?: Tone }) {
  const color = tone === 'cyan' ? '#3BE3F0' : '#B98CFF'
  const id = `lc-${tone}`
  return (
    <svg viewBox="0 0 120 50" className="h-auto w-full">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.45" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[12, 24, 36].map((y) => (
        <line key={y} x1="0" x2="120" y1={y} y2={y} stroke="rgb(255 255 255 / 0.08)" />
      ))}
      <path d="M0 40 L14 34 L26 38 L40 22 L52 28 L66 14 L78 20 L92 8 L104 16 L120 6 L120 50 L0 50Z" fill={`url(#${id})`} />
      <path
        d="M0 40 L14 34 L26 38 L40 22 L52 28 L66 14 L78 20 L92 8 L104 16 L120 6"
        fill="none"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
        style={{ filter: `drop-shadow(0 0 2px ${color})` }}
      />
      <path d="M0 44 L18 40 L34 42 L50 34 L66 36 L84 28 L100 30 L120 22" fill="none" stroke="#B98CFF" strokeOpacity="0.7" strokeWidth="1" />
    </svg>
  )
}

/** Barras horizontais tipo "sliders". */
export function Bars() {
  const rows = [78, 56, 88, 64]
  return (
    <div className="space-y-2">
      {rows.map((w, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="h-1 w-6 shrink-0 rounded bg-white/25" />
          <span className="relative h-1.5 flex-1 rounded-full bg-white/10">
            <span
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan to-orchid shadow-[0_0_6px_rgb(59_227_240/0.7)]"
              style={{ width: `${w}%` }}
            />
          </span>
        </div>
      ))}
    </div>
  )
}

/** Trecho de código com destaque de sintaxe. */
export function CodeLines() {
  const k = 'text-orchid'
  const f = 'text-cyan'
  const s = 'text-[#f5c48a]'
  return (
    <pre className="overflow-hidden font-mono text-[8.5px] leading-[1.6] text-ice/80">
      <code>
        <span className={k}>export const</span> <span className={f}>Projeto</span> = () =&gt; (
        {'\n'}  &lt;<span className={f}>Layout</span> <span className="text-[#8fd3ff]">responsivo</span>&gt;
        {'\n'}    &lt;<span className={f}>Hero</span> <span className="text-[#8fd3ff]">titulo</span>=<span className={s}>"Vá além"</span> /&gt;
        {'\n'}    &lt;<span className={f}>Servicos</span> /&gt;
        {'\n'}    &lt;<span className={f}>Contato</span> <span className="text-[#8fd3ff]">whatsapp</span> /&gt;
        {'\n'}  &lt;/<span className={f}>Layout</span>&gt;
        {'\n'})
      </code>
    </pre>
  )
}

/** Mini site exibido na tela central. */
export function CenterSite() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-[radial-gradient(ellipse_at_70%_30%,rgb(124_108_255/0.35),transparent_60%),linear-gradient(180deg,#121a2e,#0d1220)] p-4 sm:p-5">
      {/* barra de navegação */}
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <img src="/brand/nolth-emblem-sm.webp" alt="" className="h-4 w-auto" />
          <span className="font-display text-[10px] font-bold tracking-[0.18em] text-ice">NOLTH</span>
        </span>
        <span className="hidden gap-3 sm:flex">
          {['Início', 'Serviços', 'Portfólio', 'Contato'].map((l) => (
            <span key={l} className="text-[8px] text-mist">
              {l}
            </span>
          ))}
        </span>
        <span className="rounded-full bg-orchid/80 px-2 py-0.5 text-[7px] font-semibold text-ink">Orçamento</span>
      </div>

      <div className="mt-5 grid grid-cols-[1.05fr_1fr] items-center gap-3">
        <div>
          <span className="inline-block rounded-sm border border-cyan/40 px-1.5 py-0.5 font-mono text-[6.5px] tracking-widest text-cyan uppercase">
            Experiência digital
          </span>
          <p className="mt-2 font-display text-[15px] leading-tight font-bold text-ice sm:text-[19px]">
            Do conceito
            <br />
            ao <span className="text-gradient">ar.</span>
          </p>
          <span className="mt-2 block h-1 w-[85%] rounded bg-white/20" />
          <span className="mt-1 block h-1 w-[65%] rounded bg-white/20" />
          <span className="mt-3 flex gap-1.5">
            <span className="h-3.5 w-12 rounded-full bg-violet" />
            <span className="h-3.5 w-12 rounded-full border border-white/40" />
          </span>
        </div>
        {/* cartões flutuantes 3D */}
        <div className="relative h-28 [perspective:400px] sm:h-36">
          {[
            { c: 'from-cyan/70 to-violet/40', t: 'left-[8%] top-[6%] rotate-[-12deg]', d: '0s' },
            { c: 'from-orchid/70 to-cyan/30', t: 'left-[40%] top-[0%] rotate-[8deg]', d: '1.2s' },
            { c: 'from-violet/80 to-orchid/40', t: 'left-[22%] top-[42%] rotate-[4deg]', d: '0.6s' },
            { c: 'from-cyan/60 to-orchid/50', t: 'left-[58%] top-[46%] rotate-[-8deg]', d: '1.8s' },
          ].map((card, i) => (
            <span
              key={i}
              style={{ animationDelay: card.d }}
              className={`animate-float absolute h-[38%] w-[38%] rounded-md border border-white/30 bg-gradient-to-br ${card.c} shadow-[0_8px_24px_-6px_rgb(124_108_255/0.7)] [transform-style:preserve-3d] ${card.t}`}
            >
              <span className="absolute inset-x-[15%] bottom-[18%] h-[12%] rounded-sm bg-white/50" />
            </span>
          ))}
          <span className="absolute top-[30%] left-[48%] h-6 w-6 rounded-full bg-gradient-to-br from-cyan to-violet blur-[1px]" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {['Design de interface', 'Código sob medida'].map((t, i) => (
          <div key={t} className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] p-2">
            <span className={`h-6 w-6 shrink-0 rounded ${i ? 'bg-orchid/50' : 'bg-cyan/50'}`} />
            <span>
              <span className="block text-[8px] font-semibold text-ice">{t}</span>
              <span className="mt-1 block h-0.5 w-10 rounded bg-white/20" />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
