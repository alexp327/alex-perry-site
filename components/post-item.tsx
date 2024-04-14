import { Calendar } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './ui/button';
import { cn, formatDate } from '@/lib/utils';

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

const PostItem = ({ slug, title, description, date }: PostItemProps) => {
  return (
    <article className='flex flex-col gap-2 border-border border-b py-3'>
      <div>
        <h2 className='text-2xl font-bold'>
          <Link href={slug}>{title}</Link>
        </h2>
      </div>
      {/* TODO: fix text directly in div lol */}
      <div className='max-w-none text-muted-foreground'>{description}</div>
      <div className='flex justify-between items-center'>
        <dl>
          <dt className='sr-only'>Published On</dt>
          <dd className='text-sm sm:text-base font-medium flex items-center gap-1'>
            <Calendar className='w-4 h-4' />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={slug}
          className={cn(buttonVariants({ variant: 'link' }), 'py-0')}
        >
          Read more &rarr;
        </Link>
      </div>
    </article>
  );
};

export default PostItem;

