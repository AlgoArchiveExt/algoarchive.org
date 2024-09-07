'use client';

import { Button, Card, CardBody, Divider, Link } from '@nextui-org/react';
import { motion } from 'framer-motion';

// Example team member data with GitHub profile URLs
const teamMembers = [
  {
    initials: 'AL',
    github: 'https://github.com/lausan3',
  },
  {
    initials: 'EW',
    github: 'https://github.com/Ewu694',
  },
  {
    initials: 'MH',
    github: 'https://github.com/riimuru',
  },
  {
    initials: 'NV',
    github: 'https://github.com/noravgs',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function TeamSection() {
  return (
    <div className="gap-8 bg-algo-gray px-4">
      <div className="py-16 text-center">
        <h2 className="mb-12 text-3xl text-white">Meet the Team</h2>
        <Divider className="my-4" />
        <div className="flex flex-col md:flex-row md:justify-center md:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="mx-auto mb-8 w-full md:mb-0 md:w-80"
            >
              <Card>
                <CardBody className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg">
                  <div className="flex size-24 items-center justify-center rounded-full bg-[#825534] text-xl font-bold text-white">
                    {member.initials}
                  </div>
                  <Button
                    href={member.github}
                    as={Link}
                    target="_blank"
                    variant="solid"
                    className="mt-4 rounded-full bg-[#EE9B01] px-6 py-2 text-white hover:text-black"
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
