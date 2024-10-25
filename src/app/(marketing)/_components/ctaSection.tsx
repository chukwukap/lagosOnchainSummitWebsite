import Gutter from "@/components/common/gutter";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CTASection = () => {
  return (
    <Gutter className="py-24">
      <section className="gradient-shadow relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-[hsl(var(--lagos-black)_/_0.7)] backdrop-blur-sm z-0" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center p-8 lg:p-16">
          <div className="relative w-full lg:w-2/5 aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--lagos-blue)_/_0.2)] via-[hsl(var(--lagos-cyan)_/_0.2)] to-[hsl(var(--lagos-neon)_/_0.2)] rounded-full animate-pulse" />
            <Image
              src="/assets/images/heroBg.png"
              fill
              alt="Lagos Onchain Summit"
              className="object-cover rounded-3xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[hsl(var(--lagos-blue))] to-[hsl(var(--lagos-cyan))] bg-clip-text text-transparent mb-3">
              Be a part of the future
            </h3>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-[hsl(var(--lagos-white))] via-[hsl(var(--lagos-cyan))] to-[hsl(var(--lagos-neon))] bg-clip-text text-transparent">
              LAGOS ONCHAIN SUMMIT
            </h1>
            <p className="text-base md:text-lg mb-10 text-[hsl(var(--lagos-white)_/_0.9)] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Join us for an immersive experience in blockchain technology,
              networking with industry leaders, and shaping the future of
              decentralized systems. Don&apos;t miss this opportunity to be at
              the forefront of innovation!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[hsl(var(--lagos-blue))] to-[hsl(var(--lagos-cyan))] hover:opacity-90 transition-opacity text-lg font-medium px-8"
              >
                Register now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-[hsl(var(--lagos-cyan))] text-[hsl(var(--lagos-cyan))] hover:bg-[hsl(var(--lagos-cyan)_/_0.1)] transition-colors text-lg font-medium px-8"
              >
                Be a Sponsor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Gutter>
  );
};

export default CTASection;
