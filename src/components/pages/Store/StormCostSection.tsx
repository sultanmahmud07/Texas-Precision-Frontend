"use client";

import React from "react";

// --- Cost Data (Transcribed from image) ---
const costData = [
  {
    id: 1,
    icon: "💧",
    title: "Water Damage Repair",
    desc: "Interior ceiling, wall, and insulation damage",
    cost: "$3,000 - $12,000",
  },
  {
    id: 2,
    icon: "🦠",
    title: "Mold Remediation",
    desc: "Hidden mold growth from persistent moisture",
    cost: "$5,000 - $30,000",
  },
  {
    id: 3,
    icon: "🚧",
    title: "Structural Repair",
    desc: "Rotted decking, rafters, and support beams",
    cost: "$10,000 - $45,000",
  },
];

export default function StormCostSection() {
  return (
    // We make the main section relative so it can contain the absolute background layers
    <section className="relative w-full overflow-hidden bg-[#050a12] font-sans">

      {/* --- INLINE STYLES FOR ANIMATIONS --- */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* The Scanning Laser Line Animation */
        @keyframes scanVertical {
          0% { top: -5%; opacity: 0; }
          10% { opacity: 1; }
          45% { top: 105%; opacity: 1; }
          50% { top: 105%; opacity: 0; }
          60% { opacity: 1; }
          95% { top: -5%; opacity: 1; }
          100% { top: -5%; opacity: 0; }
        }
        .animate-scanner-line {
          animation: scanVertical 10s linear infinite;
        }
      `}} />

      {/* --- BACKGROUND LAYERS (.storm-bg & .grid-overlay mapped to Tailwind) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* The complex radial gradients from .storm-bg::before */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(6,182,212,0.08)_0%,transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(196,30,58,0.06)_0%,transparent_50%),radial-gradient(ellipse_at_50%_80%,rgba(6,182,212,0.04)_0%,transparent_50%),linear-gradient(180deg,#050a12_0%,#0a1220_40%,#0d1926_70%,#050a12_100%)]"></div>

        {/* The Grid Overlay from .grid-overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px] opacity-50"></div>

        {/* The Animated Scanning Line */}
        <div className="absolute left-0 w-full h-px bg-[#ef4444]/60 shadow-[0_0_15px_rgba(239,68,68,0.8),0_0_30px_rgba(239,68,68,0.4)] animate-scanner-line"></div>
      </div>


      {/* --- CONTENT LAYER (z-10 ensures it stays above the background) --- */}
      <div className="relative z-10 w-full">

        {/* 1. OWNER OPERATED BANNER (.oc-banner) */}
        <div className="bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.01)_100%)] border-y border-white/4 py-[60px]">
          <div className="second-container text-center">

            {/* .oc-badge */}
            <div className="inline-block bg-[#06b6d4]/10 border border-[#06b6d4]/25 text-[#06b6d4] px-3.5 py-[5px] rounded-[6px] text-[0.72em] font-bold uppercase tracking-[1.5px] mb-[15px]">
              OWNER-OPERATED
            </div>

            <h2 className="text-white text-2xl md:text-[2rem] font-bold mb-4 tracking-tight">
              Josh and team inspect your roof
            </h2>
            <p className="text-gray-400 text-sm md:text-[0.95em] leading-[1.6] font-medium">
              You won&apos;t get a random subcontractor. Josh, the owner, personally inspects every roof. With 12+ years in roofing, they know exactly what to look for and how to document it so your insurance claim gets approved.
            </p>

          </div>
        </div>

        {/* 2. THE REAL COST SECTION (.storm-cost) */}
        <div className="bg-[linear-gradient(180deg,rgba(127,29,29,0.1)_0%,rgba(5,10,18,0.98)_100%)] border-t border-[#ef4444]/20 py-[60px]">
          <div className="second-container">

            {/* Header Content */}
            <div className="text-center mb-10">
              {/* .oc-badge (Reused here) */}
              <div className="inline-block bg-[#06b6d4]/10 border border-[#06b6d4]/25 text-[#06b6d4] px-3.5 py-[5px] rounded-[6px] text-[0.72em] font-bold uppercase tracking-[1.5px] mb-[15px]">
                💰 THE REAL COST
              </div>

              <h2 className="text-white text-2xl md:text-[2.2rem] font-bold mb-4 tracking-tight">
                What Happens If You <span className="text-[#ef4444]">Don&apos;t Act</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base font-medium">
                Ignoring storm damage doesn&apos;t make it go away. It makes it worse — and more expensive.
              </p>
            </div>

            {/* Cost Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-8">
              {costData.map((item) => (
                // .cost-card mapped to Tailwind
                <div
                  key={item.id}
                  className="bg-white/3 border border-white/6 rounded-[12px] py-6 px-4 text-center"
                >
                  <div className="text-[2rem] md:text-[2.5rem] leading-none mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-[0.95em] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-[0.8em] leading-relaxed mb-4 h-auto md:h-10">
                    {item.desc}
                  </p>
                  <div className="text-[#ef4444] font-extrabold text-[1.1em] md:text-[1.2em] tracking-wide">
                    {item.cost}
                  </div>
                </div>
              ))}
            </div>

            {/* Warning Banner Bottom (.cost-warning) */}
            <div className="bg-[linear-gradient(135deg,rgba(239,68,68,0.1)_0%,rgba(239,68,68,0.04)_100%)] border border-[#ef4444]/25 rounded-[12px] p-5 text-center max-w-3xl mx-auto">
              <p className="text-gray-300 text-[0.85em] md:text-[0.9em] leading-[1.6] font-medium">
                A free 15-minute inspection now can save you <span className="text-[#ef4444] font-bold">tens of thousands</span> in repairs later. Plus, insurance claims have <span className="text-[#ef4444] font-bold">strict filing deadlines</span> — waiting too long could mean paying out of pocket.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}