import { Metadata } from "next";
import { HeroSection } from "./_sections/HeroSection";

export const metadata: Metadata = {
  title: 'Rodzinna pasieka | Szczygiełkowa pasieka',
  description:
    'Miody z własnej pasieki, produkty pszczele i nie tylko',
};

export default function Home() {
  return <section>
    <HeroSection />
  </section>;
}
