import Gutter from "@/components/common/gutter";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Contest = {
  title: string;
  description: string;
  icon: string;
};

const contests: Contest[] = [
  {
    title: "Hackathon",
    description: "Build innovative blockchain solutions in 48 hours",
    icon: "/assets/icons/png/hackathon.png",
  },
  {
    title: "Chess Tournament",
    description:
      "Test your strategic skills in our blockchain-themed chess competition",
    icon: "/assets/icons/png/chess.png",
  },
  {
    title: "NFT Minting Challenge",
    description: "Create and mint unique NFTs during the summit",
    icon: "/assets/icons/png/minting.png",
  },
  {
    title: "Crypto Trading Simulation",
    description: "Compete in a simulated crypto trading environment",
    icon: "/assets/icons/png/football.png",
  },
];

export default function ContestSection() {
  return (
    <Gutter className="py-24">
      <div className="relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--lagos-blue)_/_0.1)] rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(var(--lagos-cyan)_/_0.1)] rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 flex flex-col gap-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[hsl(var(--lagos-white))] via-[hsl(var(--lagos-cyan))] to-[hsl(var(--lagos-neon))] bg-clip-text text-transparent">
              Join The Ongoing Contests
            </h2>
            <p className="text-lg md:text-xl text-[hsl(var(--lagos-white)_/_0.9)] max-w-3xl mx-auto leading-relaxed">
              Participate in exciting blockchain-related competitions and win
              amazing prizes!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contests.map((contest) => (
              <ContestCard key={contest.title} contest={contest} />
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[hsl(var(--lagos-blue))] to-[hsl(var(--lagos-cyan))] 
                hover:opacity-90 transition-all duration-300 text-base sm:text-lg font-medium px-8 py-6 
                transform hover:scale-105 hover:shadow-lg hover:shadow-[hsl(var(--lagos-cyan)_/_0.3)]"
            >
              Join Contests Now
            </Button>
          </div>
        </div>
      </div>
    </Gutter>
  );
}

export const ContestCard = ({ contest }: { contest: Contest }) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--lagos-blue))] to-[hsl(var(--lagos-cyan))] rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex flex-col items-center justify-between gap-6 rounded-2xl p-8 bg-[hsl(var(--lagos-black)_/_0.9)] backdrop-blur-sm border border-[hsl(var(--lagos-cyan)_/_0.2)] h-full hover:border-[hsl(var(--lagos-cyan))] transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
        <div className="w-20 h-20 relative mb-2 group-hover:scale-110 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--lagos-blue)_/_0.2)] to-[hsl(var(--lagos-cyan)_/_0.2)] rounded-full blur-md animate-pulse" />
          <Image
            src={contest.icon}
            alt={contest.title}
            fill
            className="object-contain relative z-10"
          />
        </div>

        <div className="text-center flex-grow space-y-3">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--lagos-blue))] to-[hsl(var(--lagos-cyan))] bg-clip-text text-transparent">
            {contest.title}
          </h3>
          <p className="text-[hsl(var(--lagos-white)_/_0.9)] leading-relaxed">
            {contest.description}
          </p>
        </div>
      </div>
    </div>
  );
};
