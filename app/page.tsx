import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn, sortPosts } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '#site/content';
import PostItem from '@/components/post-item';
import {
  Code,
  Database,
  ExternalLink,
  FileCode,
  GitBranch,
  GitGraph,
  Layers,
  Palette,
  Smartphone,
  SquareCode,
  Wind,
} from 'lucide-react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import TechCard from '@/components/tech-card';
import WorkItem from '@/components/work-item';

export default function Home() {
  const latestsPosts = sortPosts(posts).slice(0, 3);

  return (
    <>
      {/* Background gradient */}
      {/* <div className='absolute inset-0 bg-gradient-to-br from-black via-black to-zinc-900' /> */}

      <section className='pb-8 pt-6 md:pb-12 md:mt-10'>
        <div className='container flex flex-col md:flex-row justify-around'>
          <div className='flex-1 flex flex-col gap-4 text-center md:text-left h-fit my-auto'>
            <h2 className='text-xl md:text-2xl lg:text-3xl text-foreground/75 text-balance'>
              Hey! I&apos;m Alex,
            </h2>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold  text-balance'>
              a software developer based in Indianapolis.
            </h1>
            <p className='max-w-[42rem] text-foreground/75'>
              I&apos;m currently focused on building scalable, data-driven
              applications at L3Harris Technologies. With a background in
              full-stack development and a product-focused mindset, I bring both
              technical depth and a passion for practical innovation—whether at
              the enterprise level or through independent projects.
            </p>
            <div className='flex gap-4 justify-center md:justify-start flex-col sm:flex-row'>
              <Link
                href='/blog'
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'w-full sm:w-fit'
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
          <div className='flex-1 w-full flex justify-center items-center relative'>
            {/* Glow circles */}
            <div className='absolute left-[10%] top-[10%] h-40 w-40 rounded-full bg-purple-500/70 blur-3xl' />
            <div className='absolute bottom-[7%] right-[11%] h-44 w-44 rounded-full bg-pink-500/70 blur-3xl' />
            <div className='absolute bottom-[5%] left-[7%] h-52 w-52 rounded-full bg-blue-500/70 blur-3xl' />
            <div className='absolute right-[5%] top-[10%] h-44 w-44 rounded-full bg-cyan-500/70 blur-3xl' />
            <div className='absolute right-[40%] top-[40%] h-32 w-32 rounded-full bg-orange-500/70 blur-3xl' />
            <Image
              src='/hero-image.png'
              alt=''
              width={500}
              height={500}
              className='z-10'
            />
          </div>
        </div>
      </section>
      <section className='container py-6 lg:py-10 flex flex-col space-y-6 mt-48'>
        <h2 className='text-2xl text-foreground/60 font-semibold'>
          Latest Blog Posts
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
      <section
        id='connect'
        className='container py-6 lg:py-10 flex flex-col space-y-6'
      >
        <h4 className='text-2xl text-foreground/60 font-semibold'>
          Let&apos;s Connect
        </h4>
        <div className='flex gap-4 flex-wrap'>
          <Link
            href={'mailto:alex.perry422@gmail.com'}
            className='flex items-center gap-2 hover:opacity-85'
          >
            Email <ExternalLink className='w-5 h-5' />
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target='_blank'
            className='flex items-center gap-2 hover:opacity-85'
          >
            LinkedIn <ExternalLink className='w-5 h-5' />
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target='_blank'
            className='flex items-center gap-2 hover:opacity-85'
          >
            Twitter <ExternalLink className='w-5 h-5' />
          </Link>
          <Link
            href={siteConfig.links.github}
            target='_blank'
            className='flex items-center gap-2 hover:opacity-85'
          >
            Github <ExternalLink className='w-5 h-5' />
          </Link>
        </div>
      </section>
      <section
        id='work'
        className='container py-6 lg:py-10 flex flex-col gap-8 items-center md:items-start'
      >
        <h4 className='text-2xl text-foreground/60 font-semibold'>
          Recent Work
        </h4>
        <WorkItem
          title='What Should I Listen To?'
          description={`This web app uses the OpenAI and LastFM APIs to give album recommendations based off of the words the user selects.`}
          image='wsilt.png'
          priorityImg={true}
          tags={[
            'Next.js',
            'Tailwind CSS',
            'TypeScript',
            'shadcn/ui',
            'OpenAI API',
            'LastFM API',
            'Vercel',
            'Docker',
          ]}
          href='https://what-should-i-listen-to.vercel.app/'
        />
        <WorkItem
          title='Shoulder Pain Rating Tool'
          description={`The Shoulder Pain Rating Tool is a web application used to assist medical staff in assessing wheelchair users\' pain using a questionnaire created by myself and Indiana University's Skills on Wheels program.`}
          image='pediatric-pain-tool.png'
          priorityImg={true}
          tags={[
            'Angular',
            'Docker',
            'Node.js',
            'Material UI',
            'Reactive Forms',
          ]}
          href='https://pediatric-pain-rater-40aa3.web.app/'
          github='https://github.com/alexp327/pediatric-pain-rater'
        />
        <WorkItem
          title='Personal Site (this one!)'
          description={`alexperry.dev is my personal site where I blog about what I'm learning and showcase my work. I love experimenting with new technologies and this site is a playground for that.`}
          image='personal-site.png'
          priorityImg={true}
          tags={['Next.js', 'Tailwind CSS', 'Vercel', 'SSR']}
          href='https://alexperry.dev'
          github='https://github.com/alexp327/alex-perry-site'
        />
        <WorkItem
          title='TweePT3'
          description={`TweePT3 is a Chrome extension that integrates ChatGPT with Twitter to generate tweets based on a user\'s input. It uses the OpenAI API to generate the tweets.`}
          image='tweept3.jpg'
          priorityImg={true}
          tags={['ChatGPT', 'RESTful API', 'Chrome Extension', 'JavaScript']}
          github='https://github.com/alexp327/tweept3'
        />
      </section>
      <section className='container py-6 lg:py-10 flex flex-col space-y-6'>
        <h4 className='text-2xl text-foreground/60 font-semibold'>Skills</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch'>
          <TechCard
            icon={<Code className='h-6 w-6' />}
            title='Full Stack Development'
            description='Proficient in React, Next.js, Angular, Node.js, and ASP.NET for building scalable web apps'
          />
          <TechCard
            icon={<SquareCode className='h-6 w-6' />}
            title='AI & Cloud Integration'
            description='Deployed ChatGPT-powered chatbots and serverless apps using AWS and Microsoft Azure'
          />
          <TechCard
            icon={<GitBranch className='h-6 w-6' />}
            title='DevOps & Automation'
            description='Skilled with Git, CI/CD, Selenium, and Blue Prism for streamlining development and operations'
          />
          <TechCard
            icon={<Wind className='h-6 w-6' />}
            title='Frontend Tooling'
            description='Expertise in TailwindCSS, TypeScript, responsive UI design, and component-based architecture'
          />
          <TechCard
            icon={<Database className='h-6 w-6' />}
            title='Backend & Databases'
            description='Experience with SQL, Postgres, MongoDB, REST APIs, and designing scalable backend systems'
          />
          <TechCard
            icon={<Smartphone className='h-6 w-6' />}
            title='Mobile App Development'
            description='Built cross-platform mobile apps using Flutter and Flask with cloud-connected backends'
          />
        </div>
      </section>
    </>
  );
}

