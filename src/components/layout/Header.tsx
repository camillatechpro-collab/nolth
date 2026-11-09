import { useEffect, useRef, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navLinks, sectionIds } from '../../config/site'
import { useActiveSection, useScrolled } from '../../hooks/useScrollState'
import { Logo } from '../ui/Logo'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'

export function Header() {
  const scrolled = useScrolled()
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Fecha com ESC, bloqueia rolagem e fecha ao voltar para desktop
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const mq = window.matchMedia('(min-width: 1024px)')
    const onMq = () => mq.matches && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-line bg-ink/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <a href="#inicio" onClick={close} aria-label="NOLTH Digital Studio — voltar ao início" className="rounded-lg">
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block px-4 py-2 font-display text-[12px] font-medium tracking-[0.16em] uppercase transition after:absolute after:inset-x-4 after:-bottom-0.5 after:h-px after:bg-cyan after:shadow-[0_0_8px_var(--color-cyan)] after:transition after:duration-300 ${
                      isActive ? 'text-ice after:opacity-100' : 'text-mist after:opacity-0 hover:text-ice'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href="#contato" size="sm" variant="secondary">
              Solicitar orçamento
              <ArrowUpRight className="h-4 w-4 transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </ButtonLink>
          </div>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line text-ice transition hover:bg-white/5 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-ink/95 backdrop-blur-xl lg:hidden"
      >
        <Container className="flex h-full flex-col py-8">
          <nav aria-label="Navegação mobile">
            <ul className="flex flex-col">
              {navLinks.map((link, i) => (
                <li key={link.id} className="border-b border-line">
                  <a
                    href={`#${link.id}`}
                    onClick={close}
                    className={`flex items-center justify-between py-5 font-display text-2xl ${
                      active === link.id ? 'text-ice' : 'text-mist'
                    }`}
                  >
                    {link.label}
                    <span className="font-mono text-xs text-mist/60">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink href="#contato" onClick={close} size="lg" className="mt-8 w-full">
            Solicitar orçamento
            <ArrowUpRight className="h-5 w-5" />
          </ButtonLink>
        </Container>
      </div>
    </header>
  )
}
