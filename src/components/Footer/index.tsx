import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

import InstagramIcon from '@/assets/icons/instagram.svg';

import { CopyRights } from './CopyRights';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <p className="font-playfair text-secondary-500 mb-4 text-xl">Kontakt</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin className="text-secondary-500 w-5" />
                <span className="font-lato">
                  Wola Szczygiełkowa 108
                  <br />
                  26-006 Nowa Słupia
                </span>
              </li>
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
              <li className="flex items-center gap-2">
                <Mail className="text-secondary-500 w-5" />
                <a
                  href="mailto:kontakt@pasiekaszczygielkowa.pl"
                  className="font-lato hover:text-secondary-500 transition-colors"
                >
                  kontakt@pasiekaszczygielkowa.pl
                </a>
              </li>
              <li className="flex items-center gap-2">
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
          </div>
          <div>
            <p className="font-playfair text-secondary-500 mb-4 text-xl">Szybkie linki</p>
            <ul className="font-lato space-y-2">
              <li>
                <Link href="/miody" className="hover:text-secondary transition-colors">
                  Nasze produkty
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        style={{ '--gradient-color': 'var(--color-primary)', '--gradient-alpha': '80%' }}
        className="border-secondary/20 bg-honeycomb-transparent-overlay border-t bg-[size:auto_2rem]"
      >
        <div className="container py-4">
          <CopyRights />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
