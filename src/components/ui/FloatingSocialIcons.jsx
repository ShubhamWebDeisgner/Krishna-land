"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";
import { IoAdd, IoClose } from "react-icons/io5";

const INK = "#0b2545";
const INK_DARK = "#0a0a0a";
const LIGHT = "#fafafa";

export default function FloatingSocialIcons() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    if (window.scrollY > 300) setIsVisible(true);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  const handleWhatsApp = () => window.open("https://wa.me/15550142024", "_blank");
  const handleInstagram = () => window.open("https://instagram.com/krishnaland", "_blank");

  if (!isMounted) return null;

  /* Shared pill style — guaranteed render via inline style */
  const pillStyle = {
    backgroundColor: INK,
    color: LIGHT,
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
  };

  const circleStyle = {
    backgroundColor: INK,
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.6, y: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="flex flex-col gap-3"
              >
                {/* WhatsApp */}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleWhatsApp}
                  style={pillStyle}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = INK_DARK)}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = INK)}
                  className="flex items-center gap-3 rounded-full px-5 py-3.5
                             transition-colors duration-300"
                  aria-label="Chat on WhatsApp"
                >
                  <BiLogoWhatsapp size={20} style={{ color: LIGHT }} className="shrink-0" />
                  <span
                    className="font-sans text-[13px] font-medium whitespace-nowrap"
                    style={{ color: LIGHT }}
                  >
                    Chat on WhatsApp
                  </span>
                </motion.button>

                {/* Instagram */}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleInstagram}
                  style={pillStyle}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = INK_DARK)}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = INK)}
                  className="flex items-center gap-3 rounded-full px-5 py-3.5
                             transition-colors duration-300"
                  aria-label="Follow on Instagram"
                >
                  <BiLogoInstagram size={20} style={{ color: LIGHT }} className="shrink-0" />
                  <span
                    className="font-sans text-[13px] font-medium whitespace-nowrap"
                    style={{ color: LIGHT }}
                  >
                    Follow on Instagram
                  </span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            style={circleStyle}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = INK_DARK)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = INK)}
            className="relative flex items-center justify-center w-14 h-14
                       rounded-full transition-colors duration-300"
            aria-label={isOpen ? "Close social icons" : "Open social icons"}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoClose size={22} style={{ color: LIGHT }} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center justify-center"
                >
                  <span
                    className="font-sans text-[8px] font-medium tracking-[1.5px] uppercase leading-none"
                    style={{ color: "rgba(250,250,250,0.6)" }}
                  >
                    Chat
                  </span>
                  <IoAdd size={22} style={{ color: LIGHT }} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pulse ring */}
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-0"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
