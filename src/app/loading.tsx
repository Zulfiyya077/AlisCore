import { Skeleton } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="border-b border-zinc-200/80 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="space-y-2">
            <Skeleton className="h-8 w-32" rounded="md" />
            <Skeleton className="h-3 w-48" rounded="sm" />
          </div>
          <div className="hidden gap-2 md:flex">
            <Skeleton className="h-9 w-20" rounded="xl" />
            <Skeleton className="h-9 w-20" rounded="xl" />
            <Skeleton className="h-9 w-24" rounded="xl" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Skeleton className="mb-4 h-4 w-24" />
        <Skeleton className="mb-6 h-12 max-w-2xl" rounded="lg" />
        <Skeleton className="mb-3 h-4 w-full max-w-3xl" />
        <Skeleton className="mb-3 h-4 w-full max-w-2xl" />
        <Skeleton className="h-4 w-2/3 max-w-xl" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-56" rounded="3xl" />
          <Skeleton className="h-56" rounded="3xl" />
          <Skeleton className="h-56" rounded="3xl" />
        </div>
      </div>
    </div>
  );
}
