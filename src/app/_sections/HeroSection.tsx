import Image from 'next/image';

import JumbotronImage from '@/assets/images/jumbotron.webp';
import Link from 'next/link';
import { HexButton } from '@/components/Button/HexButton';

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
      <div className="col-start-1 row-start-1 bg-primary/60"></div>
      <div className="container col-start-1 row-start-1 pt-12 md:pt-16">
        <div className="relative z-10 mx-auto flex h-screen max-w-6xl items-center px-4">
          <div className="max-w-2xl text-primary-100">
            <h1 className="mb-6 font-playfair text-4xl md:text-6xl">Szczygiełkowa Pasieka</h1>
            <p className="mb-8 font-lato text-lg md:text-xl">
              Tradycyjne pszczelarstwo z pasją przekazywane z pokolenia na pokolenie. Naturalne miody prosto z serca gór
              Świętokrzyskich.
            </p>
            <div className="flex flex-col items-start justify-start gap-4 sm:flex-row">
              <Link href="/miody">
                <HexButton className="h-18 sm:h-20">Zobacz nasze produkty</HexButton>
              </Link>
              <Link href="/o-nas">
                <HexButton className="h-18 sm:h-20" variant="secondary">
                  Poznaj naszą historię
                </HexButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
