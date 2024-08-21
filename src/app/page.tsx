import React from 'react'
import WaitlistHeroSection from "../components/WaitlistHeroSection"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | AlgoArchive',
  description: 'Home page',
}

const HomePage = () => {
  return (
    <main>
      <WaitlistHeroSection />
    </main>
  )
}

export default HomePage