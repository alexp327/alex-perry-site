import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${siteConfig.name} | ` + 'About Me',
  description: 'Information about me',
};

const AboutPage = () => {
  return (
    <div className='container max-w-6xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-x-4'>
          <h1 className='inline-block font-black text-4xl lg:text-5xl'>
            📷 About Me
          </h1>
        </div>
      </div>
      <hr className='my-8' />
      <div className='flex flex-col md:flex-row gap-8 items-center md:items-start'>
        <div className='min-w-48 max-w-48 flex flex-col gap-2'>
          <Avatar className='h-48 w-48'>
            <AvatarImage src='/avatar.png' alt={siteConfig.author} />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
          <h2 className='text-2xl font-bold text-center break-words'>
            {siteConfig.author}
          </h2>
          <p className='text-foreground/75 text-center break-words'>
            Software Developer
          </p>
        </div>
        <p className='text-foreground text-md py-4'>
          I am a software developer with a passion for building things that live
          on the internet. I achieved my Bachelor of Science in Computer Science
          from Purdue University in 2022, and have been working as a software
          developer ever since. I have experience with web frameworks such as
          React and Angular, as well as backend development with Node.js and
          .NET. I am always looking to grow my skillset and share what I learn
          along the way.
          <br />
          <br />
          Outside of work, I enjoy playing video games, music, and tennis.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

