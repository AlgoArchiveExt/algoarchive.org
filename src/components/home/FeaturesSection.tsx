'use client';

import { Button, Card, CardBody, Link } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import Image from next/image

// Define types for feature items
interface Feature {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

// Define the features array
const features: Feature[] = [
  {
    title: 'Quickly Submit from LeetCode',
    description:
      'Our browser extension helps you instantly submit your LeetCode solutions to your GitHub repository, streamlining the process with just a click.',
    image: '/assets/coding.png',
    buttonText: 'Download Extension',
    buttonLink: 'https://chromewebstore.google.com/detail/algoarchive/anjcgdjflkjlhaopbilibnbfpialdbpl',
  },
  {
    title: 'View Your Submissions',
    description:
      'Seamlessly view all your LeetCode submissions directly on our dashboard. Organized and formatted for easy navigation and access to your repositories, helping you track your progress.',
    image: '/assets/dashboard.png',
    buttonText: 'Go to Dashboard',
    buttonLink: 'https://algoarchive.org/dashboard',
  },
  {
    title: 'Track Progress with Analytics',
    description:
      'Monitor your coding journey with our powerful analytics, tracking your submissions, problem-solving speed, and areas for improvement to help you grow faster.',
    image: '/assets/analytics.png',
    buttonText: 'View Analytics',
    buttonLink: 'https://algoarchive.org/analytics',
  },
];

export default function FeaturesSection() {
  return (
    <div className="bg-[#825534] py-16 text-center">
      <h2 className="mb-12 text-3xl font-semibold text-white">How It Works</h2>
      {features.map((feature, index) => (
        <div key={index} className="mx-auto mt-16 max-w-7xl px-4">
          <Card isPressable className="mx-auto w-full max-w-4xl" style={{ backgroundColor: '#ee9b01' }}>
            <CardBody className={`flex flex-col ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
              <motion.div
                className="w-full shrink-0 sm:w-1/2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6 },
                }}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="responsive"
                  width={500} // Adjust width as needed
                  height={300} // Adjust height as needed
                />
              </motion.div>
              <div className="flex-1 p-4 text-center sm:text-left">
                <h2 className="text-4xl font-bold text-[#14142B]">{feature.title}</h2>
                <p className="mt-4 text-lg text-[#4E4B66]">{feature.description}</p>
                <Button
                  href={feature.buttonLink}
                  as={Link}
                  className="mx-auto mt-6 bg-[#825534] text-white hover:bg-[#f0e6d6] hover:text-black sm:mx-0"
                >
                  {feature.buttonText}
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
}
