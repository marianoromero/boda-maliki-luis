
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center text-center py-10 px-4 relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://picsum.photos/seed/weddinghero/1920/1080?blur=1')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      {/* Subtle gold speckles - decorative, use sparingly */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-wedding-gold rounded-full z-1" /* Above overlay, below content */
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.3, /* Adjusted opacity slightly for better visibility */
          }}
        ></div>
      ))}
      
      <div className="relative z-10 w-full max-w-2xl text-wedding-cream">
        {/* FloralBanner removed */}

        <div className="mt-8 md:mt-12">
          <h1 className="font-script text-7xl md:text-9xl leading-tight">
            Maliqui
          </h1>
          <span className="font-script text-5xl md:text-7xl">&amp;</span>
          <h1 className="font-script text-7xl md:text-9xl leading-tight mt-[-1rem] md:mt-[-2rem]">
            Luis
          </h1>
        </div>

        <p className="mt-8 md:mt-10 text-lg md:text-xl tracking-wider uppercase font-serif-body">
          Es un honor invitarte a la celebración de <p>nuestra boda</p>
        </p>

        <div className="mt-10 md:mt-12 font-serif-body">
          <div className="text-2xl md:text-3xl tracking-widest">SEP</div>
          <div className="flex items-center justify-center space-x-4 md:space-x-8 my-3 md:my-4">
            <span className="text-base md:text-lg uppercase tracking-wider mr-4 md:mr-0">Sábado</span>
            <div className="flex-grow h-px bg-wedding-cream opacity-70"></div>
            <span className="text-6xl md:text-8xl font-bold">13</span>
            <div className="flex-grow h-px bg-wedding-cream opacity-70"></div>
            <span className="text-base md:text-lg uppercase tracking-wider ml-4 md:ml-0">19:00 Hrs.</span>
          </div>
          <div className="text-2xl md:text-3xl tracking-widest">2025</div>
        </div>

        <div className="mt-8 md:mt-10 text-base md:text-lg">
          <p>Calle Juan Sebastián El Cano, 1</p>
          <p>Real Círculo de Labradores</p>
        </div>

        <div className="mt-8 md:mt-10 text-sm md:text-base tracking-wider">
          <p>CONFIRMAR ASISTENCIA AL:</p>
          <a href="tel:629318451" className="text-wedding-gold hover:opacity-80 transition-opacity">629 31 84 51</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
