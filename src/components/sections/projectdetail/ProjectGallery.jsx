"use client";

import Image from "next/image";
import Link from "next/link";

const defaultImages = {
  curvedBlue: "/gallery.png",
  skyscraper: "/images/about/skyscraper.png",
  bedroom: "/images/about/bedroom.png",
  tallVilla: "/image3.avif",
  studyRoom: "/image1.avif",
  poolHouse: "/image2.avif",
  darkSkyscrapers: "/image4.avif",
};

export default function ProjectGallery({
  title = "Aurum Valley Legacy Gallery",
  subtitle = "A visual journey through Roman grandeur meets smart city living.",
  images = defaultImages,
}) {
  const mergedImages = { ...defaultImages, ...images };

  return (
    <section className="w-full py-16 md:py-24 bg-white" aria-labelledby="gallery-heading">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-12">
        {/* Header Row with Button (Figma style, no small GALLERY tag) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <h2
              id="gallery-heading"
              className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#2c578b] tracking-[-1px] leading-tight"
            >
              {title}
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] font-light text-[#525252]">
              {subtitle}
            </p>
          </div>

          <Link href="/gallery">
            <button className="h-11 px-6 rounded-full !bg-[#0B2545] hover:bg-[#15345a] text-white font-sans text-[13.5px] font-medium transition-all duration-200 flex items-center justify-center gap-2 tracking-wide shadow-sm hover:shadow-md active:scale-[0.98] self-start sm:self-end shrink-0">
              <span>View All Photos</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 w-full">
          {/* TOP ROW: Column span 6 + 3 + 3 = 12 */}
          {/* Top Left: Curved abstract building */}
          <div className="col-span-12 md:col-span-6 relative aspect-[4/3] md:aspect-auto md:h-[450px] rounded-[24px] overflow-hidden border border-[#f0f0f0] shadow-sm group">
            <Image
              src={mergedImages.curvedBlue}
              alt="Curved blue abstract architecture"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Top Middle: Stacked skyscraper & bedroom */}
          <div className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col gap-4 sm:gap-6 md:h-[450px] justify-between">
            {/* Skyscraper */}
            <div className="relative flex-grow h-[213px] md:h-auto rounded-[20px] overflow-hidden border border-[#f0f0f0] shadow-sm group">
              <Image
                src={mergedImages.skyscraper}
                alt="Skyscraper view"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            {/* Bedroom */}
            <div className="relative flex-grow h-[213px] md:h-auto rounded-[20px] overflow-hidden border border-[#f0f0f0] shadow-sm group">
              <Image
                src={mergedImages.bedroom}
                alt="Bedroom interior"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>

          {/* Top Right: Tall house/villa at sunset */}
          <div className="col-span-12 sm:col-span-6 md:col-span-3 relative aspect-[4/3] md:aspect-auto md:h-[450px] rounded-[24px] overflow-hidden border border-[#f0f0f0] shadow-sm group">
            <Image
              src={mergedImages.tallVilla}
              alt="Tall villa sunset view"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>

          {/* BOTTOM ROW: Column span 3 + 4 + 5 = 12 */}
          {/* Bottom Left: Cozy study room */}
          <div className="col-span-12 sm:col-span-6 md:col-span-3 relative aspect-[4/3] md:aspect-auto md:h-[280px] rounded-[24px] overflow-hidden border border-[#f0f0f0] shadow-sm group">
            <Image
              src={mergedImages.studyRoom}
              alt="Study room interior"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>

          {/* Bottom Middle: Modern house with pool */}
          <div className="col-span-12 sm:col-span-6 md:col-span-4 relative aspect-[4/3] md:aspect-auto md:h-[280px] rounded-[24px] overflow-hidden border border-[#f0f0f0] shadow-sm group">
            <Image
              src={mergedImages.poolHouse}
              alt="Modern villa with pool"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>

          {/* Bottom Right: Dark skyscrapers looking up */}
          <div className="col-span-12 md:col-span-5 relative aspect-[4/3] md:aspect-auto md:h-[280px] rounded-[24px] overflow-hidden border border-[#f0f0f0] shadow-sm group">
            <Image
              src={mergedImages.darkSkyscrapers}
              alt="Dark skyscrapers perspective"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
