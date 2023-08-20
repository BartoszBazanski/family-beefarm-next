'use client';

import { Inter } from 'next/font/google';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBar
          height="4px"
          color="#F2994A"
          options={{ showSpinner: false }}
          shallowRouting
        />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
