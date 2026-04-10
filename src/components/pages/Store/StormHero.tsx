"use client";

import React, { useState } from "react";
import { Search, ShieldCheck, Check, Ban } from "lucide-react";
import InspectForm from "./InspectForm";

export default function StormHero() {
      const [zipCode, setZipCode] = useState("");
      
      // Control the flow of the component: input -> loading -> result -> form
      const [step, setStep] = useState<"input" | "loading" | "result" | "form">("input");

      const handleCheck = (e: React.FormEvent) => {
            e.preventDefault();
            if (zipCode.length >= 5) {
                  // Move to loading state
                  setStep("loading");
                  
                  // Simulate the radar checking delay for 3 seconds, then show results
                  setTimeout(() => {
                        setStep("result");
                  }, 3000);
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

        /* Loading Progress Bar */
        @keyframes progressLoad {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress-load {
          animation: progressLoad 3s ease-in-out forwards;
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
                              STORM ALERT
                        </div>

                        {/* Headlines */}
                        <h1 className="text-[#e2e8f0] text-3xl md:text-4xl lg:text-5xl font-black mb-3 tracking-tight leading-tight">
                              Was Your Home in the <br className="hidden md:block" />
                              <span className="text-[#38bdf8] drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">Storm&apos;s Path?</span>
                        </h1>

                        <p className="text-[#ffffff99] text-sm md:text-base font-medium leading-relaxed max-w-lg mx-auto mb-9">
                              Enter your ZIP code below to instantly check if your area was affected by recent severe weather and hail damage.
                        </p>

                        {/* --- DYNAMIC WINDOW COMPONENT --- */}
                        {step !== "form" ? (
                              <div className="bg-linear-to-br from-cyan-400/5 to-cyan-400/0 border border-cyan-500/20 rounded-xl md:rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.5),0_0_80px_rgba(6,182,212,0.08)] max-w-[520px] mx-auto backdrop-blur-sm w-full">

                                    {/* Mac-Style Window Header (Shared across Input, Loading, and Result) */}
                                    <div className="bg-[#06b6d40f] border-b border-cyan-500/10 p-4 md:p-5 flex items-center gap-5">
                                          <div className="flex gap-1.5 md:gap-2 mr-4">
                                                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                          </div>
                                          <div className="text-[#ffffff80] font-mono text-xs md:text-sm tracking-wider">
                                                storm_zone_checker v2.1
                                          </div>
                                    </div>

                                    {/* STATE 1: INPUT FORM */}
                                    {step === "input" && (
                                          <>
                                                <form onSubmit={handleCheck} className="p-6 md:p-8">
                                                      <div className="mb-6">
                                                            <label className="flex items-center text-cyan-500 font-mono text-[0.65rem] md:text-xs font-bold uppercase tracking-[2px] mb-3 text-left pl-2">
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
                                                                        onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ''))}
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
                                                <div className="bg-[#080d15]/50 border-t border-cyan-500/10 px-4 py-3 md:py-4 flex flex-wrap items-center justify-center gap-3 md:gap-6 text-[0.6rem] md:text-xs text-[#06b6d4] font-medium">
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
                                          </>
                                    )}

                                    {/* STATE 2: LOADING RADAR */}
                                    {step === "loading" && (
                                          <div className="p-8 md:p-12 flex flex-col items-center justify-center min-h-[350px]">
                                                {/* Radar UI */}
                                                <div className="relative w-36 h-36 rounded-full border border-cyan-500/20 flex items-center justify-center mb-8">
                                                      <div className="absolute w-24 h-24 rounded-full border border-cyan-500/10"></div>
                                                      <div className="absolute w-12 h-12 rounded-full border border-cyan-500/10"></div>
                                                      
                                                      {/* Sweeping radar arm */}
                                                      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_70%,rgba(6,182,212,0.3)_100%)] animate-spin"></div>
                                                      
                                                      {/* Center dot */}
                                                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#06b6d4] z-10"></div>
                                                      
                                                      {/* Radar blip */}
                                                      <div className="absolute left-8 bottom-10 w-2 h-2 bg-cyan-400 rounded-full opacity-80 shadow-[0_0_8px_#06b6d4] animate-pulse"></div>
                                                </div>

                                                <div className="text-cyan-500 font-mono text-xs md:text-sm tracking-widest mb-2 animate-pulse uppercase">
                                                      Mapping storm trajectory...
                                                </div>
                                                <div className="text-[#ffffff60] text-[0.7rem] md:text-xs mb-8 text-center px-4 font-mono">
                                                      Plotting March 10 hail and tornado path for Abilene area
                                                </div>

                                                {/* Progress Bar */}
                                                <div className="w-48 h-1 bg-cyan-950 rounded-full overflow-hidden">
                                                      <div className="h-full bg-cyan-500 animate-progress-load"></div>
                                                </div>
                                          </div>
                                    )}

                                    {/* STATE 3: CHECK RESULT */}
                                    {step === "result" && (
                                          <div className="p-8 md:p-10 flex flex-col items-center text-center min-h-[350px]">
                                                
                                                {/* Green Check Icon */}
                                                <div className="w-20 h-20 rounded-full border border-green-500/30 flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                                                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                                                            <Check className="w-7 h-7 text-white" strokeWidth={3} />
                                                      </div>
                                                </div>

                                                <h3 className="text-green-500 font-bold text-xl md:text-2xl mb-4 tracking-wide">
                                                      Lower Risk Area
                                                </h3>
                                                
                                                <p className="text-gray-400 text-sm md:text-[15px] mb-4 leading-relaxed px-2">
                                                      ZIP code <span className="font-semibold">{zipCode}</span> appears to be <span className="font-semibold">outside the primary storm path.</span> However, wind and hail patterns can be unpredictable.
                                                </p>
                                                
                                                <p className="text-[#ffffff60] text-xs md:text-sm mb-8 leading-relaxed px-4">
                                                      If you&apos;ve noticed any signs of damage (missing shingles, granules in gutters, ceiling stains), we still recommend a professional inspection. It&apos;s 100% free.
                                                </p>

                                                <button 
                                                      onClick={() => setStep("form")}
                                                      className="bg-[#ffffff14] hover:bg-[#334155] border border-gray-600 text-white cursor-pointer font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg text-xs md:text-sm w-full max-w-[300px]"
                                                >
                                                      I Still Want a Free Inspection
                                                </button>
                                          </div>
                                    )}
                              </div>
                        ) : (
                              /* STATE 4: THE INTERACTIVE CLIENT FORM (Replaces the ZIP Checker) */
                              <InspectForm />
                        )}

                  </div>
            </section>
      );
}