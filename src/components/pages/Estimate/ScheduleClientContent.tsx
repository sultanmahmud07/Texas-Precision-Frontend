"use client";

import  { useState, useEffect } from "react";
import Image from "next/image";
import { Check, Clock, Calendar, ShieldCheck, X } from "lucide-react";
import BookingWidget from "@/components/shared/Booking/BookingWidget";

export default function ScheduleClientContent() {
  // --- Active Countdown Timer State ---
  // Starts at exactly 23 hours, 50 mins, 58 secs based on reference image
  const [timeLeft, setTimeLeft] = useState(23 * 3600 + 50 * 60 + 58);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format the time
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-screen bg-[#0f2744] text-slate-200 font-sans flex flex-col">

      {/* Global Top Header */}
      <header className="bg-[#0f2744] backdrop-blur-xl px-4 py-2 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 border-b-3 border-[#c41e3a]">
        <Image src="/logo/logo.jpg" alt="Texas Precision Roofing" width={120} height={80} className="w-32" />
        <p className="text-white text-sm md:text-sm font-bold tracking-wide">
          <span className="text-[#c41e3a]">Owner-Operated</span> • Licensed & Insured in Texas
        </p>
      </header>

      {/* Progress Bar Header */}
      <div className="bg-[#0000004d] py-3 px-4 ">
        <div className="max-w-2xl mx-auto flex flex-col">
          <div className="flex justify-between text-xs md:text-sm  font-semibold mb-2">
            <span className="text-slate-400">Step <span className="text-white">2</span> of 2: Choose Your Time</span>
            <span className="text-green-400 font-extrabold">Almost Done!</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[670px] mx-auto px-4 py-5 md:py-8 flex flex-col items-center">

        {/* Live Viewing Stats */}
        <div className="flex items-center gap-4 text-[11px] md:text-xs font-bold text-[#ffffffcc] mb-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            5 people viewing this page
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5e text-yellow-500" />
            Last booked 6 min ago
          </span>
        </div>

        {/* Qualified Badge */}
        <div className="bg-[#22c55e40] border border-green-500/30 text-[#4ade80] px-4 py-1 md:py-2.5 rounded-full text-sm font-bold flex items-center gap-2 mb-3 tracking-wide">
          <Check className="w-4 h-4" />
          YOU QUALIFIED — FINAL STEP
        </div>

        {/* Hero Title */}
        <div className="text-center mb-5">
          <h1 className="text-2xl md:text-[2rem] font-extrabold text-white mb-3">
            Lock In <span className="text-[#c41e3a]">Employee Pricing</span>
          </h1>
          <p className="text-[#ffffffb3] text-sm md:text-base max-w-base mx-auto leading-relaxed">
            Your discounted rate is reserved. Pick a time to secure it before someone else takes your spot.
          </p>
        </div>

        {/* Countdown Timer Box */}
        <div className="w-full bg-[#c41e3a33] text-[#fff9] border border-primary/20 rounded-xl p-6 text-center mb-6 shadow-xl">
          <div className="flex items-center justify-center gap-1.5  text-xs font-bold mb-2">
            <Clock className="w-4 h-4 text-primary" />
            This pricing expires in:
          </div>

          <div className="flex items-center justify-center gap-3 md:gap-4 mb-2">
            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="bg-[#0000004d] text-white text-2xl md:text-4xl font-black rounded-lg w-14 h-16 md:w-18 md:h-18 flex items-center justify-center shadow-inner border border-white/5">
                {hours.toString().padStart(2, '0')}
              </div>
              <span className="text-[10px] text-slate-400 font-bold mt-2 tracking-widest">HOURS</span>
            </div>

            <div className="text-2xl font-bold  -mt-6">:</div>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="bg-[#0000004d] text-white text-2xl md:text-4xl font-black rounded-lg w-14 h-16 md:w-18 md:h-18 flex items-center justify-center shadow-inner border border-white/5">
                {minutes.toString().padStart(2, '0')}
              </div>
              <span className="text-[10px] text-slate-400 font-bold mt-2 tracking-widest">MINS</span>
            </div>

            <div className="text-2xl font-bold text-slate-600 -mt-6">:</div>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="bg-[#0000004d] text-white text-2xl md:text-4xl font-black rounded-lg w-14 h-16 md:w-18 md:h-18 flex items-center justify-center shadow-inner border border-white/5">
                {seconds.toString().padStart(2, '0')}
              </div>
              <span className="text-[10px] text-slate-400 font-bold mt-2 tracking-widest">SECS</span>
            </div>
          </div>

          <p className="text-sm font-medium">
            After this, employee pricing is no longer guaranteed
          </p>
        </div>

        {/* Small Trust Guarantees */}
        <div className="flex border-b border-[#ffffff1a] w-full pb-3 flex-wrap items-center justify-center gap-4 md:gap-6 text-[11px] md:text-xs font-bold text-slate-400 mb-10">
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-green-400" /> Takes 30 seconds</span>
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-green-400" /> No credit card</span>
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-green-400" /> Free to reschedule</span>
        </div>

       {/* --- BOOKING WIDGET WRAPPER --- */}
        <div className="w-full bg-white rounded-2xl relative overflow-hidden mb-8 shadow-[0_25px_80px_rgba(0,0,0,0.5),0_0_0_2px_rgba(196,30,58,0.3),0_0_60px_rgba(196,30,58,0.15)] font-sans">

          {/* Header of Booking Wrapper (.calendar-header) */}
          <div className="bg-[linear-gradient(135deg,#0f2744_0%,#1a365d_100%)] px-5 py-[18px] border-b-[3px] border-[#c41e3a] flex flex-col md:flex-row items-center md:justify-between justify-center gap-3 md:gap-0">
            <div className="flex items-center flex-col md:flex-row gap-3 md:gap-4">
              
              {/* .calendar-icon */}
              <div className="w-[46px] h-[46px] bg-[linear-gradient(135deg,#c41e3a_0%,#a01830_100%)] rounded-[10px] flex items-center justify-center shrink-0 shadow-inner">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2.5} />
              </div>
              
              {/* .calendar-header-text */}
              <div className="flex flex-col">
                <h2 className="text-white text-[1.1em] font-bold leading-tight m-0">
                  Select Your Inspection Time
                </h2>
                <p className="text-white/70 text-[0.85em] text-center md:text-start m-0 mt-0.5">
                  Once a slot is taken, it&apos;s gone
                </p>
              </div>
            </div>

            {/* Spot Counter Badge (.spots-badge) */}
            <div className="bg-[linear-gradient(135deg,rgba(251,191,36,0.2)_0%,rgba(251,191,36,0.1)_100%)] border border-[#fbbf24]/50 px-3.5 py-2 rounded-md text-center shrink-0">
              {/* .spots-number */}
              <span className="font-extrabold text-[1.3em] text-[#fbbf24] block leading-none">
                3
              </span>
              <span className="text-[0.6em] md:text-[0.65em] text-[#fbbf24]/90 font-bold tracking-wider mt-1.5 uppercase block">
                Spots left this week
              </span>
            </div>
          </div>

          {/* Render the white reusable booking form inside */}
          <BookingWidget />

          {/* Footer of Booking Wrapper (.inline-trust) */}
          <div className="flex justify-center gap-4 md:gap-5 flex-wrap py-[18px] px-5 bg-[#f8fafc] border-t border-[#e2e8f0] text-[10px] md:text-xs text-slate-600 font-bold">
            <span className="flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#c41e3a] mr-1.5" /> 
              Premium Materials
            </span>
            <span className="flex items-center">
              <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#c41e3a] mr-1.5" strokeWidth={3} /> 
              No Hidden Fees
            </span>
            <span className="flex items-center">
              <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#c41e3a] mr-1.5" strokeWidth={3} /> 
              100% Free to Cancel
            </span>
          </div>
          
        </div>

        {/* --- BOTTOM INFORMATION BLOCKS --- */}

        {/* Review Block */}
        <div className="w-full bg-[#ffffff0d] border border-[#ffffff1a] rounded-xl p-5 md:p-6 mb-4">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">JM</div>
            <div>
              <div className="flex gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} />)}
              </div>
              <p className="text-slate-300 text-sm italic leading-relaxed mb-3">
                &quot;I almost didn&apos;t book because I figured it was too good to be true. Glad I did — their quote was literally half of what the big company wanted. Done in one day, looks incredible.&quot;
              </p>
              <p className="text-primary text-xs font-bold">— John M., Dallas</p>
            </div>
          </div>
        </div>

        {/* Comparison Block */}
        <div className="w-full bg-[#0003] border border-[#ffffff1a] rounded-xl p-6 mb-4 text-center">
          <h4 className="text-[10px] font-black text-slate-400 tracking-[2px] uppercase mb-5">Why Our Prices Are Lower</h4>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-5">
            <div className="text-right">
              <span className="text-slate-300 font-bold">Big Companies</span>
              <p className="text-slate-400 text-[10px]">Sales commissions, office overhead, middlemen</p>
            </div>
            <span className="text-slate-600 font-black text-lg">VS</span>
            <div className="text-left">
              <span className="text-green-400 font-bold">Texas Precision</span>
              <p className="text-slate-400 text-[10px]">Owner-operated, no salespeople, direct pricing</p>
            </div>
          </div>

          <div className="inline-block bg-green-500/10 border border-green-500/20 text-green-400 text-xs md:text-sm font-bold px-4 py-2 rounded-lg">
            Homeowners save <span className="text-white">40-60%</span> compared to big roofing companies
          </div>
        </div>

        {/* Warning Block */}
        <div className="w-full bg-[#ef44441a] border border-primary/30 rounded-xl p-6 mb-12">
          <h4 className="text-primary font-bold text-sm flex items-center gap-2 mb-4">
            <span className="text-yellow-500">⚠️</span> If You Leave Without Booking:
          </h4>
          <ul className="space-y-3 text-xs md:text-sm text-slate-300">
            <li className="flex items-start gap-2.5"><X className="w-4 h-4 text-primary shrink-0" /> Your reserved spot will be released to the next homeowner</li>
            <li className="flex items-start gap-2.5"><X className="w-4 h-4 text-primary shrink-0" /> Employee pricing is no longer guaranteed for your project</li>
            <li className="flex items-start gap-2.5"><X className="w-4 h-4 text-primary shrink-0" /> This week&apos;s inspection slots may fill completely</li>
            <li className="flex items-start gap-2.5"><X className="w-4 h-4 text-primary shrink-0" /> You&apos;ll need to restart the qualification process</li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="text-center text-xs md:text-sm border-t w-full pt-4 border-[#ffffff1a] text-slate-400 mb-10">
          Questions? Call Josh directly:<br />
          <a href="tel:9727825603" className="text-primary font-bold text-sm md:text-base hover:underline mt-1 inline-block">(972) 782-5603</a>
        </div>

      </main>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-primary/20">
        <Image src="/logo/logo.jpg" alt="Logo" width={190} height={130} className="w-32 mx-auto mb-4 " />
        <p className="text-sm md:text-sm text-[#fff6]">
          © 2026 Texas Precision Roofing | <span className="text-primary">(972) 782-5603</span><br />
          Owner-Operated • Licensed & Insured • Dallas-Fort Worth
        </p>
      </footer>

    </div>
  );
}

// Simple Helper for the stars
function Star() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
  );
}