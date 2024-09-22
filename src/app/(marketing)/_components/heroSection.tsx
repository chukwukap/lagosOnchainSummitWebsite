import Gutter from "@/components/common/gutter";
import Countdown from "./countDown";
import { Button } from "@/components/ui/button";

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="mb-8">
          <Countdown deadline={new Date("2024-09-20")} />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="w-full sm:w-auto px-8 py-3">Claim points</Button>
          <Button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#2044FF] via-[#3556FF] to-[#4A67FF] text-lagos-white">
            Register now
          </Button>
        </div>
      </Gutter>
    </section>
  );
}
