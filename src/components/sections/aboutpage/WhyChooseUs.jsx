"use client";

import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Icons designed exactly like the Figma design
function TrustedIcon() {
  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2C578B] text-white">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L14.85 9.15L22 12L14.85 14.85L12 22L9.15 14.85L2 12L9.15 9.15L12 2Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

function TransparentDealsIcon() {
  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2C578B] text-white">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 12L10 15L17 8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function VerifiedDocumentationIcon() {
  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2C578B] text-white">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 8V12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="16" r="1.2" fill="currentColor" />
      </svg>
    </div>
  );
}

function GrowthPotentialIcon() {
  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2C578B] text-white">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4L4 16H20L12 4Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

const cardsData = [
  {
    title: "Trusted",
    description:
      "Three decades of consistent, ethical dealings have made us a name thousands of families and investors rely on.",
    icon: <TrustedIcon />,
  },
  {
    title: "Transparent Deals",
    description:
      "Every land transaction is handled with complete transparency, clear documentation, and verified ownership.",
    icon: <TransparentDealsIcon />,
  },
  {
    title: "Verified Documentation",
    description:
      "We conduct thorough title checks and provide full legal guidance for a safe, compliant, hassle-free purchase.",
    icon: <VerifiedDocumentationIcon />,
  },
  {
    title: "Growth Potential",
    description:
      "Our plotting schemes sit in fast-developing regions, giving investors strong appreciation opportunities.",
    icon: <GrowthPotentialIcon />,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="w-full py-16 md:py-24 bg-[#F9FAFB] border-y border-[#eaeaea] relative overflow-hidden"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12 sm:gap-16">
        {/* Centered Heading */}
        <div className="flex flex-col items-center text-center gap-3">
          <Badge label="Architects of Trust" className="self-center" />
          <h2
            id="why-choose-us-heading"
            className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#2c578b] tracking-[-1px]"
          >
            Why choose us?
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group flex flex-col items-center text-center bg-white border border-[#e5e5e5] rounded-[24px] p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 min-h-[280px]"
            >
              {/* Icon Container with subtle scale hover effect */}
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="font-sans text-[18px] sm:text-[20px] font-semibold text-[#0b2545] mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-[14px] sm:text-[15px] font-light leading-[22px] sm:leading-[24px] text-[#525252]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
