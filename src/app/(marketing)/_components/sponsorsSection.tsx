"use client";

import Gutter from "@/components/common/gutter";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const sponsors = [
  {
    name: "Tech and Techies",
    logo: "/assets/images/sponsors/tech_techies.jpg",
  },
  { name: "Felbeth", logo: "/assets/images/sponsors/felbeth.png" },
  { name: "Hive", logo: "/assets/images/sponsors/hive.png" },
  { name: "BattleDogs", logo: "/assets/images/sponsors/community.png" },
];

const SponsorsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
      return () =>
        scrollContainer.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  useEffect(() => {
    const autoScroll = () => {
      if (!isHovered && scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;

        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scroll("right");
        }
      }
    };

    const interval = setInterval(autoScroll, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <Gutter className="py-20">
      <div className="text-center mb-16 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--lagos-blue)_/_0.1)] rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(var(--lagos-cyan)_/_0.1)] rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 ">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[hsl(var(--lagos-white))] via-[hsl(var(--lagos-cyan))] to-[hsl(var(--lagos-neon))] bg-clip-text text-transparent">
            Our Valued Sponsors and Partners
          </h2>
          <p className="text-lg text-[hsl(var(--lagos-white)_/_0.9)] max-w-2xl mx-auto leading-relaxed">
            Collaborating with industry leaders to drive blockchain innovation
            and adoption in Africa
          </p>
        </div>
      </div>

      <div className="relative group">
        <button
          onClick={() => scroll("left")}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[hsl(var(--lagos-black)_/_0.8)] p-2 rounded-full 
            hover:bg-[hsl(var(--lagos-blue)_/_0.2)] transition-all duration-300 transform hover:scale-110
            ${isAtStart ? "opacity-0" : "opacity-100"} backdrop-blur-sm`}
          disabled={isAtStart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 px-4 py-8 scroll-smooth no-scrollbar"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex-none w-[280px] bg-[hsl(var(--lagos-black)_/_0.5)] backdrop-blur-sm rounded-xl p-6 
                border border-[hsl(var(--lagos-blue)_/_0.2)] hover:border-[hsl(var(--lagos-cyan))] transition-all duration-300 
                transform hover:scale-105 hover:shadow-xl hover:shadow-[hsl(var(--lagos-cyan)_/_0.2)]"
            >
              <div className="h-40 relative flex items-center justify-center mb-4 overflow-hidden">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={200}
                  height={160}
                  className="object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-medium text-center text-[hsl(var(--lagos-white))] hover:text-[hsl(var(--lagos-cyan))] transition-colors">
                {sponsor.name}
              </h3>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[hsl(var(--lagos-black)_/_0.8)] p-2 rounded-full 
            hover:bg-[hsl(var(--lagos-blue)_/_0.2)] transition-all duration-300 transform hover:scale-110
            ${isAtEnd ? "opacity-0" : "opacity-100"} backdrop-blur-sm`}
          disabled={isAtEnd}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </Gutter>
  );
};

export default SponsorsSection;
