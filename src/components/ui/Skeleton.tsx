import type { HTMLAttributes } from 'react';

type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
};

const roundedMap = {
  sm: 'rounded',
  md: 'rounded-lg',
  lg: 'rounded-2xl',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
};

export function Skeleton({ className = '', rounded = 'md', ...props }: SkeletonProps) {
  return (
    <div
      className={`skeleton-pulse bg-zinc-200/80 ${roundedMap[rounded]} ${className}`}
      aria-hidden
      {...props}
    />
  );
}

export function SkeletonText({ className = '', lines = 3 }: { className?: string; lines?: number }) {
  return (
    <div className={`space-y-2 ${className}`} aria-hidden>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={`h-4 ${i === lines - 1 ? 'w-4/5' : 'w-full'}`} rounded="sm" />
      ))}
    </div>
  );
}

export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`space-y-4 rounded-3xl border border-zinc-200/80 bg-white/50 p-6 ${className}`}>
      <Skeleton className="h-10 w-10" rounded="lg" />
      <Skeleton className="h-5 w-3/4" />
      <SkeletonText lines={2} />
    </div>
  );
}
