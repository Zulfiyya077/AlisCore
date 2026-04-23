import { Skeleton, SkeletonText } from '@/components/ui/Skeleton';

type HomepageSkeletonProps = {
  isDark?: boolean;
};

export function HomepageSkeleton({ isDark = false }: HomepageSkeletonProps) {
  return (
    <div
      className={`min-h-[calc(100vh-5rem)] ${
        isDark ? 'bg-zinc-950' : 'bg-zinc-50'
      }`}
      aria-busy
      aria-label="Loading page"
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-6">
            <Skeleton className="h-9 max-w-xs" rounded="full" />
            <Skeleton className="h-14 w-full max-w-2xl" rounded="lg" />
            <Skeleton className="h-14 w-full max-w-xl" rounded="lg" />
            <div className="flex flex-wrap gap-3 pt-2">
              <Skeleton className="h-12 w-44" rounded="xl" />
              <Skeleton className="h-12 w-40" rounded="xl" />
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <Skeleton className="h-24" rounded="2xl" />
              <Skeleton className="h-24" rounded="2xl" />
              <Skeleton className="h-24" rounded="2xl" />
            </div>
          </div>
          <div
            className={`rounded-3xl border p-8 ${
              isDark ? 'border-zinc-800 bg-zinc-900/50' : 'border-zinc-200 bg-white'
            }`}
          >
            <Skeleton className="mb-2 h-4 w-32" />
            <Skeleton className="mb-6 h-8 w-full" />
            <SkeletonText lines={4} />
          </div>
        </div>

        <div className="mt-24 space-y-4">
          <Skeleton className="mx-auto h-5 w-48" />
          <Skeleton className="mx-auto h-10 max-w-lg" rounded="lg" />
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <Skeleton className="h-48" rounded="3xl" />
            <Skeleton className="h-48" rounded="3xl" />
            <Skeleton className="h-48" rounded="3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
