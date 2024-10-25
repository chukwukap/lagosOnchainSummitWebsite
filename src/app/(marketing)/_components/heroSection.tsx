import Gutter from "@/components/common/gutter";
import Countdown from "./countDown";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { bodyFont, headingFont } from "@/lib/fonts";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      {/* Background Image with Optimized Loading */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/heroBg.png"
          alt="Lagos Onchain Summit Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--lagos-black)_/_0.9)] via-[hsl(var(--lagos-black)_/_0.8)] to-[hsl(var(--lagos-black)_/_0.95)]" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--lagos-blue)_/_0.1)] rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(var(--lagos-cyan)_/_0.1)] rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <Gutter className="relative z-10 w-full py-16 flex flex-col gap-12 items-center justify-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[hsl(var(--lagos-cyan)_/_0.1)] border border-[hsl(var(--lagos-cyan)_/_0.2)] backdrop-blur-sm">
          <span className="text-[hsl(var(--lagos-cyan))] text-sm font-medium">
            November 30th - December 1st, 2024
          </span>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <h1
            className={`${headingFont.variable} font-sans text-5xl md:text-6xl lg:text-7xl font-bold leading-tight`}
          >
            <span className="block bg-gradient-to-r from-[hsl(var(--lagos-white))] via-[hsl(var(--lagos-cyan))] to-[hsl(var(--lagos-neon))] bg-clip-text text-transparent">
              LAGOS ONCHAIN SUMMIT
            </span>
          </h1>

          <p
            className={`${bodyFont.variable} text-lg md:text-xl text-[hsl(var(--lagos-white)_/_0.9)] max-w-3xl mx-auto leading-relaxed`}
          >
            Experience the convergence of technology, creativity, and social
            impact at Africa&apos;s premier blockchain event. Join industry
            leaders, innovators, and visionaries in shaping the future of Web3.
          </p>
        </div>

        <div className="backdrop-blur-sm bg-[hsl(var(--lagos-black)_/_0.3)] p-8 rounded-2xl border border-[hsl(var(--lagos-cyan)_/_0.2)]">
          <Countdown deadline={new Date("2024-11-30")} />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-[hsl(var(--lagos-blue))] to-[hsl(var(--lagos-cyan))] 
            hover:opacity-90 transition-all duration-300 text-base sm:text-lg font-medium px-8 py-6 
            transform hover:scale-105 hover:shadow-lg hover:shadow-[hsl(var(--lagos-cyan)_/_0.3)]"
          >
            Register Now
          </Button>
          <Link href="/register">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-[hsl(var(--lagos-cyan))] text-[hsl(var(--lagos-cyan)] 
              hover:bg-[hsl(var(--lagos-cyan)_/_0.1)] transition-all duration-300 text-base sm:text-lg font-medium 
              px-8 py-6 transform hover:scale-105 hover:shadow-lg hover:shadow-[hsl(var(--lagos-cyan)_/_0.2)]"
            >
              Be a Sponsor
            </Button>
          </Link>
        </div>
      </Gutter>
    </section>
  );
}
