"use client";

import Image from "next/image";

export default function StormFooterSection() {
  
  // Optional smooth scroll back up to the zip checker
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="font-sans">
      
      {/* --- FINAL CTA SECTION (.final-cta) --- */}
      <section className="
        bg-[linear-gradient(135deg,#0f2744_0%,#1a365d_100%)]
        border-t-2 border-b-2 border-[#06b6d4]/25
        py-[60px] px-5
        text-center
      ">
        <div className="second-container">
          
          <h2 className="text-white text-2xl md:text-3xl  font-bold mb-4 tracking-tight">
            Don&apos;t Let <span className="text-[#06b6d4]">Hidden Damage</span> Cost You Thousands
          </h2>
          
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8 font-medium">
            A free 15-minute inspection now protects your home and your wallet. <br className="hidden md:block" />
            Insurance deadlines won&apos;t wait.
          </p>

          <button 
            onClick={handleScrollToTop}
            className="
              inline-flex items-center justify-center gap-2
              bg-[linear-gradient(135deg,#c41e3a_0%,#a01830_100%)]
              text-white border-none
              px-5 md:px-8 py-3 md:py-4 text-sm md:text-base
              rounded-[10px] font-bold text-[1em] md:text-[1.1em]
              shadow-[0_0_25px_rgba(196,30,58,0.5)]
              transition-all duration-300
              hover:shadow-[0_0_35px_rgba(196,30,58,0.7)] hover:-translate-y-0.5
              uppercase tracking-wide
            "
          >
            ⚡
            Check Your ZIP Code
          </button>

        </div>
      </section>

      {/* --- FOOTER SECTION (.ts-footer) --- */}
      <footer className="
        bg-[#050a12]
        border-t border-white/4
        py-10 px-5
        text-center
      ">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          
          {/* Logo Placeholder */}
          <div className="bg-white px-3 py-1.5 rounded-sm mb-6 inline-block">
            <Image 
              src="/logo/logo.jpg" 
              alt="Texas Precision Roofing" 
              width={140} 
              height={50} 
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Business Info */}
          <div className="space-y-1.5 mb-10">
            <p className="text-gray-400 text-[0.85rem] md:text-sm font-medium">
              Texas Precision Roofing • Abilene & Big Country
            </p>
            <p className="text-gray-400 text-[0.85rem] md:text-sm font-medium">
              Owner-operated by Josh • 12+ years experience • <a href="tel:5555555555" className="text-[#06b6d4] hover:underline transition-all">Call/Text Anytime</a>
            </p>
          </div>

          {/* Disclaimer & Compliance Box */}
          <div className="bg-white/2 border border-white/5 rounded-xl p-6 md:p-8 text-left max-w-4xl w-full">
            <div className="space-y-4 text-gray-500 text-[0.65rem] md:text-xs leading-relaxed">
              
              <p>
                <strong className="text-gray-400">Disclaimer:</strong> The storm zone check tool cross-references your ZIP code with recent severe weather data for the Abilene & Big Country area. Results are informational and based on documented storm paths. Actual damage varies by location, roof type, and other factors. A professional inspection is the only way to confirm damage. Texas Precision Roofing provides free inspections with no obligation.
              </p>
              
              <p>
                <strong className="text-gray-400">Meta Advertising Compliance:</strong> This advertisement appears on Meta platforms (Facebook/Instagram). Texas Precision Roofing is solely responsible for this content. Not affiliated with Facebook, Instagram, or Meta Platforms, Inc.
              </p>
              
              <p className="pt-2 border-t border-white/5 mt-4">
                © 2026 Texas Precision Roofing. All rights reserved. Licensed & Insured in Texas
              </p>

            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}