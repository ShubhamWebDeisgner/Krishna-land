import AboutSection from "@/components/sections/about/AboutSection";
import ProjectGallerySection from "@/components/sections/gallery/ProjectGallerySection";
import HeroSection from "@/components/sections/home/HeroSection";
import InvestmentOpportunitiesSection from "@/components/sections/investment/InvestmentOpportunitiesSection";
import OngoingProjectsSection from "@/components/sections/ongoing/OngoingProjectsSection";
import AvailablePlotsSection from "@/components/sections/plot/AvailablePlotsSection";
import TestimonialsSection from "@/components/sections/testimonals/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-8 py-12 flex flex-col gap-16 md:gap-24">
      <HeroSection />
      <AboutSection />
      <OngoingProjectsSection />
      {/* <CompletedProjectsSection /> */}
      <AvailablePlotsSection />
      <ProjectGallerySection />
      <InvestmentOpportunitiesSection />
      <TestimonialsSection />
    </div>
  );
}
