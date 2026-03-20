"use client";

import { motion, Variants } from "framer-motion";
import { Check, X } from "lucide-react";

// --- Data ---
const introText = {
  title: "The Roofing Industry's Dirty Secret",
  paragraph: "I'm Josh Sanchez, owner of Texas Precision Roofing. I built my company on radical honesty. Here's what the big roofing companies don't want you to know—and why we do things differently.",
};

const badCardData = {
  title: "What Big Roofers Hide",
  icon: "✕", // Bold multiplication X
  items: [
    "Sales commissions add 15-25% to your quote",
    "Fancy offices & TV commercials? You pay for them",
    "\"Free upgrades\" are built into inflated prices",
    "Random subcontractors doing the actual work",
    "$15K vs $22K quote? Rarely better materials",
  ],
};

const goodCardData = {
  title: "The Texas Precision Difference",
  icon: "✓", // Checkmark
  items: [
    "Employee pricing—our absolute best rate",
    "No sales team = no commission markups",
    "No hidden costs—price locked at estimate",
    "Only MY crews—never random subs",
    "Premium materials, honest craftsmen",
  ],
};

// --- Framer Motion Variants for Staggered Animation ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

// --- Main Component ---
export default function IndustrySecrets() {
  return (
    <section className="py-10 md:py-20  font-sans">
      <div className="main-container">
        {/* Animated Main Container with Staggered children */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Triggers when 100px from viewport edge
          className="bg-white rounded-2xl p-5 py-12 md:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100"
        >
          {/* Animated Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-8 md:mb-12 max-w-4xl mx-auto">
            <h2 className="text-[#0f2744] text-2xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-5 tracking-tight leading-tight">
              {introText.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed font-medium">
              {introText.paragraph}
            </p>
          </motion.div>

          {/* Animated Grid for Comparison Cards */}
          <div className="md:px-12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            
            {/* --- Left 'Bad' Card with Custom User Style --- */}
            <motion.div 
              variants={itemVariants}
              // Applying your custom CSS using Tailwind arbitrary values and provided class names
              className="comparison-card bad bg-[linear-gradient(135deg,#fef2f2_0%,#fee2e2_100%)] border-2 border-[#fca5a5] rounded-2xl p-7 md:p-9 md:py-12 flex flex-col shadow-inner"
            >
              <h3 className="text-[#dc2626] text-lg md:text-xl font-bold mb-4 md:mb-7 flex items-center  gap-3">
                <span className="text-[#dc2626] font-extrabold text-xl"><X size={36} /></span> {badCardData.title}
              </h3>
              <ul className="space-y-4 md:space-y-6 grow text-gray-800 font-medium text-sm md:text-base leading-relaxed">
                {badCardData.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-[#dc2626] font-bold text-lg leading-none mt-1">✕</span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* --- Right 'Good' Card with Company Style (Better) --- */}
            <motion.div 
              variants={itemVariants}
              className="bg-white border-2 border-gray-200 rounded-2xl p-7 md:p-9 flex flex-col shadow-sm transition-shadow hover:shadow-lg"
            >
              <h3 className="text-[#dc2626] text-lg md:text-xl font-bold mb-4 md:mb-7 flex items-center  gap-3">
                 <span className="text-[#dc2626] font-extrabold text-2xl"><Check size={36} /></span> {goodCardData.title}
              </h3>
              <ul className="space-y-4 md:space-y-6 grow text-gray-800 font-medium text-sm md:text-base leading-relaxed">
                {goodCardData.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-[#dc2626] font-bold text-lg leading-none mt-1">✓</span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}