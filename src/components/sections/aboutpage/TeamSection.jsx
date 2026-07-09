"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export default function TeamSection() {
  const team = [
    {
      name: "Rohit Sharma",
      role: "Founder & Managing Director",
      image: "/men.jpg",
    },
    {
      name: "Meera Iyer",
      role: "Head of Legal & Compliance",
      image: "/women.jpg",
    },
    {
      name: "Vikram Solanki",
      role: "Head of Sales",
      image: "/men1.jpg",
    },
    {
      name: "Ananya Desai",
      role: "Project Planning Lead",
      image: "/women1.jpg",
    },
  ];

  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-neutral-100"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 self-start bg-neutral-100 border border-neutral-200 rounded-full px-4.5 py-1.5 text-[#525252]">
            <span className="font-sans text-[11px] font-semibold tracking-[2px] uppercase">
              Meet Our Team
            </span>
          </div>

          <h2
            id="team-heading"
            className="font-serif text-[28px] sm:text-[32px] lg:text-[36px] font-semibold leading-[1.1] sm:leading-[40px] tracking-[-0.9px] text-[#0B2545] break-words"
          >
            The people behind every plot.
          </h2>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group flex flex-col bg-white rounded-[28px] border border-neutral-200/60 p-4.5 hover:shadow-[0_15px_30px_rgba(11,37,69,0.04)] hover:-translate-y-1 transition-all duration-300 h-full"
            >
              {/* Image Container with Next.js Image */}
              <div className="relative aspect-[4/3] w-full rounded-[20px] bg-neutral-100 overflow-hidden group">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={index < 2}
                />
              </div>

              {/* Text details */}
              <div className="flex flex-col gap-1 mt-4.5 px-1.5 pb-1">
                <h3 className="font-serif text-[19px] font-semibold text-[#0B2545]">
                  {member.name}
                </h3>
                <p className="font-sans text-[13px] text-[#737373] font-light leading-[18px]">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
