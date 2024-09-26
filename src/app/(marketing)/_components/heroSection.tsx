import Gutter from "@/components/common/gutter";
import Countdown from "./countDown";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { bodyFont, headingFont } from "@/lib/fonts";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/heroBg.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <Gutter className="relative z-10 w-full py-16 flex flex-col gap-10 items-center justify-center text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1
            className={`${headingFont.variable}  font-sans text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}
          >
            <span className="block md:inline">LAGOS</span>{" "}
            <span className="block md:inline gradient-text">ONCHAIN</span>{" "}
            <span className="block md:inline">SUMMIT</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-8 max-w-2xl mx-auto">
            Experience the convergence of technology, creativity, and social
            impact at a groundbreaking event designed to spotlight Nigeria’s
            global relevance in the blockchain space.
          </p>
        </div>
        <div className="mb-8">
          <Countdown deadline={new Date("2024-10-20")} />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="w-full sm:w-auto px-8 py-3" disabled>
            Claim points
          </Button>
          <Link href={"/register"}>
            <Button className="w-full sm:w-auto px-8 py-3 gradient-blue text-lagos-white">
              Be a Sponsor
            </Button>
          </Link>
        </div>
      </Gutter>
    </section>
  );
}
