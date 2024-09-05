'use client';

import React, { useEffect, useState } from 'react';
import { useProfile } from '../components/ProfileContext';

import FeaturesSection from '../components/home/FeaturesSection';
import HeroSection from '../components/home/HeroSection';
import TeamSection from '../components/home/TeamSection';
import Nav from '../components/Dashboard/Navbar';

const HomePage = () => {  
  const userProfile = useProfile();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [alertShown, setAlertShown] = useState(false);

  useEffect(() => {
    if (userProfile && userProfile.name) {
      setIsSignedIn(true);
    } else if (!alertShown && (userProfile === null || userProfile.name === '' || userProfile.name === null)) {
      alert('Please sign in using the extension, instructions can be found on the Home page.');
      setAlertShown(true);
    }
  }, [userProfile, alertShown]);

  return (
    <main className="algoarchive">
      <Nav />
      <HeroSection />
      <FeaturesSection />
      <TeamSection />
    </main>
  );
};

export default HomePage;