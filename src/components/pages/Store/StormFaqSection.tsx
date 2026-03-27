"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

// --- FAQ Data (Transcribed from image + contextually accurate answers) ---
const faqData = [
  {
    question: "Is the inspection really 100% free?",
    answer: "Yes, completely free with zero obligation. Josh will inspect your roof, document any damage with photos, and give you an honest assessment. If there's no damage, they'll tell you — no pressure to buy anything."
  },
  {
    question: "How long does the inspection take?",
    answer: "A thorough roof and exterior inspection typically takes about 15 to 30 minutes, depending on the size and complexity of your home. We'll walk you through our findings immediately afterward."
  },
  {
    question: "Will my insurance cover the repair?",
    answer: "If your roof has documented storm, wind, or hail damage, most homeowner's insurance policies will cover the cost of a full replacement (minus your deductible). We can help guide you through the claims process to ensure everything is filed correctly."
  },
  {
    question: "What if I'm not sure I have damage?",
    answer: "That's exactly what the free inspection is for. Most hail and wind damage is invisible from the ground and requires a trained professional to identify the compromised shingles and structural impacts."
  },
  {
    question: "How quickly can you come out?",
    answer: "We typically offer same-day or next-day inspections, especially immediately following major storm events in the DFW and Abilene areas. Give us a call or submit your ZIP code to grab the earliest available slot."
  }
];

// --- Individual FAQ Item Component ---
interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="bg-white/2 border border-white/5 rounded-[10px] mb-3 overflow-hidden transition-colors duration-300">
      
      {/* .faq-question mapped to Tailwind */}
      <button
        onClick={onToggle}
        className="w-full text-left px-5 py-4 flex items-center justify-between text-white font-semibold text-[0.92em] cursor-pointer hover:bg-white/2 transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="pr-4">{question}</span>
        
        {/* Animated Toggle Icon */}
        <div className="shrink-0 text-[#06b6d4]">
          {isOpen ? (
            <X className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
          ) : (
            <Plus className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
          )}
        </div>
      </button>

      {/* Smooth Expand/Collapse Animation using Framer Motion */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* .faq-answer-content mapped to Tailwind */}
            <div className="px-5 pb-4 text-white/65 text-[0.88em] leading-[1.6]">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main FAQ Section ---
export default function StormFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default to first item open

  const toggleFaq = (index: number) => {
    // If clicking the currently open one, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // .faq-section mapped to Tailwind
    <section className="py-[60px] bg-[linear-gradient(180deg,rgba(13,25,38,0.98)_0%,rgba(5,10,18,0.95)_100%)] font-sans">
      <div className="second-container">
        
        {/* Header Content */}
        <div className="text-center mb-10">
          <h2 className="text-white text-2xl md:text-3xl lg:text-[2rem] font-bold mb-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-white/50 text-sm md:text-sm font-medium">
            Everything you need to know about storm damage inspections
          </p>
        </div>

        {/* FAQ Items List */}
        <div className="w-full">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFaq(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}