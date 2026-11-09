import { ArrowUp } from 'lucide-react'
import { navLinks, site } from '../../config/site'
import { services } from '../../data/services'
import { whatsappLink, defaultWhatsappMessage } from '../../lib/whatsapp'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import { GithubIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from '../icons/SocialIcons'

const socials = [
  { label: 'Instagram', href: site.social.instagram, Icon: InstagramIcon },
  { label: 'LinkedIn', href: site.social.linkedin, Icon: LinkedinIcon },
  { label: 'GitHub', href: site.social.github, Icon: GithubIcon },
  { label: 'WhatsApp', href: whatsappLink(defaultWhatsappMessage), Icon: WhatsappIcon },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-line bg-ink-900">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#inicio" aria-label="NOLTH Digital Studio — voltar ao início" className="inline-block rounded-lg">
              <Logo />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
              {site.slogan} Sites, landing pages, sistemas web e automações que fazem negócios evoluírem.
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <p className="font-mono text-xs tracking-[0.18em] text-mist/70 uppercase">Navegação</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-sm text-ice/80 transition hover:text-mint">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-mist/70 uppercase">Serviços</p>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.type}>
                  <a href="#servicos" className="text-sm text-ice/80 transition hover:text-mint">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-mist/70 uppercase">Redes sociais</p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} da NOLTH (abre em nova aba)`}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-mist transition hover:-translate-y-0.5 hover:border-violet/50 hover:bg-violet/10 hover:text-ice"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
            <a href={`mailto:${site.email}`} className="mt-6 block text-sm text-ice/80 transition hover:text-mint">
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-5 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-[13px] text-mist">
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <a href="#inicio" className="inline-flex items-center gap-2 font-mono text-xs text-mist transition hover:text-ice">
            Voltar ao topo
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  )
}
