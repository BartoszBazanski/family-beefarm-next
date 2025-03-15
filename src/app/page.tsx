import { Metadata } from "next";
import { HeroSection } from "./_sections/HeroSection";

export const metadata: Metadata = {
  title: 'Strona główna | Pasieka Szczygiełkowa',
};

export default function Home() {
  return <section>
    <HeroSection />
  </section>;
}
