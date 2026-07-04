"use client";

import { tiersData } from "@/data/tiersData";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconArrowRight } from "./IconArrowRight";
import { IconGrowth } from "./IconGrowth";

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
      staggerChildren: 0.12,
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

export default function InvestmentOpportunitiesSection() {
  return (
    <section
      aria-labelledby="investment-heading"
      className="bg-[#0a0a0a] rounded-[24px] border border-white/10 p-5 sm:p-6 lg:p-10 xl:p-12 w-full flex flex-col gap-6 sm:gap-8 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.8)] overflow-hidden"
    >
      {/* ── Header Row ────────────────────────────────────────────────────── */}
      <motion.div
        variants={sectionHeaderVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 w-full"
      >
        <div className="flex flex-col gap-2.5 sm:gap-3 w-full md:w-auto min-w-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start bg-white/5 border border-white/10 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 text-white hover:bg-white/10 transition-all duration-300 cursor-default">
            <IconGrowth />
            <span className="font-sans text-[9px] sm:text-[10px] lg:text-[11px] font-medium leading-none tracking-[3px] sm:tracking-[4px] uppercase text-white/90">
              INVESTMENT OPPORTUNITIES
            </span>
          </div>

          {/* Heading */}
          <h2
            id="investment-heading"
            className="font-serif text-[24px] xs:text-[28px] sm:text-[30px] md:text-[32px] lg:text-[36px] font-semibold leading-[1.1] sm:leading-[1.15] md:leading-[40px] tracking-[-0.7px] sm:tracking-[-0.9px] text-white"
          >
            Structured opportunities with
            <br className="hidden xs:inline" />
            compelling returns.
          </h2>
        </div>

        <Link
          href="#"
          className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 h-9 sm:h-10 px-4 sm:px-5 lg:px-6 rounded-full bg-white text-[#0a0a0a] font-sans text-[12px] sm:text-[13px] font-medium hover:bg-[#f0f0f0] hover:shadow-[0_4px_16px_rgba(255,255,255,0.15)] active:scale-[0.97] transition-all duration-200 whitespace-nowrap shrink-0 md:self-end self-start"
        >
          Invest Now
          <IconArrowRight />
        </Link>
      </motion.div>

      {/* ── Cards Grid ────────────────────────────────────────────────────── */}
      <motion.div
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 xl:gap-6 w-full py-6"
      >
        {tiersData.map((tier, index) => (
          <motion.div
            key={tier.id}
            variants={cardVariants}
            className={`group flex flex-col bg-[#2F2F2F] border border-white/10 rounded-[16px] sm:rounded-[20px] p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 ${
              index === 1 ? "sm:-mt-2 lg:-mt-4" : ""
            }`}
          >
            {/* Tier Label */}
            <span className="font-sans text-[10px] sm:text-[11px] lg:text-[12px] font-medium uppercase tracking-[2px] sm:tracking-[3px] text-white/40">
              {tier.tier}
            </span>

            {/* Title */}
            <h3 className="font-serif text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold leading-[1.2] text-white mt-1 tracking-[-0.2px] sm:tracking-[-0.3px]">
              {tier.title}
            </h3>

            {/* ROI Stat */}
            <div className="mt-4 sm:mt-5 lg:mt-6">
              <span className="font-sans text-[36px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-bold leading-none tracking-[-1px] sm:tracking-[-1.5px] text-white">
                {tier.roi}
              </span>
              <span className="block font-sans text-[11px] sm:text-[12px] lg:text-[13px] xl:text-[14px] font-light text-white/50 mt-1 sm:mt-1.5">
                Projected annual ROI
              </span>
            </div>

            {/* Minimum Investment Pill */}
            <div className="mt-5 sm:mt-6 lg:mt-7 xl:mt-8 rounded-[10px] sm:rounded-[12px] border border-white/5 bg-white/[0.03] py-2.5 sm:py-3 lg:py-3.5 px-3 sm:px-4 text-center hover:bg-white/5 transition-all duration-300">
              <span className="font-sans text-[11px] sm:text-[12px] lg:text-[13px] xl:text-[14px] font-medium text-white/80">
                {tier.minInvestment}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
