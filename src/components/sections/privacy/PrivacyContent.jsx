"use client";

import { Shield, ChevronRight, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function PrivacyContent() {
  const sections = [
    { id: "intro", label: "1. Introduction" },
    { id: "collect", label: "2. Information We Collect" },
    { id: "use", label: "3. How We Use Information" },
    { id: "cookies", label: "4. Cookies & Tracking" },
    { id: "sharing", label: "5. Data Sharing" },
    { id: "security", label: "6. Data Security" },
    { id: "rights", label: "7. User Rights" },
    { id: "updates", label: "8. Updates to Policy" },
    { id: "contact", label: "9. Contact Information" },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90; // offset for floating header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white" aria-label="Privacy Policy details">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Sticky Side navigation (3/12) */}
        <div className="hidden lg:block lg:col-span-3 lg:sticky lg:top-24 h-fit">
          <div className="flex flex-col gap-4.5 bg-[#FAF9F6]/60 border border-[#eaeaea] rounded-[24px] p-6 shadow-sm">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-neutral-400 flex items-center gap-1.5">
              <Shield size={13} className="text-[#2C578B]" /> Policy Navigation
            </span>
            
            <nav className="flex flex-col gap-1" aria-label="Privacy clauses navigation">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => handleScroll(sec.id)}
                  className="group flex items-center justify-between text-left h-9 px-3.5 rounded-lg font-sans text-[13px] font-medium text-[#525252] hover:bg-[#2C578B]/5 hover:text-[#2C578B] transition-all cursor-pointer"
                >
                  <span>{sec.label}</span>
                  <ChevronRight size={11} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#2C578B]" />
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Right Column: Detailed copy & CTA (9/12) */}
        <div className="col-span-12 lg:col-span-9 flex flex-col gap-10 font-sans text-[15px] text-[#525252] leading-[26px] font-light">
          
          {/* Section 1: Introduction */}
          <div id="intro" className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              1. Introduction
            </h2>
            <p>
              Krishna Land Developers value your privacy. This Privacy Policy details how we collect, store, utilize, protect, and document personal data that you share with us when navigating our website or submitting callbacks.
            </p>
            <p>
              By engaging with our platform or submitting inquiries, you consent to the data collection and usage practices outlined in this policy document.
            </p>
          </div>

          {/* Section 2: Information We Collect */}
          <div id="collect" className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              2. Information We Collect
            </h2>
            <p>
              We collect user information under different scenarios to provide seamless lead generation and property consulting:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1">
              <li><strong>Personal Identifiable Data:</strong> Name, email address, mobile number, and specific message text voluntarily submitted through inquiry cards, site visit bookings, or partner channels.</li>
              <li><strong>Browsing & Analytical Data:</strong> IP addresses, browser specifications, page redirection histories, cookie identifiers, and device details captured automatically by server logs.</li>
            </ul>
          </div>

          {/* Section 3: How We Use Information */}
          <div id="use" className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              3. How We Use Information
            </h2>
            <p>
              All personal information collected is utilized strictly to facilitate real estate services, including:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1">
              <li>Initiating callback inquiries, providing brochures, and structuring investment advisory sheets.</li>
              <li>Verifying ownership expectations, booking site visit logistics, and finalizing possessing documents.</li>
              <li>Improving website performance, tracking layout responsiveness, and identifying user engagement patterns.</li>
            </ul>
          </div>

          {/* Section 4: Cookies & Tracking */}
          <div id="cookies" className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              4. Cookies &amp; Tracking Technologies
            </h2>
            <p>
              Our website uses basic cookies and tracking technologies to optimize browsing speeds and preserve session parameters. Cookies are small files stored on your hard drive.
            </p>
            <p>
              You can configure your browser options to reject all cookies or notify you when a cookie is sent. However, some interactive features (like modal values or map settings) may not function fully without cookies.
            </p>
          </div>

          {/* Section 5: Data Sharing */}
          <div id="sharing" className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              5. Data Sharing
            </h2>
            <p>
              Krishna Land Developers does not sell, trade, rent, or distribute your personally identifiable information to speculative third-party advertising companies.
            </p>
            <p>
              We may share restricted data with trusted registry verification partners, legal transactional advisors, or logistics agents solely to execute mutations, possess agreements, or site visits that you request.
            </p>
          </div>

          {/* Section 6: Data Security */}
          <div id="security" className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              6. Data Security
            </h2>
            <p>
              We implement industry-standard database encryption, secure sockets layer (SSL) transmission certificates, and firewalled access grids to protect personal information against unauthorized disclosure, loss, or manipulation.
            </p>
            <p>
              While we make every effort to secure data transmission, please note that no digital storage method or internet transmission is 100% secure.
            </p>
          </div>

          {/* Section 7: User Rights */}
          <div id="rights" className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              7. User Rights
            </h2>
            <p>
              You retain full rights over your personal data shared with us. Specifically, you may request:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1">
              <li>Access to verify the specific details we have registered under your contact profile.</li>
              <li>Rectifications, updates, or modifications to out-of-date mobile numbers or emails.</li>
              <li>Complete deletion and removal of your contact database logs from our advisory systems.</li>
            </ul>
          </div>

          {/* Section 8: Updates to Policy */}
          <div id="updates" className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              8. Updates to Policy
            </h2>
            <p>
              We reserve the right to revise or update this Privacy Policy at any time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; timestamp at the top of the document.
            </p>
            <p>
              We recommend checking this page periodically to remain informed about how we safeguard your data.
            </p>
          </div>

          {/* Section 9: Contact Information */}
          <div id="contact" className="scroll-mt-24 flex flex-col gap-4 pb-4">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              9. Contact Information
            </h2>
            <p>
              For queries relating to this Privacy Policy, your registered information, or to request deletion of data, contact us at:
            </p>
            <div className="bg-[#FAF9F6]/60 border border-[#eaeaea] rounded-[20px] p-5 flex flex-col gap-2 mt-1">
              <div><strong>Email:</strong> privacy@krishnaland.com</div>
              <div><strong>Phone:</strong> +91 99090 99090</div>
              <div><strong>Office:</strong> Krishna Land Developers, Corporate Road, Ahmedabad, Gujarat, India</div>
            </div>
          </div>

          {/* Section 13.3 Optional CTA: Contact Us for Privacy Concerns */}
          <div className="bg-[#FAF9F6]/45 border border-[#eaeaea] rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-6 shadow-sm">
            <div className="flex flex-col gap-1 max-w-lg">
              <h3 className="font-serif text-[18px] font-bold text-[#0B2545]">
                Contact Us for Privacy Concerns
              </h3>
              <p className="font-sans text-[13.5px] text-[#525252] leading-[22px] font-light">
                Have specific data security questions? Open a direct ticket with our data protection officer.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-[#0B2545] hover:bg-[#2C578B] !text-white font-sans text-[13.5px] font-bold hover:shadow-md transition-all duration-300 shrink-0 self-start sm:self-center"
            >
              Contact Page
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
