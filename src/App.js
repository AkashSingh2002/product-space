import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PartnershipSection from './components/PartnershipSection';
import HowWeHelpSection from './components/HowWeHelpSection';

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <PartnershipSection />
      <HowWeHelpSection />
    </div>
  );
};

export default App;
