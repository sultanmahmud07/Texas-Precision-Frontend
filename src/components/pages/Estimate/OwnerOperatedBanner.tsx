import React from 'react';

export default function OwnerOperatedBanner() {
  return (
    <section className="w-full py-5 font-sans">
      <div className="main-container">
        {/* Main Banner Container */}
        <div 
          className="
            relative overflow-hidden text-center text-white
            bg-linear-to-br from-[#0f2744] to-[#1a365d]
            p-[40px_35px] 
            rounded-[20px] 
            mb-[50px] 
            border-[3px] border-[#c41e3a]
            shadow-[0_15px_50px_rgba(15,39,68,0.3)]
          "
        >
          {/* Glowing Red Badge */}
          <div className="inline-block bg-[#c41e3a] text-white text-xs md:text-sm font-bold uppercase tracking-widest px-5 py-1.5 rounded-full mb-6 shadow-[0_0_15px_rgba(196,30,58,0.6)]">
            Owner-Operated
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-4xl lg:text-[2.6rem] font-extrabold mb-5 tracking-tight">
            No Empire. No Bloat. No BS.
          </h2>

          {/* Paragraph Description */}
          <p className="text-white/90 text-sm md:text-base lg:text-lg leading-[1.7] max-w-4xl mx-auto font-medium pm-4">
            I&apos;m the guy who actually does the work. We use premium GAF materials. We employ skilled 
            craftsmen. We just don&apos;t hide behind industry pricing games that cost you thousands. When you 
            work with Texas Precision Roofing, you get an honest, transparent experience—exactly how it 
            should be.
          </p>
        </div>
      </div>
    </section>
  );
}