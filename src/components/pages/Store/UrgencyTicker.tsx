"use client";

import React from "react";

// --- Ticker Content Data (transcribed from your image) ---
const tickerItems = [
  {
    id: 1,
    highlightFirst: true,
    highlightText: "Hidden damage",
    standardText: "can void your insurance coverage if left untreated",
  },
  {
    id: 2,
    highlightFirst: true,
    highlightText: "Insurance claims",
    standardText: "have strict filing deadlines — act now",
  },
  {
    id: 3,
    highlightFirst: false,
    preText: "Texas Precision Roofing is",
    highlightText: "owner-operated",
    standardText: "— Josh inspects your roof personally",
  },
  {
    id: 4,
    highlightFirst: true,
    highlightText: "Free Upgrades",
    standardText: "are a myth — big companies hide them in inflated estimates",
  }
];

// Duplicate the items so the continuous scroll loop is seamless
const duplicatedItems = [...tickerItems, ...tickerItems, ...tickerItems];

export default function UrgencyTicker() {
  return (
    // `.urgency-ticker` translated to Tailwind
    <section className="bg-[#050a12] border-y border-[#06b6d41f] py-3 md:py-3.5 overflow-hidden relative backdrop-blur-md font-sans">
      
      {/* --- Inline Styles for Custom Scroll Animation --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Shifts exactly 1/3 of the width (1 set of items) */
        }
        .animate-ticker {
          animation: ticker-scroll 25s linear infinite;
        }
        /* Pauses the scroll when the user hovers over it to read */
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* `.ticker-track` translated to Tailwind */}
      {/* w-max prevents wrapping, gap-[50px] sets spacing between items */}
      <div className="flex w-max animate-ticker gap-10 md:gap-[50px] pl-10 md:pl-[50px]">
        
        {duplicatedItems.map((item, index) => (
          <div key={`${item.id}-${index}`} className="flex items-center gap-2 md:gap-3 whitespace-nowrap">
            
            {/* Live Red Pulsing Dot */}
            <div className="relative flex items-center justify-center w-2 h-2 md:w-2 md:h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.9)]"></span>
            </div>

            {/* Text Content */}
            <p className="text-gray-300 text-sm md:text-sm font-medium tracking-wide">
              {item.highlightFirst ? (
                <>
                  <span className="text-cyan-400 font-bold">{item.highlightText}</span> {item.standardText}
                </>
              ) : (
                <>
                  {item.preText} <span className="text-cyan-400 font-bold">{item.highlightText}</span> {item.standardText}
                </>
              )}
            </p>

          </div>
        ))}
        
      </div>
    </section>
  );
}