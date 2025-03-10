import { Lato, Playfair_Display } from 'next/font/google';
import Image from 'next/image';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

import { cn } from '@/lib/cn';
import { Metadata } from 'next';

import './globals.css';
import { AppProviders } from '@/providers/AppProviders';

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

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    title: 'Pasieka Szczygiełkowa',
    url: 'https://www.pasiekaszczygielkowa.pl/',
    siteName: 'Pasieka Szczygiełkowa',
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
      </body>
    </html>
  );
}
