import React from 'react';
import { posts } from '#site/content';
import PostItem from '@/components/post-item';
import { getAllTags, sortPosts, sortTagsByCount } from '@/lib/utils';
import QueryPagination from '@/components/query-pagination';
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Tag from '@/components/tag';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { badgeVariants } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: `${siteConfig.name} | Blog`,
  description: 'Test description',
};

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

const BlogListPage = async ({ searchParams }: BlogPageProps) => {
  const currentPage = Number(searchParams?.page || 1);
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className='container max-w-6xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block font-black text-4xl lg:text-5xl'>
            🔮 Blog
          </h1>
        </div>
      </div>
      <div className='space-y-2 mt-6'>
        <p className='text-muted-foreground'>Topics</p>
        <div className='flex flex-wrap gap-2'>
          <Link
            className={badgeVariants({
              variant: 'default',
              className: 'no-underline rounded-md',
            })}
            href={`/blog`}
          >
            all ({sortedTags.length ?? null})
          </Link>
          {sortedTags.map((tag) => (
            <Tag key={tag} tag={tag} count={tags[tag]} />
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-3 mt-6'>
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
        <QueryPagination totalPages={totalPages} className='justify-end mt-4' />
      </div>
    </div>
  );
};

export default BlogListPage;

