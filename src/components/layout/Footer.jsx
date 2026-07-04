// import { Mail, MapPin, Phone } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// const QUICK_LINKS = [
//   { label: "About Us", href: "/about" },
//   { label: "Ongoing Projects", href: "/projects" },
//   { label: "Available Plots", href: "/properties" },
//   { label: "Investment", href: "/investments" },
// ];

// const CONTACT_ITEMS = [
//   {
//     icon: Mail,
//     text: "hello@krishnaland.com",
//     href: "mailto:hello@krishnaland.com",
//   },
//   {
//     icon: MapPin,
//     text: "1140 Business Avenue, Suite 12",
//   },
//   {
//     icon: Phone,
//     text: "+1 (555) 014-2024",
//     href: "tel:+15550142024",
//   },
// ];

// function FooterHeading({ children }) {
//   return (
//     <h2 className="font-sans text-[12px] font-semibold leading-5 tracking-[6px] uppercase text-white/70">
//       {children}
//     </h2>
//   );
// }

// export default function Footer() {
//   return (
//     <footer
//       aria-label="Site footer"
//       className="w-full border-t border-[var(--color-ink-200)] bg-[var(--color-ink-900)]"
//     >
//       <div className="mx-auto w-full max-w-[1440px] px-6 py-8 sm:px-8 lg:py-[34px]">
//         <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0">
//           <div className="sm:col-span-2 lg:col-span-5">
//             <Link
//               href="/"
//               aria-label="Krishna land home"
//               className="inline-flex items-center gap-3"
//             >
//               {/* <span className="flex size-9 shrink-0 items-center justify-center rounded-[14px] bg-white/10 text-white ring-1 ring-white/[0.04]">
//                 <Building2 size={18} strokeWidth={1.7} aria-hidden="true" />
//               </span> */}

//               <span className="flex min-w-0 flex-col">
//                 {/* <span className="font-serif text-[18px] font-semibold leading-[22px] text-[var(--color-ink-50)]">
//                   Krishna land
//                 </span>
//                 <span className="font-sans text-[13px] font-normal leading-[18px] text-white/60">
//                   Land Development
//                 </span> */}
//                 <Image src="/images/hero/logo.png" width={280} height={280} alt="company-logo" />
//               </span>
//             </Link>

//             <p className="mt-4 max-w-[390px] font-sans text-[13px] font-normal leading-[27px] text-white/70 sm:text-[14px]">
//               Creating premium communities and investment-ready properties with a modern,
//               transparent, and design-led approach.
//             </p>
//           </div>

//           <div className="lg:col-span-3 lg:col-start-6">
//             <FooterHeading>Quick Links</FooterHeading>

//             <nav aria-label="Footer quick links" className="mt-3 flex flex-col gap-3">
//               {QUICK_LINKS.map(({ label, href }) => (
//                 <Link
//                   key={label}
//                   href={href}
//                   className="w-fit font-sans text-[14px] font-normal leading-5 !text-white transition-colors duration-150 hover:text-white sm:text-[14px]"
//                 >
//                   {label}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           <div className="lg:col-span-4">
//             <FooterHeading>Contact</FooterHeading>

//             <div className="mt-3 flex flex-col gap-3">
//               {CONTACT_ITEMS.map(({ icon: Icon, text, href }) => {
//                 const className =
//                   "flex min-w-0 items-center gap-2.5 font-sans text-[14px] font-normal leading-5 !text-white transition-colors duration-150 sm:text-[14px]";

//                 const content = (
//                   <>
//                     <Icon
//                       size={16}
//                       strokeWidth={1.8}
//                       aria-hidden="true"
//                       className="shrink-0 text-white/70"
//                     />
//                     <span className="min-w-0 break-words">{text}</span>
//                   </>
//                 );

//                 return href ? (
//                   <a key={text} href={href} className={`${className} hover:text-white`}>
//                     {content}
//                   </a>
//                 ) : (
//                   <div key={text} className={className}>
//                     {content}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Ongoing Projects", href: "/projects" },
  { label: "Available Plots", href: "/properties" },
  { label: "Investment", href: "/investments" },
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
                className="w-auto h-auto max-h-[48px] sm:max-h-[52px] lg:max-h-[56px] object-contain"
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
