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
    <div className="gap-8 bg-algo-beige-primary px-4 dark:bg-algo-gray">
      <div className="py-16 text-center">
        <h2 className="mb-12 text-3xl text-heading dark:text-heading-dark">Meet the Team</h2>
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
                <CardBody className="flex flex-col items-center rounded-lg bg-algo-beige-secondary p-6 shadow-lg dark:bg-white">
                  <div
                    className="flex size-24 items-center justify-center rounded-full bg-algo-beige-primary text-xl
                    font-bold text-heading dark:bg-algo-brown-dark dark:text-heading-dark"
                  >
                    {member.initials}
                  </div>
                  <Button
                    href={member.github}
                    as={Link}
                    target="_blank"
                    variant="solid"
                    className="mt-4 rounded-full 
                    bg-algo-yellow px-6 py-2 text-white hover:text-black dark:bg-algo-yellow-dark"
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
