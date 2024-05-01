import { getAllTags, sortTagsByCount } from '@/lib/utils';
import { Metadata } from 'next';
import React from 'react';
import { posts } from '#site/content';
import Tag from '@/components/tag';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `${siteConfig.name} | Tags`,
  description: "Topics I've written about",
};

const TagsPage = () => {
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className='container max-w-6xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block font-black text-4xl lg:text-5xl'>Tags</h1>
        </div>
      </div>
      <hr className='my-4' />
      <div className='flex flex-wrap gap-2'>
        {sortedTags.map((tag) => (
          <Tag key={tag} tag={tag} count={tags[tag]} />
        ))}
      </div>
    </div>
  );
};

export default TagsPage;
