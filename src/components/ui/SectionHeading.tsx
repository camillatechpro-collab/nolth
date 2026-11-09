import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  index: string
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  id?: string
}

export function SectionHeading({ index, eyebrow, title, description, align = 'left', id }: SectionHeadingProps) {
  const center = align === 'center'
  return (
    <Reveal className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <p
        className={`flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-cyan uppercase ${center ? 'justify-center' : ''}`}
      >
        <span className="text-mist/70">{index}</span>
        <span className="h-px w-8 bg-gradient-to-r from-cyan to-orchid" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-5 text-[28px] leading-[1.05] font-bold tracking-[-0.005em] text-balance text-ice uppercase sm:text-4xl lg:text-[46px]"
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed text-pretty text-mist sm:text-lg ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
