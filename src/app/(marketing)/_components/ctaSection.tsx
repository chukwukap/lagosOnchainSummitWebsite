import Gutter from "@/components/common/gutter";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CTASection = () => {
  return (
    <Gutter className="py-12 md:py-24">
      <section className="gradient-shadow relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-[hsl(var(--lagos-black)_/_0.7)] backdrop-blur-sm z-0" />

        {/* Animated background gradients */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[hsl(var(--lagos-blue)_/_0.3)] blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[hsl(var(--lagos-cyan)_/_0.3)] blur-[100px] animate-pulse delay-700" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 items-center p-6 sm:p-8 md:p-12 lg:p-16">
          {/* Image container with responsive sizing */}
          <div className="relative w-[80%] sm:w-[60%] lg:w-2/5 aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--lagos-blue)_/_0.2)] via-[hsl(var(--lagos-cyan)_/_0.2)] to-[hsl(var(--lagos-neon)_/_0.2)] rounded-full animate-pulse" />
            <div className="absolute inset-0 rotate-180 bg-gradient-to-br from-[hsl(var(--lagos-neon)_/_0.2)] via-[hsl(var(--lagos-cyan)_/_0.2)] to-[hsl(var(--lagos-blue)_/_0.2)] rounded-full animate-pulse delay-500" />
            <Image
              src="/assets/images/heroBg.png"
              fill
              alt="Lagos Onchain Summit"
              className="object-cover rounded-3xl transform hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 40vw"
              priority
            />
          </div>

          {/* Content container with better spacing */}
          <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[hsl(var(--lagos-blue))] to-[hsl(var(--lagos-cyan))] bg-clip-text text-transparent">
                Be a part of the future
              </h3>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[hsl(var(--lagos-white))] via-[hsl(var(--lagos-cyan))] to-[hsl(var(--lagos-neon))] bg-clip-text text-transparent leading-tight">
                LAGOS ONCHAIN SUMMIT
              </h1>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-[hsl(var(--lagos-white)_/_0.9)] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Join us for an immersive experience in blockchain technology,
              networking with industry leaders, and shaping the future of
              decentralized systems. Don&apos;t miss this opportunity to be at
              the forefront of innovation!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[hsl(var(--lagos-blue))] to-[hsl(var(--lagos-cyan))] 
                hover:opacity-90 transition-all duration-300 text-base sm:text-lg font-medium px-6 sm:px-8 py-6 
                transform hover:scale-105 hover:shadow-lg hover:shadow-[hsl(var(--lagos-cyan)_/_0.3)]"
              >
                Register now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-[hsl(var(--lagos-cyan))] text-[hsl(var(--lagos-cyan)] 
                hover:bg-[hsl(var(--lagos-cyan)_/_0.1)] transition-all duration-300 text-base sm:text-lg font-medium 
                px-6 sm:px-8 py-6 transform hover:scale-105 hover:shadow-lg hover:shadow-[hsl(var(--lagos-cyan)_/_0.2)]"
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
