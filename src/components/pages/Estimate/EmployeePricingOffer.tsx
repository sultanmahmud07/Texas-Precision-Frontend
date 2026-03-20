"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Check, Zap } from "lucide-react";

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function EmployeePricingOffer() {
  // Prevent Next.js hydration mismatch on dates by setting it client-side
  const [currentDate, setCurrentDate] = useState("March 2026");

  useEffect(() => {
    const date = new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(new Date());
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentDate(date);
  }, []);

  return (
    <section className="py-4 md:py-8 font-sans">
      <div className="main-container max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-6"
        >
          {/* --- TOP CARD: Main Offer --- */}
          <motion.div
                                    variants={cardVariants}
                                    className="flex items-center gap-4 bg-[#fef5f5] border-2 border-primary rounded-xl px-5 py-4 md:px-6 md:py-8 shadow-sm">
                                    {/* Warning Icon - Using standard emoji to match the flat yellow look */}
                                    <span className="text-2xl md:text-3xl leading-none shrink-0" role="img" aria-label="Warning">
                                          ⚠️
                                    </span>

                                    {/* Text Content */}
                                    <p className="text-[#951429] text-sm md:text-base leading-snug font-medium">
                                          <span className="font-bold">Spring storm season approaching: </span>
                                          March rains and hail can expose weak spots. Get ahead of the problem with a free roof inspection.
                                    </p>
                              </motion.div>
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl p-8 md:p-12 text-center border-3 border-primary shadow-[0_0_50px_rgba(196,30,58,0.08)] relative overflow-hidden"
          >
            {/* Glowing red gradient background effect (subtle) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-64 bg-[#c41e3a] opacity-[0.03] blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              {/* Top Badge */}
              <div className="inline-block bg-primary text-white text-[10px] md:text-sm font-black uppercase tracking-widest px-5 py-2 md:py-3 rounded-full mb-4 md:mb-6 shadow-[0_6px_20px_rgba(196,30,58,0.4)]">
                Employee Pricing Now Available
              </div>

              {/* Headline */}
              <h2 className="text-[#0f2744] text-2xl md:text-4xl lg:text-5xl font-extrabold md:mb-5 mb-3 tracking-tight">
                Pay What My Family Pays
              </h2>

              {/* Description */}
              <p className="text-[#475569] font-medium text-sm md:text-lg leading-relaxed max-w-4xl mx-auto mb-5 md:mb-8">
                For a limited time, I&apos;m offering my employee pricing to DFW
                homeowners. This is my absolute best rate—the same price my own
                family pays. No negotiation needed, no games.
              </p>

              {/* Checklist */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 mb-5 md:mb-10 text-sm md:text-base font-bold text-[#0f2744]">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" strokeWidth={3} />
                  Roofs starting at $7,999
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" strokeWidth={3} />
                  Premium GAF materials
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" strokeWidth={3} />
                  My own crews—never subs
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-primary hover:bg-red-800 text-white font-extrabold text-base md:text-xl uppercase px-8 py-4 md:px-12 md:py-5 rounded-xl shadow-[0_10px_30px_rgba(196,30,58,0.4)] transition-all transform hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(196,30,58,0.5)] mb-4">
                Claim Employee Pricing Now
              </button>

              {/* Footer Text */}
              <p className="text-primary text-xs md:text-sm italic font-bold">
                Limited spots available • Offer ends when schedule fills
              </p>
            </div>
          </motion.div>

          {/* --- MIDDLE CARD: Scarcity Tracker --- */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl p-6 md:p-8 text-center border-3 border-primary shadow-sm"
          >
            <h3 className="text-[#0f2744] font-bold text-sm md:text-lg mb-5">
              Employee Pricing Availability: <span className="text-primary">{currentDate}</span>
            </h3>

            {/* Boxes Grid */}
            <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-6">
              {/* Taken Spots (1-7) */}
              {[...Array(7)].map((_, i) => (
                <div
                  key={`taken-${i}`}
                  className="w-7 h-7 md:w-9 md:h-9 bg-primary text-xl rounded-md flex items-center justify-center text-white shadow"
                >
                  ✓

                </div>
              ))}
              {/* Remaining Spots (8-15) */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={`empty-${i}`}
                  className="w-7 h-7 md:w-9 md:h-9 bg-gray-200 text-gray-400 font-bold text-xs md:text-sm rounded-md flex items-center justify-center"
                >
                  {i + 8}
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-full  mx-auto h-2 md:h-3.5 bg-gray-200 rounded-full overflow-hidden mb-4 border border-gray-300/50">
              <div
                className="h-full bg-linear-to-r from-primary to-[#0f2744] rounded-full"
                style={{ width: "46%" }} // 7 out of 15 spots
              ></div>
            </div>

            <p className="text-[#0f2744] text-xs md:text-base font-semibold">
              Only <span className="text-primary text-xl font-bold">8</span> spots remaining at employee pricing
            </p>
          </motion.div>

          {/* --- BOTTOM CARD: Trust/Response Time --- */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl p-5 md:p-6 border-2 border-primary shadow-sm flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5 text-center md:text-left"
          >
            <div className="bg-yellow-50 p-3 rounded-full shrink-0">
              <Zap className="w-8 h-8 text-yellow-500 fill-yellow-500" />
            </div>
            
            <div className="flex flex-col justify-center h-full">
              <h4 className="text-[#0f2744] font-bold text-base md:text-lg mb-1">
                Average response time: <span className="text-primary">Under 15 minutes</span>
              </h4>
              <p className="text-gray-500 text-xs md:text-sm font-medium">
                Free estimates within 24 hours, guaranteed
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}