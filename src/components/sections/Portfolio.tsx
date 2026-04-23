import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChartColumnIncreasing, Clock, Users } from 'lucide-react';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { caseStudies } from '@/lib/marketing-content';

interface PortfolioProps {
  currentLang: Language;
  isDark: boolean;
}

export const Portfolio: React.FC<PortfolioProps> = ({ currentLang, isDark }) => {
  const t = translations[currentLang];

  const metrics = [
    {
      icon: Clock,
      label:
        currentLang === 'az'
          ? 'Delivery focus'
          : currentLang === 'es'
            ? 'Enfoque de entrega'
            : 'Delivery focus',
      value:
        currentLang === 'az'
          ? '3-12 həftə'
          : currentLang === 'es'
            ? '3-12 semanas'
            : '3-12 weeks',
    },
    {
      icon: Users,
      label:
        currentLang === 'az'
          ? 'Stakeholder clarity'
          : currentLang === 'es'
            ? 'Claridad para stakeholders'
            : 'Stakeholder clarity',
      value:
        currentLang === 'az'
          ? 'Aydın owner-lar'
          : currentLang === 'es'
            ? 'Owners claros'
            : 'Clear owners',
    },
    {
      icon: ChartColumnIncreasing,
      label:
        currentLang === 'az'
          ? 'Business impact'
          : currentLang === 'es'
            ? 'Impacto de negocio'
            : 'Business impact',
      value:
        currentLang === 'az'
          ? 'Ops + growth'
          : currentLang === 'es'
            ? 'Ops + crecimiento'
            : 'Ops + growth',
    },
  ];

  return (
    <section id="portfolio" className="relative overflow-hidden py-24 lg:py-28">
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950'
              : 'bg-gradient-to-br from-white via-zinc-50 to-white'
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
            {t.portfolio.title}
          </p>
          <h2 className={`text-3xl font-bold sm:text-4xl ${isDark ? 'text-white' : 'text-zinc-950'}`}>
            {t.portfolio.subtitle}
          </h2>
          <p className={`mx-auto mt-5 max-w-3xl text-lg leading-8 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
            {t.portfolio.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {t.portfolio.projects.map((project, index) => (
            <Link
              key={project.title}
              href={caseStudies[index] ? `/case-studies/${caseStudies[index].slug}` : '/case-studies'}
              className={`rounded-3xl p-7 ${
                isDark
                  ? 'glass-effect-dark border border-zinc-800'
                  : 'glass-effect border border-white/50 shadow-lg'
              }`}
            >
              <div className="mb-4 inline-flex rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white ring-1 ring-zinc-600/50 dark:bg-white dark:text-zinc-950">
                {index === 0 ? 'Healthcare' : index === 1 ? 'E-commerce' : 'Startup'}
              </div>
              <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                {project.title}
              </h3>
              <p className={`mt-4 leading-7 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                {project.description}
              </p>

              <div className="mt-6 grid gap-3">
                {metrics.map((metric) => (
                  <div
                    key={`${project.title}-${metric.label}`}
                    className={`flex items-center justify-between rounded-2xl border px-4 py-3 ${
                      isDark ? 'border-zinc-800 bg-zinc-950/30' : 'border-zinc-200 bg-white/80'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <metric.icon className={`h-4 w-4 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`} />
                      <span className={isDark ? 'text-zinc-300' : 'text-zinc-600'}>{metric.label}</span>
                    </div>
                    <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-zinc-950'}`}>{metric.value}</span>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/case-studies" className="btn-modern inline-flex rounded-xl px-6 py-4 font-semibold text-white">
            <span className="flex items-center justify-center gap-2">
              <span>
                {currentLang === 'az'
                  ? 'Bütün case studylərə bax'
                  : currentLang === 'es'
                    ? 'Ver todos los casos'
                    : 'Explore all case studies'}
              </span>
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
