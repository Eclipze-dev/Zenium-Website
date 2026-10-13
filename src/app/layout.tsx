import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CookieConsentRoot from '@/components/cookie-consent/CookieConsentRoot';
import ScrollToTopOnReload from '@/components/ScrollToTopOnReload';
import JsonLd from '@/components/seo/JsonLd';
import { buildPageMetadata } from '@/lib/seo/buildMetadata';
import { organizationSchema } from '@/lib/seo/jsonld';
import { pageSeo } from '@/lib/seo/pages';
import { SITE_URL } from '@/lib/seo/site';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildPageMetadata(pageSeo.home),
};

const gtmId = "GTM-TVPSCJN7";

const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`;

const themeScript = `
(function() {
  try {
    var t = localStorage.getItem('zenium-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

const scrollToTopOnReloadScript = `
(function() {
  try {
    var nav = performance.getEntriesByType('navigation')[0];
    if (!nav || nav.type !== 'reload') return;
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    var root = document.documentElement;
    var previous = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previous;
    window.addEventListener('load', function () {
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      root.style.scrollBehavior = previous;
      if ('scrollRestoration' in history) history.scrollRestoration = 'auto';
    });
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} [scroll-behavior:smooth]`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: scrollToTopOnReloadScript }} />
      </head>
      <body
        className="m-0 bg-zen-bg text-white min-w-[320px] [&_a]:text-inherit [&_a]:no-underline [&_a]:[font:inherit] [&_button]:cursor-pointer [&_button]:[font:inherit]"
        style={{ background: 'var(--bg-gradient)', color: 'var(--text)' }}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ScrollToTopOnReload />
        <JsonLd data={organizationSchema()} />
        <CookieConsentRoot>{children}</CookieConsentRoot>
      </body>
    </html>
  );
}
