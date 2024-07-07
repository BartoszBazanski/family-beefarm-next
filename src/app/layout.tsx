'use client';

import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import classNames from 'classnames';

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
      <body className={classNames(inter.className)}>
        <Suspense>
          <ProgressBar
            height="4px"
            color="#F2994A"
            options={{ showSpinner: false }}
            shallowRouting
          />
          <Navigation />
          <main className="min-h-screen pt-16">
            <div className="container mx-auto p-5">{children}</div>
          </main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
