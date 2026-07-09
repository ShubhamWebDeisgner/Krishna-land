"use client";

import { motion } from "framer-motion";
import { Building2, LineChart, Compass } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
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

export default function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: "Property Consulting",
      description: "Get personalized guidance on selecting the best plots, land zoning regulations, and future value mapping in Dholera SIR.",
    },
    {
      icon: LineChart,
      title: "Investment Advisory",
      description: "Structured high-yield advice, ROI projections, and DMIC corridor zoning growth analysis for institutional & retail portfolios.",
    },
    {
      icon: Compass,
      title: "Site Visit Assistance",
      description: "Complete hassle-free logistics support, chauffeured site visits, and physical layout demonstrations on-ground.",
    },
  ];

  return (
    <section id="services" aria-labelledby="services-heading" className="w-full flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 w-full">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 self-start bg-[#2C578B]/10 rounded-full px-4 py-2 text-[#2C578B]">
            <span className="font-sans text-[11px] font-semibold tracking-[4px] uppercase">
              Services
            </span>
          </div>
          <h2
            id="services-heading"
            className="font-display text-[32px] sm:text-[38px] lg:text-[42px] font-semibold leading-[1.15] tracking-[-1px] text-[#0B2545]"
          >
            Core Expertise
          </h2>
        </div>
        <Link
          href="/about"
          className="inline-flex items-center justify-center h-11 px-6 rounded-full border border-[#e5e5e5] bg-white text-[#0B2545] font-sans text-[13px] font-medium hover:border-[#2C578B] hover:text-[#2C578B] hover:shadow-sm transition-all duration-200 whitespace-nowrap md:self-end self-start"
        >
          Explore Services
        </Link>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full"
      >
        {services.map((svc, index) => {
          const Icon = svc.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group flex flex-col h-full gap-4 bg-white p-8 rounded-[24px] border border-[#e5e5e5] hover:border-[#2C578B]/30 hover:shadow-[0_15px_30px_rgba(11,37,69,0.05)] transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2C578B]/10 text-[#2C578B] group-hover:bg-[#2C578B] group-hover:text-white transition-all duration-300 shrink-0">
                <Icon size={22} />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="font-display text-[20px] font-semibold text-[#0B2545] group-hover:text-[#2C578B] transition-colors duration-200">
                  {svc.title}
                </h3>
                <p className="font-sans text-[14px] text-[#525252] font-light leading-[22px]">
                  {svc.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
