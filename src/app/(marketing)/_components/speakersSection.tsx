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
  // {
  //   name: "Alex Johnson",
  //   title: "DeFi Expert",
  //   image: "/assets/images/speakers/alex.jpeg",
  // },
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
