// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import IconArrowRight from "./IconArrowRight";
// import IconSparkle from "./IconSparkle";
// import StatTile from "./StatTile";

// const HERO_IMG = "/images/hero/landdevelopment.png";

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// const rightCardVariants = {
//   hidden: { opacity: 0, x: 30, y: 10 },
//   show: {
//     opacity: 1,
//     x: 0,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 70,
//       damping: 18,
//       delay: 0.2,
//     },
//   },
// };

// /* ── Main ───────────────────────────────────────────────────────────────── */
// export default function HeroSection() {
//   return (
//     <section
//       aria-label="Hero"
//       className="relative w-full min-h-[580px] lg:min-h-[640px] rounded-[24px] border border-[#e5e5e5] overflow-hidden bg-[#171717] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10),0px_1px_2px_-1px_rgba(0,0,0,0.10)]"
//     >
//       {/* Background image */}
//       <Image
//         src={HERO_IMG}
//         alt=""
//         fill
//         priority
//         sizes="100vw"
//         className="object-cover select-none pointer-events-none"
//       />

//       {/* Gradient overlay */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(23,23,23,0.90) 0%, rgba(23,23,23,0.70) 40%, rgba(23,23,23,0.40) 70%, rgba(23,23,23,0.20) 100%)",
//         }}
//       />
//       <div className="relative z-10 flex flex-col justify-end lg:grid lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 min-h-[580px] lg:min-h-[640px] items-end">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//           className="col-span-12 lg:col-span-7 w-full flex flex-col gap-5 lg:pb-1 self-end"
//         >
//           {/* Badge pill - hidden on very small screens */}
//           <motion.div
//             variants={itemVariants}
//             className="hidden xs:inline-flex items-center gap-2.5 self-start rounded-full border border-white/15 bg-white/5 backdrop-blur-[8px] px-[17px] py-[9px] hover:bg-white/10 transition-all duration-300 cursor-default"
//           >
//             <IconSparkle />
//             <span className="font-sans text-[12px] sm:text-[13px] font-medium leading-[20px] text-[#fafafa] tracking-[0.3px]">
//               Premium land development
//               <span className="opacity-30 mx-1.5">|</span>
//               Modern planning
//             </span>
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             variants={itemVariants}
//             className="font-serif font-semibold text-[#fafafa] text-[clamp(30px,5.5vw,60px)] leading-[1.04] tracking-[-1.5px] max-w-[720px]"
//           >
//             Shaping elevated communities with
//             <span className="block text-white/90">vision, value, and lasting impact.</span>
//           </motion.h1>

//           {/* Sub text */}
//           <motion.p
//             variants={itemVariants}
//             className="font-sans text-[14px] sm:text-[16px] font-medium leading-[28px] text-white/70 max-w-[560px] tracking-[0.1px]"
//           >
//             Thoughtfully master-planned communities designed for modern living. Where premium
//             infrastructure meets investment confidence, transparency, and long-term value.
//           </motion.p>

//           {/* CTA buttons - stacked on mobile, side by side on desktop */}
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-wrap mt-1"
//           >
//             <Link
//               href="/projects"
//               className="group inline-flex items-center justify-center gap-2 h-11 px-7 rounded-full bg-white text-[#171717] font-sans text-[14px] font-medium leading-none shadow-[0px_4px_12px_rgba(255,255,255,0.15)] hover:shadow-[0px_8px_24px_rgba(255,255,255,0.20)] hover:bg-[#f5f5f5] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
//             >
//               Explore Communities
//               <IconArrowRight />
//             </Link>

//             <Link
//               href="/properties"
//               className="inline-flex items-center justify-center h-11 px-7 rounded-full border border-white/20 bg-white/5 !text-white font-sans text-[14px] font-medium leading-none backdrop-blur-[4px] hover:bg-white/15 hover:border-white/30 transition-all duration-200 whitespace-nowrap"
//             >
//               View Properties
//             </Link>
//           </motion.div>
//         </motion.div>

//         {/* ─── Right Column: 5/12 — Glass Stat Card ────────────────────────── */}
//         <motion.div
//           variants={rightCardVariants}
//           initial="hidden"
//           animate="show"
//           className="hidden lg:block col-span-12 lg:col-span-5 w-full lg:flex justify-start lg:justify-end items-end lg:pb-1 self-end"
//         >
//           <div className="w-full max-w-[384px] rounded-[24px] bg-white/[0.06] border border-white/[0.08] backdrop-blur-2xl shadow-[0px_30px_60px_-16px_rgba(0,0,0,0.5)] p-8 flex flex-col gap-5 hover:bg-white/[0.08] transition-all duration-500">
//             {/* Card heading */}
//             <div className="flex flex-col gap-1.5">
//               <span className="font-sans text-[14px] font-medium leading-[16px] tracking-[4px] uppercase text-white/40">
//                 Company Overview
//               </span>
//               <h2 className="font-serif text-[24px] font-bold leading-[30px] text-[#fafafa] tracking-[-0.3px]">
//                 A refined approach to
//                 <br />
//                 land development
//               </h2>
//             </div>

//             {/* Stats + description */}
//             <div className="flex flex-col gap-3">
//               {/* 3 stat tiles */}
//               <div className="flex gap-2.5">
//                 <StatTile value="18+" label="Years" />
//                 <StatTile value="42" label="Projects" />
//                 <StatTile value="1.2K" label="Acres" />
//               </div>
//               {/* Description */}
//               <div className="rounded-[16px] border border-white/5 bg-white/5 p-4 hover:bg-white/10 transition-all duration-300">
//                 <p className="font-sans text-[13px] sm:text-[14px] font-light leading-[24px] text-white/60">
//                   From master planning to premium plot delivery, we create communities that balance
//                   architecture, infrastructure, and investment confidence.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import IconArrowRight from "./IconArrowRight";
import IconSparkle from "./IconSparkle";
import StatTile from "./StatTile";

