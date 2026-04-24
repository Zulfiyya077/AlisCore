import React from 'react';
import { ArrowRight, ChevronDown, LineChart, Settings, ShieldCheck } from 'lucide-react';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { trackCtaClick } from '@/lib/analytics';
import { siteConfig } from '@/lib/site';

interface HeroProps {
  currentLang: Language;
  isDark: boolean;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, isDark, onContactClick }) => {
  const t = translations[currentLang];

  const proofItems = [
    {
      icon: Settings,
      title:
        currentLang === 'az'
          ? 'Senior-led delivery'
          : currentLang === 'es'
            ? 'Entrega liderada por seniors'
            : 'Senior-led delivery',
    },
    {
      icon: LineChart,
      title:
        currentLang === 'az'
          ? 'Biznes nəticəsinə fokus'
          : currentLang === 'es'
            ? 'Enfoque en resultados'
            : 'Business outcome focused',
    },
    {
      icon: ShieldCheck,
      title:
        currentLang === 'az'
          ? 'Scalable və etibarlı build'
          : currentLang === 'es'
            ? 'Build escalable y confiable'
            : 'Scalable, reliable builds',
    },
  ];

  const valuePoints = [
    currentLang === 'az'
      ? 'Discovery-first yanaşma ilə scope və risklər əvvəlcədən aydınlaşdırılır.'
      : currentLang === 'es'
        ? 'El enfoque discovery-first aclara alcance y riesgos antes de construir.'
        : 'A discovery-first approach clarifies scope, priorities, and delivery risks before code is written.',
    currentLang === 'az'
      ? 'Clean architecture və maintainable code ilə gələcək dəyişikliklərin dəyəri azalır.'
      : currentLang === 'es'
        ? 'La arquitectura limpia reduce el costo de cambios futuros.'
        : 'Clean architecture and maintainable code reduce the cost of future changes.',
    currentLang === 'az'
      ? 'Conversion, UX və business ops birlikdə düşünülür.'
      : currentLang === 'es'
        ? 'Conversion, UX y operaciones se consideran juntos.'
        : 'Conversion, UX, and business operations are designed as one connected system.',
  ];

  const trustStats = [
    {
      value: currentLang === 'az' ? '1 call' : currentLang === 'es' ? '1 llamada' : '1 call',
      label:
        currentLang === 'az'
          ? 'to clarify fit'
          : currentLang === 'es'
            ? 'para validar encaje'
            : 'to clarify fit',
    },
    {
      value: currentLang === 'az' ? 'Senior-led' : currentLang === 'es' ? 'Senior-led' : 'Senior-led',
      label:
        currentLang === 'az'
          ? 'delivery model'
          : currentLang === 'es'
            ? 'modelo de entrega'
            : 'delivery model',
    },
    {
      value: currentLang === 'az' ? 'US SMB' : currentLang === 'es' ? 'US SMB' : 'US SMB',
      label:
        currentLang === 'az'
          ? 'market focus'
          : currentLang === 'es'
            ? 'enfoque de mercado'
            : 'market focus',
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-32 lg:pt-36">
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-br from-zinc-950 via-neutral-950 to-zinc-900'
              : 'bg-gradient-to-br from-zinc-50 via-white to-zinc-100'
          }`}
        />
        <div className="absolute left-[-10rem] top-16 h-72 w-72 rounded-full bg-zinc-400/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-1/3 h-64 w-64 -translate-y-1/2 rounded-full bg-zinc-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-8rem] h-72 w-72 rounded-full bg-zinc-900/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div
              className={`mb-6 inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium ${
                isDark
                  ? 'border-zinc-700 bg-zinc-900/40 text-zinc-100 ring-1 ring-zinc-700/35'
                  : 'border-zinc-200 bg-white text-zinc-800 ring-1 ring-zinc-300/50'
              }`}
            >
              {currentLang === 'az'
                ? 'US SMB-lər üçün software + automation partner'
                : currentLang === 'es'
                  ? 'Partner de software y automatizacion para SMBs'
                  : 'Software and automation partner for US SMBs'}
            </div>

            <h1
              className={`max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${
                isDark ? 'text-white' : 'text-zinc-950'
              }`}
            >
              {t.hero.subtitle}
            </h1>

            <p
              className={`hero-description mt-6 max-w-2xl text-lg leading-8 ${
                isDark ? 'text-zinc-300' : 'text-zinc-600'
              }`}
            >
              {t.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCtaClick('hero', 'book_strategy_call')}
                className="btn-modern rounded-xl px-6 py-4 font-semibold text-white"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>{t.hero.cta}</span>
                  <ArrowRight className="h-5 w-5" />
                </span>
              </a>

              <button
                onClick={() => {
                  trackCtaClick('hero', 'request_project_estimate');
                  onContactClick();
                }}
                className={`rounded-xl border px-6 py-4 font-semibold transition-all duration-300 ${
                  isDark
                    ? 'border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-900'
                    : 'border-zinc-300 text-zinc-900 hover:border-zinc-500 hover:bg-white'
                }`}
              >
                {currentLang === 'az'
                  ? 'Layihəni müzakirə et'
                  : currentLang === 'es'
                    ? 'Hablar del proyecto'
                    : 'Discuss your project'}
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
              <button
                onClick={() => {
                  trackCtaClick('hero', 'view_case_studies');
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'} underline decoration-zinc-500/60 underline-offset-4`}
              >
                {currentLang === 'az'
                  ? 'Əvvəlcə case studylərə bax'
                  : currentLang === 'es'
                    ? 'Ver casos primero'
                    : 'See case studies first'}
              </button>
              <span className={isDark ? 'text-zinc-500' : 'text-zinc-400'}>•</span>
              <span className={isDark ? 'text-zinc-400' : 'text-zinc-500'}>
                {currentLang === 'az'
                  ? 'Discovery-first engagements'
                  : currentLang === 'es'
                    ? 'Engagements con discovery'
                    : 'Discovery-first engagements'}
              </span>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {trustStats.map((item) => (
                <div
                  key={`${item.value}-${item.label}`}
                  className={`rounded-2xl border px-4 py-4 ${
                    isDark
                      ? 'border-zinc-800 bg-zinc-950/30 text-zinc-300'
                      : 'border-zinc-200 bg-white/80 text-zinc-600'
                  }`}
                >
                  <div className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-zinc-950'}`}>{item.value}</div>
                  <div className="mt-1 text-sm">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {proofItems.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl p-4 ${
                    isDark
                      ? 'glass-effect-dark border border-zinc-800'
                      : 'glass-effect border border-white/40 shadow-lg'
                  }`}
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-950 ring-1 ring-zinc-700/40">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`rounded-3xl p-7 sm:p-9 ${
              isDark
                ? 'glass-effect-dark border border-zinc-800'
                : 'glass-effect border border-white/50 shadow-xl'
            }`}
          >
            <div className="mb-6">
              <p
                className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                  isDark ? 'text-zinc-300' : 'text-zinc-700'
                }`}
              >
                {currentLang === 'az'
                  ? 'Nələr edirik'
                  : currentLang === 'es'
                    ? 'Lo que entregamos'
                    : 'What we deliver'}
              </p>
              <h2 className={`mt-3 text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                {currentLang === 'az'
                  ? 'Daha sürətli əməliyyat, daha aydın sistem, daha güclü böyümə'
                  : currentLang === 'es'
                    ? 'Operaciones mas rapidas y sistemas mas claros'
                    : 'Faster operations, clearer systems, stronger growth'}
              </h2>
            </div>

            <div className="space-y-4">
              {valuePoints.map((item) => (
                <div
                  key={item}
                  className={`rounded-2xl border p-4 ${
                    isDark
                      ? 'border-zinc-800 bg-zinc-900/40 text-zinc-300'
                      : 'border-zinc-200 bg-white/70 text-zinc-600'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className={`h-6 w-6 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`} />
      </div>
    </section>
  );
};
