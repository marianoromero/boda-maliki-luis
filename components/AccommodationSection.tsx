
import React from 'react';
import SectionWrapper from './SectionWrapper';

const AccommodationSection: React.FC = () => {
  return (
    <SectionWrapper id="accommodation" className="bg-wedding-cream">
      <h2 className="font-script text-5xl md:text-6xl text-wedding-green-header mb-8">Alojamiento</h2>
      <p className="text-lg md:text-xl leading-relaxed text-wedding-green-dark max-w-2xl mx-auto mb-6">
        Para nuestros invitados que viajan desde fuera, hemos recopilado algunas sugerencias de hoteles cercanos al lugar del evento. Sevilla ofrece una amplia variedad de opciones para todos los gustos y presupuestos.
      </p>
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-wedding-green-dark">
        <div className="bg-white p-4 rounded-lg shadow-md border border-wedding-green-accent/20">
          <h3 className="text-xl font-semibold text-wedding-green-header mb-1">Hotel Alfonso XIII</h3>
          <p className="text-sm">Un hotel de lujo con historia, a poca distancia.</p>
          <a href="#" className="text-wedding-gold hover:underline text-sm block mt-1">Ver disponibilidad</a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md border border-wedding-green-accent/20">
          <h3 className="text-xl font-semibold text-wedding-green-header mb-1">Hotel Colón Gran Meliá</h3>
          <p className="text-sm">Elegancia y confort en el corazón de Sevilla.</p>
          <a href="#" className="text-wedding-gold hover:underline text-sm block mt-1">Ver disponibilidad</a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md border border-wedding-green-accent/20">
          <h3 className="text-xl font-semibold text-wedding-green-header mb-1">Hotel Doña María</h3>
          <p className="text-sm">Vistas espectaculares y encanto tradicional.</p>
          <a href="#" className="text-wedding-gold hover:underline text-sm block mt-1">Ver disponibilidad</a>
        </div>
         <div className="bg-white p-4 rounded-lg shadow-md border border-wedding-green-accent/20">
          <h3 className="text-xl font-semibold text-wedding-green-header mb-1">Opciones Boutique</h3>
          <p className="text-sm">Explore encantadores hoteles boutique en el barrio de Santa Cruz.</p>
          <a href="#" className="text-wedding-gold hover:underline text-sm block mt-1">Buscar en Booking.com</a>
        </div>
      </div>
      <p className="text-md mt-8 text-wedding-green-dark">Recomendamos reservar con antelación, especialmente si viajan en temporada alta.</p>
    </SectionWrapper>
  );
};

export default AccommodationSection;
