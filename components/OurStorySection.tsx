
import React from 'react';
import SectionWrapper from './SectionWrapper';

const OurStorySection: React.FC = () => {
  return (
    <SectionWrapper id="our-story" bgColor="bg-wedding-green-dark" textColor="text-wedding-cream">
      <h2 className="font-script text-5xl md:text-6xl text-wedding-cream mb-8">Nuestra Historia</h2>
      <div className="space-y-6 text-lg md:text-xl leading-relaxed text-left max-w-xl mx-auto">
        <p>
          Todo comenzó en una tarde soleada de primavera, entre risas y cafés. Lo que empezó como una amistad casual, pronto floreció en algo mucho más profundo. Descubrimos que compartíamos sueños, pasiones y un amor por las pequeñas cosas de la vida.
        </p>
        <p>
          A través de aventuras, desafíos y innumerables momentos de felicidad, nuestro vínculo se ha fortalecido. Cada día juntos es un recordatorio de lo afortunados que somos de habernos encontrado.
        </p>
        <p>
          Ahora, estamos listos para dar el siguiente paso en nuestro viaje, y no podríamos estar más felices de que sean testigos de nuestro amor y compromiso.
        </p>
      </div>
       <img src="https://picsum.photos/seed/couplelove/600/400" alt="Couple placeholder" className="mt-10 mx-auto rounded-lg shadow-xl w-full max-w-md object-cover h-64 md:h-80"/>
    </SectionWrapper>
  );
};

export default OurStorySection;
