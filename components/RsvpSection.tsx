
import React from 'react';
import SectionWrapper from './SectionWrapper';

const RsvpSection: React.FC = () => {
  return (
    <SectionWrapper id="rsvp" bgColor="bg-wedding-green-dark" textColor="text-wedding-cream">
      <h2 className="font-script text-5xl md:text-6xl text-wedding-cream mb-8">Confirma tu Asistencia</h2>
      <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-6">
        Agradecemos que confirmes tu asistencia antes del <strong>15 de Agosto, 2030</strong>. 
        Tu presencia es el mejor regalo para nosotros.
      </p>
      <p className="text-2xl md:text-3xl font-semibold mb-2">
        Por favor, confirma llamando o enviando un mensaje a:
      </p>
      <a 
        href="tel:629318451" 
        className="text-3xl md:text-4xl font-bold text-wedding-gold hover:text-yellow-300 transition-colors duration-300 tracking-wider"
      >
        629 31 84 51
      </a>
      <p className="mt-6 text-lg">
        Si tienes alguna restricción alimentaria o necesitas alguna consideración especial, por favor háznoslo saber al confirmar.
      </p>
      <img src="https://picsum.photos/seed/rsvpcontact/300/200" alt="Contact illustration" className="mt-8 mx-auto rounded-lg opacity-70 w-full max-w-xs"/>
    </SectionWrapper>
  );
};

export default RsvpSection;
