'use client';

import { Card, CardBody } from '@nextui-org/react';
import { motion } from 'framer-motion';

export default function FeaturesSection() {
  const features = [
    {
      title: 'Connect your LeetCode account',
      description: 'Use GitHub to quickly log in and seamlessly push your LeetCode solutions to your repository.',
      image: '/assets/connect.png',
    },
    {
      title: 'Automate Solution Syncing',
      description:
        'Streamline your workflow by automatically syncing LeetCode solutions to your GitHub, minimizing manual updates.',
      image: '/assets/sync.png',
    },
    {
      title: 'Track your progress',
      description:
        'Monitor your coding journey with ease and highlight your achievements as you advance through your challenges.',
      image: '/assets/progress.png',
    },
  ];

  // Animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-algo-beige-secondary dark:bg-algo-brown-darker py-16 text-center">
      <h2 className="mb-12 text-3xl font-semibold text-heading dark:text-heading-dark">How It Works</h2>

      {/* Features list mapped to individual cards */}
      <div className="flex flex-col justify-center gap-8 px-4 sm:flex-row">
        {features.map((feature, index) => (
          <Card key={index} className="w-full rounded-lg border-none bg-white dark:bg-algo-yellow-dark shadow-lg sm:w-80">
            <CardBody className="flex h-full flex-col p-0">
              {/* Container for the image with extra margin on mobile */}
              <div className="mt-6 flex h-48 w-full items-center justify-center overflow-hidden rounded-t-lg sm:mt-0">
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="h-auto w-1/2 object-contain sm:w-3/4 md:w-full"
                  style={{ maxWidth: '50%', height: '70%' }}
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                />
              </div>
              <div className="flex grow flex-col justify-between p-6">
                <h3 className="mb-2 text-center text-xl font-bold text-heading dark:text-heading-dark">{feature.title}</h3>
                <p className="text-md text-subheading dark:text-gray-100">{feature.description}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
