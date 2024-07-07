'use client';

import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

const navigation = [
  { name: 'O Nas', href: '/o-nas' },
  { name: 'Miody', href: '/miody' },
  { name: 'Przepisy', href: '/przepisy' },
  { name: 'Kontakt', href: '/kontakt' }
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <Disclosure as={Fragment}>
      {({ open }) => (
        <>
          {open ? (
            <Disclosure.Button
              as="div"
              className="fixed top-0 bottom-0 right-0 left-0"
            />
          ) : null}
          <div
            className={classNames(
              'bg-white text-yellow-500 fixed top-0 w-full border-y border-yellow-500 shadow-yellow-500',
              {
                'shadow-none': open,
                'shadow-sm': !open
              }
            )}
          >
            <div className="mx-auto container px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link href="/">
                      <Image
                        className="h-8 w-auto"
                        loader={({ src, width, quality }) => {
                          return `/api/placeholder/${src}?w=${width}&q=${
                            quality || 75
                          }`;
                        }}
                        src="32x32.png"
                        alt="Your Company"
                        width={32}
                        height={32}
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex gap-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            'rounded-md px-3 py-2 text-sm font-medium underline-offset-4',
                            {
                              underline: item.href === pathname,
                              'hover:underline': item.href !== pathname
                            }
                          )}
                          aria-current={
                            item.href === pathname ? 'page' : undefined
                          }
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
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
              <Disclosure.Panel className="border-y border-yellow-500 shadow-sm shadow-yellow-500 sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      href={item.href}
                      className={classNames(
                        'block rounded-md px-3 py-2 text-base font-medium underline-offset-4',
                        {
                          underline: item.href === pathname,
                          'hover:underline': item.href !== pathname
                        }
                      )}
                      aria-current={item.href === pathname ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
