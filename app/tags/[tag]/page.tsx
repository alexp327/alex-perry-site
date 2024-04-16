import { getAllTags, getPostsByTagSlug, sortTagsByCount } from '@/lib/utils';
import React from 'react';
import { posts } from '#site/content';
import PostItem from '@/components/post-item';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Tag from '@/components/tag';
import { slug } from 'github-slugger';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = params;
  return {
    title:
      'Tag: ' +
      tag.charAt(0).toUpperCase() +
      tag.slice(1) +
      ` | ${siteConfig.name}`,
    description: `Posts on the topic of ${tag}`,
  };
}

export const generateStaticParams = () => {
  const tags = getAllTags(posts);
  const paths = Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
  return paths;
};

const TagPage = ({ params }: TagPageProps) => {
  const { tag } = params;
  const title = tag.split('-').join(' ');

  const displayPosts = getPostsByTagSlug(posts, tag);
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className='container max-w-4xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block font-black text-4xl lg:text-5xl capitalize'>
            {title}
          </h1>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-3 mt-8'>
        <div className='col-span-12 col-start-1 sm:col-span-8'>
          <hr />
          {displayPosts?.length > 0 ? (
            <ul className='flex flex-col'>
              {displayPosts.map((post) => {
                const { slug, title, description, date, tags } = post;
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      title={title}
                      description={description}
                      date={date}
                      tags={tags}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
        </div>
        <Card className='col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1'>
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-wrap gap-2'>
            {sortedTags.map((t) => (
              <Tag key={t} tag={t} count={tags[t]} current={slug(t) === tag} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TagPage;

