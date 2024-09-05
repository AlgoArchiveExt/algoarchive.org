'use client';

import React, { useEffect, useState } from 'react';

import Nav from '../components/dashboard/Navbar';
import FeaturesSection from '../components/home/FeaturesSection';
import HeroSection from '../components/home/HeroSection';
import TeamSection from '../components/home/TeamSection';
import { useProfile } from '../components/ProfileContext';

const HomePage = () => {
  const userProfile = useProfile() as any;
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [alertShown, setAlertShown] = useState(false);

  useEffect(() => {
    if (
      userProfile &&
      userProfile.name !== null &&
      userProfile.username !== null &&
      userProfile.avatarUrl !== null &&
      userProfile.profileUrl !== null
    ) {
      setIsSignedIn(true);
    } else if (
      !alertShown &&
      (userProfile.name === null ||
        userProfile.username === null ||
        userProfile.avatarUrl === null ||
        userProfile.profileUrl === null)
    ) {
      alert(
        "Loading...\n In case you haven't already signed in, please sign in with your GitHub account to access all features.",
      );
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
