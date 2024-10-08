'use client';

import React, { useEffect, useState } from 'react';

import FeaturesSection from '../components/home/FeaturesSection';
import Footer from '../components/home/Footer';
import HeroSection from '../components/home/HeroSection';
import Nav from '../components/Navbar';
import { useProfile } from '../contexts/ProfileContext';

const HomePage = () => {
  const userProfile = useProfile() as any;
  const [_, setIsSignedIn] = useState(false);
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
      // alert(
      //   "Loading...\n In case you haven't already signed in, please sign in with your GitHub account to access all features.",
      // );
      setAlertShown(true);
    }
  }, [userProfile, alertShown]);

  return (
    <main className="algoarchive">
      <Nav />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      {/* <TeamSection /> */}
      <Footer />
    </main>
  );
};

export default HomePage;
