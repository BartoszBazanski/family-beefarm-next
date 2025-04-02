import { Metadata } from 'next';
import config from '@payload-config';
import { getPayload } from 'payload';

import { HoneyCard } from '@/components/HoneyCard/HoneyCard';
import { getImageSrc } from 'utils/payload';

export const metadata: Metadata = {
  title: 'Nasze miody | Pasieka Szczygiełkowa',
};

export default async function HoneysPage() {
  const payload = await getPayload({ config });
  const honeyData = await payload.find({
    collection: 'honeys',
    pagination: false,
    sort: '-createdAt',
  });
  const honeys = honeyData.docs;

  return (
    <section className="text-primary container min-h-screen pt-24 pb-10">
      <h2 className="mb-10 text-3xl font-medium md:text-4xl">Nasze miody</h2>
      <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {honeys.map((honey) => (
          <HoneyCard
            key={honey.id}
            imageSrc={getImageSrc(honey.image)}
            additionalImageSrc={getImageSrc(honey.additional_image)}
            title={honey.name}
            linkHref={`/miody/${honey.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
