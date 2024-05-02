import Image from 'next/image';
import React from 'react';
import { badgeVariants } from './ui/badge';
import { Button } from './ui/button';
import { Icons } from './icons';

interface WorkItemProps {
  title: string;
  description: string;
  image: string;
  priorityImg?: boolean;
  tags?: string[];
  href?: string;
  github?: string;
}

const WorkItem = ({
  title,
  description,
  image,
  priorityImg = false,
  tags,
  href,
  github,
}: WorkItemProps) => {
  return (
    <article className='flex flex-col-reverse md:flex-row rounded-md bg-muted w-full overflow-hidden min-h-80'>
      <div className='flex flex-col w-full md:w-1/2 p-8 justify-between'>
        <div>
          <h3 className='text-xl md:text-2xl font-bold'>{title}</h3>
          <ul className='flex flex-wrap gap-2 mt-2'>
            {tags?.map((tag) => {
              return (
                <li
                  key={tag}
                  className={badgeVariants({
                    variant: 'default',
                    className: 'no-underline rounded-md hover:bg-primary',
                  })}
                >
                  {tag}
                </li>
              );
            })}
          </ul>
          <p className='mt-6 text-muted-foreground'>{description}</p>
        </div>
        <div className='mt-6 flex gap-2'>
          {href ? (
            <a href={href} target='_blank' className='w-fit'>
              <Button className='flex gap-1 hover:gap-2 transition-all ease-in-out duration-150'>
                <span>View</span>
                <span>&rarr;</span>
              </Button>
            </a>
          ) : null}
          {github ? (
            <a href={github} target='_blank' className='w-fit'>
              <Button
                className='hover:bg-background/70 p-2'
                variant='ghost'
                size='icon'
              >
                <Icons.gitHub />
              </Button>
            </a>
          ) : null}
        </div>
      </div>
      <Image
        src={`/work/${image}`}
        alt={'test alt description'}
        width={1400}
        height={800}
        priority={priorityImg}
        className='w-full md:w-1/2 min-h-48 max-h-60 md:max-h-none object-cover overflow-hidden'
      />
    </article>
  );
};

export default WorkItem;

