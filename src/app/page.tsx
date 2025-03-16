import { Metadata } from 'next';
import { HeroSection } from './_sections/HeroSection';
import { HoneySection } from './_sections/HoneySection';

export const metadata: Metadata = {
  title: 'Strona główna | Pasieka Szczygiełkowa',
};

export default function HomePage() {
  return (
    <section>
      <HeroSection />
      <HoneySection />
    </section>
  );
}
