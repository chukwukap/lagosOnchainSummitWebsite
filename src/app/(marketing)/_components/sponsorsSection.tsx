import Gutter from "@/components/common/gutter";
import { Button } from "@/components/ui/button";

const sponsors = ["DOOR CHAIN", "ARBITREND", "AVALUNCHE", "INCHAIN", "SOLUNA"];

export default function SponsorsSection() {
  return (
    <Gutter className="min-h-[40vh] flex flex-col justify-center gap-12">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="text-5xl font-bold">Sponsors</h1>
      </div>

      <div className="overflow-hidden whitespace-nowrap mt-8">
        <div className="inline-block animate-marquee">
          {sponsors.concat(sponsors).map((sponsor, index) => (
            <span
              key={index}
              className="inline-block px-8 text-2xl font-bold text-[#4C4C4C]"
            >
              {sponsor}
            </span>
          ))}
        </div>
        <div className="inline-block animate-marquee" aria-hidden="true">
          {sponsors.concat(sponsors).map((sponsor, index) => (
            <span
              key={index}
              className="inline-block px-8 text-2xl font-bold text-[#4C4C4C]"
            >
              {sponsor}
            </span>
          ))}
        </div>
      </div>
    </Gutter>
  );
}
