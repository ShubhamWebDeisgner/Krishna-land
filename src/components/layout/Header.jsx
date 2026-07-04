"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ContactQueryModal from "./ContactQueryModal";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  {
    label: "Projects",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { label: "Kasindra Projects", href: "/projects/kasindra" },
      { label: "Navagam Projects", href: "/projects/navagam" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "#" },
  { label: "Dholera", href: "#" },
  { label: "Bulk Land", href: "#" },
  { label: "Services", href: "#" },
];

function ChevronDown() {
  return (
    <svg
      width="9"
      height="5"
      viewBox="0 0 9 5"
      fill="none"
      aria-hidden="true"
      className="shrink-0 mt-px transition-transform duration-200 group-hover:rotate-180"
    >
      <path
        d="M1 1L4.5 4L8 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Auto Open Logic
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasShown = sessionStorage.getItem("contact-modal-shown");
    if (hasShown) return;

    let timer;

    const showModal = () => {
      setIsContactModalOpen(true);
      sessionStorage.setItem("contact-modal-shown", "true");
      cleanup();
    };

    const handleScroll = () => {
      if (window.scrollY > 30) {
        showModal();
      }
    };

    const cleanup = () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };

    timer = setTimeout(showModal, 3000);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return cleanup;
  }, []);
  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 h-[70px]",
          "backdrop-blur-[12px] bg-white/90",
          "border-b border-[rgba(229,229,229,0.70)]",
          scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.06)]" : "",
          "transition-shadow duration-200",
        ].join(" ")}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-6">
          {/* ── Logo ─────────────────────────────────────── */}
          <Link
            href="/"
            aria-label="Krishna Land — Home"
            className="shrink-0 hover:opacity-80 transition-opacity duration-200"
          >
            <Image
              src="/images/hero/logo.png"
              width={350}
              height={350}
              alt="company-logo"
              className="w-auto h-[32px] sm:h-[36px] lg:h-[40px] object-contain"
              priority
            />
          </Link>

          {/* ── Desktop Nav ──────────────────────────────── */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV_LINKS.map(({ label, href, hasDropdown, dropdownItems }) => {
              const isActive = activeLink === href;
              const [isDropdownOpen, setIsDropdownOpen] = useState(false);

              return (
                <div
                  key={label}
                  className="relative group"
                  onMouseEnter={() => hasDropdown && setIsDropdownOpen(true)}
                  onMouseLeave={() => hasDropdown && setIsDropdownOpen(false)}
                >
                  <Link
                    href={href}
                    onClick={() => setActiveLink(href)}
                    className={[
                      "group relative flex items-center gap-1",
                      "font-sans text-[16px] font-medium",
                      "transition-all duration-200",
                      isActive ? "text-[#171717]" : "text-[#525252] hover:text-[#171717]",
                      "py-1",
                    ].join(" ")}
                  >
                    {label}
                    {hasDropdown && <ChevronDown />}

                    {/* Active Indicator - Bottom Line */}
                    <span
                      className={[
                        "absolute -bottom-[2px] left-0 h-[2px] rounded-full",
                        "bg-[#171717] transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full",
                      ].join(" ")}
                    />
                  </Link>

                  {/* Dropdown Menu */}
                  {hasDropdown && dropdownItems && (
                    <div
                      className={[
                        "absolute top-full left-0 mt-2 min-w-[220px]",
                        "bg-white rounded-[16px] border border-[#e5e5e5]",
                        "shadow-[0_12px_40px_rgba(0,0,0,0.10)]",
                        "py-2 px-1",
                        "transition-all duration-200 origin-top",
                        isDropdownOpen
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-95 pointer-events-none",
                      ].join(" ")}
                    >
                      {dropdownItems.map(item => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => {
                            setActiveLink(item.href);
                            setIsDropdownOpen(false);
                          }}
                          className={[
                            "block w-full text-left px-4 py-2.5",
                            "font-sans text-[14px] font-normal",
                            "rounded-[10px] transition-all duration-150",
                            "text-[#2C578B] hover:text-[#0B2545] hover:bg-[#f5f5f5]",
                          ].join(" ")}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* ── Right side: CTA + Hamburger ──────────────── */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Desktop CTA */}
            <Link
              href="#"
              onClick={e => {
                e.preventDefault();
                setIsContactModalOpen(true);
              }}
              className="hidden lg:inline-flex items-center justify-center font-sans text-[15px] font-medium bg-[#0B2545] hover:bg-[#2a2a2a] !text-white rounded-full px-5 py-2.5 transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] active:scale-[0.97] whitespace-nowrap"
            >
              Connect for Query
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 shrink-0 rounded-full hover:bg-[#f5f5f5] transition-colors duration-200"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(v => !v)}
            >
              <span
                className="block w-[22px] h-[2px] bg-[#171717] rounded-sm transition-all duration-250 origin-center"
                style={{
                  transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block w-[22px] h-[2px] bg-[#171717] rounded-sm transition-all duration-250 origin-center"
                style={{
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-[22px] h-[2px] bg-[#171717] rounded-sm transition-all duration-250 origin-center"
                style={{
                  transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>
      <ContactQueryModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      {/* Mobile slide-in menu */}
      <MobileMenu
        id="mobile-menu"
        isOpen={menuOpen}
        links={NAV_LINKS}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
