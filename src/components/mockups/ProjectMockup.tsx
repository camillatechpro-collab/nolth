import type { ReactNode } from 'react'
import type { MockupVariant } from '../../data/portfolio'

/**
 * "Imagens" dos projetos demonstrativos, desenhadas em código.
 * Leves, nítidas em qualquer tela e sem dependência de arquivos externos.
 */
export function ProjectMockup({ variant, label }: { variant: MockupVariant; label: string }) {
  return (
    <div role="img" aria-label={label} className="relative aspect-[16/11] overflow-hidden rounded-xl border border-line bg-ink-900">
      <div className="flex items-center gap-1.5 border-b border-line bg-ink-800 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="ml-2 h-3.5 flex-1 rounded bg-white/[0.05]" />
      </div>
      <div className="absolute inset-x-0 top-[30px] bottom-0 transition duration-700 group-hover:scale-[1.04]">
        {variant === 'corporate' && <Corporate />}
        {variant === 'clinic' && <Clinic />}
        {variant === 'erp' && <Erp />}
      </div>
    </div>
  )
}

function Bar({ w, className = 'bg-white/15', h = 'h-1.5' }: { w: string; className?: string; h?: string }) {
  return <span className={`block rounded ${h} ${className}`} style={{ width: w }} />
}

function Corporate() {
  return (
    <div className="flex h-full flex-col bg-[#0e1626]">
      <div className="flex items-center justify-between px-5 py-3">
        <span className="flex items-center gap-1.5">
          <span className="h-3.5 w-3.5 rotate-45 bg-[#f0b45a]" />
          <Bar w="44px" className="bg-white/70" h="h-2" />
        </span>
        <span className="flex gap-2">
          <Bar w="22px" />
          <Bar w="22px" />
          <Bar w="22px" />
          <span className="h-3 w-10 rounded-sm bg-[#f0b45a]" />
        </span>
      </div>
      <div className="relative mx-5 flex flex-1 items-end overflow-hidden rounded-lg bg-gradient-to-br from-[#203556] to-[#0e1626] p-4">
        {/* skyline geométrico */}
        <svg viewBox="0 0 200 80" className="absolute right-0 bottom-0 h-[85%] text-white/[0.08]" preserveAspectRatio="xMaxYMax meet">
          <path d="M10 80V40h18v40M34 80V20h22v60M62 80V48h14v32M82 80V8h26v72M114 80V32h16v48M136 80V52h20v28M160 80V26h24v54" fill="currentColor" />
          <path d="M95 8v-8" stroke="#f0b45a" strokeWidth="1.5" />
        </svg>
        <div className="relative space-y-1.5">
          <Bar w="120px" className="bg-white/85" h="h-2.5" />
          <Bar w="88px" className="bg-white/85" h="h-2.5" />
          <Bar w="100px" className="bg-white/25" />
          <span className="mt-2 block h-4 w-16 rounded-sm bg-[#f0b45a]" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 p-5 pt-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-md border border-white/[0.06] bg-white/[0.03] p-2">
            <span className="mb-1.5 block h-3 w-3 rounded-sm bg-[#f0b45a]/70" />
            <Bar w="80%" className="bg-white/40" />
            <Bar w="60%" className="mt-1 bg-white/15" h="h-1" />
          </div>
        ))}
      </div>
    </div>
  )
}

