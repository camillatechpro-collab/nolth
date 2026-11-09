import { useEffect, useRef } from 'react'
import { ExternalLink, X } from 'lucide-react'

interface DemoViewerProps {
  open: boolean
  onClose: () => void
  title: string
  url: string
}

/**
 * Abre um sistema de demonstração em tela cheia, dentro de um <dialog> nativo
 * (foco preso no modal e ESC para fechar já vêm do navegador).
 */
export function DemoViewer({ open, onClose, title, url }: DemoViewerProps) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dlg = ref.current
    if (!dlg) return
    if (open && !dlg.open) {
      dlg.showModal()
      document.body.style.overflow = 'hidden'
    }
    if (!open && dlg.open) dlg.close()
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      aria-label={`Demonstração do ${title}`}
      className="m-0 h-[100dvh] max-h-none w-screen max-w-none bg-transparent p-0 text-ice backdrop:bg-ink/85 backdrop:backdrop-blur-sm sm:p-5"
    >
      <div className="flex h-full flex-col overflow-hidden border-cyan/60 bg-ink-900 shadow-[0_0_60px_-10px_rgb(59_227_240/0.55)] sm:rounded-2xl sm:border-2">
        <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_8px_var(--color-cyan)]" aria-hidden="true" />
          <p className="min-w-0 flex-1 truncate font-display text-sm font-semibold tracking-[0.08em] uppercase">
            {title} <span className="ml-2 font-mono text-[11px] font-normal tracking-normal text-mist normal-case">demonstração · dados fictícios</span>
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs text-mist transition hover:bg-white/5 hover:text-ice sm:inline-flex"
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            Abrir em nova aba
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar demonstração"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ice transition hover:border-cyan/60 hover:bg-cyan/10"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        {open && <iframe src={url} title={`Sistema ${title} em funcionamento`} className="w-full flex-1 bg-white" />}
      </div>
    </dialog>
  )
}
