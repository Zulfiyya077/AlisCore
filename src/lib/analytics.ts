declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

interface EventParams {
  [key: string]: string | number | boolean | undefined;
}

export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, params);
}

export function trackPageView(url: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'page_view', {
    page_location: url,
  });
}

export function trackCtaClick(location: string, ctaLabel: string) {
  trackEvent('cta_click', {
    cta_location: location,
    cta_label: ctaLabel,
  });
}

export function trackLeadSubmitted(source: string, status: 'success' | 'error') {
  trackEvent('generate_lead', {
    source,
    status,
  });
}
