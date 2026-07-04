"use client";

import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";
import Image from "next/image";

const SKYSCRAPER_IMG = "/images/about/skyscraper.png";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const featureList = [
  "Trusted Expertise",
  "Bulk Dealing",
  "Strategic Investments",
  "Market Insights",
  "Legal Transparency",
  "Secure Transactions",
];

function CheckIcon() {
  return (
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0b2545] text-white shrink-0">
      <svg
        width="12"
        height="9"
        viewBox="0 0 12 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M1 4.5L4 7.5L11 1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function WhoWeAre() {
  return (
    <section className="w-full py-12 md:py-20 bg-white" aria-labelledby="who-we-are-heading">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Left Column: Curved Skyscraper Image */}
          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-5 relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] min-h-[380px] sm:min-h-[480px] rounded-[24px] overflow-hidden border border-[#f0f0f0] shadow-sm"
          >
            <Image
              src={SKYSCRAPER_IMG}
              alt="Futuristic curved white architectural skyscraper"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </motion.div>

          {/* Right Column: Text & Features List */}
          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-7 flex flex-col gap-6 lg:gap-10"
          >
            <div className="flex flex-col gap-3">
              {/* Reusable Badge component */}
              <Badge label="Who we are" />

              <h2
                id="who-we-are-heading"
                className="font-serif text-[30px] sm:text-[36px] md:text-[42px] font-semibold text-[#2c578b] leading-[1.12] tracking-[-1px]"
              >
                Building trust through
                <br />
                three decades of excellence.
              </h2>

              <p className="font-sans text-[15px] sm:text-[16px] font-light leading-[26px] sm:leading-[28px] text-[#525252] max-w-2xl mt-2">
                Krishna Land Developers has been redefining premium land investment for over thirty
                years, delivering meticulously planned communities, transparent transactions, and
                enduring value across Gujarat's most sought-after locations. We specialize in
                secure, high-potential land investments backed by deep market expertise and an
                unwavering commitment to our clients.
              </p>
            </div>

            {/* 2x3 Grid of Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6">
              {featureList.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-[#f5f5f5] hover:bg-[#eaeaea] border border-[#e5e5e5] rounded-[16px] py-4 px-5 transition-all duration-200"
                >
                  <CheckIcon />
                  <span className="font-sans text-[14px] sm:text-[15px] font-medium text-[#171717]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
