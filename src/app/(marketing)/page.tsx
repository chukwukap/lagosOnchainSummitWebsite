import AboutSection from "./_components/aboutSection";
import ContestSection from "./_components/contestSection";
import CTASection from "./_components/ctaSection";
import HeroSection from "./_components/heroSection";
import SpeakersSection from "./_components/speakersSection";
import SponsorsSection from "./_components/sponsorsSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <SponsorsSection />
      <AboutSection />
      <ContestSection />
      <SpeakersSection />
      <CTASection />
    </main>
  );
}
