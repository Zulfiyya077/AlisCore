'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';
import { siteConfig } from '@/lib/site';

export function AnalyticsProvider() {
  const pathname = usePathname();
  const gaId = siteConfig.googleAnalyticsId;
  const clarityId = siteConfig.clarityId;
  const hasTrackedInitialView = useRef(false);

  useEffect(() => {
    if (!gaId) {
      return;
    }

    const search = typeof window !== 'undefined' ? window.location.search : '';
    const url = search ? `${pathname}${search}` : pathname;

    if (!hasTrackedInitialView.current) {
      hasTrackedInitialView.current = true;
      return;
    }

    trackPageView(url);
  }, [gaId, pathname]);

  return (
    <>
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                send_page_view: false
              });
              gtag('event', 'page_view', {
                page_location: window.location.pathname + window.location.search
              });
            `}
          </Script>
        </>
      )}

      {clarityId && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      )}
    </>
  );
}