// const HERO_IMG = "/images/hero/landdevelopment.png";
const HERO_IMG = "/main-bg.mp4";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
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

const rightCardVariants = {
  hidden: { opacity: 0, x: 30, y: 10 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
      delay: 0.2,
    },
  },
};

/* ── Main ───────────────────────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative w-full min-h-[580px] lg:min-h-[640px] rounded-[24px] border border-[#e5e5e5] overflow-hidden bg-[#171717] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10),0px_1px_2px_-1px_rgba(0,0,0,0.10)]"
    >
      {/* Background image */}
      {/* <Image
        src={HERO_IMG}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover select-none pointer-events-none"
      /> */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
      >
        <source src={HERO_IMG} type="video/mp4" />
      </video>

      {/* Gradient overlay - lighter for better visibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(23,23,23,0.80) 0%, rgba(23,23,23,0.50) 30%, rgba(23,23,23,0.30) 60%, rgba(23,23,23,0.10) 100%)",
        }}
      />

      {/* ── Content ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 min-h-[580px] lg:min-h-[640px] items-center justify-center">
        {/* ─── Left Column: 7/12 ────────────────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="col-span-12 lg:col-span-7 w-full flex flex-col gap-5"
        >
          {/* Badge pill - hidden on very small screens */}
          <motion.div
            variants={itemVariants}
            className="hidden xs:inline-flex items-center gap-2.5 self-start rounded-full border border-white/15 bg-white/5 backdrop-blur-[8px] px-[17px] py-[9px] hover:bg-white/10 transition-all duration-300 cursor-default"
          >
            <IconSparkle />
            <span className="font-sans text-[12px] sm:text-[13px] font-medium leading-[20px] text-[#fafafa] tracking-[0.3px]">
              Premium land development
              <span className="opacity-30 mx-1.5">|</span>
              Modern planning
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-serif font-semibold text-[#fafafa] text-[clamp(28px,5.5vw,60px)] leading-[1.08] tracking-[-1.2px] sm:tracking-[-1.5px] max-w-[720px]"
          >
            Shaping elevated communities with
            <span className="block text-white/90">vision, value, and lasting impact.</span>
          </motion.h1>

          {/* Sub text */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-[13px] sm:text-[16px] font-light sm:font-medium leading-[24px] sm:leading-[28px] text-white/70 max-w-[560px] tracking-[0.1px]"
          >
            Thoughtfully master-planned communities designed for modern living. Where premium
            infrastructure meets investment confidence, transparency, and long-term value.
          </motion.p>

          {/* CTA buttons - stacked on mobile, side by side on desktop */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 flex-wrap mt-1"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-2 h-10 sm:h-11 px-5 sm:px-7 rounded-full bg-white text-[#171717] font-sans text-[13px] sm:text-[14px] font-medium leading-none shadow-[0px_4px_12px_rgba(255,255,255,0.15)] hover:shadow-[0px_8px_24px_rgba(255,255,255,0.20)] hover:bg-[#f5f5f5] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
            >
              Explore Communities
              <IconArrowRight />
            </Link>

            <Link
              href="/properties"
              className="inline-flex items-center justify-center h-10 sm:h-11 px-5 sm:px-7 rounded-full border border-white/20 bg-white/5 !text-white font-sans text-[13px] sm:text-[14px] font-medium leading-none backdrop-blur-[4px] hover:bg-white/15 hover:border-white/30 transition-all duration-200 whitespace-nowrap"
            >
              View Properties
            </Link>
          </motion.div>
        </motion.div>

        {/* ─── Right Column: 5/12 — Glass Stat Card ────────────────────────── */}
        <motion.div
          variants={rightCardVariants}
          initial="hidden"
          animate="show"
          className="hidden lg:block col-span-12 lg:col-span-5 w-full lg:flex justify-start lg:justify-end"
        >
          <div className="w-full max-w-[384px] rounded-[24px] bg-white/[0.06] border border-white/[0.08] backdrop-blur-2xl shadow-[0px_30px_60px_-16px_rgba(0,0,0,0.5)] p-8 flex flex-col gap-5 hover:bg-white/[0.08] transition-all duration-500">
            {/* Card heading */}
            <div className="flex flex-col gap-1.5">
              <span className="font-sans text-[14px] font-medium leading-[16px] tracking-[4px] uppercase text-white/40">
                Company Overview
              </span>
              <h2 className="font-serif text-[24px] font-bold leading-[30px] text-[#fafafa] tracking-[-0.3px]">
                A refined approach to
                <br />
                land development
              </h2>
            </div>

            {/* Stats + description */}
            <div className="flex flex-col gap-3">
              {/* 3 stat tiles */}
              <div className="flex gap-2.5">
                <StatTile value="18+" label="Years" />
                <StatTile value="42" label="Projects" />
                <StatTile value="1.2K" label="Acres" />
              </div>
              {/* Description */}
              <div className="rounded-[16px] border border-white/5 bg-white/5 p-4 hover:bg-white/10 transition-all duration-300">
                <p className="font-sans text-[13px] sm:text-[14px] font-light leading-[24px] text-white/60">
                  From master planning to premium plot delivery, we create communities that balance
                  architecture, infrastructure, and investment confidence.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
