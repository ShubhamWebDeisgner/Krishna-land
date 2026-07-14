"use client";

import { motion } from "framer-motion";
import { FileText, MapPin, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import IconArrowRight from "./IconArrowRight";
import IconInfo from "./IconInfo";
import StatTile from "./StatTile";

const ABOUT_IMG = "/about-bg.png";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const leftColumnVariants = {
  hidden: { opacity: 0, x: -20, y: 20 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const rightColumnVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const statContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

export default function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="flex flex-col gap-12 w-full">
      {/* Upper Row: Intro & Image */}
      <div className="grid grid-cols-12 gap-6 lg:gap-8 w-full items-stretch">
        {/* ─── LEFT COLUMN ───────────────────────────────────────────── */}
        <motion.div
          variants={leftColumnVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="col-span-12 lg:col-span-7
                        relative flex flex-col justify-between gap-6
                        bg-white rounded-[24px] p-8 pb-12
                        border border-[#f0f0f0]
                        shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_1px_2px_-1px_rgba(0,0,0,0.04)]"
        >
          <div className="flex flex-col gap-5">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 self-start
                         bg-[#f5f5f5] rounded-full px-4 py-2"
            >
              <IconInfo />
              <span className="font-sans text-[11px] font-semibold leading-[16px] tracking-[4px] uppercase text-[#0B2545]">
                About Us
              </span>
            </motion.div>

            {/* Heading */}
            <div className="flex flex-col gap-4">
              <h2
                id="about-heading"
                className="font-display text-[32px] sm:text-[38px] lg:text-[42px] font-semibold
                           leading-[1.15] tracking-[-1px] text-[#2C578B]"
              >
                Building Tomorrow's Landmarks with Trust & Vision
              </h2>

              {/* Company Introduction */}
              <div>
                <h4 className="font-sans text-[12px] font-bold uppercase tracking-[1px] text-[#0B2545]/70 mb-1">
                  Company Introduction
                </h4>
                <p className="font-sans text-[15px] font-light leading-[26px] text-[#525252] max-w-xl">
                  Krishna Land Developers is a trusted real estate developer specializing in premium
                  land investments and thoughtfully planned projects in Dholera Smart City and other
                  high-growth regions. Every project is carefully selected based on location
                  potential, future infrastructure, and investment appreciation, ensuring our
                  clients invest with confidence and peace of mind.
                </p>
              </div>

              {/* Legacy & Background */}
              <div>
                <h4 className="font-sans text-[12px] font-bold uppercase tracking-[1px] text-[#0B2545]/70 mb-1">
                  Legacy & Background
                </h4>
                <p className="font-sans text-[15px] font-light leading-[26px] text-[#525252] max-w-xl">
                  Our success is built on integrity, transparency, and long-term relationships. With
                  an expanding portfolio of strategically located developments, we have earned the
                  trust of investors by consistently delivering legally verified projects,
                  customer-focused service, and investment opportunities designed for sustainable
                  wealth creation.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between pt-6 border-t border-[#f0f0f0]">
            {/* Stats with stagger */}
            <motion.div
              variants={statContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="flex gap-3 pt-1"
            >
              <StatTile value="18+" label="Years Legacy" />
              <StatTile value="42" label="Projects" />
              <StatTile value="1.2K" label="Acres" />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="shrink-0"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2
                           h-11 px-6 rounded-full
                           border border-[#e5e5e5] bg-white
                           font-sans text-[13px] font-medium leading-none !text-[#0B2545]
                           hover:border-[#2C578B] hover:text-[#2C578B] hover:shadow-[0_4px_12px_rgba(44,87,139,0.1)]
                           active:scale-[0.97]
                           transition-all duration-200"
              >
                Explore More
                <IconArrowRight />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* ─── RIGHT COLUMN ───────────────────────────────────────────── */}
        <motion.div
          variants={rightColumnVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="col-span-12 lg:col-span-5
                        relative overflow-hidden rounded-[24px]
                        min-h-[360px] lg:min-h-[480px]
                        border border-[#f0f0f0]
                        shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_1px_2px_-1px_rgba(0,0,0,0.04)]"
        >
          {/* Image */}
          <div className="relative w-full h-full min-h-[420px]">
            <Image
              src={ABOUT_IMG}
              alt="Premium land development — architectural view"
              fill
              className="object-cover select-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          {/* Gradient overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(11,37,69,0.85) 0%, rgba(23,23,23,0.2) 50%, transparent 100%)",
            }}
          />

          {/* Philosophy card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-0 right-0 p-5 sm:p-6"
          >
            <div className="flex flex-col gap-1.5 p-5 rounded-[16px] bg-white/10 border border-white/15 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
              <span className="font-sans text-[10px] font-medium leading-[14px] tracking-[4px] uppercase text-white/60">
                Our Philosophy
              </span>
              <p className="font-serif text-[20px] sm:text-[22px] font-light leading-[28px] text-[#fafafa]">
                Transparent deals. Prime locations. Absolute trust.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Lower Row: Core Strengths */}
      <div className="w-full">
        <h3 className="font-sans text-[12px] font-bold uppercase tracking-[2px] text-[#0B2545]/60 mb-6 text-center">
          Our Core Strengths
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Trusted Developers */}
          <div className="flex flex-col gap-3 bg-white p-6 rounded-[20px] border border-[#f0f0f0] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2C578B]/10 text-[#2C578B]">
              <ShieldCheck size={24} />
            </div>
            <h4 className="font-display text-[18px] font-semibold text-[#0B2545]">
              Trusted Developers
            </h4>
            <p className="font-sans text-[14px] text-[#525252] leading-[22px]">
              With almost two decades of delivering fully compliant and premium land acquisitions,
              our name is synonymous with reliability.
            </p>
          </div>

          {/* Card 2: Transparent Deals */}
          <div className="flex flex-col gap-3 bg-white p-6 rounded-[20px] border border-[#f0f0f0] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2C578B]/10 text-[#2C578B]">
              <FileText size={24} />
            </div>
            <h4 className="font-display text-[18px] font-semibold text-[#0B2545]">
              Transparent Deals
            </h4>
            <p className="font-sans text-[14px] text-[#525252] leading-[22px]">
              We ensure title-clear deeds, verified documentation, and ethical pricing with zero
              hidden charges.
            </p>
          </div>

          {/* Card 3: Prime Locations */}
          <div className="flex flex-col gap-3 bg-white p-6 rounded-[20px] border border-[#f0f0f0] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2C578B]/10 text-[#2C578B]">
              <MapPin size={24} />
            </div>
            <h4 className="font-display text-[18px] font-semibold text-[#0B2545]">
              Prime Locations
            </h4>
            <p className="font-sans text-[14px] text-[#525252] leading-[22px]">
              All projects are carefully selected in the DMIC corridor and Dholera SIR region for
              maximum value appreciation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
