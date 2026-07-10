import ProjectHero from "@/components/sections/projectdetail/ProjectHero";
import ProjectOverview from "@/components/sections/projectdetail/ProjectOverview";
import ProjectAmenities from "@/components/sections/projectdetail/ProjectAmenities";
import ProjectFloorPlans from "@/components/sections/projectdetail/ProjectFloorPlans";
import ProjectGallery from "@/components/sections/projectdetail/ProjectGallery";
import ProjectAdvantages from "@/components/sections/projectdetail/ProjectAdvantages";
import ProjectMap from "@/components/sections/projectdetail/ProjectMap";

export const metadata = {
  title: "Kasindra Projects — Aurum Valley | Krishna Land Developers",
  description:
    "Explore Aurum Valley at Kasindra - an ongoing premium master planned plotting and villa community by Krishna Land Developers.",
};

const KASINDRA_BULLETS = [
  "Positioned in the prime Kasindra Growth Corridor",
  "NA-certified and Clear-Title Investment Plots",
  "Lush Landscaped Theme Gardens and Club Facilities",
  "Advanced Underground Utility Infrastructure",
];

const KASINDRA_STATS = [
  { value: "920 km²", label: "Dholera SIR Area" },
  { value: "222 Acre", label: "Aurum Valley Area" },
  { value: "2026-27", label: "Possession Timeline" },
];

export default function KasindraPage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <ProjectHero
        tag="Kasindra Collection"
        title="Aurum Valley AT KASINDRA"
        subtitle="Legacy of Rome, Modernised Today."
        description="An ongoing master planned plotting and villa estate development by Krishna Land Developers, located in the rapidly growing Kasindra corridor. Integrating top-tier utilities and classical aesthetic planning to form a premium investment-grade community."
        backgroundImage="/images/hero/hero-bg.png"
      />

      {/* 2. Overview Section */}
      <ProjectOverview
        badge="About the Project"
        title="Where Ancient Rome Meets Tomorrow's City."
        description="Aurum Valley Kasindra is an ongoing landmark plotting development, presenting premium infrastructure, paved wide roads, secure compounds, and modular services. Designed for modern living and high value appreciation, it offers investors clear-title plots and farmhouse units."
        bullets={KASINDRA_BULLETS}
        stats={KASINDRA_STATS}
        layoutMapImage="/about-bg.png"
      />

      {/* 3. Amenities Section */}
      <ProjectAmenities
        title="World-Class Amenities"
        subtitle="Every aspect is carefully curated for a premium weekend living and wellness experience."
      />

      {/* 4. Floor Plans Section */}
      <ProjectFloorPlans
        title="Floor Plans & Site Maps"
        subtitle="Browse all six floor plans. Click View Site Plan to open the full PDF."
      />

      {/* 5. Legacy Gallery */}
      <ProjectGallery
        title="Aurum Valley Legacy Gallery"
        subtitle="A visual journey through Roman grandeur meets smart city living."
      />

      {/* 6. Location Advantages */}
      <ProjectAdvantages
        title="You're at the Centre of It All."
      />

      {/* 7. Interactive Location Map */}
      <ProjectMap
        title="Aurum Valley Kasindra Map"
        locationName="Kasindra Growth Corridor, Gujarat, India"
        subtitle="Close to key expressways and the cargo airport zone."
        mapEmbedUrl="https://maps.google.com/maps?q=Kasindra,%20Gujarat,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
      />
    </div>
  );
}
