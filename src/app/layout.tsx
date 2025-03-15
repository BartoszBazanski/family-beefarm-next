import { Lato, Playfair_Display } from 'next/font/google';
import Image from 'next/image';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

import { cn } from '@/lib/cn';
import { Metadata } from 'next';

import './globals.css';
import { AppProviders } from '@/providers/AppProviders';
import Script from 'next/script';

const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap'
});

const lato = Lato({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap'
});

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Pasieka Szczygiełkowa',
  image: 'https://www.pasiekaszczygielkowa.pl/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Wola Szczygiełkowa 108',
    addressLocality: 'Nowa Słupia',
    postalCode: '26-006',
    addressRegion: 'Swietokrzyskie',
    addressCountry: 'Polska',
  },
  telephone: '+48 502 746 023',
  email: 'kontakt@pasiekaszczygielkowa.pl',
  url: 'https://www.pasiekaszczygielkowa.pl/',
};

export const metadata: Metadata = {
  description: 'Miody z własnej pasieki, produkty pszczele i nie tylko',
  openGraph: {
    type: 'website',
    title: 'Pasieka Szczygiełkowa',
    url: 'https://www.pasiekaszczygielkowa.pl/',
    siteName: 'Pasieka Szczygiełkowa',
    images: [{ url: 'https://www.pasiekaszczygielkowa.pl/og-image.png', alt: 'Pasieka Szczygiełkowa' }],
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={cn('bg-primary-100', lato.className, playfairDisplay.variable, lato.variable)}>
        <AppProviders>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AppProviders>
        <div className="hidden">
          <Image
            src="/patterns/honeycomb_pattern_light.svg"
            alt="Honeycomb pattern light"
            width="161"
            height="136"
            priority
          />
          <Image
            src="/patterns/honeycomb_pattern_transparent.svg"
            alt="Honeycomb pattern transparent"
            width="161"
            height="136"
            priority
          />
        </div>
        <Script
          id="schema-business"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </body>
    </html>
  );
}
