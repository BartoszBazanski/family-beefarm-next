'use client';

import { Inter } from 'next/font/google';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

import './globals.css';
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className)}>
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
      </body>
    </html>
  );
}
