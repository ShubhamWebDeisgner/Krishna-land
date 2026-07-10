"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ── Animation Variants ─────────────────────────────────────────────────── */
const sectionHeaderVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardsContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const projectsData = [
  {
    id: "kasindra",
    title: "Aurum Valley at Kasindra",
    location: "Kasindra, Dholera SIR",
    description:
      "An ongoing master planned plotting and villa estate development by Krishna Land Developers, situated in the high-growth Kasindra corridor.",
    tags: ["Ongoing", "Residential Plots", "Villas"],
    image: "/image1.avif",
    href: "/kasindra",
  },
  {
    id: "navagam",
    title: "Aurum Valley at Navagam",
    location: "Navgam, Dholera SIR",
    description:
      "A premium, fully-completed plotting and ready-to-construct farmhouse community designed for weekend living and high appreciation.",
    tags: ["Completed", "Farmhouses", "Ready Title"],
    image: "/image2.avif",
    href: "/navagam",
  },
];

export default function ProjectListingSection() {
  return (
    <section
      aria-labelledby="project-listing-heading"
      className="flex flex-col gap-10 w-full overflow-hidden"
    >
      {/* ── Header Row ────────────────────────────────────────────────────── */}
      <motion.div
        variants={sectionHeaderVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-3 w-full"
      >
        <div className="flex flex-col gap-3 w-full md:w-auto min-w-0">
          <h2
            id="project-listing-heading"
            className="font-serif text-[28px] sm:text-[36px] lg:text-[40px] font-semibold leading-[1.1] tracking-[-0.9px] text-[#2c578b] break-words"
          >
            Explore our premium
            <br className="hidden xs:inline" />
            developments.
          </h2>
          {/* <p className="font-sans text-[15px] sm:text-[16px] text-[#737373] max-w-xl font-light">
            Discover luxury plotting projects and weekend farmhouses curated for high appreciation
            and signature lifestyle.
          </p> */}
        </div>
      </motion.div>

      {/* ── Cards Grid ────────────────────────────────────────────────────── */}
      <motion.div
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
      >
        {projectsData.map(project => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="group flex flex-col bg-white rounded-[24px] border border-[#e5e5e5] p-4 overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1"
          >
            {/* Image Container with inner rounding */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-[#f5f5f5]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                loading="lazy"
              />
            </div>

            {/* Info details */}
            <div className="flex flex-col gap-2 mt-5 flex-1">
              <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#0b2545] tracking-[-0.3px] group-hover:text-[#2c578b] transition-colors duration-200">
                {project.title}
              </h3>

              <div className="flex items-center gap-1.5 text-[#737373] text-[13px] sm:text-[14px] font-light">
                <MapPin size={14} className="text-[#2c578b]" />
                <span className="truncate">{project.location}</span>
              </div>

              <p className="font-sans text-[13.5px] text-[#525252] leading-[20px] font-light mt-1 line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Tags badges */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-[#f5f5f5] text-[#0b2545] font-sans text-[11px] sm:text-[12px] font-medium px-3 py-1 rounded-full whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View Details / Read More Button */}
            <div className="mt-6 w-full">
              <Link
                href={project.href}
                className="w-full h-11 bg-[#0b2545] hover:bg-[#2c578b] !text-white font-sans text-[13px] sm:text-[14px] font-medium rounded-full flex items-center justify-center transition-all duration-200 active:scale-[0.97]"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
