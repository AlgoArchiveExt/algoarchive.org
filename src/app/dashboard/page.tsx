"use client";

import React from 'react';
import Nav from '@/src/components/Dashboard/Navbar';

export default function page(){
  return (
    <main className="algoarchive bg-[#1a1a1a]">
        <Nav />
        <div className="lg:ml-60 p-6 h-ful"> 
          <h1 className="text-white">Spent the whole day figuring this stupid sidebar out!</h1>
          <h2 className="text-white">Warning: This is not gonna look very pretty on mobile unless Nora clutches up and removes all the margins and padding to make it responsive...</h2>
          <h2 className="text-white">I should've slept earlier</h2>
        </div>
    </main>
  )
}
