import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'whatsapp'
type Size = 'sm' | 'md' | 'lg'

const base =
  'group/btn inline-flex items-center justify-center gap-2 font-display font-semibold uppercase tracking-[0.08em] whitespace-nowrap transition duration-300 disabled:pointer-events-none disabled:opacity-60 select-none'

/** Os botões HUD usam --hud-border / --hud-fill (ver .btn-hud em index.css). */
const variants: Record<Variant, string> = {
  primary:
    'btn-hud text-ink [--hud-border:var(--color-cyan)] [--hud-fill:var(--color-cyan)] hover:[--hud-fill:#8af1f8] hover:[--hud-border:#8af1f8] hover:-translate-y-0.5 hover:drop-shadow-[0_0_18px_rgb(59_227_240/0.55)]',
  secondary:
    'btn-hud text-cyan [--hud-border:rgb(59_227_240/0.7)] [--hud-fill:var(--color-ink-900)] hover:[--hud-fill:#14283a] hover:[--hud-border:var(--color-cyan)] hover:text-ice hover:-translate-y-0.5 hover:drop-shadow-[0_0_14px_rgb(59_227_240/0.35)]',
  ghost: 'font-sans normal-case tracking-normal font-medium text-mist hover:text-ice rounded-lg',
  whatsapp:
    'btn-hud text-ink [--hud-border:var(--color-mint)] [--hud-fill:var(--color-mint)] hover:[--hud-fill:#4ae6c9] hover:[--hud-border:#4ae6c9] hover:-translate-y-0.5 hover:drop-shadow-[0_0_16px_rgb(36_214_181/0.5)]',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-[12px]',
  md: 'h-12 px-6 text-[13px]',
  lg: 'h-14 px-8 text-[14px]',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

export function buttonClasses(variant: Variant = 'primary', size: Size = 'md', className = '') {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`
}

export function Button({
  variant,
  size,
  className,
  children,
  type = 'button',
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({
  variant,
  size,
  className,
  children,
  external,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { external?: boolean }) {
  const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a className={buttonClasses(variant, size, className)} {...ext} {...props}>
      {children}
    </a>
  )
}
