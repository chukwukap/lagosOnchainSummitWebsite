import AboutSection from "./_components/aboutSection";
import ContestSection from "./_components/contestSection";
import HeroSection from "./_components/heroSection";
import SponsorsSection from "./_components/sponsorsSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <SponsorsSection />
      <AboutSection />
      <ContestSection />
    </main>
  );
}
