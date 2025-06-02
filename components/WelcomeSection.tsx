
import React from 'react';
import SectionWrapper from './SectionWrapper';

const WelcomeSection: React.FC = () => {
  return (
    <SectionWrapper id="welcome" className="bg-wedding-cream">
      <h2 className="font-script text-5xl md:text-6xl text-wedding-green-header mb-6">¡Bienvenidos!</h2>
      <p className="text-lg md:text-xl leading-relaxed text-wedding-green-dark max-w-2xl mx-auto">
        Con corazones llenos de alegría, les damos la bienvenida a este espacio dedicado a nuestro día especial. Estamos emocionados de compartir este capítulo de nuestras vidas con ustedes, nuestros queridos familiares y amigos.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-wedding-green-dark mt-4 max-w-2xl mx-auto">
        Aquí encontrarán todos los detalles sobre la celebración, nuestra historia y más. ¡Esperamos verlos pronto!
      </p>
      <div className="mt-8 text-3xl font-script text-wedding-green-header">
        Maliqui & Luis
      </div>
    </SectionWrapper>
  );
};

export default WelcomeSection;
