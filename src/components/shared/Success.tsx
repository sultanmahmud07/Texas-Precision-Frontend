"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Check, Calendar, Clock, ArrowLeft } from "lucide-react";

// --- The actual content component that reads URL params ---
function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Extract data from URL
  const scheduledDate = searchParams.get("scheduledDate");
  const scheduledTime = searchParams.get("scheduledTime");
  const serviceType = searchParams.get("serviceType") || "Roofing";

  // Safely format the date to match "Tuesday, April 28, 2026"
  const formattedDate = scheduledDate
    ? new Date(scheduledDate + "T00:00:00").toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    : "Date to be confirmed";

  return (
    <div className="w-full max-w-[460px] mx-auto bg-white rounded-xl shadow-md border border-slate-100 p-8 md:p-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Success Icon with subtle background pulse */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 md:mb-8 flex items-center justify-center">
        <div className="absolute inset-0 bg-green-100 rounded-full animate-pulse"></div>
        <div className="relative bg-green-100 rounded-full w-full h-full flex items-center justify-center">
          <Check className="w-8 h-8 md:w-10 md:h-10 text-green-500" strokeWidth={3} />
        </div>
      </div>

      {/* Headings */}
      <h1 className="text-2xl md:text-[28px] font-bold text-slate-900 mb-3 md:mb-4 tracking-tight">
        Appointment Confirmed!
      </h1>
      <p className="text-slate-500 text-[15px] md:text-base leading-relaxed mb-8">
        Your appointment with Texas Precision Roofing & Contracting has been booked.
      </p>

      {/* Appointment Details Box */}
      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 md:p-6 text-left mb-8">
        <ul className="space-y-4 md:space-y-5">
          
          {/* Date */}
          <li className="flex items-start gap-4">
            <Calendar className="w-5 h-5 text-[#f97316] shrink-0 mt-0.5" strokeWidth={2} />
            <span className="text-slate-700 font-medium text-[15px] md:text-base leading-snug">
              {formattedDate}
            </span>
          </li>
          
          {/* Time */}
          <li className="flex items-start gap-4">
            <Clock className="w-5 h-5 text-[#f97316] shrink-0 mt-0.5" strokeWidth={2} />
            <span className="text-slate-700 font-medium text-[15px] md:text-base leading-snug">
              {scheduledTime || "Time to be confirmed"}
            </span>
          </li>
          
          {/* Service (Aligned cleanly using an empty spacer div) */}
          <li className="flex items-start gap-4">
            <div className="w-5 h-5 shrink-0 hidden sm:block"></div> {/* Invisible spacer to align text */}
            <div className="text-[15px] md:text-base">
              <span className="text-slate-500">Service: </span>
              <span className="text-slate-700 font-medium">{serviceType}</span>
            </div>
          </li>

        </ul>
      </div>

      {/* Footer Text */}
      <p className="text-slate-500 text-sm md:text-[15px] mb-10">
        You will receive a confirmation email shortly.
      </p>

      {/* Back to Home Button */}
      <button 
        onClick={() => router.push('/')}
        className="flex items-center justify-center gap-2 w-full py-3.5 md:py-4 rounded-xl text-slate-700 font-bold bg-white hover:bg-slate-50 border-2 border-slate-200 transition-all text-sm md:text-[15px] active:scale-[0.98]"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </button>

    </div>
  );
}

// --- Main Page Wrapper ---
export default function SuccessClientPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col items-center justify-center p-4">
      {/* Suspense Boundary specifically required by Next.js for useSearchParams */}
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-10 h-10 border-4 border-[#f97316] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-slate-500 font-medium">Loading your confirmation...</p>
        </div>
      }>
        <SuccessContent />
      </Suspense>
    </div>
  );
}