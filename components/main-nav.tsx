'use client';

import Link from 'next/link';
import React from 'react';
import { Icons } from './icons';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const MainNav = () => {
  const pathName = usePathname();
  return (
    <nav className='flex items-center space-x-4 lg:space-x-6'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <Icons.logo className='h-6 w-6' />
        <span className='font-bold'>{siteConfig.name}</span>
      </Link>
      <Link
        href='/#connect'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathName === '#connect' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Connect
      </Link>
      <Link
        href='/#work'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathName === '#work' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Work
      </Link>
      <Link
        href='/blog'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathName === '/blog' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Blog
      </Link>
    </nav>
  );
};

export default MainNav;

