import ProjectAdvantages from "@/components/sections/projectdetail/ProjectAdvantages";
import ProjectAmenities from "@/components/sections/projectdetail/ProjectAmenities";
import ProjectFloorPlans from "@/components/sections/projectdetail/ProjectFloorPlans";
import ProjectGallery from "@/components/sections/projectdetail/ProjectGallery";
import ProjectHero from "@/components/sections/projectdetail/ProjectHero";
import ProjectMap from "@/components/sections/projectdetail/ProjectMap";
import ProjectOverview from "@/components/sections/projectdetail/ProjectOverview";

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
        subtitle="Browse all six floor plans. Click View Site Plan to open the full PDF."
      />

      {/* 5. Legacy Gallery */}
      <ProjectGallery
        title="Aurum Valley Legacy Gallery"
        subtitle="A visual journey through Roman grandeur meets smart city living."
      />

      {/* 6. Location Advantages */}
      <ProjectAdvantages title="You're at the Centre of It All." />

      {/* 7. Interactive Location Map */}
      <ProjectMap
        title="Aurum Valley Navagam Map"
        locationName="Navagam Junction, Gujarat, India"
        subtitle="Conveniently connected to Dholera Expressway and main transport junctions."
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16303.665728785141!2d72.26509420561315!3d22.355080351668633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f20891c861d17%3A0x61c0bffd087cc6fe!2sNavagam%2C%20Gujarat%20382465!5e0!3m2!1sen!2sin!4v1783673720661!5m2!1sen!2sin"
      />
    </div>
  );
}
