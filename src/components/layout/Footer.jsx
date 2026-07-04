import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Navagam Project", href: "/projects/navagam" },
  { label: "Kasindra", href: "/projects/kasindra" },
  { label: "Dholera", href: "#" },
];

const CONTACT_ITEMS = [
  {
    icon: Mail,
    text: "hello@krishnaland.com",
    href: "mailto:hello@krishnaland.com",
  },
  {
    icon: MapPin,
    text: "1140 Business Avenue, Suite 12",
  },
  {
    icon: Phone,
    text: "+1 (555) 014-2024",
    href: "tel:+15550142024",
  },
];

function FooterHeading({ children }) {
  return (
    <h2 className="font-sans text-[11px] sm:text-[12px] font-semibold leading-5 tracking-[5px] sm:tracking-[6px] uppercase text-white/60">
      {children}
    </h2>
  );
}

export default function Footer() {
  return (
    <footer aria-label="Site footer" className="w-full border-t border-white/5 bg-[#0b2545]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-[42px]">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-8 xl:gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* ── Logo & Description ────────────────────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link
              href="/"
              aria-label="Krishna land home"
              className="inline-flex items-center gap-3"
            >
              <Image
                src="/images/hero/logo.png"
                width={250}
                height={250}
                alt="company-logo"
                className="w-auto h-[36px] sm:h-[42px] lg:h-[48px] object-contain"
                priority
              />
            </Link>

            <p className="mt-4 sm:mt-5 max-w-[390px] font-sans text-[13px] sm:text-[14px] font-light leading-[26px] sm:leading-[27px] text-white/60">
              Creating premium communities and investment-ready properties with a modern,
              transparent, and design-led approach.
            </p>
          </div>

          {/* ── Quick Links ────────────────────────────────────────────────── */}
          <div className="sm:col-span-1 lg:col-span-3 lg:col-start-6">
            <FooterHeading>Quick Links</FooterHeading>

            <nav
              aria-label="Footer quick links"
              className="mt-3 sm:mt-4 flex flex-col gap-2.5 sm:gap-3"
            >
              {QUICK_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-fit font-sans text-[14px] sm:text-[15px] font-normal leading-5 !text-white/70 hover:text-white transition-all duration-200 hover:translate-x-1"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Contact ────────────────────────────────────────────────────── */}
          <div className="sm:col-span-1 lg:col-span-4">
            <FooterHeading>Contact</FooterHeading>

            <div className="mt-3 sm:mt-4 flex flex-col gap-2.5 sm:gap-3">
              {CONTACT_ITEMS.map(({ icon: Icon, text, href }) => {
                const className =
                  "flex min-w-0 items-center gap-2.5 sm:gap-3 font-sans text-[14px] sm:text-[15px] font-normal leading-5 !text-white/70 hover:text-white transition-all duration-200";

                const content = (
                  <>
                    <Icon
                      size={16}
                      strokeWidth={1.8}
                      aria-hidden="true"
                      className="shrink-0 text-white/50 group-hover:text-white/70 transition-colors duration-200"
                    />
                    <span className="min-w-0 break-words">{text}</span>
                  </>
                );

                return href ? (
                  <a key={text} href={href} className={`${className} group hover:translate-x-1`}>
                    {content}
                  </a>
                ) : (
                  <div key={text} className={`${className} cursor-default`}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ────────────────────────────────────────────────────── */}
        <div className="mt-8 sm:mt-10 lg:mt-12 pt-5 sm:pt-6 border-t border-white/5">
          <p className="font-sans text-[12px] sm:text-[13px] font-light text-white/40 text-center">
            &copy; {new Date().getFullYear()} Krishna Land. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
