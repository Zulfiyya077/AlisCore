import type { ReactNode } from 'react';
import { PageFooter } from './PageFooter';
import { PageHeader } from './PageHeader';

interface PageShellProps {
  children: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
    </div>
  );
}
