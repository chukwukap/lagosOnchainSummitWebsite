import Gutter from "@/components/common/gutter";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutSection() {
  return (
    <Gutter className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About The Event
          </h1>
          <p className="text-sm md:text-base mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="text-sm md:text-base mb-8">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="w-full sm:w-auto">Register now</Button>
            <Button className="w-full sm:w-auto bg-none text-lagos-white bg-lagos-blue ">
              Be a Sponsor
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/images/heroBg.png"
              alt="about 1"
              fill
              className="object-cover rounded-t-full"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/images/heroBg.png"
              alt="about 2"
              fill
              className="object-cover rounded-t-full"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/images/heroBg.png"
              alt="about 3"
              fill
              className="object-cover rounded-b-full"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/images/heroBg.png"
              alt="about 4"
              fill
              className="object-cover rounded-b-full"
            />
          </div>
        </div>
      </div>
    </Gutter>
  );
}
