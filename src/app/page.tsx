'use client';

import React, { useEffect, useState } from 'react';
import { useProfile } from '../components/ProfileContext';

import FeaturesSection from '../components/home/FeaturesSection';
import HeroSection from '../components/home/HeroSection';
import TeamSection from '../components/home/TeamSection';
import Nav from '../components/dashboard/Navbar';

const HomePage = () => {  
  const userProfile = useProfile() as { name: string } | null;
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [alertShown, setAlertShown] = useState(false);
  
  if(!userProfile){
    useEffect(() => {
      if (userProfile !== null) {
        setIsSignedIn(true);
      } else if (!alertShown && (userProfile === null )) {
        alert('Loading...\n In case you haven\'t already signed in, please sign in with your GitHub account to access all features.');
        setAlertShown(true);
      }
    }, [userProfile, alertShown]);
  }

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