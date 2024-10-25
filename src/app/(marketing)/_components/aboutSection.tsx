import Gutter from "@/components/common/gutter";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutSection = () => {
  return (
    <Gutter className="py-24">
      <div className="relative">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--lagos-black))] via-transparent to-[hsl(var(--lagos-black)_/_0.8)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm md:text-base font-medium text-[hsl(var(--lagos-cyan))]">
              DISCOVER THE EXPERIENCE
            </h2>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[hsl(var(--lagos-white))] via-[hsl(var(--lagos-cyan))] to-[hsl(var(--lagos-neon))] bg-clip-text text-transparent">
              About The OnChain Summit
            </h1>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Stats */}
            <div className="space-y-8">
              <div className="gradient-shadow p-6 rounded-2xl bg-[hsl(var(--lagos-black)_/_0.7)]">
                <h3 className="text-4xl font-bold text-[hsl(var(--lagos-cyan))]">
                  2000+
                </h3>
                <p className="text-[hsl(var(--lagos-white)_/_0.9)]">
                  Expected Attendees
                </p>
              </div>
              <div className="gradient-shadow p-6 rounded-2xl bg-[hsl(var(--lagos-black)_/_0.7)]">
                <h3 className="text-4xl font-bold text-[hsl(var(--lagos-cyan))]">
                  50+
                </h3>
                <p className="text-[hsl(var(--lagos-white)_/_0.9)]">
                  Industry Speakers
                </p>
              </div>
              <div className="gradient-shadow p-6 rounded-2xl bg-[hsl(var(--lagos-black)_/_0.7)]">
                <h3 className="text-4xl font-bold text-[hsl(var(--lagos-cyan))]">
                  2
                </h3>
                <p className="text-[hsl(var(--lagos-white)_/_0.9)]">
                  Days of Innovation
                </p>
              </div>
            </div>

            {/* Center Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-lg prose-invert">
                <p className="text-lg leading-relaxed text-[hsl(var(--lagos-white)_/_0.9)]">
                  Join us for an unprecedented gathering of blockchain
                  visionaries, developers, entrepreneurs, and innovators. The
                  OnChain Summit is more than just a conference – it&apos;s a
                  catalyst for the future of decentralized technology.
                </p>
                <p className="text-lg leading-relaxed text-[hsl(var(--lagos-white)_/_0.9)]">
                  Experience cutting-edge keynotes, hands-on workshops, and
                  dynamic panel discussions focused on Web3, DeFi, and the
                  latest blockchain advancements. Network with industry leaders
                  and be part of shaping the next generation of digital
                  innovation.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="gradient-shadow p-6 rounded-2xl bg-[hsl(var(--lagos-black)_/_0.7)]">
                  <h4 className="text-[hsl(var(--lagos-cyan))] font-semibold mb-2">
                    Workshops
                  </h4>
                  <p className="text-sm text-[hsl(var(--lagos-white)_/_0.8)]">
                    Interactive sessions with industry experts
                  </p>
                </div>
                <div className="gradient-shadow p-6 rounded-2xl bg-[hsl(var(--lagos-black)_/_0.7)]">
                  <h4 className="text-[hsl(var(--lagos-cyan))] font-semibold mb-2">
                    Networking
                  </h4>
                  <p className="text-sm text-[hsl(var(--lagos-white)_/_0.8)]">
                    Connect with global blockchain leaders
                  </p>
                </div>
                <div className="gradient-shadow p-6 rounded-2xl bg-[hsl(var(--lagos-black)_/_0.7)]">
                  <h4 className="text-[hsl(var(--lagos-cyan))] font-semibold mb-2">
                    Innovation Hub
                  </h4>
                  <p className="text-sm text-[hsl(var(--lagos-white)_/_0.8)]">
                    Showcase of cutting-edge projects
                  </p>
                </div>
                <div className="gradient-shadow p-6 rounded-2xl bg-[hsl(var(--lagos-black)_/_0.7)]">
                  <h4 className="text-[hsl(var(--lagos-cyan))] font-semibold mb-2">
                    Hackathons
                  </h4>
                  <p className="text-sm text-[hsl(var(--lagos-white)_/_0.8)]">
                    Hands-on technology experiences
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[hsl(var(--lagos-cyan))] text-[hsl(var(--lagos-black))] 
                  font-semibold px-8 py-6"
                >
                  Register Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-[hsl(var(--lagos-cyan))] text-[hsl(var(--lagos-cyan))]
                  font-semibold px-8 py-6"
                >
                  Become a Sponsor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Gutter>
  );
};

export default AboutSection;
