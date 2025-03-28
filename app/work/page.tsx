import WorkItem from '@/components/work-item';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `${siteConfig.name} | ` + 'Work',
  description: 'Work and other projects I have done',
};

const WorkPage = () => {
  return (
    <div className='container max-w-6xl py-6 lg:py-10'>
      <div className='flex'>
        <div className='flex-1 space-x-4'>
          <h1 className='inline-block font-black text-4xl lg:text-5xl'>
            ⚡ Work
          </h1>
        </div>
      </div>
      <hr className='my-8' />
      <div className='flex flex-col gap-8 items-center md:items-start'>
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
      </div>
    </div>
  );
};

export default WorkPage;

