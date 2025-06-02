
import React from 'react';

interface FloralBannerProps {
  imageUrl?: string;
}

const FloralBanner: React.FC<FloralBannerProps> = ({ imageUrl = 'https://picsum.photos/seed/weddingfloral/1200/300?blur=1' }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <img 
        src={imageUrl} 
        alt="Floral Decoration" 
        className="w-full h-auto object-cover opacity-80" 
      />
    </div>
  );
};

export default FloralBanner;
