type Bucket = {
  count: number;
  windowStart: number;
};

const buckets = new Map<string, Bucket>();

function pruneStale(now: number, windowMs: number) {
  for (const [key, bucket] of buckets) {
    if (now - bucket.windowStart >= windowMs) {
      buckets.delete(key);
    }
  }
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get('x-real-ip')?.trim();
  if (realIp) return realIp;
  const cf = request.headers.get('cf-connecting-ip')?.trim();
  if (cf) return cf;
  return 'unknown';
}

export function checkContactRateLimit(key: string): { ok: true } | { ok: false; retryAfterSeconds: number } {
  const now = Date.now();
  const windowMs = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS || 60_000);
  const max = Number(process.env.CONTACT_RATE_LIMIT_MAX || 5);

  pruneStale(now, windowMs);

  const existing = buckets.get(key);
  if (!existing || now - existing.windowStart >= windowMs) {
    buckets.set(key, { count: 1, windowStart: now });
    return { ok: true };
  }

  if (existing.count >= max) {
    const retryAfterMs = windowMs - (now - existing.windowStart);
    return { ok: false, retryAfterSeconds: Math.max(1, Math.ceil(retryAfterMs / 1000)) };
  }

  existing.count += 1;
  return { ok: true };
}
