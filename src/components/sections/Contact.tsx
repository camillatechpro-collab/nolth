import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Clock, Mail, RotateCcw, ShieldCheck, ChevronDown } from 'lucide-react'
import { site } from '../../config/site'
import { projectTypeLabels, type ProjectType } from '../../data/services'
import {
  emptyForm,
  maskPhone,
  MESSAGE_MAX,
  validateField,
  validateForm,
  type ContactForm,
  type FormErrors,
} from '../../lib/validation'
import { defaultWhatsappMessage, whatsappLink } from '../../lib/whatsapp'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { FormField } from '../ui/FormField'
import { Button, ButtonLink } from '../ui/Button'
import { WhatsappIcon } from '../icons/SocialIcons'

export interface ServiceSelection {
  type: ProjectType
  /** Muda a cada clique, para reaplicar a mesma seleção. */
  nonce: number
}

function buildMessage(f: ContactForm) {
  const lines = [
    'Olá, NOLTH! Gostaria de solicitar um orçamento.',
    '',
    `*Nome:* ${f.name.trim()}`,
    f.company.trim() ? `*Empresa:* ${f.company.trim()}` : null,
    `*E-mail:* ${f.email.trim()}`,
    `*WhatsApp:* ${f.whatsapp}`,
    `*Tipo de projeto:* ${f.projectType ? projectTypeLabels[f.projectType] : '-'}`,
    '',
    '*Necessidade:*',
    f.message.trim(),
  ]
  return lines.filter((l) => l !== null).join('\n')
}

