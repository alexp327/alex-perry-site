import { siteConfig } from '@/config/site';
import { Mail } from 'lucide-react';
import React from 'react';
import { Icons } from './icons';

const SiteFooter = () => {
  return (
    <footer>
      <div className='mb-6 mt-14 flex flex-col items-center'>
        <div className='mb-3 flex space-x-4'>
          <a
            target='_blank'
            rel='noreferrer'
            href='mailto:alex.perry422@gmail.com'
          >
            <span className='sr-only'>Email</span>
            <Mail className='w-5 h-5' />
          </a>
          <a target='_blank' rel='noreferrer' href={siteConfig.links.twitter}>
            <span className='sr-only'>Twitter</span>
            <Icons.twitter className='w-5 h-5' />
          </a>
          <a target='_blank' rel='noreferrer' href={siteConfig.links.github}>
            <span className='sr-only'>GitHub</span>
            <Icons.gitHub className='w-5 h-5' />
          </a>
        </div>
        <div className='mb-2 flex space-x-2 text-sm text-foreground/75'>
          <p>Alex Perry</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

