import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CookieConsentRoot from '@/components/cookie-consent/CookieConsentRoot';
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} [scroll-behavior:smooth]`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className="m-0 bg-zen-bg text-white min-w-[320px] [&_a]:text-inherit [&_a]:no-underline [&_a]:[font:inherit] [&_button]:cursor-pointer [&_button]:[font:inherit]"
        style={{ background: 'var(--bg-gradient)', color: 'var(--text)' }}
      >
        <JsonLd data={organizationSchema()} />
        <CookieConsentRoot>{children}</CookieConsentRoot>
      </body>
    </html>
  );
}
