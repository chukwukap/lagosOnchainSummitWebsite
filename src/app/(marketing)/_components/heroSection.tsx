import Gutter from "@/components/common/gutter";
import Countdown from "./countDown";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/heroBg.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <Gutter className="relative z-10 w-full py-16 flex flex-col gap-10 items-center justify-center text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block md:inline">LAGOS</span>{" "}
            <span className="block md:inline">ONCHAIN</span>{" "}
            <span className="block md:inline">SUMMIT</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-8 max-w-2xl mx-auto">
            Join us for the premier blockchain event in Lagos, bringing together
            innovators, developers, and industry leaders. Explore the latest in
            Web3 technology, DeFi, and blockchain applications. Network with
            peers, gain insights from expert speakers, and be part of shaping
            the future of decentralized technologies in Africa and beyond.
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
            <Button className="w-full sm:w-auto px-8 py-3 bg-blue-horizon text-lagos-white">
              Register now
            </Button>
          </Link>
        </div>
      </Gutter>
    </section>
  );
}
