import { Metadata } from 'next';

import { HoneyCard } from '@/components/HoneyCard/HoneyCard';

import GoldenrodHoneyJarImage from '@/assets/images/honey/honey_goldenrod_jar.png';
import HeatherHoneyJarImage from '@/assets/images/honey/honey_heather_jar.png';
import HoneydewHoneyJarImage from '@/assets/images/honey/honey_honeydew_jar.png';
import GoldenrodImage from '@/assets/images/honey/goldenrod.png';
import HeatherImage from '@/assets/images/honey/heather.png';

export const metadata: Metadata = {
  title: 'Nasze miody | Pasieka Szczygiełkowa',
};

export default function HoneysPage() {
  return (
    <section className="text-primary container min-h-screen pt-24 pb-10">
      <h2 className="mb-10 text-3xl font-medium md:text-4xl">Nasze miody</h2>
      <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <HoneyCard
          imageSrc={GoldenrodHoneyJarImage}
          additionalImageSrc={GoldenrodImage}
          title="Miód nawłociowy"
          linkHref="/miody/nawlociowy"
        />
        <HoneyCard
          imageSrc={HeatherHoneyJarImage}
          additionalImageSrc={HeatherImage}
          title="Miód wrzosowy"
          linkHref="/miody/wrzosowy"
        />
        <HoneyCard
          imageSrc={HoneydewHoneyJarImage}
          additionalImageSrc={GoldenrodImage}
          title="Miód spadziowy"
          linkHref="/miody/spadziowy"
        />
      </div>
    </section>
  );
}
