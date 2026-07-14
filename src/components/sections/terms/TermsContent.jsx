"use client";

import { motion } from "framer-motion";
import { Scale, ChevronRight } from "lucide-react";

export default function TermsContent() {
  const sections = [
    { id: "intro", label: "1. Introduction" },
    { id: "use", label: "2. Use of Website" },
    { id: "disclaimer", label: "3. Property Disclaimer" },
    { id: "responsibilities", label: "4. User Responsibilities" },
    { id: "ip", label: "5. Intellectual Property" },
    { id: "liability", label: "6. Limitation of Liability" },
    { id: "links", label: "7. Third-Party Links" },
    { id: "termination", label: "8. Termination" },
    { id: "law", label: "9. Governing Law" },
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
    <section className="w-full py-16 md:py-24 bg-white" aria-label="Terms of Service details">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Sticky Side navigation (3/12) */}
        <div className="hidden lg:block lg:col-span-3 lg:sticky lg:top-24 h-fit">
          <div className="flex flex-col gap-4.5 bg-[#FAF9F6]/60 border border-[#eaeaea] rounded-[24px] p-6 shadow-sm">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-neutral-400 flex items-center gap-1.5">
              <Scale size={13} className="text-[#2C578B]" /> Document Navigation
            </span>
            
            <nav className="flex flex-col gap-1" aria-label="Terms clauses navigation">
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

        {/* Right Column: Detailed copy (9/12) */}
        <div className="col-span-12 lg:col-span-9 flex flex-col gap-10 font-sans text-[15px] text-[#525252] leading-[26px] font-light">
          
          {/* Section 1: Introduction */}
          <div id="intro" className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              1. Introduction
            </h2>
            <p>
              Welcome to the website of Krishna Land Developers (hereinafter referred to as the &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms and Conditions govern your access to and use of our website, including any land listings, pricing maps, consulting services, and advisory channels.
            </p>
            <p>
              By accessing, browsing, or utilizing this website, you acknowledge that you have read, understood, and agreed to be bound by these terms. If you do not agree to these conditions, you must immediately cease accessing or using this platform.
            </p>
          </div>

          {/* Section 2: Use of Website */}
          <div id="use" className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              2. Use of Website
            </h2>
            <p>
              You agree to use this website only for lawful purposes related to searching for real estate land parcels, submitting inquiries, or consulting advisory teams. Specifically, you agree not to:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1">
              <li>Deploy automated bots, scrapers, indexers, or extraction scripts to harvest pricing data or lists.</li>
              <li>Submit false, misleading, or fraudulent contact information through inquiry modals or career forms.</li>
              <li>Attempt to compromise the security, source code, server databases, or routing frameworks of the site.</li>
            </ul>
          </div>

          {/* Section 3: Property Information Disclaimer */}
          <div id="disclaimer" className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              3. Property Information Disclaimer
            </h2>
            <p>
              All property details, plot sizes, boundary outlines, zoning classifications (TP schemes, activation zoning), pricing guides, and project timelines displayed on this website are provided for illustrative and informational purposes only.
            </p>
            <p className="font-medium text-[#0B2545]">
              Important Disclaimer: Details are subject to change without prior notice. No information displayed on this website constitutes a legal guarantee, bid, binding covenant, or contract of sale unless explicitly documented in a physical, legally signed agreement between the parties.
            </p>
          </div>

          {/* Section 4: User Responsibilities */}
          <div id="responsibilities" className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              4. User Responsibilities
            </h2>
            <p>
              If you submit information through our inquiry portals, newsletter registers, or callback forms, you assume full responsibility for the accuracy, validity, and legitimacy of the details provided (including name, email address, and mobile number).
            </p>
            <p>
              You agree that the Company may contact you using the details submitted to provide brochures, site visit details, layout plans, or registry documents in accordance with our Privacy Policy.
            </p>
          </div>

          {/* Section 5: Intellectual Property */}
          <div id="ip" className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              5. Intellectual Property
            </h2>
            <p>
              The design layouts, graphics, trademark logos, copywriting, code structures, dynamic animations, video headers, and project photography displayed on this website are the intellectual property of Krishna Land Developers and are protected by applicable copyright, trademark, and intellectual property laws.
            </p>
            <p>
              Unauthorized reproduction, distribution, reuse, or framing of any content without our explicit prior written consent is strictly prohibited.
            </p>
          </div>

          {/* Section 6: Limitation of Liability */}
          <div id="liability" className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Krishna Land Developers, its directors, employees, and joint venture partners shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of, or inability to use, this website or its content.
            </p>
            <p className="font-semibold text-red-650">
              Disclaimer: Real estate land investments are subject to market conditions, local regulatory revisions, and town planning modifications. The Company is not liable for investment decisions, capital losses, or speculative ROI projections made based on informational guidelines on this website.
            </p>
          </div>

          {/* Section 7: Third-Party Links */}
          <div id="links" className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              7. Third-Party Links
            </h2>
            <p>
              This website may contain links to third-party portals, government registries, town planning portals, or Google Maps directions. These links are provided solely for your convenience.
            </p>
            <p>
              We do not endorse, monitor, verify, or assume any responsibility for the content, privacy guidelines, terms of use, or security of external websites.
            </p>
          </div>

          {/* Section 8: Termination */}
          <div id="termination" className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              8. Termination
            </h2>
            <p>
              We reserve the right, in our sole discretion and without prior notice, to terminate or restrict your access to the website, inquiry forms, or services for any reason, including violation of these Terms and Conditions or suspicious activity.
            </p>
          </div>

          {/* Section 9: Governing Law */}
          <div id="law" className="scroll-mt-24 flex flex-col gap-4 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              9. Governing Law
            </h2>
            <p>
              These Terms and Conditions, along with any disputes arising out of the use of this website, shall be governed by, interpreted, and construed in accordance with the laws of the Republic of India.
            </p>
            <p>
              Any legal proceedings, actions, or disputes arising under these terms shall be subject to the exclusive jurisdiction of the competent courts in Ahmedabad, Gujarat, India.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
