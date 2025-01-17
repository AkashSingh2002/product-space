import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PartnershipSection from './components/PartnershipSection';
import HowWeHelpSection from './components/HowWeHelpSection';
import Div from './components/Div';
import Mentors from './components/Mentors';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions';


const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <PartnershipSection />
      <HowWeHelpSection />
      <Div />
      <CaseStudies />
      <Mentors />
      <Testimonials />
      <FrequentlyAskedQuestions />
      <Footer />

    </div>
  );
};

export default App;
