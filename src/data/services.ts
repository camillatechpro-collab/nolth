import type { LucideIcon } from 'lucide-react'
import { Globe, MousePointerClick, LayoutDashboard, Workflow } from 'lucide-react'

export type ProjectType = 'website' | 'landing' | 'sistema' | 'automacao' | 'outro'

export const projectTypeLabels: Record<ProjectType, string> = {
  website: 'Website profissional',
  landing: 'Landing page',
  sistema: 'Sistema web',
  automacao: 'Automação de processos',
  outro: 'Outro / ainda não sei',
}

export interface Service {
  type: Exclude<ProjectType, 'outro'>
  icon: LucideIcon
  title: string
  tag: string
  description: string
  features: string[]
}

export const services: Service[] = [
  {
    type: 'website',
    icon: Globe,
    title: 'Websites profissionais',
    tag: 'site.institucional',
    description:
      'Sites institucionais rápidos, elegantes e preparados para o Google, que apresentam sua empresa com a credibilidade que ela merece.',
    features: ['Design exclusivo', 'SEO técnico', 'Fácil de atualizar'],
  },
  {
    type: 'landing',
    icon: MousePointerClick,
    title: 'Landing Pages',
    tag: 'conversao.max',
    description:
      'Páginas focadas em um único objetivo: transformar visitantes em contatos, leads e vendas para as suas campanhas.',
    features: ['Copy orientada à ação', 'Integração com anúncios', 'Métricas de conversão'],
  },
  {
    type: 'sistema',
    icon: LayoutDashboard,
    title: 'Sistemas Web',
    tag: 'app.sob_medida',
    description:
      'Plataformas sob medida para gerir clientes, pedidos, agendas e indicadores, acessíveis de qualquer dispositivo.',
    features: ['Painéis e relatórios', 'Controle de acesso', 'Escalável'],
  },
  {
    type: 'automacao',
    icon: Workflow,
    title: 'Automação de processos',
    tag: 'fluxo.auto',
    description:
      'Eliminamos tarefas repetitivas conectando ferramentas, planilhas e sistemas para sua equipe focar no que gera valor.',
    features: ['Integração entre sistemas', 'Notificações automáticas', 'Menos erros manuais'],
  },
]
