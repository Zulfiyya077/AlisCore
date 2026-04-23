'use client';

import { usePathname } from 'next/navigation';

export function NavigationProgress() {
  const pathname = usePathname();

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px] overflow-hidden bg-zinc-200/40 dark:bg-zinc-900/80"
      aria-hidden
    >
      <div
        key={pathname}
        className="nav-progress-sweep nav-progress-fill h-full w-full origin-left"
      />
    </div>
  );
}
