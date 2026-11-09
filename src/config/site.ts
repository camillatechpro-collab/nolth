/**
 * Configurações centrais da marca.
 * Altere aqui (ou via variáveis de ambiente no arquivo .env) os dados de contato.
 */
export const site = {
  name: 'NOLTH Digital Studio',
  shortName: 'NOLTH',
  slogan: 'Da ideia à experiência digital.',
  url: 'https://www.nolth.com.br',
  /** Número com DDI + DDD, somente dígitos. Ex.: 5511999999999 */
  whatsappNumber: (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) ?? '5500000000000',
  email: (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) ?? 'contato@nolth.com.br',
  social: {
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
    github: 'https://github.com/',
  },
} as const

export const navLinks = [
  { id: 'inicio', label: 'Início' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'contato', label: 'Contato' },
] as const

export const sectionIds = navLinks.map((l) => l.id)
