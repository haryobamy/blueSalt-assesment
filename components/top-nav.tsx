'use client';

import {
  Bell,
  ChevronRight,
  CommandIcon,
  History,
  Search,
  Sidebar,
  Slash,
} from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

type Props = {
  toggle: () => void;
};
export default function TopNav({ toggle }: Props) {
  const breadcrumbs: BreadcrumbItem[] = [{ label: 'dashboard', href: '#' }];

  return (
    <nav className='px-3 sm:px-6 flex items-center justify-between bg-white dark:bg-[#0F0F12] border-b border-[#F0ECEC] dark:border-[#1F1F23] h-full'>
      <div className='font-medium text-sm hidden sm:flex items-center space-x-1 truncate max-w-[300px]'>
        {breadcrumbs.map((item, index) => (
          <div key={item.label} className='flex items-center'>
            {index > 0 && (
              <ChevronRight className='h-4 w-4 text-gray-500 dark:text-gray-400 mx-1' />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className='text-black text-[22px] font-[500] capitalize dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors'
              >
                {item.label}
              </Link>
            ) : (
              <span className='text-black font-[500] !text-[22px] dark:text-gray-100'>
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className='flex items-center gap-1 sm:gap-3 ml-auto sm:ml-0'>
        <div className='flex items-center gap-2 bg-[#1C1C1C0D] h-9 p-2 rounded-lg'>
          <Search size={14} color='#1C1C1C33' />
          <input
            type='search'
            className='border-0 outline-none bg-transparent h-full'
            placeholder='Search'
          />
          <div className='flex items-center'>
            <CommandIcon size={14} color='#1C1C1C33' />
            <Slash size={14} color='#1C1C1C33' />
          </div>
        </div>
        <ThemeToggle />
        <button
          type='button'
          className='p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-full transition-colors'
        >
          <History className='h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300' />
        </button>
        <button
          type='button'
          className='p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-full transition-colors'
        >
          <Bell className='h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300' />
        </button>

        <button
          onClick={toggle}
          type='button'
          className='p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-full transition-colors'
        >
          <Sidebar className='h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300' />
        </button>

        {/* <DropdownMenu>
          <DropdownMenuTrigger className='focus:outline-none'>
            <Image
              src=''
              alt='User avatar'
              width={28}
              height={28}
              className='rounded-full ring-2 ring-gray-200 dark:ring-[#2B2B30] sm:w-8 sm:h-8 cursor-pointer'
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align='end'
            sideOffset={8}
            className='w-[280px] sm:w-80 bg-background border-border rounded-lg shadow-lg'
          >
            <Profile avatar='' />
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
    </nav>
  );
}
