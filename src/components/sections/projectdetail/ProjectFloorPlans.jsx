"use client";

import Badge from "@/components/ui/Badge";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const defaultPlans = [
  {
    id: "plan-1",
    tag: "2 BHK Villa",
    title: "2 BHK GP Plan 01",
    description: "Three-decade master planned layout configurations designed for maximum airflow, natural sunlight, and luxury space optimization.",
    image: "/gallery1.png",
  },
  {
    id: "plan-2",
    tag: "3 BHK Villa",
    title: "2 BHK GP Plan",
    description: "Customized floor structures matching contemporary aesthetics. Renders wide interior spaces, balconies, and premium setups.",
    image: "/gallery2.png",
  },
  {
    id: "plan-3",
    tag: "4 BHK Villa",
    title: "3 BHK GP Plan",
    description: "Premium double-story villa configurations built to deliver comfort, privacy, and expansive living lounges.",
    image: "/gallery3.png",
  },
  {
    id: "plan-4",
    tag: "Premium Plot",
    title: "Standard Plot Plan",
    description: "Meticulously demarcated premium residential plot configurations with complete service infrastructure ready.",
    image: "/gallery4.png",
  },
];

export default function ProjectFloorPlans({
  title = "Floor Plans & Site Maps",
  subtitle = "Choose from our meticulously planned space configurations.",
  plans = defaultPlans,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive visible items detection
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, plans.length - visibleCount);

  // Guard index out of bounds on resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section
      className="w-full py-16 md:py-24 bg-[#FAFADA]/20 border-t border-[#eaeaea]"
      aria-labelledby="floorplans-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-12 relative">
        {/* Header and Indicator Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <Badge label="Layout Maps" />
            <h2
              id="floorplans-heading"
              className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#2c578b] tracking-[-1px]"
            >
              {title}
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] font-light text-[#525252]">
              {subtitle}
            </p>
          </div>

          {/* Top-Right Index Indicator */}
          <div className="font-sans text-[13px] font-medium text-[#737373] self-start md:self-end bg-[#f5f5f5] px-4 py-1.5 rounded-full border border-[#e5e5e5]">
            <span className="text-[#171717]">{currentIndex + 1}</span> of{" "}
            <span className="text-[#171717]">{plans.length}</span> — plans available
          </div>
        </div>

        {/* Slider Carousel Window with absolute arrows */}
        <div className="relative w-full px-1.5 sm:px-12">
          {/* Navigation Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-[#e5e5e5] bg-white flex items-center justify-center shadow-md active:scale-95 transition-all duration-200 ${
              currentIndex === 0
                ? "opacity-40 cursor-not-allowed text-gray-300"
                : "opacity-100 hover:border-[#171717] text-[#171717]"
            }`}
            aria-label="Previous slide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Sliding Content Container */}
          <div className="w-full overflow-hidden py-4">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                width: `${(plans.length / visibleCount) * 100}%`,
              }}
            >
              {plans.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-shadow duration-300 flex flex-col justify-between"
                  style={{
                    width: `calc(${100 / plans.length}% - ${(6 * (plans.length - 1)) / plans.length}px)`,
                  }}
                >
                  {/* Card Image Area */}
                  <div className="relative w-full aspect-[4/3] bg-[#fcfcfc] border-b border-[#f0f0f0]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    />
                    <div className="absolute top-4 left-4 bg-[#0B2545] text-white text-[10px] font-semibold tracking-[1px] uppercase px-3 py-1 rounded-full">
                      {item.tag}
                    </div>
                  </div>

                  {/* Card Info Area */}
                  <div className="p-6 flex flex-col gap-4 flex-grow justify-between">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-sans text-[18px] sm:text-[20px] font-semibold text-[#0B2545]">
                        {item.title}
                      </h3>
                      <p className="font-sans text-[13px] sm:text-[14px] font-light leading-[20px] sm:leading-[22px] text-[#525252]">
                        {item.description}
                      </p>
                    </div>

                    <button
                      onClick={() => alert(`Details for ${item.title}`)}
                      className="w-full py-2.5 rounded-[12px] bg-[#0B2545] hover:bg-[#1a3a60] text-white font-sans text-[13px] font-medium leading-none transition-colors duration-200"
                    >
                      View Site Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-[#e5e5e5] bg-white flex items-center justify-center shadow-md active:scale-95 transition-all duration-200 ${
              currentIndex === maxIndex
                ? "opacity-40 cursor-not-allowed text-gray-300"
                : "opacity-100 hover:border-[#171717] text-[#171717]"
            }`}
            aria-label="Next slide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
