import { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';

import InstagramIcon from '@/assets/icons/instagram.svg';

export const metadata: Metadata = {
  title: 'Kontakt | Pasieka Szczygiełkowa',
  description: 'Miody z własnej pasieki, produkty pszczele i nie tylko',
};

export default function Contact() {
  return (
    <section className="text-primary container pt-30 pb-20">
      <article className="max-w-2xl space-y-4">
        <h1 className="font-playfair mb-10 text-3xl md:text-5xl">Kontakt</h1>
        <h2 className="text-secondary text-2xl md:text-3xl">Pasieka Szczygiełkowa</h2>
        <p className="font-playfair mb-10 text-xl">
          Jesteśmy pasjonatami pszczelarstwa z wieloletnim doświadczeniem. Nasze ule znajdują się w sercu gór Świętokrzyskich, z dala od zanieczyszczeń i przemysłu, co zapewnia najwyższą jakość i czystość naszych produktów.
        </p>
        <h3 className="text-accent text-xl underline underline-offset-4 md:text-2xl">Dane kontaktowe</h3>
        <h4 className="text-secondary text-lg md:text-xl">Adres:</h4>
        <p className="">Paweł Bazański</p>
        <p className="">
          Wola Szczygiełkowa 108
          <br />
          26-006 Nowa Słupia
          <br />
          woj. Świętokrzyskie
        </p>
        <h4 className="text-secondary text-lg md:text-xl">Telefony:</h4>
        <ul>
          <li className="flex items-center gap-2">
            <Phone className="text-secondary-500 w-5" />
            <a href="tel:+48502746023" className="font-lato hover:text-secondary-500 transition-colors">
              502 746 023
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="text-secondary-500 w-5" />
            <a href="tel:+48506047318" className="font-lato hover:text-secondary-500 transition-colors">
              506 047 318
            </a>
          </li>
        </ul>
        <h4 className="text-secondary text-lg md:text-xl">Email:</h4>
        <p className="flex items-center gap-2">
          <Mail className="text-secondary-500 w-5" />
          <a
            href="mailto:kontakt@pasiekaszczygielkowa.pl"
            className="font-lato hover:text-secondary-500 transition-colors"
          >
            kontakt@pasiekaszczygielkowa.pl
          </a>
        </p>
        <h4 className="text-secondary text-lg md:text-xl">Godziny otwarcia:</h4>
        <p className="">
          Zapraszamy do odwiedzin i zakupów bezpośrednio w naszej pasiece. Prosimy o kontakt telefoniczny, aby
          potwierdzić dostępność.
        </p>
        <h4 className="text-secondary text-lg md:text-xl">Zamówienia::</h4>
        <ol className="marker:text-secondary list-inside list-decimal">
          Oferujemy możliwość zamówienia naszych produktów z dostawą na terenie całej Polski. Aby złożyć zamówienie:
          <li className="mt-1 indent-2">
            Zadzwoń pod numer{' '}
            <a href="tel:+48502746023" className="font-lato hover:text-secondary-500 transition-colors">
              <Phone className="text-secondary-500 mr-1 inline w-4 align-bottom" />
              502 746 023
            </a>
          </li>
          <li className="mt-1 indent-2">
            Wyślij email na adres{' '}
            <a
              href="mailto:kontakt@pasiekaszczygielkowa.pl"
              className="font-lato hover:text-secondary-500 transition-colors"
            >
              <Mail className="text-secondary-500 mr-1 inline w-4 align-bottom" />
              kontakt@pasiekaszczygielkowa.pl
            </a>
          </li>
        </ol>
        <p className="">
          Od września do marca prowadzimy sprzedaż stacjonarną na{' '}
          <a
            className="hover:text-secondary-500 transition-colors"
            href="https://maps.app.goo.gl/Z4nUAjQrssx8PW8C7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin className="text-secondary-500 mr-1 inline w-4 align-bottom" />
            Bazarze Wolumen w Warszawie.
          </a>
        </p>
        <h4 className="text-secondary text-lg md:text-xl">Znajdź nas</h4>
        <div className="space-y-1">
          <p className="">
            <a
              className="hover:text-secondary-500 flex items-center gap-2 transition-colors"
              href="https://maps.app.goo.gl/qe9CB4mBxYjpN3FD6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="text-secondary-500 w-5" />
              <span className="font-lato">Pasieka</span>
            </a>
          </p>
          <p className="">
            <a
              className="hover:text-secondary-500 flex items-center gap-2 transition-colors"
              href="https://maps.app.goo.gl/XFucYYHx2LyELaFt9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="text-secondary-500 w-5" />
              <span className="font-lato">Warszawa</span>
            </a>
          </p>
        </div>
        <h4 className="text-secondary text-lg md:text-xl">Media społecznościowe</h4>
        <ul className="">
          Śledź nas w mediach społecznościowych, aby być na bieżąco z nowościami, sezonowymi ofertami i ciekawostkami ze
          świata pszczelarstwa:
          <li className="mt-2 flex items-center gap-2">
            <InstagramIcon className="text-secondary-500 w-5" />
            <a
              href="https://www.instagram.com/pasieka_wolaszczygielkowa"
              target="_blank"
              className="hover:text-secondary-500 transition-colors"
            >
              Instagram
            </a>
          </li>
        </ul>
        <p className="mt-10 text-justify text-xs italic">
          Zgodnie z art. 13 ogólnego rozporządzenia o ochronie danych osobowych z dnia 27 kwietnia 2016 r. informujemy,
          że administratorem Pani/Pana danych osobowych jest Pasieka Szczygiełkowa z siedzibą w Woli Szczygiełkowej.
          Dane będą przetwarzane w celu odpowiedzi na zapytania oraz realizacji zamówień.
        </p>
      </article>
    </section>
  );
}
