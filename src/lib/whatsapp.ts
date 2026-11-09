import { site } from '../config/site'

/** Gera um link oficial do WhatsApp (wa.me) com mensagem pré-preenchida. */
export function whatsappLink(message?: string, phone: string = site.whatsappNumber): string {
  const digits = phone.replace(/\D/g, '')
  const base = `https://wa.me/${digits}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const defaultWhatsappMessage =
  'Olá, NOLTH! Vim pelo site e gostaria de solicitar um orçamento para um projeto digital.'