function Clinic() {
  return (
    <div className="flex h-full flex-col bg-[#f4fbf9]">
      <div className="flex items-center justify-between px-5 py-3">
        <span className="flex items-center gap-1.5">
          <span className="relative h-3.5 w-3.5 rounded-full bg-[#1aa98f]">
            <span className="absolute inset-[5px_2px] bg-white" />
            <span className="absolute inset-[2px_5px] bg-white" />
          </span>
          <Bar w="40px" className="bg-[#123a33]/70" h="h-2" />
        </span>
        <span className="h-3.5 w-14 rounded-full bg-[#1aa98f]" />
      </div>
      <div className="grid flex-1 grid-cols-[1.1fr_1fr] gap-3 px-5">
        <div className="flex flex-col justify-center space-y-1.5">
          <span className="mb-1 inline-block h-2.5 w-14 rounded-full bg-[#1aa98f]/20" />
          <Bar w="95%" className="bg-[#123a33]" h="h-2.5" />
          <Bar w="70%" className="bg-[#123a33]" h="h-2.5" />
          <Bar w="85%" className="mt-1 bg-[#123a33]/25" />
          <Bar w="60%" className="bg-[#123a33]/25" />
          <span className="mt-2 flex gap-1.5">
            <span className="h-4 w-16 rounded-full bg-[#1aa98f]" />
            <span className="h-4 w-12 rounded-full border border-[#1aa98f]/50" />
          </span>
        </div>
        <div className="relative my-2 overflow-hidden rounded-2xl bg-gradient-to-br from-[#bfeee3] to-[#7fd8c4]">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMax slice">
            <circle cx="50" cy="42" r="16" fill="#ffffff" opacity="0.8" />
            <path d="M18 100c4-24 18-34 32-34s28 10 32 34z" fill="#ffffff" opacity="0.8" />
          </svg>
          <span className="absolute bottom-2 left-2 flex items-center gap-1 rounded-md bg-white px-1.5 py-1 shadow">
            <span className="h-2 w-2 rounded-full bg-[#1aa98f]" />
            <Bar w="28px" className="bg-[#123a33]/50" h="h-1" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1.5 p-5 pt-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-md bg-white p-1.5 shadow-sm">
            <span className="mx-auto mb-1 block h-2.5 w-2.5 rounded-full bg-[#1aa98f]/60" />
            <Bar w="70%" className="mx-auto bg-[#123a33]/30" h="h-1" />
          </div>
        ))}
      </div>
    </div>
  )
}

function Erp() {
  const bars = [38, 56, 44, 70, 62, 84, 76]
  return (
    <div className="flex h-full bg-[#0c111c]">
      <aside className="flex w-[22%] flex-col gap-2 border-r border-white/[0.06] p-3">
        <span className="mb-2 flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full border-2 border-[#7C6CFF]" />
          <Bar w="30px" className="bg-white/60" h="h-1.5" />
        </span>
        {[1, 0, 0, 0, 0].map((a, i) => (
          <span key={i} className={`flex items-center gap-1.5 rounded px-1.5 py-1 ${a ? 'bg-[#7C6CFF]/20' : ''}`}>
            <span className={`h-1.5 w-1.5 rounded-sm ${a ? 'bg-[#a79dff]' : 'bg-white/20'}`} />
            <Bar w="70%" className={a ? 'bg-[#a79dff]/70' : 'bg-white/15'} h="h-1" />
          </span>
        ))}
      </aside>
      <div className="flex flex-1 flex-col gap-2.5 p-3">
        <div className="flex items-center justify-between">
          <Bar w="70px" className="bg-white/70" h="h-2" />
          <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-[#7C6CFF] to-[#24D6B5]" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            ['#24D6B5', '62%'],
            ['#7C6CFF', '48%'],
            ['#f5c48a', '74%'],
          ].map(([c, w]) => (
            <Stat key={c} color={c} w={w} />
          ))}
        </div>
        <div className="flex flex-1 items-end gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
          {bars.map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-sm"
              style={{
                height: `${h}%`,
                background: i === 5 ? 'linear-gradient(#24D6B5,#24D6B555)' : 'linear-gradient(#7C6CFF,#7C6CFF33)',
              }}
            />
          ))}
        </div>
        <div className="space-y-1.5 rounded-lg border border-white/[0.06] p-2">
          {[0, 1].map((i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#24D6B5]" />
              <Bar w="40%" className="bg-white/20" h="h-1" />
              <Bar w="18%" className="ml-auto bg-white/10" h="h-1" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Stat({ color, w }: { color: string; w: string }): ReactNode {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-2">
      <Bar w="50%" className="bg-white/20" h="h-1" />
      <span className="mt-1.5 block h-2.5 w-[60%] rounded bg-white/75" />
      <span className="mt-1.5 block h-1 w-full rounded bg-white/[0.06]">
        <span className="block h-1 rounded" style={{ width: w, background: color }} />
      </span>
    </div>
  )
}
