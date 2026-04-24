'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
import { primaryRoutes } from '@/lib/navigation';
import { siteConfig } from '@/lib/site';

export function PageHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [lang, setLang] = useState<'en' | 'az' | 'es'>('en');

  useEffect(() => {
    const queryLang = searchParams.get('lang');
    if (queryLang === 'az' || queryLang === 'en' || queryLang === 'es') {
      setLang(queryLang);
      localStorage.setItem('preferred-language', queryLang);
      return;
    }
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang === 'az' || savedLang === 'en' || savedLang === 'es') {
      setLang(savedLang);
    }
  }, [searchParams]);

  const onLangChange = (value: 'en' | 'az' | 'es') => {
    setLang(value);
    localStorage.setItem('preferred-language', value);
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', value);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const withLang = (href: string) => `${href}?lang=${lang}`;
  const routeLabels =
    lang === 'az'
      ? {
          '/': 'Ana səhifə',
          '/services': 'Xidmətlər',
          '/industries': 'Sahələr',
          '/case-studies': 'Case Studylər',
          '/blog': 'Blog',
          '/about': 'Haqqımızda',
          '/contact': 'Əlaqə',
        }
      : lang === 'es'
        ? {
            '/': 'Inicio',
            '/services': 'Servicios',
            '/industries': 'Industrias',
            '/case-studies': 'Casos',
            '/blog': 'Blog',
            '/about': 'Acerca de',
            '/contact': 'Contacto',
          }
        : {
            '/': 'Home',
            '/services': 'Services',
            '/industries': 'Industries',
            '/case-studies': 'Case Studies',
            '/blog': 'Blog',
            '/about': 'About',
            '/contact': 'Contact',
          };

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/90 bg-white/95 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-left">
          <div className="text-2xl font-bold text-zinc-950 dark:text-white">{siteConfig.name}</div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">Network, security, reliability</div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {primaryRoutes.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={withLang(item.href)}
                scroll
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-zinc-900 text-white ring-1 ring-zinc-500/45 dark:bg-white dark:text-zinc-950'
                    : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white'
                }`}
              >
                {routeLabels[item.href as keyof typeof routeLabels] ?? item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Globe className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500 dark:text-zinc-400" />
            <select
              value={lang}
              onChange={(event) => onLangChange(event.target.value as 'en' | 'az' | 'es')}
              className="rounded-xl border border-zinc-200 bg-white py-2 pl-9 pr-8 text-sm text-zinc-900 outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
              aria-label="Language"
            >
              <option value="en">EN</option>
              <option value="az">AZ</option>
              <option value="es">ES</option>
            </select>
          </div>

          <Link
            href={withLang('/contact')}
            scroll
            className="btn-modern rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
          >
            {lang === 'az' ? 'Zəng sifariş et' : lang === 'es' ? 'Reservar llamada' : 'Book Call'}
          </Link>
        </div>
      </div>
    </header>
  );
}
