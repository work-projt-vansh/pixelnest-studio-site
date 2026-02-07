import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import PortfolioPreview from '../components/home/Portfolio';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <PortfolioPreview />
    </main>
  );
};

export default Home;
