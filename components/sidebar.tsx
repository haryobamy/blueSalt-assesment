'use client';

import { Settings } from 'lucide-react';

import Link from 'next/link';

import Image from 'next/image';

import {
  Navlinks1,
  Navlinks2,
  Navlinks3,
  Navlinks4,
} from '@/constants/navlinks';

function NavItem({
  href,
  icon: Icon,
  children,
  toggle,
}: {
  href: string;
  icon: TIcon;
  toggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={toggle}
      className='flex items-center px-3 py-2 text-sm rounded-md transition-colors text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1F1F23]'
    >
      <Icon className='h-4 w-4 mr-3 flex-shrink-0' />
      {children}
    </Link>
  );
}

type Props = {
  isMobileMenuOpen: boolean;
  toggle: () => void;
};

export default function Sidebar({ toggle, isMobileMenuOpen }: Props) {
  return (
    <>
      <nav
        className={`
                fixed inset-y-0 left-0 z-[70] w-64 bg-white dark:bg-[#0F0F12] transform transition-transform duration-200 ease-in-out
                lg:translate-x-0 lg:static lg:w-64 border-r border-gray-200 dark:border-[#1F1F23]
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
      >
        <div className='h-full flex flex-col'>
          <Link
            href='/dashboard'
            target='_blank'
            rel='noopener noreferrer'
            className='h-16 px-6 flex items-center border-b border-gray-200 dark:border-[#1F1F23]'
          >
            <div className='flex items-center gap-3'>
              <Image
                src='https://kokonutui.com/logo.svg'
                alt='Acme'
                width={32}
                height={32}
                className='flex-shrink-0 hidden dark:block'
              />
              <Image
                src='https://kokonutui.com/logo-black.svg'
                alt='Acme'
                width={32}
                height={32}
                className='flex-shrink-0 block dark:hidden'
              />
              <span className='text-lg font-semibold hover:cursor-pointer text-gray-900 dark:text-white'>
                logoipsum
              </span>
            </div>
          </Link>

          <div className='flex-1 overflow-y-auto py-4 px-4'>
            <div className='space-y-2'>
              <div className='border-b pb-3'>
                <div className='space-y-3'>
                  {Navlinks1.map((link) => (
                    <NavItem
                      toggle={toggle}
                      key={`${link.label}`}
                      href={link.url}
                      icon={link.icon}
                    >
                      {link?.label}
                    </NavItem>
                  ))}
                </div>
              </div>

              <div className='border-b pb-3'>
                <div className='space-y-3'>
                  {Navlinks2.map((link) => (
                    <NavItem
                      toggle={toggle}
                      key={`${link.label}`}
                      href={link.url}
                      icon={link.icon}
                    >
                      {link?.label}
                    </NavItem>
                  ))}
                </div>
              </div>

              <div className='border-b pb-3'>
                <div className='space-y-3'>
                  {Navlinks3.map((link) => (
                    <NavItem
                      toggle={toggle}
                      key={`${link.label}`}
                      href={link.url}
                      icon={link.icon}
                    >
                      {link?.label}
                    </NavItem>
                  ))}
                </div>
              </div>

              <div>
                {/* <div className='px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400'>
                  Overview
                </div> */}
                <div className='space-y-3'>
                  {Navlinks4.map((link) => (
                    <NavItem
                      toggle={toggle}
                      key={`${link.label}`}
                      href={link.url}
                      icon={link.icon}
                    >
                      {link?.label}
                    </NavItem>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='px-4 py-4 border-t border-gray-200 dark:border-[#1F1F23]'>
            <div className='space-y-1'>
              <NavItem toggle={toggle} href='#' icon={Settings}>
                ByeWind
              </NavItem>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-[65] lg:hidden'
          onClick={() => toggle()}
        />
      )}
    </>
  );
}
