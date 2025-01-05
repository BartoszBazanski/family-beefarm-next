'use client';

import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LogoIcon from '@/assets/icons/logo.svg';
import { cn } from '@/lib/cn';

import { HexButton } from '../Button/HexButton';

const navigation = [
  { name: 'O Nas', href: '/o-nas' },
  { name: 'Nasze produkty', href: '/miody' },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <Disclosure as="div">
      {({ open }) => (
        <>
          {open ? <DisclosureButton as="div" className="fixed bottom-0 left-0 right-0 top-0 z-20" /> : null}
          <div
            className={cn(
              'fixed top-0 z-50 w-full border-y border-secondary bg-primary-100 text-primary shadow-secondary',
              {
                'shadow-none': open,
                'shadow-sm': !open,
              },
            )}
          >
            <div className="container">
              <div className="flex h-12 items-center justify-between md:h-16">
                <div className="flex items-center justify-center sm:flex-1 sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <DisclosureButton
                      as={Link}
                      href="/"
                      className="text-secondary transition-colors hover:text-secondary-500"
                    >
                      <LogoIcon className="w-10" />
                    </DisclosureButton>
                  </div>
                  <div className="hidden flex-1 sm:ml-6 sm:flex sm:items-center">
                    <div className="flex gap-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn('rounded-md px-3 py-2 text-sm font-medium underline-offset-4', {
                            underline: item.href === pathname,
                            'hover:underline': item.href !== pathname,
                          })}
                          aria-current={item.href === pathname ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="hidden flex-shrink-0 items-center sm:flex">
                    <Link href="/kontakt">
                      <HexButton className="uppercase">Kontakt</HexButton>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
              </div>
            </div>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <DisclosurePanel className="border-y border-yellow-500 shadow-sm shadow-yellow-500 sm:hidden">
                <div className="container space-y-1 pb-3 pt-2">
                  {navigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as={Link}
                      href={item.href}
                      className={cn('block py-2 text-base font-medium underline-offset-4', {
                        underline: item.href === pathname,
                        'hover:underline': item.href !== pathname,
                      })}
                      aria-current={item.href === pathname ? 'page' : undefined}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                  <DisclosureButton as={Link} href="/kontakt">
                    <HexButton className="uppercase">Kontakt</HexButton>
                  </DisclosureButton>
                </div>
              </DisclosurePanel>
            </Transition>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
