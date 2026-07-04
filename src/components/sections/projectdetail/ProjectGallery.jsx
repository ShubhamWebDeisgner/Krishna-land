"use client";

import Badge from "@/components/ui/Badge";
import Image from "next/image";

const defaultImages = {
  largeLeft: "/gallery.png",
  gridTopLeft: "/gallery1.png",
  gridTopRight: "/gallery2.png",
  gridBottomLeft: "/gallery3.png",
  gridBottomRight: "/gallery4.png",
  row1: "/image1.avif",
  row2: "/image2.avif",
  row3: "/image3.avif",
};

export default function ProjectGallery({
  title = "Project Legacy Gallery",
  subtitle = "A visual walk through premium design and master planning.",
  images = defaultImages,
}) {
  return (
    <section className="w-full py-16 md:py-24 bg-white" aria-labelledby="gallery-heading">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-12">
        {/* Header Row with Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <Badge label="Gallery" />
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

          <button className="h-11 px-6 rounded-full bg-[#0B2545] hover:bg-[#1a3a60] text-white font-sans text-[14px] font-medium transition-colors duration-200 self-start sm:self-end">
            View All Photos
          </button>
        </div>

        {/* Masonry / Grid Container */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full">
          {/* Top Row: 1 Large Left, 2x2 Grid Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Large Left Image */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-[24px] overflow-hidden border border-[#f0f0f0] shadow-sm">
              <Image
                src={images.largeLeft}
                alt="Large project view"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* 2x2 Grid Right */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden border border-[#f0f0f0] shadow-sm">
                <Image
                  src={images.gridTopLeft}
                  alt="Project detail top left"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden border border-[#f0f0f0] shadow-sm">
                <Image
                  src={images.gridTopRight}
                  alt="Project detail top right"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden border border-[#f0f0f0] shadow-sm">
                <Image
                  src={images.gridBottomLeft}
                  alt="Project detail bottom left"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden border border-[#f0f0f0] shadow-sm">
                <Image
                  src={images.gridBottomRight}
                  alt="Project detail bottom right"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>

          {/* Bottom Row: 3 Images Side-by-Side */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-[20px] overflow-hidden border border-[#f0f0f0] shadow-sm">
              <Image
                src={images.row1}
                alt="Project row view 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-[20px] overflow-hidden border border-[#f0f0f0] shadow-sm">
              <Image
                src={images.row2}
                alt="Project row view 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-[20px] overflow-hidden border border-[#f0f0f0] shadow-sm">
              <Image
                src={images.row3}
                alt="Project row view 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
