"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

// --- Custom Live Counting Component ---
interface AnimatedNumberProps {
  value: number;
  isFloat?: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, isFloat = false }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  
  const displayValue = useTransform(motionValue, (latest) =>
    isFloat ? latest.toFixed(1) : Math.round(latest).toString()
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2, // 2 seconds counting animation
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, motionValue, value]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

// --- Data for Stats ---
const statsData = [
  {
    prefix: "$",
    value: 10,
    suffix: "K+",
    label: "Average Savings vs Big Roofers",
    isFloat: false,
  },
  {
    prefix: "",
    value: 5.0,
    suffix: "",
    label: "Google Star Rating",
    isFloat: true,
  },
  {
    prefix: "",
    value: 1,
    suffix: " Day",
    label: "Most Roofs Completed",
    isFloat: false,
  },
  {
    prefix: "$",
    value: 0,
    suffix: "",
    label: "Hidden Fees or Surprise Charges",
    isFloat: false,
  },
];

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2, // Stagger effect for cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// --- Main Component ---
export default function WhyChooseUs() {
  return (
    <section className="py-10 md:py-16 bg-gray-50 font-sans">
      <div className="main-container">
        {/* Main Dark Blue Container with Drop Shadow */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
         className="bg-linear-to-br from-[#0f2744] to-[#1a365d] rounded-2xl py-12 px-6 md:px-10 shadow-[0_15px_50px_rgba(15,39,68,0.3)]"
        >
          {/* Header Texts */}
          <div className="text-center mb-10">
            <motion.h2 
              variants={cardVariants}
              className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight"
            >
              Why DFW Homeowners Choose Texas Precision Roofing
            </motion.h2>
            <motion.p 
              variants={cardVariants}
              className="text-gray-300 text-sm md:text-base font-medium"
            >
              Owner-Operated • 5.0 Google Rating • Licensed & Insured in Texas
            </motion.p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }} // Subtle hover effect
                className="bg-white/5 border-l-4 border-l-[#c41e3a] rounded-r-lg rounded-l-sm p-6 flex flex-col items-center justify-center text-center transition-shadow hover:shadow-lg hover:shadow-[#c41e3a]/10"
              >
                {/* Red Animated Number */}
                <div className="text-[#c41e3a] text-4xl md:text-5xl font-black mb-3 drop-shadow-sm">
                  {stat.prefix}
                  <AnimatedNumber value={stat.value} isFloat={stat.isFloat} />
                  {stat.suffix}
                </div>
                
                {/* Label */}
                <p className="text-white/90 text-sm md:text-xs lg:text-sm font-semibold leading-snug max-w-[150px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}