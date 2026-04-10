"use client";
export default function UrgencyStrip() {
  // Smooth scroll handler
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <section className="py-8 pt-4 md:pb-14 font-sans bg-white">
      <div className="main-container max-w-5xl mx-auto">

        {/* --- Inline Styles for Custom Animations & Backgrounds --- */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
          }
          .urgency-strip-section {
            background: linear-gradient(135deg, #c41e3a 0%, #a01830 100%);
            box-shadow: 0 15px 50px rgba(196, 30, 58, 0.4);
            position: relative;
            overflow: hidden; /* Keeps the stripes and shimmer contained */
            border-radius: 16px;
          }
          .urgency-strip-section::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255, 255, 255, 0.05) 15px, rgba(255, 255, 255, 0.05) 30px);
            z-index: 0;
            pointer-events: none;
          }
          .urgency-strip-section::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
            animation: shimmer 4s infinite;
            z-index: 1;
            pointer-events: none;
          }
        `}} />

        {/* --- Main Container --- */}
        <div className="urgency-strip-section p-8 md:p-14 lg:p-16 flex flex-col items-center justify-center text-center">

          {/* Top Pill Badge */}
          <div className="relative z-10 inline-block border border-white/40 bg-white/10 text-white text-[0.65rem] md:text-xs font-extrabold uppercase tracking-widest px-5 py-1.5 md:py-3 rounded-full mb-6 backdrop-blur-sm">
            Truth in Pricing
          </div>

          {/* Headline */}
          <h2 className="relative z-10 text-white text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5 tracking-tight">
            Why Pay for Someone Else&apos;s Commission?
          </h2>

          {/* Paragraph */}
          <p className="relative z-10 text-white/90 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-medium">
            Most roofing companies add 15-25% to your quote just for sales commissions.
            At Texas Precision Roofing, there&apos;s no middleman—just honest pricing from the
            owner who actually does the work.
          </p>

          {/* Feature Badges Grid */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 md:gap-5 mb-10">
            <div className="flex items-center gap-2 border border-white/30 bg-white/10 text-white text-xs md:text-base font-semibold px-5 py-2.5 md:py-4 md:px-7 rounded-full backdrop-blur-sm transition-transform hover:scale-105 cursor-default">
              <span role="img" aria-label="Money Bag">💰</span> $10K+ avg savings
            </div>
            <div className="flex items-center gap-2 border border-white/30 bg-white/10 text-white text-xs md:text-base font-semibold px-5 py-2.5 md:py-4 md:px-7 rounded-full backdrop-blur-sm transition-transform hover:scale-105 cursor-default">
              <span role="img" aria-label="House">🏠</span> Premium materials
            </div>
            <div className="flex items-center gap-2 border border-white/30 bg-white/10 text-white text-xs md:text-base font-semibold px-5 py-2.5 md:py-4 md:px-7 rounded-full backdrop-blur-sm transition-transform hover:scale-105 cursor-default">
              <span role="img" aria-label="Lightning Bolt">⚡</span> Done in 1 day
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleScrollToTop}
            className="relative z-10 cursor-pointer bg-white text-[#a01830] hover:text-[#c41e3a] font-extrabold text-sm md:text-base uppercase px-8 py-4 md:px-10 rounded-xl shadow-xl transition-all transform hover:-translate-y-1 hover:shadow-2xl">
            Get My Honest Quote
          </button>

        </div>
      </div>
    </section>
  );
}