import React from 'react';
import { CheckCircle2, Clock3, Target, Users } from 'lucide-react';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';

interface AboutProps {
  currentLang: Language;
  isDark: boolean;
}

export const About: React.FC<AboutProps> = ({ currentLang, isDark }) => {
  const t = translations[currentLang];

  const highlights = [
    {
      icon: Target,
      title:
        currentLang === 'az'
          ? 'Outcome-first strategy'
          : currentLang === 'es'
            ? 'Estrategia orientada a resultados'
            : 'Outcome-first strategy',
      description:
        currentLang === 'az'
          ? 'Texniki qərarlar business dəyərinə görə prioritetləşdirilir.'
          : currentLang === 'es'
            ? 'Las decisiones tecnicas se priorizan por impacto de negocio.'
            : 'Technical decisions are prioritized by business value, not by trend.',
    },
    {
      icon: Users,
      title:
        currentLang === 'az'
          ? 'Senior communication'
          : currentLang === 'es'
            ? 'Comunicacion senior'
            : 'Senior communication',
      description:
        currentLang === 'az'
          ? 'Satışdan delivery-yə qədər aydın və birbaşa kommunikasiya.'
          : currentLang === 'es'
            ? 'Comunicacion clara desde la venta hasta la entrega.'
            : 'Clear communication from discovery through delivery keeps projects aligned and predictable.',
    },
    {
      icon: Clock3,
      title:
        currentLang === 'az'
          ? 'Lean execution'
          : currentLang === 'es'
            ? 'Ejecucion agil'
            : 'Lean execution',
      description:
        currentLang === 'az'
          ? 'Böyük agentlik bürokratiyası olmadan sürətli irəliləyiş.'
          : currentLang === 'es'
            ? 'Avance rapido sin burocracia innecesaria.'
            : 'Move quickly without enterprise-level bureaucracy slowing every decision down.',
    },
  ];

  const processSteps = [
    currentLang === 'az'
      ? 'Discover: məqsəd, bottleneck və prioritetlər aydınlaşdırılır.'
      : currentLang === 'es'
        ? 'Discover: aclaramos objetivos, cuellos de botella y prioridades.'
        : 'Discover: align around business goals, bottlenecks, and technical constraints.',
    currentLang === 'az'
      ? 'Design: UX, arxitektura və scope ölçülə bilən şəkildə qurulur.'
      : currentLang === 'es'
        ? 'Design: definimos UX, arquitectura y alcance.'
        : 'Design: shape UX, architecture, and delivery scope around real user needs.',
    currentLang === 'az'
      ? 'Deliver: iterativ şəkildə build, launch və optimize edilir.'
      : currentLang === 'es'
        ? 'Deliver: construimos, lanzamos y optimizamos por iteraciones.'
        : 'Deliver: build, launch, and optimize in focused iterations with clear accountability.',
  ];

  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-28">
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950'
              : 'bg-gradient-to-b from-white via-zinc-50 to-white'
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
            {t.about.title}
          </p>
          <h2 className={`text-3xl font-bold sm:text-4xl ${isDark ? 'text-white' : 'text-zinc-950'}`}>
            {t.about.subtitle}
          </h2>
          <p className={`mt-5 text-lg leading-8 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
            {t.about.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className={`rounded-3xl p-7 ${
                  isDark
                    ? 'glass-effect-dark border border-zinc-800'
                    : 'glass-effect border border-white/50 shadow-lg'
                }`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-950 ring-1 ring-zinc-700/45">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-zinc-950'}`}>{item.title}</h3>
                <p className={`mt-3 leading-7 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div
              className={`rounded-3xl p-7 ${
                isDark
                  ? 'glass-effect-dark border border-zinc-800'
                  : 'glass-effect border border-white/50 shadow-lg'
              }`}
            >
              <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                {currentLang === 'az'
                  ? 'Core advantages'
                  : currentLang === 'es'
                    ? 'Ventajas clave'
                    : 'Core advantages'}
              </h3>
              <div className="mt-5 space-y-4">
                {t.about.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-zinc-500" />
                    <span className={isDark ? 'text-zinc-300' : 'text-zinc-600'}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`rounded-3xl p-7 ${
                isDark
                  ? 'bg-gradient-to-r from-zinc-900/90 to-zinc-950 border border-zinc-800'
                  : 'bg-gradient-to-r from-zinc-50 to-zinc-100 border border-zinc-200 ring-1 ring-zinc-300/50'
              }`}
            >
              <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                {currentLang === 'az'
                  ? 'Necə işləyirik'
                  : currentLang === 'es'
                    ? 'Como trabajamos'
                    : 'How we work'}
              </h3>
              <div className="mt-5 space-y-4">
                {processSteps.map((step) => (
                  <div
                    key={step}
                    className={`rounded-2xl border p-4 ${
                      isDark ? 'border-zinc-800 bg-zinc-950/30 text-zinc-300' : 'border-white bg-white/80 text-zinc-600'
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
