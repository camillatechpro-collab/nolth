import type { ProjectType } from '../data/services'

export interface ContactForm {
  name: string
  company: string
  email: string
  whatsapp: string
  projectType: ProjectType | ''
  message: string
}

export type FormErrors = Partial<Record<keyof ContactForm, string>>

export const emptyForm: ContactForm = {
  name: '',
  company: '',
  email: '',
  whatsapp: '',
  projectType: '',
  message: '',
}

export const MESSAGE_MAX = 1500

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Formata o telefone brasileiro enquanto o usuário digita: (11) 91234-5678 */
export function maskPhone(value: string): string {
  const d = value.replace(/\D/g, '').slice(0, 11)
  if (d.length === 0) return ''
  if (d.length <= 2) return `(${d}`
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

export function validateField(field: keyof ContactForm, form: ContactForm): string | undefined {
  const value = form[field].trim()
  switch (field) {
    case 'name':
      if (!value) return 'Informe seu nome.'
      if (value.length < 3) return 'O nome deve ter pelo menos 3 caracteres.'
      return undefined
    case 'company':
      if (value.length > 80) return 'Use no máximo 80 caracteres.'
      return undefined
    case 'email':
      if (!value) return 'Informe seu e-mail.'
      if (!EMAIL_RE.test(value)) return 'Digite um e-mail válido, como nome@empresa.com.'
      return undefined
    case 'whatsapp': {
      const digits = value.replace(/\D/g, '')
      if (!digits) return 'Informe seu WhatsApp.'
      if (digits.length < 10) return 'Digite o número com DDD, ex.: (11) 91234-5678.'
      return undefined
    }
    case 'projectType':
      if (!value) return 'Selecione o tipo de projeto.'
      return undefined
    case 'message':
      if (!value) return 'Conte um pouco sobre a sua necessidade.'
      if (value.length < 20) return 'Descreva com pelo menos 20 caracteres para entendermos melhor.'
      if (value.length > MESSAGE_MAX) return `Use no máximo ${MESSAGE_MAX} caracteres.`
      return undefined
  }
}

export function validateForm(form: ContactForm): FormErrors {
  const errors: FormErrors = {}
  for (const key of Object.keys(form) as (keyof ContactForm)[]) {
    const err = validateField(key, form)
    if (err) errors[key] = err
  }
  return errors
}
