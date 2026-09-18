'use server'

import 'server-only'
import { isLocale, type Locale } from '@/content/i18n'

export type FormState = {
  status: 'idle' | 'success' | 'error'
  message: string
  errors?: Record<string, string>
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const COPY: Record<Locale, Record<string, string>> = {
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
  de: {
    name: 'Bitte geben Sie Ihren Namen an.',
    email: 'Bitte geben Sie eine gültige E-Mail-Adresse an.',
    phone: 'Bitte geben Sie Ihre Telefonnummer an.',
    message: 'Beschreiben Sie Ihre Anfrage in ein paar Sätzen.',
    invalid: 'Bitte prüfen Sie die markierten Felder.',
    delivered: 'Ihre Nachricht ist angekommen. Wir melden uns in Kürze.',
    preview:
      'Ihre Nachricht ist angekommen. (Demobetrieb: sie wurde nicht per E-Mail versandt, sondern ins Serverprotokoll geschrieben.)',
    failed: 'Das Senden hat gerade nicht geklappt. Bitte rufen Sie an oder versuchen Sie es erneut.',
  },
  fr: {
    name: 'Merci d’indiquer votre nom.',
    email: 'Merci d’indiquer une adresse e-mail valide.',
    phone: 'Merci d’indiquer votre numéro de téléphone.',
    message: 'Décrivez votre demande en quelques phrases.',
    invalid: 'Merci de vérifier les champs signalés.',
    delivered: 'Votre message nous est bien parvenu. Nous revenons vers vous rapidement.',
    preview:
      'Votre message nous est bien parvenu. (Mode démo : il n’a pas été envoyé par e-mail, il a été écrit dans le journal du serveur.)',
    failed: 'L’envoi n’a pas abouti. Merci d’appeler ou de réessayer.',
  },
  it: {
    name: 'Indicate il vostro nome.',
    email: 'Indicate un indirizzo e-mail valido.',
    phone: 'Indicate il vostro numero di telefono.',
    message: 'Descrivete la richiesta in poche frasi.',
    invalid: 'Controllate i campi segnalati.',
    delivered: 'Il messaggio è arrivato. Vi risponderemo al più presto.',
    preview:
      'Il messaggio è arrivato. (Modalità demo: non è stato inviato per e-mail, è stato scritto nel log del server.)',
    failed: 'L’invio non è riuscito. Chiamateci oppure riprovate.',
  },
  es: {
    name: 'Indique su nombre.',
    email: 'Indique una dirección de correo válida.',
    phone: 'Indique su número de teléfono.',
    message: 'Cuéntenos su consulta en unas frases.',
    invalid: 'Revise los campos marcados.',
    delivered: 'Hemos recibido su mensaje. Le responderemos en breve.',
    preview:
      'Hemos recibido su mensaje. (Modo de demostración: no se envió por correo, se anotó en el registro del servidor.)',
    failed: 'No hemos podido enviarlo ahora. Llámenos o inténtelo de nuevo.',
  },
  ru: {
    name: 'Укажите ваше имя.',
    email: 'Укажите действительный адрес электронной почты.',
    phone: 'Укажите ваш номер телефона.',
    message: 'Опишите запрос в нескольких предложениях.',
    invalid: 'Проверьте отмеченные поля.',
    delivered: 'Ваше сообщение получено. Мы свяжемся с вами в ближайшее время.',
    preview:
      'Ваше сообщение получено. (Демонстрационный режим: письмо не отправлено, запись сделана в журнале сервера.)',
    failed: 'Отправить сейчас не удалось. Позвоните нам или попробуйте ещё раз.',
  },
  zh: {
    name: '请填写您的姓名。',
    email: '请填写有效的电子邮箱地址。',
    phone: '请填写您的电话号码。',
    message: '请用几句话说明您的需求。',
    invalid: '请检查标记出来的字段。',
    delivered: '您的留言已收到，我们会尽快回复。',
    preview: '您的留言已收到。（演示模式：未通过邮件发送，已写入服务器日志。）',
    failed: '暂时发送不成功，请致电我们或稍后重试。',
  },
}

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
  const raw = str(formData, 'locale')
  const locale: Locale = isLocale(raw) ? raw : 'tr'
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
