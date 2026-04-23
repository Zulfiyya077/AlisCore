import type { HTMLAttributes } from 'react';

type Size = 'sm' | 'md' | 'lg';

export function LoadingSpinner({
  size = 'md',
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement> & { size?: Size }) {
  return (
    <div
      role="status"
      aria-label="Loading"
      data-size={size}
      className={`spinner-brand ${className}`}
      {...props}
    />
  );
}
