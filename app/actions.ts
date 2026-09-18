'use server'

import 'server-only'
import type { Locale } from '@/content/i18n'

export type FormState = {
  status: 'idle' | 'success' | 'error'
  message: string
  errors?: Record<string, string>
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const COPY = {
  tr: {
    name: 'Adınızı yazın.',
    email: 'Geçerli bir e-posta adresi girin.',
    phone: 'Telefon numaranızı yazın.',
    message: 'Birkaç cümleyle talebinizi anlatın.',
    invalid: 'Lütfen işaretli alanları kontrol edin.',
    delivered: 'Mesajınız alındı. En kısa sürede size dönüş yapacağız.',
    preview:
      'Mesajınız alındı. (Demo modu: e-posta olarak iletilmedi, sunucu günlüğüne kaydedildi.)',
    failed: 'Şu anda gönderilemedi. Lütfen telefonla ulaşın ya da tekrar deneyin.',
  },
  en: {
    name: 'Please enter your name.',
    email: 'Please enter a valid email address.',
    phone: 'Please enter your phone number.',
    message: 'Tell us about your enquiry in a few sentences.',
    invalid: 'Please check the highlighted fields.',
    delivered: 'Your message has been received. We will come back to you shortly.',
    preview:
      'Your message has been received. (Demo mode: it was not emailed, it was written to the server log.)',
    failed: 'We could not send that just now. Please call us or try again.',
  },
} satisfies Record<Locale, Record<string, string>>

const str = (data: FormData, key: string) => String(data.get(key) ?? '').trim()

/**
 * Delivery is pluggable on purpose: the demo runs without credentials and just
 * records the enquiry, while production points LEAD_WEBHOOK_URL at a real inbox.
 */
async function deliver(payload: Record<string, string>) {
  const webhook = process.env.LEAD_WEBHOOK_URL
  const text = Object.entries(payload)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')

  if (!webhook) {
    console.info('[enquiry:preview]\n' + text)
    return { delivered: false }
  }

  const res = await fetch(webhook, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ ...payload, text }),
  })
  if (!res.ok) throw new Error(`Lead webhook failed: ${res.status}`)
  return { delivered: true }
}

export async function submitEnquiry(_prev: FormState, formData: FormData): Promise<FormState> {
  const locale: Locale = str(formData, 'locale') === 'en' ? 'en' : 'tr'
  const copy = COPY[locale]

  // honeypot: real visitors never see this field
  if (str(formData, 'website')) return { status: 'success', message: copy.delivered }

  const name = str(formData, 'name')
  const email = str(formData, 'email')
  const phone = str(formData, 'phone')
  const company = str(formData, 'company')
  const subject = str(formData, 'subject')
  const message = str(formData, 'message')

  const errors: Record<string, string> = {}
  if (name.length < 2) errors.name = copy.name
  if (!EMAIL.test(email)) errors.email = copy.email
  if (phone.replace(/\D/g, '').length < 10) errors.phone = copy.phone
  if (message.length < 10) errors.message = copy.message

  if (Object.keys(errors).length) {
    return { status: 'error', message: copy.invalid, errors }
  }

  try {
    const { delivered } = await deliver({
      locale,
      name,
      email,
      phone,
      company,
      subject,
      message,
      receivedAt: new Date().toISOString(),
    })
    return { status: 'success', message: delivered ? copy.delivered : copy.preview }
  } catch {
    return { status: 'error', message: copy.failed }
  }
}
