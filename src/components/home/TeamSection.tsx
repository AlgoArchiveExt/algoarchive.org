"use client";
import { Card, CardBody, Divider, Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";

// Example team member data with GitHub profile URLs
const teamMembers = [
  {
    initials: "AL",
    github: "https://github.com/lausan3"
  },
  {
    initials: "EW",
    github: "https://github.com/Ewu694" 
  },
  {
    initials: "MH",
    github: "https://github.com/riimuru" 
  },
  {
    initials: "NV",
    github: "https://github.com/noravgs" 
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


export default function TeamSection() {
  return (
    <div className="bg-[#333333] gap-8 px-4">
      <div className="text-center py-16">
        <h2 className="text-3xl text-white mb-12">Meet the Team</h2>
        <Divider className="my-4" />
        <div className="flex flex-col md:flex-row md:justify-center md:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="mb-8 md:mb-0 w-full md:w-80 mx-auto"
            >
              <Card>
                <CardBody className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#825534] text-white text-xl font-bold text-gray-700">
                    {member.initials}
                  </div>
                  <Button
                    href={member.github}
                    as={Link}
                    target="_blank"
                    variant="solid"
                    className="bg-[#EE9B01] text-white px-6 py-2 rounded-full mt-4 hover:text-black"
                  >
                    View GitHub Profile
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
