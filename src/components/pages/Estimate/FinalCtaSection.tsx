"use client";

import React from "react";

export default function FinalCtaSection() {
  
  // Smooth scroll handler
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section className="py-6 md:pb-20 font-sans">
      <div className="main-container max-w-5xl mx-auto">
        
        {/* --- Inline Styles for Arrow Animation --- */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes arrowBounceUp {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-arrow-bounce {
            animation: arrowBounceUp 1.5s ease-in-out infinite;
          }
        `}} />

        {/* Main CTA Container (.final-cta) */}
        <div className="
          relative overflow-hidden text-center text-white
          bg-[linear-gradient(135deg,#0f2744_0%,#1a365d_100%)]
          rounded-[20px]
          px-6 py-12 md:px-10 md:py-[60px]
          shadow-[0_15px_50px_rgba(15,39,68,0.4)]
        ">
          
          {/* Headline */}
          <h2 className="text-2xl md:text-3xl lg:text-[2.8rem] font-extrabold mb-6 tracking-tight">
            Ready to Save Thousands on Your New Roof?
          </h2>
          
          {/* Sub-headline */}
          <p className="text-gray-200 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto md:mb-10 mb-5 font-medium">
            Join hundreds of satisfied homeowners throughout Dallas-Fort Worth who chose Texas Precision Roofing for honest pricing, quality work, and zero games.
          </p>

          <p className="text-white font-bold text-sm md:text-lg mb-6 md:mb-8">
            Employee pricing = your best deal.
          </p>

          {/* Animated Bouncing Arrow (.cta-arrow-up) */}
          <div className="flex flex-col items-center justify-center mb-[15px] animate-arrow-bounce">
            {/* Arrow Head */}
            <div className="
              w-0 h-0 
              border-l-18 border-l-transparent 
              border-r-18 border-r-transparent 
              border-b-24 border-b-[#c41e3a] 
              drop-shadow-[0_0_10px_rgba(196,30,58,0.6)]
            "></div>
            {/* Arrow Line */}
            <div className="
              w-1 h-[30px] 
              bg-linear-to-t from-transparent to-[#c41e3a] 
              rounded-[2px] -mt-px
            "></div>
          </div>

          {/* Scroll to Form Button (.scroll-to-form-btn) */}
          <button 
            onClick={handleScrollToTop}
            className="
              bg-[linear-gradient(135deg,#c41e3a_0%,#a01830_100%)]
              text-white border-none
              px-5 py-3 md:px-[55px] md:py-5
              text-xs md:text-[1.3em] font-extrabold
              rounded-[12px] cursor-pointer
              transition-all duration-300 ease-in-out
              shadow-[0_8px_30px_rgba(196,30,58,0.5)]
              uppercase tracking-[1px]
              hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(196,30,58,0.7)]
            "
          >
            Start My 60-Second Estimate
          </button>
          
        </div>

      </div>
    </section>
  );
}