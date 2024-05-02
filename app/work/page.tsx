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
          title='Pediatric Shoulder Pain Rating Tool'
          description='this is a brief description'
          image='pediatric-pain-tool.png'
          priorityImg={true}
          tags={['tag1', 'react']}
          href='https://google.com'
        />
        <WorkItem
          title='TweePT3'
          description='this is yet another brief description. I wanted to include 2 sentences here to test out formatting'
          image='tweept3.jpg'
          priorityImg={true}
          tags={['tag1']}
          href='https://google.com'
        />
        <WorkItem
          title='Shell'
          description='this is yet another brief description. I wanted to include 2 sentences here to test out formatting'
          image='bo3.jpg'
          priorityImg={true}
          tags={['tag1']}
          href='https://google.com'
        />
        <WorkItem
          title='Personal Site (this one!)'
          description='this is yet another brief description. I wanted to include 2 sentences here to test out formatting'
          image='bo3.jpg'
          priorityImg={true}
          tags={['tag1']}
          href='https://google.com'
        />
      </div>
    </div>
  );
};

export default WorkPage;

