import Image from "next/image";
import EstimateForm from "./EstimateForm";
import LiveVisitorBadge from "@/components/shared/LiveVisitorBadge";

export default function EstimateBanner() {
  return (
    <section className="bg-ice-beam relative w-full min-h-screen py-6 px-4 flex flex-col items-center font-sans overflow-hidden">

      {/* Structural Grid Overlay (Stationary & Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[30px_30px] z-0 pointer-events-none"></div>

      {/* --- Inline Styles for Custom Animations --- */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* 1. Component Background: Smooth Ice Blue Sweep */
        @keyframes beamSweep {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .bg-ice-beam {
          background-color: #0f2744;
          background-image: linear-gradient(
            110deg,
            transparent 20%,
            rgba(0, 195, 255, 0.02) 40%,
            rgba(0, 195, 255, 0.15) 50%, /* New Moving Color: Glowing Ice Blue / Cyan */
            rgba(0, 195, 255, 0.02) 60%,
            transparent 80%
          );
          background-size: 250% 100%;
          /* 'alternate' makes it sweep smoothly back and forth like a scanner */
          animation: beamSweep 6s ease-in-out infinite alternate; 
        }

        /* 2. Badge Animations (Shine + Shadow Pulse) */
        @keyframes shineSweep {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }
        .animate-shine {
          animation: shineSweep 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 8px 30px rgba(196, 30, 58, 0.4); }
          50% { box-shadow: 0 8px 50px rgba(235, 50, 80, 0.8); }
        }
        .price-hero-badge {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(135deg, #c41e3a 0%, #a01830 100%);
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          animation: pulseGlow 2.5s infinite;
          border: 1px solid rgba(255,255,255,0.1);
        }
      `}} />

      {/* Content Wrapper (z-10 ensures it stays above the animated background) */}
      <div className="relative z-10 flex flex-col items-center w-full">

        {/* Top Logo */}
        <Image
          src="/logo/logo.jpg"
          alt="Company Logo"
          width={200}
          height={120}
          className="mb-5 w-36 md:w-48"
        />

        {/* --- Pricing Banner Wrapper with Arrows --- */}
        <div className="relative flex items-center justify-center w-full max-w-[600px] mb-6">

          {/* Left Animated Arrow */}
          <div className="absolute left-0 md:left-16 top-1/2 -translate-y-1/2 animate-bounce z-0 hidden sm:block">
            <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L12 50M12 50L4 42M12 50L20 42" stroke="url(#arrowGradLeft)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="arrowGradLeft" x1="12" y1="0" x2="12" y2="50" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#c41e3a" stopOpacity="0" />
                  <stop offset="1" stopColor="#e72c48" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* The Badge */}
          <div className="price-hero-badge z-10 p-4 md:px-8">
            {/* Glossy Overlay Animation */}
            <div className="absolute top-0 -left-full w-[60%] h-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] animate-shine pointer-events-none" />

            <p className="text-white/90 text-xs md:text-sm font-bold uppercase tracking-widest">
              New Roof Starting At
            </p>
            <h2 className="text-white text-3xl md:text-5xl font-black tracking-tighter drop-shadow-lg">
              $7,999
            </h2>
            <p className="text-white text-sm md:text-base font-bold mb-2 tracking-wide">
              Employee Pricing
            </p>
            <div className="bg-secondary text-primary text-xs  font-semibold px-6 py-2.5 rounded-full uppercase tracking-widest shadow-inner w-full text-center sm:w-auto">
              Limited Time Only
            </div>
          </div>

          {/* Right Animated Arrow */}
          <div className="absolute right-0 md:right-16 top-1/2 -translate-y-1/2 animate-bounce z-0 hidden sm:block" style={{ animationDelay: '0.2s' }}>
            <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L12 50M12 50L4 42M12 50L20 42" stroke="url(#arrowGradRight)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="arrowGradRight" x1="12" y1="0" x2="12" y2="50" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#c41e3a" stopOpacity="0" />
                  <stop offset="1" stopColor="#e72c48" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* The Interactive Client Form */}
        <EstimateForm />

        {/* Trust Badges */}
        <div className="mt-8 flex gap-3 text-center">
          <div className="bg-[#ffffff1a] border border-white/10 px-4 py-2 md:py-4 rounded-md shadow-md transition-transform hover:-translate-y-1">
            <p className="text-primary font-black text-lg md:text-xl">5.0</p>
            <p className="text-[#ffffffd9] text-[0.55rem] md:text-xs font-semibold uppercase tracking-wider">Google Rating</p>
          </div>
          <div className="bg-[#ffffff1a] border border-white/10 px-4 py-2 md:py-4 rounded-md shadow-md transition-transform hover:-translate-y-1">
            <p className="text-primary font-black text-lg md:text-xl">12+</p>
            <p className="text-[#ffffffd9] text-[0.55rem] md:text-xs font-semibold uppercase tracking-wider">Years Experience</p>
          </div>
          <div className="bg-[#ffffff1a] border border-white/10 px-4 py-2 md:py-4 rounded-md shadow-md transition-transform hover:-translate-y-1">
            <p className="text-primary font-black text-lg md:text-xl">TX</p>
            <p className="text-[#ffffffd9] text-[0.55rem] md:text-xs font-semibold uppercase tracking-wider">Insured</p>
          </div>
        </div>

        {/* Live Viewing Badge */}
       <LiveVisitorBadge />

      </div>
    </section>
  );
}