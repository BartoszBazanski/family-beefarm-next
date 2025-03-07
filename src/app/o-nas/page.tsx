export default function AboutUs() {
  return (
    <section className="py-8 text-primary md:py-20 container">
      {/* Hero section z ciepłym złotym akcentem */}
      <div className="mx-auto mb-12 max-w-6xl">
        <h1 className="mb-4 text-center font-playfair text-3xl font-bold md:text-5xl">
          Pasieka Rodzinna &quot;Złoty Ul&quot;
        </h1>
        <div className="mx-auto mb-4 h-1 w-24 bg-secondary"></div>
        <p className="mb-8 text-center font-lato text-base italic md:text-lg">
          Tradycja pszczelarska przekazywana z pokolenia na pokolenie
        </p>
      </div>

      {/* O nas content */}
      <div className="mx-auto">
        <h2 className="mb-6 font-playfair text-2xl md:text-4xl">Nasza Historia</h2>

        <p className="mb-8 font-lato text-base md:text-lg">
          Od ponad 30 lat z pasją zajmujemy się pszczelarstwem w sercu Podkarpacia. Nasza pasieka to nie tylko miejsce
          pracy, to nasze dziedzictwo i duma rodziny.
        </p>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border-t-4 border-secondary bg-white p-6 shadow-md">
            <h3 className="mb-4 font-lato text-xl font-bold md:text-2xl">Ekologiczne Podejście</h3>
            <p className="font-lato text-base">
              W naszej pasiece stawiamy na naturalne metody pszczelarskie. Nasze ule znajdują się w czystych
              ekologicznie terenach, z dala od zanieczyszczeń.
            </p>
          </div>

          <div className="rounded-lg border-t-4 border-accent bg-white p-6 shadow-md">
            <h3 className="mb-4 font-lato text-xl font-bold md:text-2xl">Jakość i Tradycja</h3>
            <p className="font-lato text-base">
              Każdy słoik miodu to efekt starannej pracy i wieloletniego doświadczenia. Łączymy tradycyjne metody z
              nowoczesnymi standardami jakości.
            </p>
          </div>
        </div>

        <blockquote className="mb-8 rounded-lg bg-primary-300 bg-opacity-20 p-6">
          <p className="border-l-4 border-secondary pl-4 font-lato text-base italic md:text-lg">
            &quot;Pszczoły nauczyły nas, że tylko wspólna praca i szacunek do natury pozwalają stworzyć coś
            wyjątkowego&quot;
            <span className="mt-2 block text-sm text-accent">- Jan Kowalski, założyciel pasieki</span>
          </p>
        </blockquote>

        <div className="rounded-lg border-l-4 border-secondary bg-white p-6 shadow-md">
          <h3 className="mb-4 flex items-center font-lato text-lg font-bold md:text-xl">
            <span className="mr-2 h-2 w-2 rounded-full bg-secondary"></span>
            Nasze Produkty
          </h3>
          <ul className="space-y-2 font-lato text-base">
            <li className="flex items-center">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent"></span>
              Miód wielokwiatowy
            </li>
            <li className="flex items-center">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent"></span>
              Miód wrzosowy
            </li>
            <li className="flex items-center">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent"></span>
              Miód spadziowy
            </li>
            <li className="flex items-center">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent"></span>
              Miody z dodatkami naturalnymi
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
