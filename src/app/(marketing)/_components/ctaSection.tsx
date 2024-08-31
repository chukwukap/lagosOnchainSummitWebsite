import Gutter from "@/components/common/gutter";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CTASection() {
  return (
    <Gutter className="py-24">
      <section className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-center bg-gradient-to-r from-[#7A7A7A] via-[#474747] to-[#141414] rounded-3xl p-8 lg:p-12">
        <div className="relative w-full lg:w-1/3 aspect-square overflow-hidden">
          <Image
            src="/assets/images/heroBg.png"
            fill
            alt="Lagos Onchain Summit"
            className="object-cover rounded-t-[30%] "
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-lagos-cyan mb-3">
            Be a part of the future
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            LAGOS ONCHAIN SUMMIT
          </h1>
          <p className="text-base md:text-lg mb-8 text-white/80 max-w-2xl mx-auto lg:mx-0">
            Join us for an immersive experience in blockchain technology,
            networking with industry leaders, and shaping the future of
            decentralized systems. Don&apos;t miss this opportunity to be at the
            forefront of innovation!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="w-full sm:w-auto">
              Register now
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Be a Sponsor
            </Button>
          </div>
        </div>
      </section>
    </Gutter>
  );
}
