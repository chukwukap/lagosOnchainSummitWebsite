import Image from "next/image";
import Gutter from "@/components/common/gutter";

type Speaker = {
  name: string;
  title: string;
  image: string;
};

const speakers: Speaker[] = [
  {
    name: "Ugochukwu Aronu.",
    title: "CEO/Co-founder, Asset Chain",
    image: "/assets/images/speakers/ugo.jpeg",
  },
  {
    name: "David Salami",
    title: "Co-founder Hyperbridge",
    image: "/assets/images/speakers/david.jpg",
  },
  {
    name: "Jesse Pollak",
    title: "Creator, Base. \n VP of Engineering, Coinbase.",
    image: "/assets/images/speakers/jesse.png",
  },
];

const SpeakersSection = () => {
  return (
    <Gutter className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--lagos-blue))] via-[hsl(var(--lagos-cyan))] to-[hsl(var(--lagos-neon))] bg-clip-text text-transparent">
          Meet The Speakers
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.name} speaker={speaker} />
        ))}
      </div>
    </Gutter>
  );
};

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <div className="gradient-shadow p-[1px] rounded-2xl transition-all duration-300 hover:scale-[1.02]">
      <div className="bg-[hsl(var(--lagos-black)_/_0.7)] rounded-2xl overflow-hidden backdrop-blur-sm">
        <div className="aspect-[3/4] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(var(--lagos-black))] opacity-80 z-10" />
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--lagos-blue))] to-[hsl(var(--lagos-cyan))] bg-clip-text text-transparent">
                {speaker.name}
              </h3>
              <p className="text-[hsl(var(--lagos-white))] text-sm">
                {speaker.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersSection;
