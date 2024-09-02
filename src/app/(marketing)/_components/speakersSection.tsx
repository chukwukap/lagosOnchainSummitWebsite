import Image from "next/image";
import Gutter from "@/components/common/gutter";

type Speaker = {
  name: string;
  title: string;
  image: string;
};

const speakers: Speaker[] = [
  {
    name: "John Doe",
    title: "Blockchain Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Jane Smith",
    title: "Crypto Analyst",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Alex Johnson",
    title: "DeFi Expert",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Emily Brown",
    title: "NFT Artist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    name: "Michael Lee",
    title: "Smart Contract Auditor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Wilson",
    title: "Crypto Journalist",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
  },
];

export default function SpeakersSection() {
  return (
    <Gutter className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Meet The Speakers
        </h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto">
          Join us to hear from these industry leaders shaping the future of
          blockchain technology.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((speaker) => {
          return <SpeakerCard key={speaker.name} speaker={speaker} />;
        })}
      </div>
    </Gutter>
  );
}

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <div className="">
      <div className="aspect-[3/4] relative ">
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          className="object-cover rounded-3xl border-b-[4px] shadow-lg"
        />
      </div>
      <div className="p-4 text-white text-center ">
        <h3 className="text-xl font-bold">{speaker.name}</h3>
        <p className="text-sm">{speaker.title}</p>
      </div>
    </div>
  );
};
