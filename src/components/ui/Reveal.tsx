import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
}

/** Envolve conteúdo com uma animação de entrada suave ao rolar a página. */
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: RevealProps) {
  const ref = useReveal<HTMLElement>()
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  )
}
