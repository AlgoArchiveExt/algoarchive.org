"use client";
import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      title: "Connect your LeetCode account",
      description: "Use GitHub to quickly log in and seamlessly push your LeetCode solutions to your repository.",
      image: "/assets/connect.png",
    },
    {
      title: "Automate Solution Syncing",
      description: "Streamline your workflow by automatically syncing LeetCode solutions to your GitHub, minimizing manual updates.",
      image: "/assets/sync.png",
    },
    {
      title: "Track your progress",
      description: "Monitor your coding journey with ease and highlight your achievements as you advance through your challenges.",
      image: "/assets/progress.png",
    },
  ];

  // Animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-[#825534] py-16 text-center">
      <h2 className="text-3xl text-white font-semibold mb-12">How It Works</h2>

      {/* Features list mapped to individual cards */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 px-4">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="bg-[#EE9B01] w-full sm:w-80 rounded-lg shadow-lg border-none"
          >
            <CardBody className="p-0 flex flex-col h-full">
              {/* Container for the image with extra margin on mobile */}
              <div className="flex items-center justify-center w-full h-48 overflow-hidden rounded-t-lg sm:mt-0 mt-6">
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="w-1/2 sm:w-3/4 md:w-full h-auto object-contain"
                  style={{ maxWidth: "50%", height: "70%" }}
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                />
              </div>
              <div className="flex-grow p-6 flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
                <p className="text-md text-gray-100">{feature.description}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
