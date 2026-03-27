import React from "react";
import Image from "next/image";

export default function StormHeader() {
  return (
    <header className="z-50 bg-[rgba(0,0,0,0.95)] border-b border-cyan-500/20 backdrop-blur-xl px-4 py-3 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 shadow-lg shadow-cyan-900/10">
      
      {/* Logo Placement */}
      <div className="shrink-0">
        <Image 
          src="/logo/logo.jpg" 
          alt="Texas Precision Roofing" 
          width={120} 
          height={40} 
          className="w-28 md:w-30"
        />
      </div>

      {/* Title */}
      <div className="text-[#94a3b8] text-xs md:text-sm font-medium tracking-wide">
        Storm Damage <span className="text-[#06b6d4] font-bold">Assessment Tool</span>
      </div>

      {/* Live Badge (.header-live) */}
      <div className="flex items-center gap-2 bg-red-500/15 border border-red-500/30 px-3.5 py-1.5 rounded-full text-[0.60rem] md:text-[0.6em] font-bold text-red-300 uppercase tracking-[1px] shadow-[0_0_15px_rgba(239,68,68,0.15)]">
        {/* Pulsing Dot (.header-live-dot) */}
        <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping absolute opacity-75"></span>
        <span className="w-1.5 h-1.5 bg-red-500 rounded-full relative"></span>
        LIVE STORM DATA
      </div>
      
    </header>
  );
}