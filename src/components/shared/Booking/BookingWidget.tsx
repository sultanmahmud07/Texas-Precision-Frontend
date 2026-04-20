"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Globe } from "lucide-react";

export default function BookingWidget() {
  const [activeTab, setActiveTab] = useState("1. Date");

  // Hardcoded April 2026 calendar days to exactly match your reference image
  const daysInApril = Array.from({ length: 30 }, (_, i) => i + 1);
  const emptyDaysStart = Array.from({ length: 3 }, (_, i) => i); // Wed start

  return (
    <div className="bg-white  w-full text-[#6a7282] font-sans  overflow-hidden">
      
      {/* Widget Header */}
      <div className="pt-8 pb-4 px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Book an onsite estimate</h2>
        <p className="text-slate-500 text-sm mb-4">Service: <span className="text-slate-700">Roofing</span></p>
        
        <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
          <span>Times shown in</span>
          <div className="flex items-center gap-2 border border-slate-200 rounded-md px-3 py-1.5 cursor-pointer hover:border-slate-300 transition-colors">
            <Globe className="w-4 h-4" />
            <span className="text-slate-700 font-medium">Central Time (CT)</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 px-2 mt-4">
        {["1. Date", "2. Time", "3. Info"].map((tab) => (
          <div 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 text-center py-4 text-sm font-medium cursor-pointer transition-colors ${
              activeTab === tab 
                ? "text-orange-500 border-b-2 border-orange-500" 
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Calendar View (Tab 1) */}
      <div className="p-6 md:p-8">
        
        {/* Month Selector */}
        <div className="flex items-center justify-between mb-8 px-2">
          <button className="p-1 hover:bg-slate-100 rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5 text-slate-800" />
          </button>
          <span className="text-lg font-bold text-slate-900">April 2026</span>
          <button className="p-1 hover:bg-slate-100 rounded-full transition-colors">
            <ChevronRight className="w-5 h-5 text-slate-800" />
          </button>
        </div>

        {/* Days Header */}
        <div className="grid grid-cols-7 text-center text-[13px] font-medium text-slate-500 mb-6 gap-y-4">
          <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
          
          {/* Calendar Grid (Disabled look matching your reference) */}
          {emptyDaysStart.map((_, i) => <div key={`empty-${i}`}></div>)}
          
          {daysInApril.map((day) => (
            <div 
              key={day} 
              className="flex items-center justify-center h-10 w-10 mx-auto text-slate-300 font-medium text-[15px] cursor-not-allowed"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center mt-8 text-sm text-slate-500">
          Select an available date to see time slots
        </div>
      </div>

      {/* Absolute Bottom Footer */}
      <div className="bg-slate-50 border-t border-slate-100 py-4 text-center text-sm text-slate-500 font-medium">
        Appointments are 60 minutes
      </div>
    </div>
  );
}