import { whatsappLink, defaultWhatsappMessage } from '../../lib/whatsapp'
import { useScrolled } from '../../hooks/useScrollState'
import { WhatsappIcon } from '../icons/SocialIcons'

/** Botão flutuante de WhatsApp, exibido após o usuário começar a rolar. */
export function WhatsappFloat() {
  const visible = useScrolled(500)
  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a NOLTH pelo WhatsApp (abre em nova aba)"
      tabIndex={visible ? 0 : -1}
      className={`fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-mint text-ink shadow-[0_10px_30px_-6px_rgb(36_214_181/0.6)] transition duration-300 hover:scale-105 sm:right-7 sm:bottom-7 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <WhatsappIcon width={26} height={26} />
    </a>
  )
}
