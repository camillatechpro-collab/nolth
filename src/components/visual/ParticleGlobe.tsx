import { useEffect, useRef } from 'react'

type Point = { x: number; y: number; z: number; land: boolean }
type Ring = { radius: number; tilt: number; roll: number; speed: number; count: number }

const CYAN = [59, 227, 240]
const VIOLET = [124, 108, 255]
const ORCHID = [185, 140, 255]

function mix(a: number[], b: number[], t: number) {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t].map(Math.round)
}

/** Gera pontos distribuídos na esfera (espiral de Fibonacci) com "continentes" procedurais. */
function buildSphere(n: number): Point[] {
  const pts: Point[] = []
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const th = golden * i
    const x = Math.cos(th) * r
    const z = Math.sin(th) * r
    const lat = Math.asin(y)
    const lon = Math.atan2(z, x)
    const v =
      Math.sin(lon * 2.6 + 1.3) * Math.cos(lat * 2.1) +
      0.6 * Math.sin(lon * 5.1 - lat * 3.7) +
      0.3 * Math.cos(lon * 9 + lat * 6)
    const land = v > 0.3
    if (!land && i % 3 !== 0) continue // oceano mais esparso
    pts.push({ x, y, z, land })
  }
  return pts
}

/**
 * Globo de partículas animado em <canvas>.
 * Leve: pausa fora da tela, respeita "reduzir movimento" e limita a densidade no mobile.
 */
export function ParticleGlobe({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const small = window.innerWidth < 640
    const sphere = buildSphere(small ? 1400 : 2600)
    const rings: Ring[] = [
      { radius: 1.32, tilt: 1.22, roll: -0.32, speed: 0.00012, count: small ? 90 : 160 },
      { radius: 1.55, tilt: 1.3, roll: 0.18, speed: -0.00008, count: small ? 110 : 200 },
      { radius: 1.18, tilt: 0.4, roll: 0.9, speed: 0.00016, count: small ? 70 : 120 },
    ]

    let w = 0
    let h = 0
    let raf = 0
    let visible = true

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      w = rect.width
      h = rect.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      const cx = w / 2
      const cy = h / 2
      const R = Math.min(w, h) * 0.32

      // Halo
      const halo = ctx.createRadialGradient(cx, cy, R * 0.4, cx, cy, R * 1.7)
      halo.addColorStop(0, 'rgba(59,227,240,0.22)')
      halo.addColorStop(0.5, 'rgba(124,108,255,0.10)')
      halo.addColorStop(1, 'rgba(16,21,34,0)')
      ctx.fillStyle = halo
      ctx.fillRect(0, 0, w, h)

      // Atmosfera: disco com brilho interno
      const atm = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.35, R * 0.1, cx, cy, R * 1.05)
      atm.addColorStop(0, 'rgba(59,227,240,0.20)')
      atm.addColorStop(0.65, 'rgba(124,108,255,0.10)')
      atm.addColorStop(0.92, 'rgba(185,140,255,0.22)')
      atm.addColorStop(1, 'rgba(185,140,255,0)')
      ctx.fillStyle = atm
      ctx.beginPath()
      ctx.arc(cx, cy, R * 1.05, 0, Math.PI * 2)
      ctx.fill()

      ctx.globalCompositeOperation = 'lighter'

      const rot = t * 0.00012
      const cr = Math.cos(rot)
      const sr = Math.sin(rot)
      const tilt = -0.38
      const ct = Math.cos(tilt)
      const st = Math.sin(tilt)

      for (const p of sphere) {
        const x1 = p.x * cr - p.z * sr
        const z1 = p.x * sr + p.z * cr
        const y2 = p.y * ct - z1 * st
        const z2 = p.y * st + z1 * ct
        const depth = (z2 + 1) / 2
        const alpha = p.land ? 0.3 + 0.7 * depth : 0.08 + 0.3 * depth
        const size = (p.land ? 1.9 : 1.2) * (0.6 + depth * 0.9)
        const tone = (x1 + 1) / 2
        const c = p.land && depth > 0.6 && Math.abs(p.y) < 0.35 && tone > 0.55 ? ORCHID : mix(CYAN, VIOLET, tone)
        ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${alpha.toFixed(3)})`
        ctx.fillRect(cx + x1 * R, cy + y2 * R, size, size)
      }

      // Anéis orbitais
      for (const ring of rings) {
        const ctl = Math.cos(ring.tilt)
        const stl = Math.sin(ring.tilt)
        const crl = Math.cos(ring.roll)
        const srl = Math.sin(ring.roll)
        for (let j = 0; j < ring.count; j++) {
          const a = (j / ring.count) * Math.PI * 2 + t * ring.speed
          const x = Math.cos(a) * ring.radius
          const z = Math.sin(a) * ring.radius
          // inclinação (eixo X) e giro (eixo Z)
          const y1 = -z * stl
          const z1 = z * ctl
          const x2 = x * crl - y1 * srl
          const y2 = x * srl + y1 * crl
          const behind = z1 < 0 && Math.hypot(x2, y2) < 1
          const depth = (z1 / ring.radius + 1) / 2
          const alpha = behind ? 0.08 : 0.25 + depth * 0.7
          const c = mix(CYAN, ORCHID, (x2 / ring.radius + 1) / 2)
          ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${alpha.toFixed(3)})`
          const size = 1 + depth * 1.6
          ctx.fillRect(cx + x2 * R, cy + y2 * R, size, size)
        }
      }

      ctx.globalCompositeOperation = 'source-over'
    }

    const loop = (now: number) => {
      draw(now)
      if (visible) raf = requestAnimationFrame(loop)
    }

    resize()
    const ro = new ResizeObserver(() => {
      resize()
      if (reduce || !visible) draw(0)
    })
    ro.observe(canvas)

    let io: IntersectionObserver | undefined
    if (reduce) {
      draw(0)
    } else {
      raf = requestAnimationFrame(loop)
      io = new IntersectionObserver(([entry]) => {
        const was = visible
        visible = entry.isIntersecting
        if (visible && !was) raf = requestAnimationFrame(loop)
      })
      io.observe(canvas)
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io?.disconnect()
    }
  }, [])

  return <canvas ref={ref} aria-hidden="true" className={`block h-full w-full ${className}`} />
}
