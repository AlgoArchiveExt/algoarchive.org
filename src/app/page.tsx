import { Metadata } from 'next';
import React from 'react';

import FeaturesSection from '../components/home/FeaturesSection';
import HeroSection from '../components/home/HeroSection';
import TeamSection from '../components/home/TeamSection';

export const metadata: Metadata = {
  title: 'AlgoArchive - Automate Your LeetCode Journey',
  description: 'Effortlessly sync your LeetCode solutions with GitHub using AlgoArchive.',
};

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <TeamSection />
    </main>
  );
};

export default HomePage;
