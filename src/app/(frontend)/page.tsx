import { Metadata } from 'next';
import config from '@payload-config';
import { getPayload } from 'payload';

import { HeroSection } from './_sections/HeroSection';
import { HoneySection } from './_sections/HoneySection';

export const metadata: Metadata = {
  title: 'Strona główna | Pasieka Szczygiełkowa',
};

export default async function HomePage() {
  const payload = await getPayload({ config });
  const honeyData = await payload.find({
    collection: 'honeys',
    pagination: false,
    sort: '-createdAt',
    where: {
      promoted: {
        equals: true,
      },
    },
  });
  const honeys = honeyData.docs;
  return (
    <section>
      <HeroSection />
      <HoneySection data={honeys} />
    </section>
  );
}
