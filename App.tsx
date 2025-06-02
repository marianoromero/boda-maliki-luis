
import React from 'react';
import HeroSection from './components/HeroSection';
import WelcomeSection from './components/WelcomeSection';
import OurStorySection from './components/OurStorySection';
import EventDetailsSection from './components/EventDetailsSection';
import GallerySection from './components/GallerySection';
import AccommodationSection from './components/AccommodationSection';
import RsvpSection from './components/RsvpSection';
import FinalWordsSection from './components/FinalWordsSection';
import ScrollDownIndicator from './components/ScrollDownIndicator';

const App: React.FC = () => {
  return (
    <div className="bg-wedding-cream text-wedding-green-dark font-serif-body min-h-screen overflow-x-hidden">
      <HeroSection />
      <ScrollDownIndicator />
      <WelcomeSection />
      <OurStorySection />
      <EventDetailsSection />
      <GallerySection />
      <AccommodationSection />
      <RsvpSection />
      <FinalWordsSection />
    </div>
  );
};

export default App;
