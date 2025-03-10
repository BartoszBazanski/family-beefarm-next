import { Metadata } from "next";
import { HeroSection } from "./_sections/HeroSection";

export const metadata: Metadata = {
  title: 'Strona główna | Pasieka Szczygiełkowa',
  description: 'Miody z własnej pasieki, produkty pszczele i nie tylko',
};

export default function Home() {
  return <section>
    <HeroSection />
  </section>;
}
