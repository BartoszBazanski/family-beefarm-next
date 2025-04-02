import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import { HexPatternButton } from '../Button/HexPatternButton';
import { HexFrameImage } from '../HexFrame/HexFrameImage';

type HoneyCardProps = {
  imageSrc: StaticImageData | string;
  additionalImageSrc: StaticImageData | string;
  title: string;
  linkHref: string;
};

export const HoneyCard = ({ imageSrc, additionalImageSrc, title, linkHref }: HoneyCardProps) => {
  return (
    <article className="group shadow-secondary-900 border-secondary-500 hover:shadow-secondary-500 relative rounded-xl border-2 shadow hover:shadow-lg">
      <HexFrameImage className="absolute -top-8 -right-8 z-10" imageSrc={additionalImageSrc} />
      <div className="grid overflow-hidden rounded-xl">
        <div
          className="bg-honeycomb-transparent-overlay border-secondary-500 relative aspect-square border-b bg-[size:auto_2rem]"
          style={{ '--gradient-color': 'var(--color-primary-100)', '--gradient-alpha': '60%' }}
        >
          <Image src={imageSrc} alt={title} className="group-hover:scale-105 transition-transform object-cover size-full" priority width={500} height={500} />
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium">{title}</h3>
            <p className="">
              poj. <strong>0.45l</strong> / <strong>0.9l</strong>
            </p>
          </div>
          <Link href={linkHref}>
            <HexPatternButton className="w-full">Dowiedz się więcej</HexPatternButton>
          </Link>
        </div>
      </div>
    </article>
  );
};
