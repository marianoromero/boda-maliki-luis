
import React, { ReactNode } from 'react';
import FadeInSection from './FadeInSection';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  bgColor?: string; // e.g., 'bg-white', 'bg-transparent'
  textColor?: string; // e.g., 'text-gray-800'
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = '', bgColor = 'bg-transparent', textColor = 'text-inherit' }) => {
  return (
    <FadeInSection>
      <section id={id} className={`py-16 md:py-24 px-6 md:px-12 min-h-[70vh] flex flex-col items-center justify-center text-center ${bgColor} ${textColor} ${className}`}>
        <div className="max-w-3xl w-full">
          {children}
        </div>
      </section>
    </FadeInSection>
  );
};

export default SectionWrapper;
