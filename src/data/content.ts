import type { LucideIcon } from 'lucide-react'
import {
  Smartphone,
  Puzzle,
  Cpu,
  HeartHandshake,
  TrendingUp,
  MessagesSquare,
  PenTool,
  Code,
  Rocket,
} from 'lucide-react'

export interface Differential {
  icon: LucideIcon
  title: string
  description: string
}

export const differentials: Differential[] = [
  {
    icon: Smartphone,
    title: 'Design responsivo',
    description: 'Experiência impecável em celulares, tablets e desktops — começando pelo mobile.',
  },
  {
    icon: Puzzle,
    title: 'Soluções personalizadas',
    description: 'Nada de modelos prontos: cada projeto nasce das necessidades do seu negócio.',
  },
  {
    icon: Cpu,
    title: 'Tecnologia moderna',
    description: 'Stack atual, código limpo e boas práticas que garantem velocidade e segurança.',
  },
  {
    icon: HeartHandshake,
    title: 'Foco na experiência do usuário',
    description: 'Interfaces claras e intuitivas que fazem o visitante querer ficar — e agir.',
  },
  {
    icon: TrendingUp,
    title: 'Desenvolvimento orientado a resultados',
    description: 'Decisões guiadas por objetivos mensuráveis: mais contatos, vendas e eficiência.',
  },
]

export interface Step {
  icon: LucideIcon
  title: string
  description: string
  output: string
}

export const processSteps: Step[] = [
  {
    icon: MessagesSquare,
    title: 'Entendimento do projeto',
    description:
      'Conversamos sobre seus objetivos, público e desafios para definir o escopo ideal e uma proposta transparente.',
    output: 'briefing + proposta',
  },
  {
    icon: PenTool,
    title: 'Planejamento e design',
    description:
      'Estruturamos o conteúdo e criamos o layout com a identidade da sua marca, validando cada tela com você.',
    output: 'wireframe + layout',
  },
  {
    icon: Code,
    title: 'Desenvolvimento',
    description:
      'Transformamos o design em código performático, responsivo e acessível, com entregas parciais para acompanhamento.',
    output: 'código + testes',
  },
  {
    icon: Rocket,
    title: 'Entrega e suporte',
    description:
      'Publicamos o projeto, orientamos sua equipe e seguimos por perto com suporte para ajustes e evolução.',
    output: 'deploy + suporte',
  },
]
