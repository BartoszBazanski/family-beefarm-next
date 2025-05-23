import Image from 'next/image';
import Link from 'next/link';

import JumbotronImage from '@/assets/images/jumbotron.jpg';
import { HexPatternButton } from '@/components/Button/HexPatternButton';

export const HeroSection = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 grid-rows-1">
      <div className="relative col-start-1 row-start-1">
        <Image
          src={JumbotronImage}
          alt="Pasieka"
          className="absolute inset-0 h-full w-full object-cover"
          placeholder="blur"
          priority
        />
        <div
          style={{ '--gradient-color': 'var(--color-primary)', '--gradient-alpha': '40%' }}
          className="bg-honeycomb-transparent-overlay absolute inset-0 col-start-1 row-start-1 bg-[size:auto_2rem]"
        />
      </div>
      <div className="col-start-1 row-start-1 container flex items-center pt-12 md:pt-16">
        <div className="p4 relative z-10 flex max-w-6xl items-center">
          <div className="text-primary-100 max-w-2xl">
            <h1 className="font-playfair text-shadow mb-6 text-4xl font-medium md:text-6xl">Pasieka Szczygiełkowa</h1>
            <p className="font-lato text-shadow mb-8 text-lg md:text-xl">
              Tradycyjne pszczelarstwo z pasją przekazywane z pokolenia na pokolenie. Naturalne miody prosto z serca Gór
              Świętokrzyskich.
            </p>
            <div className="flex flex-col items-start justify-start gap-4 sm:flex-row">
              <Link href="/#miody">
                <HexPatternButton variant="plain">Zobacz nasze produkty</HexPatternButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
