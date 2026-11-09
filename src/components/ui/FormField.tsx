import type { ReactNode } from 'react'

interface FormFieldProps {
  id: string
  label: string
  required?: boolean
  error?: string
  hint?: ReactNode
  className?: string
  children: ReactNode
}

/** Rótulo + campo + mensagem de erro acessível (ligada via aria-describedby no campo). */
export function FormField({ id, label, required, error, hint, className = '', children }: FormFieldProps) {
  return (
    <div className={className}>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-medium text-ice/90">
          {label}
          {required ? (
            <span className="ml-0.5 text-mint" aria-hidden="true">
              *
            </span>
          ) : (
            <span className="ml-1.5 text-xs font-normal text-mist/70">(opcional)</span>
          )}
        </label>
        {hint}
      </div>
      {children}
      <p id={`${id}-error`} role={error ? 'alert' : undefined} className="mt-1.5 min-h-[1.25rem] text-[13px] text-rose-300">
        {error}
      </p>
    </div>
  )
}
