"use client";

import { ongoingProjects } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, LockKeyhole, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const stats = [
  { value: "42+", label: "Projects" },
  { value: "1,150+", label: "Families" },
  { value: "100%", label: "On-Time" },
];

export default function ContactQueryModal({ isOpen, onClose }) {
  const [selectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = event => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset selected project when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setSelectedProject("");
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0a0a0a]/55 px-3 py-5 backdrop-blur-[6px] sm:px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          role="presentation"
          onMouseDown={onClose}
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-query-title"
            className="relative grid max-h-[calc(100vh-32px)] w-full max-w-[960px] overflow-hidden rounded-[26px] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.32)] lg:grid-cols-[44%_56%]"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
            onMouseDown={event => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close contact form"
              onClick={onClose}
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f5] text-[#737373] transition-colors duration-200 hover:bg-[#e5e5e5] hover:text-[#171717] sm:right-4 sm:top-4 cursor-pointer"
            >
              <X size={18} strokeWidth={1.8} />
            </button>

            <aside className="relative hidden min-h-[610px] overflow-hidden lg:block">
              <Image
                src="/about-bg.png"
                alt="Krishna Land Properties"
                fill
                sizes="460px"
                className="object-cover"
                priority={false}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.85) 100%)",
                }}
              />
              <div className="relative z-10 flex h-full flex-col justify-between p-9 text-white">
                <div>
                  <p className="font-display text-[22px] font-semibold leading-none tracking-tight">
                    Krishna Land
                  </p>
                  <div className="mt-3.5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[12px] font-medium text-white/80 backdrop-blur-md">
                    30+ Years of Expertise
                  </div>
                </div>

                <div className="mb-6">
                  <span className="font-serif text-[96px] leading-[0] text-white/15 block -mb-4 -ml-1 select-none">
                    “
                  </span>
                  <h2 className="font-serif text-[31px] font-semibold leading-[1.2] tracking-[-0.4px] text-white">
                    Your plot in India's smartest city awaits.
                  </h2>
                  <p className="mt-4 max-w-[340px] text-[14px] font-light leading-[22px] text-white/70">
                    Speak to our advisors — get investment details, site visit booking, and pricing
                    today.
                  </p>
                </div>

                <div className="-mx-9 mb-[-36px] grid grid-cols-3 border-t border-white/10 bg-white/[0.08] px-9 py-5 backdrop-blur-md">
                  {stats.map(item => (
                    <div key={item.label}>
                      <p className="text-[16px] font-semibold leading-none text-white">
                        {item.value}
                      </p>
                      <p className="mt-1.5 text-[11px] leading-none text-white/60">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <div className="overflow-y-auto px-5 py-7 sm:px-9 sm:py-9 lg:px-9                         flex items-center">
              <div className="w-full max-w-[430px] mx-auto">
                <h2
                  id="contact-query-title"
                  className="font-serif text-[34px] font-semibold leading-[1.1] tracking-[-0.5px] text-[#0b2545] sm:text-[38px]"
                >
                  Get in touch
                  <span className="block">with us.</span>
                </h2>
                <p className="mt-2 text-[14px] leading-[22px] text-[#737373]">
                  Our team will respond within 24 hours.
                </p>
                <div className="mt-4 mb-6 border-b border-neutral-200/60" />

                <form className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5 text-[14px] font-medium text-[#0b2545]">
                    Full Name
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      autoFocus
                      className="h-[52px] w-full rounded-[12px] border-[1.5px] border-transparent bg-[#f5f5f5] px-4 text-[14px] text-[#171717] transition-all duration-200 placeholder:text-[#a3a3a3] "
                    />
                  </label>

                  <label className="flex flex-col gap-1.5 text-[14px] font-medium text-[#0b2545]">
                    Email Address
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="h-[52px] w-full rounded-[12px] border-[1.5px] border-transparent bg-[#f5f5f5] px-4 text-[14px] text-[#171717] transition-all duration-200 placeholder:text-[#a3a3a3] "
                    />
                  </label>

                  <label className="flex flex-col gap-1.5 text-[14px] font-medium text-[#0b2545]">
                    Mobile Number
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter mobile number"
                      className="h-[52px] w-full rounded-[12px] border-[1.5px] border-transparent bg-[#f5f5f5] px-4 text-[14px] text-[#171717] transition-all duration-200 placeholder:text-[#a3a3a3] "
                    />
                  </label>

                  <label className="flex flex-col gap-1.5 text-[14px] font-medium text-[#0b2545]">
                    Select Project
                    <div className="relative">
                      <select
                        name="project"
                        value={selectedProject}
                        onChange={e => setSelectedProject(e.target.value)}
                        className={`h-[52px] w-full appearance-none rounded-[12px] border-[1.5px] border-transparent bg-[#f5f5f5] px-4 pr-10 text-[14px] transition-all duration-200 outline-none  ${
                          selectedProject ? "text-[#171717]" : "text-[#a3a3a3]"
                        }`}
                      >
                        <option value="" disabled>
                          Choose project
                        </option>
                        {ongoingProjects.map(project => (
                          <option key={project.id} value={project.id} className="text-[#0b2545]">
                            {project.title}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#737373]">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </label>

                  <label className="flex flex-col gap-1.5 text-[14px] font-medium text-[#0b2545] sm:col-span-2">
                    Your Message
                    <textarea
                      name="message"
                      placeholder="Write your message here..."
                      rows={4}
                      className="min-h-[110px] w-full resize-none rounded-[12px] border-[1.5px] border-transparent bg-[#f5f5f5] px-4 py-3 text-[14px] text-[#171717] transition-all duration-200 placeholder:text-[#a3a3a3] "
                    />
                  </label>

                  <button
                    type="submit"
                    className="group mt-2 flex h-[54px] items-center justify-center gap-2.5 rounded-full !bg-[#0b2545] px-7 text-[15px] font-semibold text-white shadow-[0_12px_24px_rgba(0,0,0,0.16)] transition-all duration-200 hover:bg-[#0B2545] hover:shadow-[0_12px_24px_rgba(11,37,69,0.25)] active:scale-[0.98] sm:col-span-2 cursor-pointer"
                  >
                    Submit Query
                    <ArrowRight
                      size={16}
                      strokeWidth={2.2}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </button>
                </form>

                <p className="mt-4 flex items-center justify-center gap-2 text-center text-[12px] leading-[18px] text-[#8a8a8a]">
                  <LockKeyhole size={13} className="text-[#8a8a8a]" />
                  Your information is 100% secure and never shared.
                </p>
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
