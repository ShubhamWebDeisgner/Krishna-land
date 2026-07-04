"use client";

import { motion } from "framer-motion";
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
    <section aria-labelledby="about-heading" className="grid grid-cols-12 gap-6 lg:gap-8 w-full">
      {/* ─── LEFT COLUMN ───────────────────────────────────────────── */}
      <motion.div
        variants={leftColumnVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="col-span-12 lg:col-span-7
                      relative flex flex-col gap-6
                      bg-white rounded-[24px] p-8 pb-12
                      border border-[#f0f0f0]
                      shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_1px_2px_-1px_rgba(0,0,0,0.04)]"
      >
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
          <span className="font-sans text-[11px] font-semibold leading-[16px] tracking-[4px] uppercase text-[#171717]">
            About Us
          </span>
        </motion.div>

        {/* Heading */}
        <div className="flex flex-col gap-3">
          <h2
            id="about-heading"
            className="font-serif text-[clamp(28px,4vw,40px)] font-semibold
                       leading-[1.08] tracking-[-1px] text-[#2c578b]"
          >
            Built on trust, guided by design,
            <br className="hidden sm:block" />
            driven by growth.
          </h2>

          {/* Description — improved readability */}
          <p className="font-sans text-[15px] font-light leading-[28px] text-[#525252] max-w-xl">
            We specialize in premium land development, creating well-connected neighborhoods and
            investment-grade properties with a strong focus on quality, transparency, and long-term
            value.
          </p>
        </div>

        {/* Stats with stagger */}
        <motion.div
          variants={statContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex gap-3 w-full pt-1"
        >
          <StatTile value="18+" label="Years" />
          <StatTile value="42" label="Projects" />
          <StatTile value="1.2K" label="Acres" />
        </motion.div>

        {/* CTA Button — improved */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-2
                       h-10 px-5 rounded-full
                       border border-[#e5e5e5] bg-white
                       font-sans text-[13px] font-medium leading-none text-[#171717]
                       hover:border-[#171717] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]
                       active:scale-[0.97]
                       transition-all duration-200"
          >
            Learn More
            <IconArrowRight />
          </Link>
        </motion.div>
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
        {/* Gradient overlay — softer */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(23,23,23,0.70) 0%, rgba(23,23,23,0.15) 45%, transparent 100%)",
          }}
        />

        {/* Philosophy card — refined */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 right-0 p-5 sm:p-6"
        >
          <div className="flex flex-col gap-1.5 p-5 rounded-[16px] bg-white/10 border border-white/15  backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <span className="font-sans text-[10px] font-medium leading-[14px] tracking-[4px] uppercase text-white/50">
              Our Philosophy
            </span>
            <p className="font-serif text-[20px] sm:text-[22px] font-light leading-[28px] text-[#fafafa]">
              Elegant planning, practical execution.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
