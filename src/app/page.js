import AboutSection from "@/components/sections/about/AboutSection";
import HeroSection from "@/components/sections/home/HeroSection";
import AboutDholeraSection from "@/components/sections/dholera/AboutDholeraSection";
import ProjectsShowcaseSection from "@/components/sections/home/ProjectsShowcaseSection";
import ServicesSection from "@/components/sections/services/ServicesSection";
import BlogSection from "@/components/sections/blog/BlogSection";
import CareersSection from "@/components/sections/careers/CareersSection";

// Unused sections commented out according to client description (not removed from folder)
// import OngoingProjectsSection from "@/components/sections/ongoing/OngoingProjectsSection";
// import AvailablePlotsSection from "@/components/sections/plot/AvailablePlotsSection";
// import ProjectGallerySection from "@/components/sections/gallery/ProjectGallerySection";
// import InvestmentOpportunitiesSection from "@/components/sections/investment/InvestmentOpportunitiesSection";
// import TestimonialsSection from "@/components/sections/testimonals/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-8 py-12 flex flex-col gap-24 md:gap-36">
      <HeroSection />
      <AboutSection />
      <AboutDholeraSection />
      <ProjectsShowcaseSection />
      <ServicesSection />
      <BlogSection />
      <CareersSection />

      {/* Commented out original landing page sections not present in description */}
      {/* 
      <OngoingProjectsSection />
      <AvailablePlotsSection />
      <ProjectGallerySection />
      <InvestmentOpportunitiesSection />
      <TestimonialsSection /> 
      */}
    </div>
  );
}
