import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import PortfolioPreview from '../components/home/Portfolio';
import WhyChoosePixelnest from '../components/home/WhyChoosePixelnest';
import OurProcess from '../components/home/OurProcess';
import WhoIsThisFor from '../components/home/WhoIsThisFor';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/home/FinalCTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <PortfolioPreview />
      <WhyChoosePixelnest />
      <OurProcess />
      <WhoIsThisFor />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

export default Home;