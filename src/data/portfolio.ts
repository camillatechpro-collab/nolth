import type { ProjectType } from './services'

export type MockupVariant = 'corporate' | 'clinic' | 'erp'

export interface Project {
  id: string
  title: string
  category: string
  description: string
  stack: string[]
  variant: MockupVariant
  highlights: string[]
  /** Serviço relacionado, usado no botão "Quero um projeto assim". */
  serviceType: Exclude<ProjectType, 'outro'>
  accent: 'cyan' | 'violet'
}

/** Projetos fictícios, criados exclusivamente para demonstração. */
export const projects: Project[] = [
  {
    id: 'aurora',
    title: 'Aurora Engenharia',
    category: 'Site institucional',
    description:
      'Conceito de site institucional para uma empresa de engenharia, com apresentação de serviços, obras realizadas e captação de propostas.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    variant: 'corporate',
    serviceType: 'website',
    accent: 'cyan',
    highlights: ['Arquitetura de conteúdo', 'SEO técnico', 'Formulário de propostas'],
  },
  {
    id: 'vitalis',
    title: 'Clínica Vitalis',
    category: 'Landing page',
    description:
      'Landing page conceitual para clínica de saúde, com agendamento via WhatsApp, apresentação de especialidades e estrutura de conversão.',
    stack: ['Vite', 'React', 'Tailwind CSS'],
    variant: 'clinic',
    serviceType: 'landing',
    accent: 'violet',
    highlights: ['Foco em agendamentos', 'Mobile first', 'Carregamento rápido'],
  },
  {
    id: 'orbit',
    title: 'Orbit ERP',
    category: 'Sistema de gestão',
    description:
      'Protótipo de sistema de gestão empresarial com painel de indicadores, controle financeiro, estoque e gestão de equipes.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    variant: 'erp',
    serviceType: 'sistema',
    accent: 'cyan',
    highlights: ['Dashboard de indicadores', 'Perfis de acesso', 'Relatórios exportáveis'],
  },
]

export interface FeaturedProject {
  id: string
  name: string
  tagline: string
  description: string
  features: string[]
  stack: string[]
  demoUrl: string
}

/** Sistema real desenvolvido pela NOLTH, com demonstração interativa (dados fictícios). */
export const featuredProject: FeaturedProject = {
  id: 'hoseg',
  name: 'HOSeg',
  tagline: 'Gestão de Ordens de Serviço para Saúde e Segurança do Trabalho',
  description:
    'Sistema web que acompanha cada ordem de serviço da venda à entrega dos documentos técnicos, com acesso controlado por perfil: cada setor vê e altera apenas o que é de sua responsabilidade.',
  features: [
    'Controle de acesso por perfil: Comercial, Técnico, Financeiro e Administrador',
    'Fluxo da OS em 6 etapas, com o responsável de cada fase',
    'Orçamentos, contratos e parcelas com controle de vencimentos',
    'Notificações por setor e histórico completo de ações',
  ],
  stack: ['JavaScript', 'Tailwind CSS', 'RBAC'],
  demoUrl: '/demos/hoseg/index.html',
}
