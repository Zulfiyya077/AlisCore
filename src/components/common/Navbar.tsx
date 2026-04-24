import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Globe, Menu, X } from 'lucide-react';
import type { Language } from '../../types';

interface NavbarProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
  isDark: boolean;
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLangChange,
  isDark,
  activeSection,
  onNavigate,
}) => {
  const withLang = (href: string) => `${href}?lang=${currentLang}`;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    {
      type: 'section' as const,
      key: 'home',
      label: currentLang === 'az' ? 'Ana səhifə' : currentLang === 'es' ? 'Inicio' : 'Home',
    },
    {
      type: 'route' as const,
      href: '/services',
      key: 'services',
      label: currentLang === 'az' ? 'Xidmətlər' : currentLang === 'es' ? 'Servicios' : 'Services',
    },
    {
      type: 'route' as const,
      href: '/industries',
      key: 'industries',
      label: currentLang === 'az' ? 'Sahələr' : currentLang === 'es' ? 'Industrias' : 'Industries',
    },
    {
      type: 'route' as const,
      href: '/case-studies',
      key: 'case-studies',
      label: currentLang === 'az' ? 'Case Studylər' : currentLang === 'es' ? 'Casos' : 'Case Studies',
    },
    {
      type: 'route' as const,
      href: '/blog',
      key: 'blog',
      label: currentLang === 'az' ? 'Blog' : currentLang === 'es' ? 'Blog' : 'Blog',
    },
    {
      type: 'route' as const,
      href: '/about',
      key: 'about-page',
      label: currentLang === 'az' ? 'Haqqımızda' : currentLang === 'es' ? 'About' : 'About',
    },
    {
      type: 'route' as const,
      href: '/contact',
      key: 'contact-page',
      label: currentLang === 'az' ? 'Əlaqə' : currentLang === 'es' ? 'Contacto' : 'Contact',
    },
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 shadow-lg backdrop-blur ${
          isDark
            ? 'border-zinc-800 bg-zinc-950/85'
            : 'border-white/70 bg-white/85'
        }`}
      >
        <button onClick={() => handleNavigate('home')} className="text-left">
          <div className="text-2xl font-bold">
            <span className="text-gradient-animated">AlisCore</span>
          </div>
          <div className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
            {currentLang === 'az'
              ? 'Software, automation, growth'
              : currentLang === 'es'
                ? 'Software, automatizacion, crecimiento'
                : 'Software, automation, growth'}
          </div>
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) =>
            item.type === 'section' ? (
              <button
                key={item.key}
                onClick={() => handleNavigate(item.key)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.key
                    ? 'bg-zinc-900 text-white ring-1 ring-zinc-500/50'
                    : isDark
                      ? 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                      : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
                }`}
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.key}
                href={withLang(item.href)}
                scroll
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                    : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="relative">
            <Globe className={`pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`} />
            <select
              value={currentLang}
              onChange={(event) => onLangChange(event.target.value as Language)}
              className={`rounded-xl border py-2 pl-9 pr-8 text-sm outline-none ${
                isDark
                  ? 'border-zinc-700 bg-zinc-900 text-white'
                  : 'border-zinc-200 bg-white text-zinc-900'
              }`}
            >
              <option value="en">EN</option>
              <option value="az">AZ</option>
              <option value="es">ES</option>
            </select>
          </div>

          <Link href={withLang('/contact')} scroll className="btn-modern rounded-xl px-5 py-2.5 text-sm font-semibold text-white">
            {currentLang === 'az' ? 'Əlaqə' : currentLang === 'es' ? 'Contacto' : 'Book Call'}
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className={`rounded-xl p-2 md:hidden ${isDark ? 'text-white' : 'text-zinc-900'}`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className={`mx-auto mt-3 max-w-7xl rounded-2xl border p-4 shadow-lg md:hidden ${
            isDark
              ? 'border-zinc-800 bg-zinc-950/95'
              : 'border-white/70 bg-white/95'
          }`}
        >
          <div className="grid gap-2">
            {navItems.map((item) =>
              item.type === 'section' ? (
                <button
                  key={item.key}
                  onClick={() => handleNavigate(item.key)}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-medium ${
                    activeSection === item.key
                      ? 'bg-zinc-900 text-white ring-1 ring-zinc-500/50'
                      : isDark
                        ? 'text-zinc-300 hover:bg-zinc-800'
                        : 'text-zinc-700 hover:bg-zinc-100'
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.key}
                  href={withLang(item.href)}
                  scroll
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-medium ${
                    isDark
                      ? 'text-zinc-300 hover:bg-zinc-800'
                      : 'text-zinc-700 hover:bg-zinc-100'
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          <div className="mt-4 grid grid-cols-[1fr_auto] gap-3">
            <select
              value={currentLang}
              onChange={(event) => onLangChange(event.target.value as Language)}
              className={`rounded-xl border px-4 py-3 text-sm outline-none ${
                isDark
                  ? 'border-zinc-700 bg-zinc-900 text-white'
                  : 'border-zinc-200 bg-white text-zinc-900'
              }`}
            >
              <option value="en">English</option>
              <option value="az">Azerbaijani</option>
              <option value="es">Spanish</option>
            </select>

          </div>
        </div>
      )}
    </header>
  );
};
