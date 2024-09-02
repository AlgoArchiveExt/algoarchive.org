import { Metadata } from 'next';
import React from 'react';

import WaitlistHeroSection from '../components/WaitlistHeroSection';

export const metadata: Metadata = {
  title: 'Home | AlgoArchive',
  description: 'Home page',
};

const HomePage = () => {
  return (
    <main>
      <WaitlistHeroSection />
    </main>
  );
};

export default HomePage;
