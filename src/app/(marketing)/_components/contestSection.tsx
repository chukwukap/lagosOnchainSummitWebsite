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
    <Gutter className="py-16">
      <div className="flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Join The Ongoing Contests
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
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
          <Button>Join now</Button>
        </div>
      </div>
    </Gutter>
  );
}

export const ContestCard = ({ contest }: { contest: Contest }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-3xl p-6 border border-lagos-cyan h-full">
      <div className="w-16 h-16 relative mb-2">
        <Image
          src={contest.icon}
          alt={contest.title}
          fill
          className="object-contain"
        />
      </div>
      <div className="text-center flex-grow">
        <h3 className="text-xl font-bold mb-2 ">{contest.title}</h3>
        <p className="text-sm text-white/80">{contest.description}</p>
      </div>
    </div>
  );
};
