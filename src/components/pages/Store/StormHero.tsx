"use client";

import React, { useState } from "react";
import { Search, ShieldCheck, Check, Ban } from "lucide-react";
import { toast } from "sonner";

export default function StormHero() {
      const [zipCode, setZipCode] = useState("");

      const handleCheck = (e: React.FormEvent) => {
            e.preventDefault();
            if (zipCode.length >= 5) {
                  toast.success(`Checking storm data for ZIP: ${zipCode}...`);
            }
      };

      return (
            <section className="relative w-full min-h-screen bg-[#050a12] overflow-hidden flex flex-col items-center pt-8 pb-14 px-4 font-sans">

                  {/* --- BACKGROUND EFFECTS & ANIMATIONS --- */}
                  <style dangerouslySetInnerHTML={{
                        __html: `
        /* Continuous Up & Down Scanner Line */
        @keyframes scanLaser {
          0% { top: -5%; opacity: 0; }
          10% { opacity: 1; }
          45% { top: 105%; opacity: 1; }
          50% { top: 105%; opacity: 0; }
          60% { opacity: 1; }
          95% { top: -5%; opacity: 1; }
          100% { top: -5%; opacity: 0; }
        }
        .scanner-line {
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background: rgba(6, 182, 212, 0.6);
          box-shadow: 0 0 15px rgba(6, 182, 212, 1), 0 0 30px rgba(6, 182, 212, 0.4);
          animation: scanLaser 8s linear infinite;
          z-index: 0;
        }

        /* Floating Light Particles */
        @keyframes floatParticle {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
        .particle {
          position: absolute;
          background: #06b6d4;
          border-radius: 50%;
          filter: blur(2px);
          animation: floatParticle 5s infinite ease-in-out;
        }
      `}} />

                  {/* Blueprint/Radar Grid Layer */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none z-0"></div>

                  {/* The Moving Scan Line */}
                  <div className="scanner-line"></div>

                  {/* Floating "Robotic" Data Dots */}
                  <div className="particle w-1.5 h-1.5 top-[20%] left-[15%]" style={{ animationDelay: '0s' }}></div>
                  <div className="particle w-2 h-2 top-[60%] left-[80%]" style={{ animationDelay: '2s', animationDuration: '7s' }}></div>
                  <div className="particle w-1 h-1 top-[80%] left-[30%]" style={{ animationDelay: '4s', animationDuration: '6s' }}></div>


                  {/* --- HERO CONTENT (.hero-inner) --- */}
                  <div className="relative z-10 max-w-2xl mx-auto text-center w-full mt-3 ">

                        {/* Alert Badge (.alert-badge) */}
                        <div className="inline-flex items-center justify-center gap-2 bg-linear-to-br from-red-500/20 to-red-500/5 border border-red-500/40 text-red-300 px-5 py-2 rounded-full text-[0.65rem] md:text-xs font-bold uppercase tracking-[2px] mb-8 shadow-[0_0_20px_rgba(239,68,68,0.15)] animate-pulse">
                              <span className="mr-2"> ⚠️</span>
                              {/* <AlertTriangle className="w-3.5 h-3.5 text-red-400" /> */}
                              ABILENE STORM ALERT — MARCH 2026
                        </div>

                        {/* Headlines */}
                        <h1 className="text-[#e2e8f0] text-3xl md:text-4xl lg:text-5xl font-black mb-3 tracking-tight leading-tight">
                              Was Your Home in the <br className="hidden md:block" />
                              <span className="text-[#38bdf8] drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">Storm&apos;s Path?</span>
                        </h1>

                        <p className="text-[#ffffff99] text-sm md:text-base font-medium leading-relaxed max-w-lg mx-auto mb-9">
                              Enter your ZIP code below to instantly check if your area was affected by recent severe weather and hail damage.
                        </p>

                        {/* --- ZIP CHECKER COMPONENT (.zip-checker) --- */}
                        <div className="bg-linear-to-br from-cyan-400/5 to-cyan-400/0 border border-cyan-500/20 rounded-xl md:rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.5),0_0_80px_rgba(6,182,212,0.08)] max-w-[520px] mx-auto backdrop-blur-sm">

                              {/* Mac-Style Window Header */}
                              <div className="bg-[#06b6d40f] border-b border-cyan-500/10 p-5 flex items-center gap5">
                                    {/* Window Dots */}
                                    <div className="flex gap-1.5 md:gap-2 mr-4">
                                          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                    </div>
                                    {/* Terminal Title */}
                                    <div className="text-[#ffffff80] font-mono text-xs md:text-sm tracking-wider">
                                          storm_zone_checker v2.1
                                    </div>
                              </div>

                              {/* Form Body */}
                              <form onSubmit={handleCheck} className="p-6 md:p-8">
                                    <div className="mb-6">
                                          <label className="flex items-center text-cyan-500 font-mono text-[0.65rem] md:text-xs font-bold uppercase tracking-[2px] mb-3 text-left pl-2">
                                                {/* Active Pulsing Dot */}
                                                <span className="relative flex h-2 w-2 mr-2.5">
                                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 shadow-[0_0_8px_#06b6d4]"></span>
                                                </span>
                                                Enter Your ZIP Code
                                          </label>

                                          <div className="relative">
                                                <input
                                                      type="text"
                                                      maxLength={5}
                                                      value={zipCode}
                                                      onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ''))} // Only allow numbers
                                                      // Removed the physical spaces here, let CSS tracking handle the spacing!
                                                      placeholder="00000"
                                                      className="w-full bg-[#0a111a] border-2 border-[#06b6d433] rounded-xl py-4 md:py-5 text-center text-white font-mono text-xl md:text-2xl tracking-[0.5em] md:tracking-[0.8em] pl-[0.5em] md:pl-[0.8em] outline-none focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4] transition-all placeholder-gray-800"
                                                />
                                          </div>
                                    </div>

                                    <button
                                          type="submit"
                                          disabled={zipCode.length < 5}
                                          className={`w-full flex items-center justify-center gap-2 border-none py-4 rounded-xl font-bold text-sm md:text-base uppercase tracking-widest transition-all duration-300 ${zipCode.length === 5
                                                ? "bg-linear-to-r from-cyan-400 to-cyan-600 text-[#050a12] shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] cursor-pointer hover:-translate-y-0.5"
                                                : "bg-cyan-900/40 text-cyan-600/50 cursor-not-allowed"
                                                }`}
                                    >
                                          <Search className="w-5 h-5" />
                                          Check My ZIP Code
                                    </button>
                              </form>

                              {/* Footer Features */}
                              <div className="bg-[#080d15]/50 border-t border-cyan-500/10 px-4 py-3 md:py-4 flex items-center justify-center gap-4 md:gap-6 text-[0.6rem] md:text-xs text-[#06b6d4] font-medium">
                                    <div className="flex items-center gap-1.5">
                                          <ShieldCheck className="w-3.5 h-3.5" /> <span className="text-[rgba(255,255,255,0.4)]">Instant results</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                          <Check className="w-3.5 h-3.5" /> <span className="text-[rgba(255,255,255,0.4)]">100% free</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                          <Ban className="w-3.5 h-3.5" /> <span className="text-[rgba(255,255,255,0.4)]">No obligation</span>
                                    </div>
                              </div>

                        </div>
                  </div>
            </section>
      );
}