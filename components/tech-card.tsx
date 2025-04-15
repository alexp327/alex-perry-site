import { ReactNode } from 'react';

interface TechCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function TechCard({ icon, title, description }: TechCardProps) {
  return (
    <div className='relative group'>
      {/* Glow effect - positioned outside the card */}
      <div className='absolute -inset-1 scale-[1.01] rounded-lg bg-primary opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-25'></div>

      {/* Actual card with solid background to prevent glow bleeding through */}
      <div className='relative h-full bg-card text-card-foreground p-6 rounded-lg border transition-all duration-300 hover:-translate-y-1 z-10'>
        <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
          <div className='bg-accent p-3 rounded-full mb-4'>{icon}</div>
          <h3 className='font-medium text-lg mb-2'>{title}</h3>
          <p className='text-sm text-foreground/75'>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TechCard;

