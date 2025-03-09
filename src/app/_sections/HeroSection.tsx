import Image from 'next/image';
import Link from 'next/link';

import JumbotronImage from '@/assets/images/jumbotron.jpg';
import { HexPatternButton } from '@/components/Button/HexPatternButton';

export const HeroSection = () => {
  return (
    <div className="grid h-screen grid-cols-1 grid-rows-1">
      <div className="col-start-1 row-start-1">
        <Image
          src={JumbotronImage}
          alt="Pasieka"
          className="h-full w-full object-cover"
          placeholder="blur"
          quality={50}
          sizes="100vw"
        />
      </div>
      <div
        style={{ '--gradient-color': 'var(--color-primary)', '--gradient-alpha': '40%' }}
        className="bg-honeycomb-transparent-overlay col-start-1 row-start-1 bg-[size:auto_2rem]"
      />
      <div className="col-start-1 row-start-1 container pt-12 md:pt-16">
        <div className="relative z-10 flex h-screen max-w-6xl items-center px-4">
          <div className="text-primary-100 max-w-2xl">
            <h1 className="font-playfair mb-6 text-4xl md:text-6xl">Pasieka Szczygiełkowa</h1>
            <p className="font-lato mb-8 text-lg md:text-xl">
              Tradycyjne pszczelarstwo z pasją przekazywane z pokolenia na pokolenie. Naturalne miody prosto z serca gór
              Świętokrzyskich.
            </p>
            <div className="flex flex-col items-start justify-start gap-4 sm:flex-row">
              <Link href="/miody">
                <HexPatternButton className="shadow-primary shadow">Zobacz nasze produkty</HexPatternButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
