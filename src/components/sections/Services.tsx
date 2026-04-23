import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BrainCircuit,
  CloudCog,
  LayoutTemplate,
  MonitorSmartphone,
  Settings2,
  Workflow,
} from 'lucide-react';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { servicePages } from '@/lib/marketing-content';

interface ServicesProps {
  currentLang: Language;
  isDark: boolean;
}

const serviceIcons = [
  Settings2,
  MonitorSmartphone,
  Workflow,
  CloudCog,
  LayoutTemplate,
  BrainCircuit,
];

export const Services: React.FC<ServicesProps> = ({ currentLang, isDark }) => {
  const t = translations[currentLang];

  const serviceBenefits = [
    currentLang === 'az'
      ? 'Custom build-lər off-the-shelf limitlərini aradan qaldırır.'
      : currentLang === 'es'
        ? 'Los desarrollos a medida eliminan limites de herramientas genericas.'
        : 'Custom builds remove the limitations of generic off-the-shelf tools.',
    currentLang === 'az'
      ? 'Automation komanda vaxtını daha dəyərli işlərə qaytarır.'
      : currentLang === 'es'
        ? 'La automatizacion devuelve tiempo al equipo.'
        : 'Automation gives your team time back for higher-value work.',
    currentLang === 'az'
      ? 'Discovery mərhələsi rework və scope drift riskini azaldır.'
      : currentLang === 'es'
        ? 'Discovery reduce retrabajo y desviacion de alcance.'
        : 'Discovery reduces rework, misalignment, and scope drift before delivery starts.',
  ];

  const engagementTypes = [
    {
      title:
        currentLang === 'az'
          ? 'Discovery sprint'
          : currentLang === 'es'
            ? 'Sprint de discovery'
            : 'Discovery sprint',
      description:
        currentLang === 'az'
          ? 'Scope, texniki istiqamət və prioritetləri aydınlaşdırmaq üçün.'
          : currentLang === 'es'
            ? 'Para definir alcance, direccion tecnica y prioridades.'
            : 'Clarify business scope, technical direction, and delivery priorities.',
    },
    {
      title:
        currentLang === 'az'
          ? 'Project delivery'
          : currentLang === 'es'
            ? 'Entrega por proyecto'
            : 'Project delivery',
      description:
        currentLang === 'az'
          ? 'Aydın nəticəsi olan fokuslanmış build və launch işi üçün.'
          : currentLang === 'es'
            ? 'Para una entrega enfocada con resultado claro.'
            : 'Best for focused builds with clear deliverables and launch goals.',
    },
    {
      title:
        currentLang === 'az'
          ? 'Ongoing optimization'
          : currentLang === 'es'
            ? 'Optimizacion continua'
            : 'Ongoing optimization',
      description:
        currentLang === 'az'
          ? 'Launch sonrası inkişaf və support üçün.'
          : currentLang === 'es'
            ? 'Para soporte y mejora despues del lanzamiento.'
            : 'Support, iteration, and feature improvement after launch.',
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden py-24 lg:py-28">
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
        <div className="mb-16 max-w-3xl">
          <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
            {t.services.title}
          </p>
          <h2 className={`text-3xl font-bold sm:text-4xl ${isDark ? 'text-white' : 'text-zinc-950'}`}>
            {t.services.subtitle}
          </h2>
          <p className={`mt-5 text-lg leading-8 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
            {currentLang === 'az'
              ? 'Hər xidmət ayrıca satılmır, birlikdə daha güclü growth sistemi yaradır: strategy, UX, engineering və optimization.'
              : currentLang === 'es'
                ? 'Cada servicio funciona mejor como parte de un sistema conectado de estrategia, UX, engineering y optimizacion.'
                : 'Each service works best as part of a connected growth system spanning strategy, UX, engineering, and optimization.'}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-5 md:grid-cols-2">
            {t.services.items.map((service, index) => {
              const Icon = serviceIcons[index];
              const servicePage = servicePages[index];

              return (
                <Link
                  key={service.title}
                  href={servicePage ? `/services/${servicePage.slug}` : '/services'}
                  className={`rounded-3xl p-7 ${
                    isDark
                      ? 'glass-effect-dark border border-zinc-800'
                      : 'glass-effect border border-white/50 shadow-lg'
                  }`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-950 ring-1 ring-zinc-700/45">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                    {service.title}
                  </h3>
                  <p className={`mt-3 leading-7 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {service.description}
                  </p>
                  <div className={`mt-5 flex items-center gap-2 text-sm font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    <span>
                      {currentLang === 'az'
                        ? 'Xidmət səhifəsinə keç'
                        : currentLang === 'es'
                          ? 'Ir a la pagina del servicio'
                          : 'Go to service page'}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
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
                  ? 'Why these services convert'
                  : currentLang === 'es'
                    ? 'Por que estos servicios convierten'
                    : 'Why these services convert'}
              </h3>
              <div className="mt-5 space-y-4">
                {serviceBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className={`rounded-2xl border p-4 ${
                      isDark ? 'border-zinc-800 bg-zinc-950/30 text-zinc-300' : 'border-zinc-200 bg-white/80 text-zinc-600'
                    }`}
                  >
                    {benefit}
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
              <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                {currentLang === 'az'
                  ? 'Engagement model'
                  : currentLang === 'es'
                    ? 'Modelo de trabajo'
                    : 'Engagement model'}
              </h3>
              <div className="mt-5 space-y-4">
                {engagementTypes.map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-2xl border p-4 ${
                      isDark ? 'border-zinc-800 bg-zinc-950/30' : 'border-white bg-white/80'
                    }`}
                  >
                    <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-zinc-950'}`}>{item.title}</h4>
                    <p className={`mt-2 leading-7 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>{item.description}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="btn-modern mt-6 inline-flex rounded-xl px-6 py-4 font-semibold text-white"
              >
                {currentLang === 'az'
                  ? 'Bütün xidmətlərə bax'
                  : currentLang === 'es'
                    ? 'Ver todos los servicios'
                    : 'Explore all services'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
