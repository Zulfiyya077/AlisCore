import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSubmissionSchema } from '@/lib/contact-schema';
import { sinkLead } from '@/lib/lead-sink';
import { checkContactRateLimit, getClientIp } from '@/lib/rate-limit';
import { siteConfig } from '@/lib/site';
import { verifyTurnstileToken } from '@/lib/turnstile';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function rateLimitKey(clientIp: string, email: string) {
  const scope = process.env.CONTACT_RATE_LIMIT_SCOPE || 'ip';
  if (scope === 'ip_email') {
    return `${clientIp}:${email.toLowerCase()}`;
  }
  return clientIp;
}

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);

    let payload: unknown;
    try {
      payload = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
    }
    const parsed = contactSubmissionSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: 'Invalid submission payload.',
          issues: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const submission = parsed.data;

    if (submission.website) {
      return NextResponse.json({ ok: true, mode: 'filtered' });
    }

    const limited = checkContactRateLimit(`contact:${rateLimitKey(clientIp, submission.email)}`);
    if (!limited.ok) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(limited.retryAfterSeconds),
          },
        },
      );
    }

    const turnstile = await verifyTurnstileToken(submission.turnstileToken, clientIp);
    if (!turnstile.ok) {
      if (turnstile.mode === 'unavailable') {
        return NextResponse.json(
          { error: 'Human verification is temporarily unavailable. Please try again.' },
          { status: 503 },
        );
      }
      return NextResponse.json({ error: 'Human verification failed.' }, { status: 400 });
    }

    const safeName = escapeHtml(submission.name);
    const safeEmail = escapeHtml(submission.email);
    const safePhone = escapeHtml(submission.phone || 'Not provided');
    const safeCompany = escapeHtml(submission.company || 'Not provided');
    const safeSourcePath = escapeHtml(submission.sourcePath || '/');
    const safeMessage = escapeHtml(submission.message).replace(/\n/g, '<br />');

    const text = [
      `New website inquiry from ${submission.name}`,
      '',
      `Email: ${submission.email}`,
      `Phone: ${submission.phone || 'Not provided'}`,
      `Company: ${submission.company || 'Not provided'}`,
      `Source path: ${submission.sourcePath || '/'}`,
      `UTM: ${submission.utmSource || '-'} / ${submission.utmMedium || '-'} / ${submission.utmCampaign || '-'}`,
      '',
      'Message:',
      submission.message,
    ].join('\n');

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h2 style="margin-bottom: 16px;">New website inquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Source path:</strong> ${safeSourcePath}</p>
        <p><strong>UTM:</strong> ${escapeHtml(submission.utmSource || '-')} / ${escapeHtml(submission.utmMedium || '-')} / ${escapeHtml(submission.utmCampaign || '-')}</p>
        <hr style="margin: 24px 0;" />
        <p><strong>Message</strong></p>
        <p>${safeMessage}</p>
      </div>
    `;

    const submittedAt = new Date().toISOString();

    const leadPayload = {
      name: submission.name,
      email: submission.email,
      phone: submission.phone,
      company: submission.company,
      message: submission.message,
      sourcePath: submission.sourcePath || '/',
      utmSource: submission.utmSource || undefined,
      utmMedium: submission.utmMedium || undefined,
      utmCampaign: submission.utmCampaign || undefined,
      submittedAt,
    };

    const sinkPromise = sinkLead(leadPayload);

    if (!resend) {
      console.info('[contact-api] RESEND_API_KEY missing. Submission accepted but email not sent.', submission);
      await sinkPromise;
      return NextResponse.json({
        ok: true,
        mode: 'log-only',
      });
    }

    const emailPromise = resend.emails.send({
      from: siteConfig.resendFromEmail,
      to: siteConfig.contactToEmail,
      replyTo: submission.email,
      subject: `New inquiry from ${submission.name}`,
      text,
      html,
    });

    const [sinkResult, emailResult] = await Promise.allSettled([sinkPromise, emailPromise]);

    if (sinkResult.status === 'rejected') {
      console.error('[contact-api] lead sink failed', sinkResult.reason);
    }

    if (emailResult.status === 'rejected') {
      console.error('[contact-api] resend failed', emailResult.reason);
      return NextResponse.json({ error: 'Unable to deliver email right now.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true, mode: 'email-sent' });
  } catch (error) {
    console.error('[contact-api] submission failed', error);

    return NextResponse.json(
      {
        error: 'Unable to process submission.',
      },
      { status: 500 },
    );
  }
}
