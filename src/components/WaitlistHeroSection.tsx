"use client";

import React from 'react';
import { motion } from 'framer-motion';
import imageSrc from '../../public/assets/algo-ext.png';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Sync LeetCode with GitHub</h1>
        <p className="text-lg mb-8">
          Effortlessly manage and track your LeetCode solutions with AlgoArchive.
        </p>
        <a
          href="/waitlist"
          className="bg-[#ee9b01] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition"
        >
          Join the Waitlist
        </a>
      </div>
      <div className="mt-12 flex justify-center">
        <motion.div
          className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-2xl font-bold mb-2">How It Works</h2>
          <p className="mb-4">
            Connect your LeetCode account to sync your solutions directly to your GitHub repository. Keep track of your progress and showcase your skills effortlessly.
          </p>
          <div className="relative h-60 w-full mx-auto">
            <Image
              src={imageSrc}
              className="rounded-lg w-full h-60 object-contain"
              alt="Extension Demo"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
