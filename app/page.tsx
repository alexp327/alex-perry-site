import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn, sortPosts } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '#site/content';
import PostItem from '@/components/post-item';

export default function Home() {
  const latestsPosts = sortPosts(posts).slice(0, 5);

  return (
    <>
      <section className='pb-8 pt-6 md:pb-12 md:mt-10'>
        <div className='container flex flex-col md:flex-row justify-around'>
          <div className='flex-1 flex flex-col gap-4 text-center md:text-left h-fit my-auto'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-black text-balance'>
              Hello, I&apos;m Alex
            </h1>
            <p className='max-w-[42rem] text-muted-foreground sm:text-lg'>
              I&apos;m a dedicated software developer, showcasing my projects
              and sharing insights on technology and what I&apos;m learning
              through blog posts.
            </p>
            <div className='flex gap-4 justify-center md:justify-start flex-col sm:flex-row'>
              <Link
                href='/blog'
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'w-full sm:w-fit hover:bg-primary/50'
                )}
              >
                View my Blog
              </Link>
              <Link
                href={siteConfig.links.github}
                target='_blank'
                rel='noreferrer'
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'w-full sm:w-fit'
                )}
              >
                Github
              </Link>
            </div>
          </div>
          <div className='flex-1 w-full flex justify-center items-center'>
            <Image src='/hero-image.png' alt='' width={500} height={500} />
          </div>
        </div>
      </section>
      <section className='container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-48'>
        <h2 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center'>
          Latest Posts
        </h2>
        <ul className='flex flex-col'>
          {latestsPosts.map((post) => (
            <li key={post.slug} className='first:border-t first:border-border'>
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

