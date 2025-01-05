import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import InstagramIcon from '@/assets/icons/instagram.svg';
import { CopyRights } from './CopyRights';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Kontakt */}
          <div>
            <h3 className="mb-4 font-playfair text-xl text-secondary-500">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin className="w-5 text-secondary-500" />
                <span className="font-lato">
                  Wola Szczygiełkowa 108
                  <br />
                  26-006 Nowa Słupia
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 text-secondary-500" />
                <a href="tel:+48502746023" className="font-lato transition-colors hover:text-secondary-500">
                  502 746 023
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 text-secondary-500" />
                <a href="tel:+48506047318" className="font-lato transition-colors hover:text-secondary-500">
                  506 047 318
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 text-secondary-500" />
                <a
                  href="mailto:pasiekawolaszczygielkowa@gmail.com"
                  className="font-lato transition-colors hover:text-secondary-500"
                >
                  szczygielkowapasieka@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon className="w-5 text-secondary-500" />
                <a
                  href="https://www.instagram.com/pasieka_wolaszczygielkowa"
                  target="_blank"
                  className="transition-colors hover:text-secondary-500"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-playfair text-xl text-secondary-500">Szybkie linki</h3>
            <ul className="space-y-2 font-lato">
              <li>
                <a href="/o-nas" className="transition-colors hover:text-secondary">
                  O nas
                </a>
              </li>
              <li>
                <a href="/miody" className="transition-colors hover:text-secondary">
                  Nasze produkty
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary/20">
        <div className="container py-4">
          <CopyRights />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
