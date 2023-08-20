import React from 'react';
import Link from 'next/link';

import InstagramIcon from '@/assets/icons/instagram.svg?svgr';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 items-center justify-center border-yellow-500 border-t px-8 pt-8 pb-4">
      <Link
        href="https://www.instagram.com/pasieka_wolaszczygielkowa"
        target="_blank"
        className="text-yellow-500"
      >
        <InstagramIcon className="w-8" />
      </Link>
      <address className="text-base text-center">
        <strong>Kontakt:</strong>
        <br />
        Wola Szczygiełkowa 108
        <br />
        26-006 Nowa Słupia
        <br />
        <span>
          <strong>email: </strong>
          <a href="mailto:pasiekawolaszczygielkowa@gmail.com">
            pasiekawolaszczygielkowa@gmail.com
          </a>
        </span>
        <br />
        <span>
          <strong>tel: </strong>
          <a href="tel:+48502746023">502 746 023</a>
        </span>
        <br />
        <span>
          <strong>tel: </strong>
          <a href="tel:+48506047318">506 047 318</a>
        </span>
        <br />
      </address>
      <div className="text-gray-400 text-sm">
        &copy; Rodzinna pasieka w Woli Szczygiełkowej {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
