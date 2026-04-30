type TurnstileVerifyResponse = {
  success?: boolean;
  'error-codes'?: string[];
};

export async function verifyTurnstileToken(token: string, remoteip?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return { ok: true as const, mode: 'skipped' as const };
  }

  if (!token) {
    return { ok: false as const, mode: 'missing-token' as const };
  }

  const body = new URLSearchParams();
  body.set('secret', secret);
  body.set('response', token);
  if (remoteip) {
    body.set('remoteip', remoteip);
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body,
    });

    const data = (await response.json()) as TurnstileVerifyResponse;

    if (!data.success) {
      console.warn('[turnstile] verification failed', data['error-codes']);
      return { ok: false as const, mode: 'invalid' as const };
    }

    return { ok: true as const, mode: 'verified' as const };
  } catch (error) {
    console.error('[turnstile] verification request failed', error);
    return { ok: false as const, mode: 'unavailable' as const };
  }
}
