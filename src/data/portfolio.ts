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

export interface Screenshot {
  src: string
  label: string
  alt: string
}

export interface FeaturedProject {
  id: string
  name: string
  tagline: string
  description: string
  features: string[]
  stack: string[]
  /** Endereço da demonstração interativa. Sem ele, o card mostra só as telas. */
  demoUrl?: string
  /** Endereço usado dentro do site (ex.: Streamlit com ?embed=true). Padrão: demoUrl. */
  embedUrl?: string
  repoUrl?: string
  /** Link extra opcional (ex.: versão oficial publicada). */
  extraLink?: { label: string; href: string }
  /** Prévia: o próprio sistema rodando reduzido, ou uma galeria de telas reais. */
  preview: { type: 'live' } | { type: 'gallery'; images: Screenshot[] }
  /** Texto curto abaixo dos botões. */
  note: string
  /** Rótulo no topo do visualizador. Padrão: "demonstração · dados fictícios". */
  viewerLabel?: string
}

/** Sistemas reais desenvolvidos pela NOLTH (demonstrações com dados fictícios). */
export const featuredProjects: FeaturedProject[] = [
  {
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
    preview: { type: 'live' },
    note: 'Demonstração com dados fictícios. Na tela de entrada, use um dos acessos de demonstração para navegar por cada perfil.',
  },
  {
    id: 'vencimentos',
    name: 'Inteligência de Vencimentos',
    tagline: 'Controle de vencimentos em Segurança do Trabalho',
    description:
      'Aplicação web que acompanha os vencimentos de treinamentos, exames (ASO), equipamentos, documentos e contratos de SST, mostrando o que está vencido, o que vence em breve e quem está pendente, com várias empresas e unidades, perfis de acesso e auditoria completa.',
    features: [
      'Painel com vencidos, a vencer, conformidade e gráficos por unidade e categoria',
      'Perfil do colaborador com ASOs, treinamentos por NR e histórico de renovações',
      'Pendências por cargo, lançamento em lote e relatórios em Excel',
      'Perfis de acesso, CPF mascarado (LGPD), auditoria e testes automatizados',
    ],
    stack: ['Python', 'Streamlit', 'SQLAlchemy', 'Plotly'],
    demoUrl: 'https://controle-de-vencimentos-app-dhjc4hyrn9dhdkcrmcd3ze.streamlit.app/',
    embedUrl: 'https://controle-de-vencimentos-app-dhjc4hyrn9dhdkcrmcd3ze.streamlit.app/?embed=true&embed_options=dark_theme',
    repoUrl: 'https://github.com/camillatechpro-collab/controle-de-vencimentos-sso',
    preview: {
      type: 'gallery',
      images: [
        { src: '/portfolio/vencimentos/painel.webp', label: 'Painel', alt: 'Painel com indicadores de vencidos, a vencer, conformidade e gráficos' },
        { src: '/portfolio/vencimentos/vencimentos.webp', label: 'Vencimentos', alt: 'Lista de vencimentos com status, dias restantes e filtros' },
        { src: '/portfolio/vencimentos/pendencias.webp', label: 'Pendências', alt: 'Pendências e conformidade por cargo e colaborador' },
        { src: '/portfolio/vencimentos/colaboradores.webp', label: 'Colaboradores', alt: 'Cadastro de colaboradores' },
      ],
    },
    note: 'Demonstração ao vivo com dados fictícios: clique em "Entrar na demonstração". Se o app estiver em repouso, ele volta em alguns segundos.',
  },
  {
    id: 'dds',
    name: 'DDS Diário',
    tagline: 'Um Diálogo Diário de Segurança pronto para cada dia',
    description:
      'Aplicativo web para técnicos e líderes de obra conduzirem o DDS: sugere o tema do dia de acordo com as campanhas do mês, traz o texto para leitura, um caso para reflexão e perguntas para a turma, e registra cada DDS realizado.',
    features: [
      'Biblioteca com cerca de 150 temas, busca por tema ou NR e favoritos',
      'Tema do dia alinhado às campanhas do mês (Abril Verde, Maio Amarelo…)',
      'Impressão ou PDF com lista de presença e leitura em voz alta',
      'Histórico com empresa e CNPJ, exportação em CSV e funcionamento offline',
    ],
    stack: ['JavaScript', 'PWA', 'Offline'],
    demoUrl: '/demos/dds/index.html',
    repoUrl: 'https://github.com/camillatechpro-collab/dds',
    preview: { type: 'live' },
    viewerLabel: 'app em funcionamento',
    note: 'App completo e gratuito: use direto no navegador ou instale no celular. Os registros ficam salvos só no seu aparelho.',
  },
  {
    id: 'ficha-epi',
    name: 'Ficha de EPI',
    tagline: 'Controle de entrega de EPI conforme a NR-06',
    description:
      'Sistema para gerar e imprimir as fichas de entrega de EPI, com termo de responsabilidade e assinatura, e acompanhar trocas por vida útil, kits por função, estoque e validade dos CAs. Na versão oficial, cada empresa tem login, equipe e dados sincronizados na nuvem.',
    features: [
      'Ficha NR-06 pronta para imprimir ou salvar em PDF, com termo e assinaturas',
      'Painel de trocas atrasadas, kits pendentes, estoque baixo e CAs vencidos',
      'Catálogo de EPIs com base CAEPI, vida útil, estoque e kit por função',
      'Login por empresa, funcionamento offline e histórico de alterações na nuvem',
    ],
    stack: ['JavaScript', 'PWA', 'Supabase'],
    demoUrl: '/demos/ficha-epi/index.html',
    repoUrl: 'https://github.com/camillatechpro-collab/ficha-de-epi',
    extraLink: { label: 'App oficial', href: 'https://camillatechpro-collab.github.io/ficha-de-epi/' },
    preview: { type: 'live' },
    note: 'Demonstração sem login, com dados fictícios salvos só no seu navegador. O app oficial tem login e nuvem.',
  },
]
