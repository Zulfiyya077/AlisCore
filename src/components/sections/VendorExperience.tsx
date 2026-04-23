import React from 'react';
import Link from 'next/link';
import { Building2, HeartPulse, ShoppingCart, Sparkles, Star, Trophy } from 'lucide-react';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { MOCK_VENDOR_BRANDS } from '@/lib/mock-vendors';

interface VendorExperienceProps {
  currentLang: Language;
  isDark: boolean;
}

export const VendorExperience: React.FC<VendorExperienceProps> = ({ currentLang, isDark }) => {
  const t = translations[currentLang];

  const industryCards = [
    {
      icon: HeartPulse,
      title:
        currentLang === 'az'
          ? 'Healthcare workflow systems'
          : currentLang === 'es'
            ? 'Sistemas para flujos de salud'
            : 'Healthcare workflow systems',
      description:
        currentLang === 'az'
          ? 'Admin workload-u azaltmaq, koordinasiyanı yaxşılaşdırmaq və xidmət keyfiyyətini artırmaq üçün.'
          : currentLang === 'es'
            ? 'Para reducir carga administrativa y mejorar coordinacion.'
            : 'Reduce administrative overhead and improve coordination across patient-facing operations.',
    },
    {
      icon: ShoppingCart,
      title:
        currentLang === 'az'
          ? 'E-commerce operations'
          : currentLang === 'es'
            ? 'Operaciones e-commerce'
            : 'E-commerce operations',
      description:
        currentLang === 'az'
          ? 'Inventory, order və reporting proseslərini vahid axında toplamaq üçün.'
          : currentLang === 'es'
            ? 'Para unificar inventario, pedidos y reportes.'
            : 'Unify order, inventory, and reporting workflows into one scalable operating layer.',
    },
    {
      icon: Building2,
      title:
        currentLang === 'az'
          ? 'SMB modernization'
          : currentLang === 'es'
            ? 'Modernizacion SMB'
            : 'SMB modernization',
      description:
        currentLang === 'az'
          ? 'Köhnə alət və prosesləri daha etibarlı digital sistemlərlə əvəz etmək üçün.'
          : currentLang === 'es'
            ? 'Para reemplazar procesos y herramientas obsoletas.'
            : 'Replace disconnected tools and legacy workflows with a cleaner, more manageable stack.',
    },
  ];

  const trustPoints = [
    currentLang === 'az'
      ? 'Discovery call və scope alignment ilə layihə riski erkən mərhələdə azaldılır.'
      : currentLang === 'es'
        ? 'Reducimos riesgo temprano con discovery y alineacion de alcance.'
        : 'Project risk is reduced early through structured discovery and scope alignment.',
    currentLang === 'az'
      ? 'Əlaqə nöqtələri aydın olur, qərarlar sürətli verilir.'
      : currentLang === 'es'
        ? 'Los responsables y decisiones se mantienen claros y rapidos.'
        : 'You get clear points of contact and faster decisions throughout delivery.',
    currentLang === 'az'
      ? 'Launch-dan sonra da support və optimization düşünülür.'
      : currentLang === 'es'
        ? 'Pensamos en soporte y optimizacion despues del lanzamiento.'
        : 'Support, iteration, and optimization are part of the plan, not an afterthought.',
  ];

  const vendorCardClass = `card-3d group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02] sm:p-5 ${
    isDark ? 'glass-effect-dark border border-zinc-800' : 'glass-effect border border-zinc-200/80 shadow-lg'
  }`;

  return (
    <section id="vendors" className="relative overflow-hidden py-24 lg:py-28">
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950'
              : 'bg-gradient-to-br from-zinc-50 via-white to-zinc-50'
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p
            className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}
          >
            {t.vendors.title}
          </p>
          <h2 className={`text-3xl font-bold sm:text-4xl ${isDark ? 'text-white' : 'text-zinc-950'}`}>
            {t.vendors.subtitle}
          </h2>
          <p
            className={`mx-auto mt-5 max-w-3xl text-lg leading-8 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}
          >
            {t.vendors.description}
          </p>
        </div>

        {/* Mock vendor / ecosystem brands (restored from earlier site version) */}
        <div className="mb-16">
          <p
            className={`mb-8 text-center text-sm font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}
          >
            {t.vendors.brandsCaption}
          </p>

          <div className="block lg:hidden">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
              {MOCK_VENDOR_BRANDS.map((vendor) => (
                <div key={vendor.name} className={vendorCardClass}>
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`mb-3 flex h-12 w-full max-w-[7rem] items-center justify-center rounded-lg border p-2 ${
                        isDark ? 'border-zinc-700 bg-white' : 'border-zinc-200 bg-white'
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={vendor.logoSrc}
                        alt={vendor.name}
                        className="max-h-9 w-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <h3
                      className={`text-xs font-semibold sm:text-sm ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}
                    >
                      {vendor.name}
                    </h3>
                  </div>
                  <div className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" aria-hidden />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative -mx-4 hidden overflow-hidden sm:-mx-6 lg:block lg:-mx-8">
            <div className="animate-marquee flex w-max gap-4 pr-4">
              {[...MOCK_VENDOR_BRANDS, ...MOCK_VENDOR_BRANDS].map((vendor, index) => (
                <div key={`${vendor.name}-${index}`} className={`w-44 flex-shrink-0 ${vendorCardClass}`}>
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`mb-3 flex h-14 w-28 items-center justify-center rounded-lg border p-2 ${
                        isDark ? 'border-zinc-700 bg-white' : 'border-zinc-200 bg-white'
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={vendor.logoSrc}
                        alt={vendor.name}
                        className="max-h-10 w-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <h3 className={`text-sm font-semibold ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
                      {vendor.name}
                    </h3>
                  </div>
                  <div className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" aria-hidden />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {industryCards.map((item) => (
            <div
              key={item.title}
              className={`rounded-3xl p-7 ${
                isDark ? 'glass-effect-dark border border-zinc-800' : 'glass-effect border border-white/50 shadow-lg'
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

        <div
          className={`mt-10 rounded-3xl p-7 sm:p-9 ${
            isDark
              ? 'border border-zinc-800 bg-gradient-to-r from-zinc-900/90 to-zinc-950'
              : 'border border-zinc-200 bg-gradient-to-r from-zinc-50 to-zinc-100 ring-1 ring-zinc-300/50'
          }`}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-950 ring-1 ring-zinc-700/45">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-zinc-950'}`}>
              {currentLang === 'az'
                ? 'Why this positioning works'
                : currentLang === 'es'
                  ? 'Por que este posicionamiento funciona'
                  : 'Why this positioning works'}
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {trustPoints.map((point) => (
              <div
                key={point}
                className={`rounded-2xl border p-4 ${
                  isDark ? 'border-zinc-800 bg-zinc-950/30 text-zinc-300' : 'border-white bg-white/80 text-zinc-600'
                }`}
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div
            className={`w-full max-w-3xl rounded-3xl p-8 text-center ${
              isDark ? 'glass-effect-dark border border-zinc-800' : 'glass-effect border border-zinc-200/80 shadow-lg'
            }`}
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <Trophy className={`h-8 w-8 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} aria-hidden />
              <h3 className={`text-xl font-bold sm:text-2xl ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                {t.vendors.vendorCtaTitle}
              </h3>
            </div>
            <p className={`mb-6 text-base leading-relaxed sm:text-lg ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
              {t.vendors.vendorCtaBody}
            </p>
            <Link
              href="/#contact"
              className="btn-modern inline-flex items-center justify-center rounded-xl px-8 py-3 font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              {t.vendors.vendorCtaButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
