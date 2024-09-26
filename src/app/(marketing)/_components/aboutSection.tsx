import Gutter from "@/components/common/gutter";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutSection() {
  return (
    <Gutter className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About The OnChain Summit
          </h1>
          <p className="text-sm md:text-base mb-8">
            Discover the future of technology and innovation at a groundbreaking
            event bringing together blockchain enthusiasts, developers,
            entrepreneurs, and changemakers.
          </p>
          <p className="text-sm md:text-base mb-8">
            This unique gathering offers a platform to explore the limitless
            potential of decentralized technology, featuring keynotes from
            industry leaders, immersive workshops, and engaging panel
            discussions focused on Web3, DeFi, and blockchain advancements.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="w-full sm:w-auto">Register Now</Button>
            <Button className="w-full sm:w-auto bg-none text-lagos-white bg-lagos-blue">
              Become a Sponsor
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/images/heroBg.png"
              alt="about 1"
              fill
              className="object-cover rounded-t-[30%]"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/images/heroBg.png"
              alt="about 2"
              fill
              className="object-cover rounded-t-[30%]"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/images/heroBg.png"
              alt="about 3"
              fill
              className="object-cover rounded-b-[30%]"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/images/heroBg.png"
              alt="about 4"
              fill
              className="object-cover rounded-b-[30%]"
            />
          </div>
        </div>
      </div>
    </Gutter>
  );
}
