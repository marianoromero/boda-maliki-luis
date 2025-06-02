
import React from 'react';
import SectionWrapper from './SectionWrapper';

const FinalWordsSection: React.FC = () => {
  return (
    <SectionWrapper id="final-words" className="bg-wedding-cream" textColor="text-wedding-green-dark">
      <h2 className="font-script text-5xl md:text-6xl text-wedding-green-header mb-6">¡Nos Vemos Pronto!</h2>
      <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-8">
        Estamos contando los días para celebrar este momento tan especial con todos ustedes. Su cariño y apoyo significan el mundo para nosotros.
      </p>
      <p className="text-2xl font-script text-wedding-green-header">
        Con todo nuestro amor,
      </p>
      <p className="text-4xl font-script text-wedding-green-header mt-2">
        Maliqui &amp; Luis
      </p>
      <div className="mt-12 border-t border-wedding-green-accent pt-6 text-xs text-wedding-green-accent">
        <p>&copy; 2030 Maliqui & Luis. Todos los derechos reservados.</p>
        <p>Diseño web inspirado con cariño.</p>
      </div>
    </SectionWrapper>
  );
};

export default FinalWordsSection;
