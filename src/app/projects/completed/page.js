import ProjectHero from "@/components/sections/projectdetail/ProjectHero";
import ProjectOverview from "@/components/sections/projectdetail/ProjectOverview";
import ProjectAmenities from "@/components/sections/projectdetail/ProjectAmenities";
import ProjectFloorPlans from "@/components/sections/projectdetail/ProjectFloorPlans";
import ProjectGallery from "@/components/sections/projectdetail/ProjectGallery";
import ProjectAdvantages from "@/components/sections/projectdetail/ProjectAdvantages";

export const metadata = {
  title: "Navagam Projects — Aurum Valley | Krishna Land Developers",
  description:
    "Explore Aurum Valley at Navagam - a premium, fully-delivered master planned plotting and farmhouse community by Krishna Land Developers.",
};

const NAVAGAM_BULLETS = [
  "Close to Navagam Transit Junction",
  "Fully NA-certified & Ready-to-Construct Plots",
  "Direct Connection to Dholera Expressway",
  "Secure Boundary Wall & Gated Entrance",
];

const NAVAGAM_STATS = [
  { value: "850 km²", label: "Dholera SIR Area" },
  { value: "185 Acre", label: "Aurum Valley Area" },
  { value: "Ready", label: "Possession Status" },
];

export default function NavagamPage() {
  const handleAction = () => {
    // Action trigger for user interaction
  };

  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <ProjectHero
        tag="Navagam Collection"
        title="Aurum Valley AT NAVAGAM"
        subtitle="Legacy of Rome, Modernised Today."
        description="A masterfully completed plotting and farmhouse development by Krishna Land Developers, situated in the fast-developing Navagam region. Combining classical architectural layout inspiration with premium utility systems to deliver a high-value, ready-for-possession residential asset."
        backgroundImage="/images/hero/hero-bg.png"
      />

      {/* 2. Overview Section */}
      <ProjectOverview
        badge="About the Project"
        title="Where Ancient Rome Meets Tomorrow's City."
        description="Aurum Valley Navagam represents a legacy of planning excellence, offering residents fully-demarcated residential zones, smart utilities, and ready-to-construct villa plots. Specially curated for weekend farmhouse escapes, it blends lush green fields, premium security, and modern infrastructural planning."
        bullets={NAVAGAM_BULLETS}
        stats={NAVAGAM_STATS}
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
        subtitle="Choose from our range of master-planned space configurations."
      />

      {/* 5. Legacy Gallery */}
      <ProjectGallery
        title="Aurum Valley Legacy Gallery"
        subtitle="A visual walk through premium design and master planning."
      />

      {/* 6. Location Advantages */}
      <ProjectAdvantages
        title="You're at the Centre of It All."
      />
    </div>
  );
}
