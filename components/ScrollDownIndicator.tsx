
import React, { useState, useEffect } from 'react';

const ScrollDownIndicator: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide after scrolling down a bit (e.g., 100px)
      if (window.scrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
      <span className="text-xs text-wedding-cream mb-1">Scroll</span>
      <svg className="w-6 h-6 text-wedding-cream" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
  );
};

export default ScrollDownIndicator;
