import React from "react";
import Image from "next/image";
import EstimateForm from "./EstimateForm";

export default function EstimateBanner() {
  return (
    <section className="relative w-full min-h-screen bg-[#0f2744] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] py-12 px-4 flex flex-col items-center font-sans">
      
      {/* Top Logo - Replace src with your actual logo */}
      <div className="bg-white px-6 py-3 rounded-md mb-6 shadow-md">
        <h1 className="text-[#0f2744] font-black text-xl text-center leading-tight">
          TEXAS <br /> 
          <span className="text-[#c41e3a]">PRECISION</span> <br />
          <span className="text-[0.5rem] tracking-widest text-gray-500">ROOFING & CONSTRUCTION</span>
        </h1>
      </div>

      {/* Pricing Banner */}
      <div className="bg-gradient-to-b from-[#c41e3a] to-red-800 p-1 rounded-xl shadow-[0_0_30px_rgba(196,30,58,0.4)] relative mb-4">
        <div className="bg-[#c41e3a] border border-red-400/30 rounded-lg px-8 py-4 text-center">
          <p className="text-white/90 text-xs font-bold uppercase tracking-wider mb-1">New Roof Starting At</p>
          <h2 className="text-white text-5xl font-black mb-1 drop-shadow-md">$7,999</h2>
          <p className="text-white font-semibold text-sm mb-3">Employee Pricing</p>
          <div className="bg-[#0f2744]/40 border border-[#0f2744] text-white/80 text-[0.65rem] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest inline-block">
            Limited Time Only
          </div>
        </div>
        {/* Red arrows pointing down */}
        <div className="absolute -bottom-4 left-4 text-[#c41e3a] animate-bounce">↓</div>
        <div className="absolute -bottom-4 right-4 text-[#c41e3a] animate-bounce">↓</div>
      </div>

      {/* The Interactive Client Form */}
      <EstimateForm />

      {/* Trust Badges */}
      <div className="mt-6 flex gap-3 text-center">
        <div className="bg-[#0f2744] border border-white/10 px-4 py-2 rounded-md shadow-md">
          <p className="text-[#c41e3a] font-black text-lg">5.0</p>
          <p className="text-white/70 text-[0.55rem] font-bold uppercase tracking-wider">Google Rating</p>
        </div>
        <div className="bg-[#0f2744] border border-white/10 px-4 py-2 rounded-md shadow-md">
          <p className="text-[#c41e3a] font-black text-lg">12+</p>
          <p className="text-white/70 text-[0.55rem] font-bold uppercase tracking-wider">Years Experience</p>
        </div>
        <div className="bg-[#0f2744] border border-white/10 px-4 py-2 rounded-md shadow-md">
          <p className="text-[#c41e3a] font-black text-lg">TX</p>
          <p className="text-white/70 text-[0.55rem] font-bold uppercase tracking-wider">Licensed & Insured</p>
        </div>
      </div>

      {/* Live Viewing Badge */}
      <div className="mt-8 bg-white px-4 py-2.5 rounded-md shadow-lg flex items-center text-xs font-bold text-[#0f2744]">
        <span className="relative flex h-3 w-3 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c41e3a] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#c41e3a]"></span>
        </span>
        <span className="text-[#c41e3a] mr-1">21</span> DFW homeowners viewing this offer right now
      </div>

    </section>
  );
}