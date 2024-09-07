import React from 'react'
import { Metadata } from 'next';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import TeamSection from '../components/home/Footer';
import Nav from '../components/Navbar';

const HomePage = () => {
  return (
    <main className="algoarchive">
      <Nav />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <TeamSection />
    </main>
  )
}

export default HomePage