import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import type { Language } from '../../types';
import { siteConfig } from '@/lib/site';

interface FooterProps {
  currentLang: Language;
  isDark: boolean;
  onNavigate: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, isDark, onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      type: 'section' as const,
      label: currentLang === 'az' ? 'Ana səhifə' : currentLang === 'es' ? 'Inicio' : 'Home',
      section: 'home',
    },
    {
      type: 'route' as const,
      label: currentLang === 'az' ? 'Xidmətlər' : currentLang === 'es' ? 'Servicios' : 'Services',
      href: '/services',
    },
    {
      type: 'route' as const,
      label: currentLang === 'az' ? 'Sahələr' : currentLang === 'es' ? 'Industrias' : 'Industries',
      href: '/industries',
    },
    {
      type: 'route' as const,
      label: currentLang === 'az' ? 'Case Studylər' : currentLang === 'es' ? 'Casos' : 'Case Studies',
      href: '/case-studies',
    },
    {
      type: 'route' as const,
      label: currentLang === 'az' ? 'Blog' : currentLang === 'es' ? 'Blog' : 'Blog',
      href: '/blog',
    },
    {
      type: 'route' as const,
      label: currentLang === 'az' ? 'Haqqımızda' : currentLang === 'es' ? 'About' : 'About',
      href: '/about',
    },
    {
      type: 'route' as const,
      label: currentLang === 'az' ? 'Əlaqə' : currentLang === 'es' ? 'Contacto' : 'Contact',
      href: '/contact',
    },
  ];

  return (
    <footer
      className={`border-t ${
        isDark ? 'border-zinc-800 bg-zinc-950 text-white' : 'border-zinc-200 bg-white text-zinc-950'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr_0.7fr]">
          <div>
            <div className="text-2xl font-bold">AlisCore</div>
            <p className={`mt-4 max-w-xl leading-7 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
              {currentLang === 'az'
                ? 'US bazarı üçün custom software, automation və digital modernization layihələri həyata keçirən biznes yönümlü IT partner.'
                : currentLang === 'es'
                  ? 'Partner IT orientado al negocio para software a medida, automatizacion y modernizacion digital.'
                  : 'A business-first IT partner for custom software, automation, and digital modernization projects in the US market.'}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-300">
              {currentLang === 'az' ? 'Sürətli keçidlər' : currentLang === 'es' ? 'Enlaces' : 'Quick links'}
            </h3>
            <div className="mt-4 grid gap-3">
              {footerLinks.map((link) =>
                link.type === 'section' ? (
                  <button
                    key={link.section}
                    onClick={() => onNavigate(link.section)}
                    className={`text-left transition-colors ${
                      isDark ? 'text-zinc-300 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
                    }`}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    scroll
                    className={`text-left transition-colors ${
                      isDark ? 'text-zinc-300 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
                    }`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-300">
              {currentLang === 'az' ? 'Əlaqə' : currentLang === 'es' ? 'Contacto' : 'Contact'}
            </h3>
            <div className="mt-4 space-y-4">
              <a
                href={`tel:${siteConfig.phone.replace(/[^\d+]/g, '')}`}
                className={`flex items-center gap-3 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}
              >
                <Phone className="h-4 w-4" />
                <span>{siteConfig.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className={`flex items-center gap-3 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}
              >
                <Mail className="h-4 w-4" />
                <span>{siteConfig.email}</span>
              </a>
              <p className={isDark ? 'text-zinc-300' : 'text-zinc-600'}>{siteConfig.location}</p>
            </div>
          </div>
        </div>

        <div className={`mt-10 border-t pt-6 text-sm ${isDark ? 'border-zinc-800 text-zinc-400' : 'border-zinc-200 text-zinc-500'}`}>
          © {currentYear} AlisCore. {currentLang === 'az' ? 'Bütün hüquqlar qorunur.' : currentLang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
        </div>
      </div>
    </footer>
  );
};
