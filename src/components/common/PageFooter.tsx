import Link from 'next/link';
import { primaryRoutes } from '@/lib/navigation';
import { siteConfig } from '@/lib/site';

export function PageFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr_0.7fr]">
          <div>
            <div className="text-2xl font-bold text-slate-950">{siteConfig.name}</div>
            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              A business-first IT partner for custom software, automation, and digital
              modernization projects in the US market.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-900">
              Navigation
            </h3>
            <div className="mt-4 grid gap-3">
              {primaryRoutes.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-600 transition-colors hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-900">
              Contact
            </h3>
            <div className="mt-4 space-y-4 text-slate-600">
              <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, '')}`} className="block">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="block">
                {siteConfig.email}
              </a>
              <p>{siteConfig.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
