
import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: string; // e.g., 'duration-500', 'duration-700'
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className, threshold = 0.1, delay = 'duration-1000' }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            // Unobserve after animation to prevent re-triggering and save resources
             if (domRef.current) {
               observer.unobserve(domRef.current);
             }
          }
        });
      },
      { threshold: threshold } // Trigger when 10% of the element is visible
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={domRef}
      className={`${className || ''} transition-opacity transform ${delay} ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
