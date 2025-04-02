import { getPayload } from 'payload';
import config from '@payload-config';
import { notFound } from 'next/navigation';
import { RichText } from '@payloadcms/richtext-lexical/react';
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { Metadata } from 'next';
import Image from 'next/image';
import { getImageSrc } from 'utils/payload';

type HoneyPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export const generateMetadata = async ({ params }: HoneyPageProps): Promise<Metadata> => {
  const payload = await getPayload({ config });
  const resolvedParams = await params;
  const slug = resolvedParams.slug[0];
  const honeyData = await payload.find({
    collection: 'honeys',
    where: {
      slug: {
        equals: slug,
      },
    },
    select: {
      name: true,
    },
  });
  const honey = honeyData.docs[0];
  const honeyTitle = honey.name || 'Miód';

  return {
    title: `${honeyTitle} | Pasieka Szczygiełkowa`,
  };
};

const HoneyPage = async ({ params }: HoneyPageProps) => {
  const payload = await getPayload({ config });
  const resolvedParams = await params;
  const honeyData = await payload.find({
    collection: 'honeys',
    where: {
      slug: {
        equals: resolvedParams.slug[0],
      },
    },
  });

  if (!honeyData?.docs?.length || !honeyData.docs[0]) {
    notFound();
  }
  const honey = honeyData.docs[0];

  return (
    <section className="text-primary container pt-24 pb-10">
      <h2 className="mb-10 text-3xl font-medium md:text-4xl">{honey.name}</h2>
      <div className="flex flex-col justify-between gap-5 md:flex-row">
        <article className="text-justify text-xl">
          {honey.description ? <RichText data={honey.description as SerializedEditorState} /> : null}
        </article>
        <Image src={getImageSrc(honey.image)} alt={honey.name} width={500} height={500} />
      </div>
    </section>
  );
};

export default HoneyPage;
