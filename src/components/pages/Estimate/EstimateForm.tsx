"use client";

import React, { useState } from "react";
import { Check, ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";

const options = [
  "Under 1,500",
  "1,500 to 2,500",
  "2,500 to 3,500",
  "3,500+",
];

export default function EstimateForm() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-md mx-auto mt-8 font-sans">
      {/* Floating Left Badge */}
      <div className="absolute -top-3 -left-2 md:-left-6 z-10 bg-[#0f2744] border border-gray-600 text-white text-[0.65rem] font-bold px-3 py-1 rounded-sm flex items-center shadow-lg">
        <MapPin className="w-3 h-3 text-[#c41e3a] mr-1" />
        EXCLUSIVE TO <span className="text-[#c41e3a] ml-1">DFW</span> AREA
      </div>

      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Red Header Section */}
        <div className="bg-[#c41e3a] text-white text-center pt-8 pb-6 px-4 relative">
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-white/20 text-[0.65rem] font-bold px-3 py-0.5 rounded-full flex items-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full mr-1.5"></span>
            LIMITED SPOTS AVAILABLE
          </div>
          <h2 className="text-2xl font-extrabold flex items-center justify-center gap-2 mt-2">
            <Clock className="w-5 h-5 text-white/80" />
            Get Your 60-Second Estimate
          </h2>
          <p className="text-sm mt-1 text-white/90">
            Free quote • No obligation • Employee pricing available
          </p>
        </div>

        {/* Progress Bar */}
        <div className="px-6 pt-5">
          <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
            <span>Step <span className="text-[#c41e3a]">2</span> of 6</span>
            <span className="text-[#c41e3a]">33%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
            <div className="bg-gradient-to-r from-[#0f2744] to-[#c41e3a] h-1.5 rounded-full" style={{ width: "33%" }}></div>
          </div>
        </div>

        {/* Question & Options */}
        <div className="px-6 pb-6">
          <h3 className="text-lg font-bold text-center text-[#0f2744] mb-4">
            About how many <span className="text-[#c41e3a]">square feet</span> is your home?
          </h3>

          <div className="space-y-3">
            {options.map((option) => (
              <label
                key={option}
                className={`flex items-center p-3.5 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedArea === option
                    ? "border-[#c41e3a] bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${
                  selectedArea === option ? "border-[#c41e3a]" : "border-gray-300"
                }`}>
                  {selectedArea === option && <div className="w-2.5 h-2.5 bg-[#c41e3a] rounded-full"></div>}
                </div>
                <input
                  type="radio"
                  name="sqft"
                  value={option}
                  className="hidden"
                  onChange={() => setSelectedArea(option)}
                />
                <span className="font-semibold text-gray-700 text-sm">{option}</span>
              </label>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-6">
            <button className="flex-1 py-3 bg-gray-100 text-gray-600 font-bold rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors text-sm">
              <ChevronLeft className="w-4 h-4 mr-1" /> BACK
            </button>
            <button 
              disabled={!selectedArea}
              className={`flex-[2] py-3 font-bold rounded-lg flex items-center justify-center transition-colors text-sm ${
                selectedArea 
                ? "bg-[#0f2744] text-white hover:bg-[#0f2744]/90" 
                : "bg-[#0f2744]/50 text-white/70 cursor-not-allowed"
              }`}
            >
              CONTINUE <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Footer Guarantees */}
        <div className="bg-[#0f2744] py-3 px-4 flex justify-between items-center text-[0.65rem] sm:text-xs text-white/80 font-medium">
          <span className="flex items-center"><Check className="w-3 h-3 text-[#c41e3a] mr-1" /> Owner-Operated</span>
          <span className="flex items-center"><Check className="w-3 h-3 text-[#c41e3a] mr-1" /> Licensed & Insured</span>
          <span className="flex items-center"><Check className="w-3 h-3 text-[#c41e3a] mr-1" /> Zero Obligation</span>
        </div>
      </div>
    </div>
  );
}