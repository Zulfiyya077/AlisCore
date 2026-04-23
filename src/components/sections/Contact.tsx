import React from 'react';
import { CheckCircle2, Mail, Phone } from 'lucide-react';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { trackCtaClick } from '@/lib/analytics';
import { ContactLeadForm } from '@/components/forms/ContactLeadForm';
import { siteConfig } from '@/lib/site';

interface ContactProps {
  currentLang: Language;
  isDark: boolean;
}

export const Contact: React.FC<ContactProps> = ({ currentLang, isDark }) => {
  const t = translations[currentLang];

  const contactCards = [
    {
      icon: Phone,
      label: currentLang === 'az' ? 'Telefon' : currentLang === 'es' ? 'Telefono' : 'Phone',
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/[^\d+]/g, '')}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
  ];

  const checklist = [
    currentLang === 'az'
      ? 'Business məqsədi və problem qısa şəkildə yazın'
      : currentLang === 'es'
        ? 'Describe brevemente el objetivo y el problema'
        : 'Briefly describe the business goal and current bottleneck',
    currentLang === 'az'
      ? 'Timeline və prioritetləri qeyd edin'
      : currentLang === 'es'
        ? 'Comparte el plazo y las prioridades'
        : 'Share your timeline and current priorities',
    currentLang === 'az'
      ? 'Mövcud sistemlər və ya istifadə etdiyiniz alətləri yazın'
      : currentLang === 'es'
        ? 'Indica sistemas o herramientas actuales'
        : 'Mention the current tools or systems involved',
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-28">
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950'
              : 'bg-gradient-to-br from-zinc-50 via-white to-zinc-100'
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
            {t.contact.title}
          </p>
          <h2 className={`text-3xl font-bold sm:text-4xl ${isDark ? 'text-white' : 'text-zinc-950'}`}>
            {t.contact.subtitle}
          </h2>
          <p className={`mx-auto mt-5 max-w-3xl text-lg leading-8 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
            {t.contact.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div
            className={`rounded-3xl p-7 sm:p-9 ${
              isDark
                ? 'glass-effect-dark border border-zinc-800'
                : 'glass-effect border border-white/50 shadow-xl'
            }`}
          >
            <ContactLeadForm
              leadSource="homepage_contact_form"
              isDark={isDark}
              labels={{
                name: t.contact.form.name,
                email: t.contact.form.email,
                phone: t.contact.form.phone,
                company: t.contact.form.company,
                message: t.contact.form.message,
                send: t.contact.form.send,
                sending: t.contact.form.sending,
                success: t.contact.form.success,
                error: t.contact.form.error,
                turnstileRequired: t.contact.form.turnstileRequired,
              }}
            />
          </div>

          <div className="space-y-6">
            <div
              className={`rounded-3xl p-7 ${
                isDark
                  ? 'glass-effect-dark border border-zinc-800'
                  : 'glass-effect border border-white/50 shadow-lg'
              }`}
            >
              <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                {currentLang === 'az'
                  ? 'Best fit leads'
                  : currentLang === 'es'
                    ? 'Leads ideales'
                    : 'Best fit leads'}
              </h3>
              <div className="mt-5 space-y-4">
                {checklist.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-zinc-500" />
                    <span className={isDark ? 'text-zinc-300' : 'text-zinc-600'}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {contactCards.map((card) => (
                <a
                  key={card.label}
                  href={card.href}
                  className={`rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 ${
                    isDark
                      ? 'glass-effect-dark border border-zinc-800'
                      : 'glass-effect border border-white/50 shadow-lg'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-950 ring-1 ring-zinc-700/45">
                      <card.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>{card.label}</p>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-zinc-950'}`}>{card.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div
              className={`rounded-3xl p-7 ${
                isDark
                  ? 'bg-gradient-to-r from-zinc-900/90 to-zinc-950 border border-zinc-800'
                  : 'bg-gradient-to-r from-zinc-50 to-zinc-100 border border-zinc-200 ring-1 ring-zinc-300/50'
              }`}
            >
              <h3 className={`text-sm font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                {currentLang === 'az'
                  ? 'Booking option'
                  : currentLang === 'es'
                    ? 'Reserva'
                    : 'Booking option'}
              </h3>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCtaClick('homepage_contact', 'book_strategy_call')}
                className="btn-modern mt-4 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white"
              >
                {currentLang === 'az'
                  ? 'Strategy call bron et'
                  : currentLang === 'es'
                    ? 'Reservar llamada'
                    : 'Book a strategy call'}
              </a>
              <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                {currentLang === 'az'
                  ? 'Response promise'
                  : currentLang === 'es'
                    ? 'Compromiso de respuesta'
                    : 'Response promise'}
              </h3>
              <p className={`mt-4 leading-7 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                {currentLang === 'az'
                  ? 'Qualified sorğulara 1 iş günü ərzində cavab verməyə fokuslanırıq.'
                  : currentLang === 'es'
                    ? 'Buscamos responder consultas calificadas dentro de 1 dia habil.'
                    : 'We aim to respond to qualified inquiries within 1 business day.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
