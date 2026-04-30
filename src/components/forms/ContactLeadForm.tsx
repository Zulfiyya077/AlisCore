'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { trackLeadSubmitted } from '@/lib/analytics';

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';

export type ContactLeadFormLabels = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  send: string;
  sending: string;
  success: string;
  error: string;
  turnstileRequired?: string;
};

type ContactLeadFormProps = {
  leadSource: string;
  isDark?: boolean;
  labels: ContactLeadFormLabels;
  className?: string;
};

export function ContactLeadForm({ leadSource, isDark = false, labels, className }: ContactLeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [website, setWebsite] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [utm, setUtm] = useState({ source: '', medium: '', campaign: '' });
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    setUtm({
      source: params.get('utm_source') || '',
      medium: params.get('utm_medium') || '',
      campaign: params.get('utm_campaign') || '',
    });
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const resetTurnstile = useCallback(() => {
    turnstileRef.current?.reset();
    setTurnstileToken('');
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    if (turnstileSiteKey && !turnstileToken) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          sourcePath: typeof window !== 'undefined' ? `${window.location.pathname}${window.location.search}` : '/',
          website,
          turnstileToken,
          utmSource: utm.source,
          utmMedium: utm.medium,
          utmCampaign: utm.campaign,
        }),
      });

      if (response.status === 429) {
        throw new Error('Rate limited');
      }

      if (!response.ok) {
        throw new Error('Contact submission failed');
      }

      setSubmitStatus('success');
      trackLeadSubmitted(leadSource, 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
      setWebsite('');
      resetTurnstile();
    } catch {
      setSubmitStatus('error');
      trackLeadSubmitted(leadSource, 'error');
      resetTurnstile();
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = `w-full rounded-2xl border px-4 py-3 outline-none transition-shadow focus:ring-2 focus:ring-zinc-500/30 focus:shadow-[0_0_0_3px_rgba(82,82,91,0.16)] ${
    isDark ? 'border-zinc-700 bg-zinc-900/60 text-white' : 'border-zinc-200 bg-white text-zinc-900'
  }`;

  const labelClass = `mb-2 block text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`;

  return (
    <form className={className ? `space-y-5 ${className}` : 'space-y-5'} onSubmit={handleSubmit}>
      <input
        type="text"
        name="website"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>{labels.name} *</label>
          <input className={inputClass} name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label className={labelClass}>{labels.email} *</label>
          <input
            className={inputClass}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>{labels.phone}</label>
          <input className={inputClass} name="phone" value={formData.phone} onChange={handleInputChange} />
        </div>
        <div>
          <label className={labelClass}>{labels.company}</label>
          <input className={inputClass} name="company" value={formData.company} onChange={handleInputChange} />
        </div>
      </div>

      <div>
        <label className={labelClass}>{labels.message} *</label>
        <textarea
          className={`min-h-36 ${inputClass}`}
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </div>

      {turnstileSiteKey ? (
        <div className="flex justify-center">
          <Turnstile
            ref={turnstileRef}
            siteKey={turnstileSiteKey}
            onSuccess={setTurnstileToken}
            onExpire={() => setTurnstileToken('')}
            onError={() => setTurnstileToken('')}
          />
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-modern w-full rounded-2xl px-6 py-4 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-80"
      >
        <span className="flex items-center justify-center gap-2">
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 shrink-0 animate-spin text-emerald-400/90" aria-hidden />
          ) : (
            <Send className="h-4 w-4 shrink-0" />
          )}
          <span>{isSubmitting ? labels.sending : labels.send}</span>
        </span>
      </button>

      {submitStatus === 'success' && (
        <div className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-zinc-800 ring-1 ring-emerald-900/15">
          <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-700" />
          <span>{labels.success}</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800">
          <AlertCircle className="mt-0.5 h-5 w-5" />
          <span>
            {turnstileSiteKey && !turnstileToken && labels.turnstileRequired
              ? labels.turnstileRequired
              : labels.error}
          </span>
        </div>
      )}
    </form>
  );
}
