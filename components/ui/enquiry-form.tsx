'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { AnimatePresence, motion } from 'motion/react'
import { submitEnquiry, type FormState } from '@/app/actions'
import { t, type Locale } from '@/content/i18n'
import { EASE } from '@/lib/motion'
import { cn } from '@/lib/utils'

const initial: FormState = { status: 'idle', message: '' }

function Field({
  label,
  name,
  type = 'text',
  required,
  error,
  autoComplete,
  span,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  error?: string
  autoComplete?: string
  span?: boolean
}) {
  return (
    <label className={cn('block', span && 'sm:col-span-2')}>
      <span className="label block">
        {label}
        {required && <span className="ml-1 text-carmine">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className={cn(
          'mt-3 w-full border-b bg-transparent pb-3 text-base text-ink transition-colors outline-none',
          error ? 'border-carmine' : 'border-[var(--rule-strong)] focus:border-ink',
        )}
      />
      {error && <span className="mt-2 block text-xs text-carmine">{error}</span>}
    </label>
  )
}

function Submit({ label, sending }: { label: string; sending: string }) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex items-center gap-3 border border-ink px-8 py-4 transition-colors hover:bg-ink hover:text-paper disabled:opacity-60"
    >
      <span className="label text-inherit">{pending ? sending : label}</span>
      <span className="text-carmine transition-transform duration-500 group-hover:translate-x-1">
        →
      </span>
    </button>
  )
}

export function EnquiryForm({ locale, className }: { locale: Locale; className?: string }) {
  const [state, action] = useActionState(submitEnquiry, initial)
  const errors = state.errors ?? {}
  const d = t(locale)

  return (
    <form action={action} className={cn('relative', className)}>
      <input type="hidden" name="locale" value={locale} />

      {/* honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          {d.form.honeypot}
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <Field label={d.form.name} name="name" required error={errors.name} autoComplete="name" />
        <Field label={d.form.company} name="company" autoComplete="organization" />
        <Field
          label={d.form.email}
          name="email"
          type="email"
          required
          error={errors.email}
          autoComplete="email"
        />
        <Field
          label={d.form.phone}
          name="phone"
          type="tel"
          required
          error={errors.phone}
          autoComplete="tel"
        />
        <Field label={d.form.subject} name="subject" span />

        <label className="block sm:col-span-2">
          <span className="label block">
            {d.form.message}
            <span className="ml-1 text-carmine">*</span>
          </span>
          <textarea
            name="message"
            rows={4}
            required
            aria-invalid={Boolean(errors.message)}
            className={cn(
              'mt-3 w-full resize-none border-b bg-transparent pb-3 text-base text-ink transition-colors outline-none',
              errors.message ? 'border-carmine' : 'border-[var(--rule-strong)] focus:border-ink',
            )}
          />
          {errors.message && <span className="mt-2 block text-xs text-carmine">{errors.message}</span>}
        </label>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <Submit label={d.form.submit} sending={d.form.sending} />

        <AnimatePresence mode="wait">
          {state.status !== 'idle' && (
            <motion.p
              key={state.message}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              role="status"
              className={cn(
                'max-w-sm text-sm leading-relaxed',
                state.status === 'success' ? 'text-ink' : 'text-carmine',
              )}
            >
              {state.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  )
}
