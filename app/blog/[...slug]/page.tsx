import React from 'react';
import { posts } from '#site/content';
import { notFound } from 'next/navigation';
import MDXContent from '@/components/mdx-components';

import '@/styles/mdx.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Tag from '@/components/tag';

type Params = {
  slug: string[];
};

interface PostPageProps {
  params: Promise<Params>;
}

async function getPostFromParams(params: Params) {
  const slug = params?.slug?.join('/');
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostFromParams(resolvedParams);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set('title', post.title);

  return {
    title: `${siteConfig.name} | ` + post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<Params[]> {
  return posts.map((post) => ({ slug: post.slugAsParams.split('/') }));
}

const PostPage = async ({ params }: PostPageProps) => {
  const resolvedParams = await params;
  const post = await getPostFromParams(resolvedParams);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className='container py-6 prose dark:prose-invert max-w-3xl mx-auto'>
      <h1 className='mb-2'>{post.title}</h1>
      <div className='flex gap-2 mb-2'>
        {post.tags?.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      {post.description ? (
        <p className='text-lg mt-0 text-foreground/75'>{post.description}</p>
      ) : null}
      <hr className='my-4' />
      <MDXContent code={post.body} />
    </article>
  );
};

export default PostPage;

