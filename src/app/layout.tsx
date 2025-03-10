'use client';

import { Suspense } from 'react';
import { Lato, Playfair_Display } from 'next/font/google';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

import './globals.css';
import { cn } from '@/lib/cn';
import { Metadata } from 'next';
import Image from 'next/image';

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

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={cn('bg-primary-100', lato.className, playfairDisplay.variable, lato.variable)}>
        <Suspense>
          <ProgressBar height="4px" color="var(--color-accent)" options={{ showSpinner: false }} shallowRouting />
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Suspense>
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
