
import React from 'react';
import SectionWrapper from './SectionWrapper';

const images = [
  { id: 1, src: 'https://picsum.photos/seed/gallery1/400/400', alt: 'Couple moment 1' },
  { id: 2, src: 'https://picsum.photos/seed/gallery2/400/400', alt: 'Couple moment 2' },
  { id: 3, src: 'https://picsum.photos/seed/gallery3/400/400', alt: 'Couple moment 3' },
  { id: 4, src: 'https://picsum.photos/seed/gallery4/400/400', alt: 'Couple moment 4' },
  { id: 5, src: 'https://picsum.photos/seed/gallery5/400/400', alt: 'Couple moment 5' },
  { id: 6, src: 'https://picsum.photos/seed/gallery6/400/400', alt: 'Couple moment 6' },
];

const GallerySection: React.FC = () => {
  return (
    <SectionWrapper id="gallery" bgColor="bg-wedding-green-dark" textColor="text-wedding-cream">
      <h2 className="font-script text-5xl md:text-6xl text-wedding-cream mb-10">Nuestros Momentos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
        {images.map(image => (
          <div key={image.id} className="aspect-square overflow-hidden rounded-lg shadow-lg group transition-all duration-300 hover:scale-105">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default GallerySection;
