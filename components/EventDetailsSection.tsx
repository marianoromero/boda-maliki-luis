
import React from 'react';
import SectionWrapper from './SectionWrapper';

const EventDetailsSection: React.FC = () => {
  return (
    <SectionWrapper id="event-details" className="bg-wedding-cream">
      <h2 className="font-script text-5xl md:text-6xl text-wedding-green-header mb-10">Detalles del Evento</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto text-wedding-green-dark">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-wedding-green-accent/30">
          <h3 className="font-serif-body text-3xl font-semibold text-wedding-green-header mb-3">Ceremonia</h3>
          <p className="text-lg"><strong>Fecha:</strong> Sábado, 13 de Septiembre, 2030</p>
          <p className="text-lg"><strong>Hora:</strong> 19:00 HRS.</p>
          <p className="text-lg"><strong>Lugar:</strong> Real Círculo de Labradores</p>
          <p className="text-lg">Calle Juan Sebastián El Cano, 1, Sevilla</p>
          <img src="https://picsum.photos/seed/ceremonyplace/400/250" alt="Ceremony placeholder" className="mt-4 rounded-md w-full object-cover h-48"/>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-wedding-green-accent/30">
          <h3 className="font-serif-body text-3xl font-semibold text-wedding-green-header mb-3">Recepción</h3>
          <p className="text-lg">A continuación de la ceremonia.</p>
          <p className="text-lg"><strong>Lugar:</strong> Mismo lugar, salón adyacente.</p>
          <p className="text-lg">Únanse a nosotros para una noche de cena, baile y celebración.</p>
          <p className="text-md mt-2"><strong>Código de vestimenta:</strong> Formal</p>
          <img src="https://picsum.photos/seed/receptionparty/400/250" alt="Reception placeholder" className="mt-4 rounded-md w-full object-cover h-48"/>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EventDetailsSection;