function mailtoLink(f: ContactForm) {
  const subject = `Solicitação de orçamento — ${f.projectType ? projectTypeLabels[f.projectType] : 'Projeto digital'}`
  const body = buildMessage(f).replace(/\*/g, '')
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function Contact({ selection }: { selection: ServiceSelection | null }) {
  const [form, setForm] = useState<ContactForm>(emptyForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof ContactForm, boolean>>>({})
  const [sent, setSent] = useState<ContactForm | null>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // Pré-seleciona o tipo de projeto quando o usuário clica em "Tenho interesse"
  useEffect(() => {
    if (!selection) return
    setSent(null)
    setForm((f) => ({ ...f, projectType: selection.type }))
    setErrors((e) => ({ ...e, projectType: undefined }))
    const t = window.setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 650)
    return () => window.clearTimeout(t)
  }, [selection])

  const update = (field: keyof ContactForm) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = field === 'whatsapp' ? maskPhone(e.target.value) : e.target.value
    const next = { ...form, [field]: value }
    setForm(next)
    if (touched[field] || errors[field]) setErrors((prev) => ({ ...prev, [field]: validateField(field, next) }))
  }

  const blur = (field: keyof ContactForm) => () => {
    setTouched((t) => ({ ...t, [field]: true }))
    setErrors((prev) => ({ ...prev, [field]: validateField(field, form) }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const found = validateForm(form)
    setErrors(found)
    setTouched({ name: true, company: true, email: true, whatsapp: true, projectType: true, message: true })
    const firstInvalid = (Object.keys(found) as (keyof ContactForm)[])[0]
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }
    window.open(whatsappLink(buildMessage(form)), '_blank', 'noopener,noreferrer')
    setSent(form)
  }

  const reset = () => {
    setForm(emptyForm)
    setErrors({})
    setTouched({})
    setSent(null)
    window.setTimeout(() => nameRef.current?.focus(), 50)
  }

  const fieldProps = (field: keyof ContactForm) => ({
    id: `contato-${field}`,
    name: field,
    value: form[field],
    onChange: update(field),
    onBlur: blur(field),
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': `contato-${field}-error`,
    className: 'field',
  })

  return (
    <section id="contato" aria-labelledby="contato-title" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-violet/20 blur-[160px]" aria-hidden="true" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Coluna de apoio */}
          <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="contato-title"
              index="06"
              eyebrow="Contato"
              title={
                <>
                  Vamos tirar sua ideia <span className="text-gradient">do papel?</span>
                </>
              }
              description="Conte sobre o seu projeto. Analisamos cada solicitação com atenção e retornamos com os próximos passos e uma proposta sob medida."
            />
            <Reveal delay={120}>
              <ul className="mt-9 space-y-4">
                {[
                  { icon: Clock, title: 'Retorno ágil', text: 'Resposta rápida em horário comercial.' },
                  { icon: ShieldCheck, title: 'Sem compromisso', text: 'O orçamento é gratuito e transparente.' },
                  { icon: Mail, title: 'Prefere e-mail?', text: site.email, href: `mailto:${site.email}` },
                ].map(({ icon: Icon, title, text, href }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-mint">
                      <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-medium text-ice">{title}</span>
                      {href ? (
                        <a href={href} className="text-sm text-mist underline-offset-4 transition hover:text-ice hover:underline">
                          {text}
                        </a>
                      ) : (
                        <span className="text-sm text-mist">{text}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl border border-mint/25 bg-gradient-to-br from-mint/10 to-transparent p-6">
                <p className="font-display text-lg font-semibold text-ice">Quer agilizar?</p>
                <p className="mt-1 text-sm text-mist">Fale direto com a nossa equipe pelo WhatsApp.</p>
                <ButtonLink href={whatsappLink(defaultWhatsappMessage)} external variant="whatsapp" className="mt-5 h-auto min-h-12 w-full py-3 text-center whitespace-normal sm:w-auto">
                  <WhatsappIcon className="h-5 w-5" />
                  Solicitar orçamento via WhatsApp
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          {/* Formulário */}
          <Reveal delay={80}>
            <div id="formulario-orcamento" className="card scroll-mt-24 p-6 sm:p-9" aria-live="polite">
              {sent ? (
                <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-mint/15 text-mint">
                    <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold text-ice">Solicitação pronta, {sent.name.split(' ')[0]}!</h3>
                  <p className="mt-3 max-w-md text-mist">
                    Abrimos o WhatsApp com sua mensagem preenchida. É só tocar em <strong className="text-ice">enviar</strong> para
                    concluir. Se a janela não abriu, use um dos botões abaixo.
                  </p>
                  <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                    <ButtonLink href={whatsappLink(buildMessage(sent))} external variant="whatsapp">
                      <WhatsappIcon className="h-5 w-5" />
                      Abrir WhatsApp
                    </ButtonLink>
                    <ButtonLink href={mailtoLink(sent)} variant="secondary">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      Enviar por e-mail
                    </ButtonLink>
                  </div>
                  <Button variant="ghost" size="sm" onClick={reset} className="mt-6">
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                    Fazer nova solicitação
                  </Button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate aria-label="Formulário de solicitação de orçamento">
                  <div className="mb-7 flex items-center justify-between border-b border-line pb-5">
                    <p className="font-display text-xl font-semibold text-ice">Solicitar orçamento</p>
                    <span className="font-mono text-[11px] text-mist">* obrigatório</span>
                  </div>
                  <div className="grid gap-x-5 gap-y-1 sm:grid-cols-2">
                    <FormField id="contato-name" label="Nome" required error={errors.name}>
                      <input ref={nameRef} type="text" autoComplete="name" placeholder="Seu nome completo" required {...fieldProps('name')} />
                    </FormField>
                    <FormField id="contato-company" label="Empresa" error={errors.company}>
                      <input type="text" autoComplete="organization" placeholder="Nome da empresa" {...fieldProps('company')} />
                    </FormField>
                    <FormField id="contato-email" label="E-mail" required error={errors.email}>
                      <input type="email" autoComplete="email" inputMode="email" placeholder="nome@empresa.com" required {...fieldProps('email')} />
                    </FormField>
                    <FormField id="contato-whatsapp" label="WhatsApp" required error={errors.whatsapp}>
                      <input type="tel" autoComplete="tel-national" inputMode="tel" placeholder="(11) 91234-5678" required {...fieldProps('whatsapp')} />
                    </FormField>
                    <FormField id="contato-projectType" label="Tipo de projeto" required error={errors.projectType} className="sm:col-span-2">
                      <div className="relative">
                        <select required {...fieldProps('projectType')} className="field cursor-pointer appearance-none pr-11">
                          <option value="" disabled>
                            Selecione uma opção
                          </option>
                          {(Object.keys(projectTypeLabels) as ProjectType[]).map((key) => (
                            <option key={key} value={key} className="bg-ink-800">
                              {projectTypeLabels[key]}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-mist" aria-hidden="true" />
                      </div>
                    </FormField>
                    <FormField
                      id="contato-message"
                      label="Descrição da necessidade"
                      required
                      error={errors.message}
                      className="sm:col-span-2"
                      hint={
                        <span className={`font-mono text-[11px] ${form.message.length > MESSAGE_MAX ? 'text-rose-300' : 'text-mist/70'}`}>
                          {form.message.length}/{MESSAGE_MAX}
                        </span>
                      }
                    >
                      <textarea
                        rows={5}
                        placeholder="Conte sobre seu negócio, objetivos do projeto, prazos e referências que você gosta."
                        required
                        {...fieldProps('message')}
                        className="field min-h-[140px] resize-y"
                      />
                    </FormField>
                  </div>

                  <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-relaxed text-mist/80 sm:max-w-[16rem]">
                      Seus dados são usados apenas para responder a esta solicitação.
                    </p>
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      Enviar solicitação
                      <ArrowRight className="h-5 w-5 transition group-hover/btn:translate-x-1" aria-hidden="true" />
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
