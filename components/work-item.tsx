import Image from 'next/image';
import React from 'react';
import { badgeVariants } from './ui/badge';
import { Button } from './ui/button';

interface WorkItemProps {
  title: string;
  description: string;
  image: string;
  priorityImg?: boolean;
  tags?: string[];
  href?: string;
}

const WorkItem = ({
  title,
  description,
  image,
  priorityImg = false,
  tags,
  href,
}: WorkItemProps) => {
  return (
    <article className='flex rounded-md bg-muted w-full overflow-hidden h-80'>
      <div className='flex flex-col w-1/2 p-8 justify-between'>
        <div>
          <h3 className='text-2xl font-bold'>{title}</h3>
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
          <p className='mt-12 text-muted-foreground'>{description}</p>
        </div>
        <a href={href} target='_blank'>
          <Button className='flex gap-1 hover:gap-2 transition-all ease-in-out duration-150'>
            <span>View</span>
            <span>&rarr;</span>
          </Button>
        </a>
      </div>
      {/* TODO: make sure that images of different sizes are displayed the same */}
      <Image
        src={`/work/${image}`}
        alt={'test alt description'}
        width={1400}
        height={800}
        priority={priorityImg}
        className='w-1/2 object-cover overflow-hidden'
      />
    </article>
  );
};

export default WorkItem;

