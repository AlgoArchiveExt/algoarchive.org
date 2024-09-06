"use client";
import { Button, Card, CardBody, Link } from "@nextui-org/react";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-[#333333]">
      <Card className="p-8 max-w-2xl mx-auto bg-transparent border-none shadow-none">
        <CardBody>
          <h1 className="text-4xl font-bold text-white mb-4">
            Effortlessly synchronize your solutions to GitHub with
            <span className="bg-gradient-to-r from-[#EE9B01] to-[#f7b801] text-transparent bg-clip-text">
              {" "} AlgoArchive
            </span>
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Easily sync your LeetCode solutions with GitHub and showcase your programming journey. 
          </p>
          <div className="flex flex-col items-center space-y-4">
            <Button
              href="https://chromewebstore.google.com/detail/algoarchive/anjcgdjflkjlhaopbilibnbfpialdbpl"
              as={Link}
              target="_blank"
              showAnchorIcon
              variant="ghost"
              className="bg-gradient-to-r from-[#EE9B01] to-[#f7b801] text-white px-6 py-2 rounded-full hover:text-black"
            >
              Download
            </Button>
            <p className="text-base bg-gradient-to-r from-[#EE9B01] to-[#f7b801] text-transparent bg-clip-text">            
              Get Started by downloading the extension!
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
