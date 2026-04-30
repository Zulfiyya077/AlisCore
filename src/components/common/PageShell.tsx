import type { ReactNode } from 'react';
import { PageFooter } from './PageFooter';
import { PageHeader } from './PageHeader';

interface PageShellProps {
  children: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
    </div>
  );
}
