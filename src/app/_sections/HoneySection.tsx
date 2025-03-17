import Link from "next/link";

import { HoneyCard } from "@/components/HoneyCard/HoneyCard";
import { HexPatternButton } from "@/components/Button/HexPatternButton";

import GoldenrodHoneyJarImage from '@/assets/images/honey/honey_goldenrod_jar.png';
import HeatherHoneyJarImage from '@/assets/images/honey/honey_heather_jar.png';
import HoneydewHoneyJarImage from '@/assets/images/honey/honey_honeydew_jar.png';

export const HoneySection = () => {
  return (
    <section id="miody" className="py-22 md:py-26">
      <div className="container">
        <h2 className="mb-10 text-3xl font-medium md:text-4xl">Nasze miody</h2>
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <HoneyCard imageSrc={GoldenrodHoneyJarImage} title="Miód nawłociowy" linkHref="/miody/nawlociowy" />
          <HoneyCard imageSrc={HeatherHoneyJarImage} title="Miód wrzosowy" linkHref="/miody/wrzosowy" />
          <HoneyCard imageSrc={HoneydewHoneyJarImage} title="Miód spadziowy" linkHref="/miody/spadziowy" />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3">
          <div className="p-4 md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-2">
            <Link href="/miody">
              <HexPatternButton className="w-full">Zobacz więcej</HexPatternButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
