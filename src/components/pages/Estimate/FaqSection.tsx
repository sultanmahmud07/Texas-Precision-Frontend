"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

// --- FAQ Data (Transcribed exactly from your image) ---
const faqData = [
  {
    question: "Is $7,999 starting price for a complete roof?",
    answer: (
      <>
        <strong>Yes. Full tear-off and replacement.</strong> Our $7,999 starting price includes complete removal of your old roof, premium GAF architectural shingles, all materials and underlayment, professional installation by my crews, and full cleanup. Final cost depends on your home&apos;s size, pitch, materials, and complexity. We give exact quotes upfront—no surprises, no hidden fees.
      </>
    )
  },
  {
    question: "What is employee pricing?",
    answer: (
      <>
        <strong>It is our internal friends and family rate.</strong> Employee pricing refers to our lowest internal rate normally reserved for our own team members. We offer this to homeowners for a limited time to fill our installation schedule, cutting out the sales middleman completely.
      </>
    )
  },
  {
    question: "Why are you so much cheaper than the big companies?",
    answer: (
      <>
        <strong>No bloated overhead or sales commissions.</strong> Big roofing companies have massive marketing budgets and pay 15-25% commissions to door-to-door sales reps. As an owner-operated business, I skip the middleman and pass those thousands of dollars in savings directly to you.
      </>
    )
  },
  {
    question: "How long does installation take?",
    answer: (
      <>
        <strong>Most roofs are completed in a single day.</strong> We arrive early, protect your landscaping, complete the full roof replacement, and perform a magnetic sweep for nails before we leave. Larger or highly complex roofs might occasionally take two days.
      </>
    )
  },
  {
    question: "Who actually does the work?",
    answer: (
      <>
        <strong>My dedicated, trained crews.</strong> We never pass your project off to random subcontractors. Our crews are fully vetted, highly experienced, and trained to meet my strict quality standards on every single job.
      </>
    )
  },
  {
    question: "Is financing available?",
    answer: (
      <>
        <strong>Yes, we offer flexible financing options.</strong> We partner with top lenders to provide affordable monthly payment plans so you can get the roof you need right now without having to drain your savings.
      </>
    )
  },
  {
    question: "What if I'm not ready to commit today?",
    answer: (
      <>
        <strong>No pressure, ever.</strong> Our quotes are transparent and good for a set period. We want you to make the best decision for your home. Take your time, compare our quote with others, and call us when you are ready.
      </>
    )
  }
];

// --- Individual FAQ Item Component ---
interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="bg-[#f8fafc] border-2 border-[#e2e8f0] hover:border-primary rounded-xl mb-4  overflow-hidden transition-all duration-300 ease-in-out cursor-pointer">
      <button
        onClick={onToggle}
        className="w-full px-5 py-5 md:py-7 hover:bg-primary/5 md:px-6 flex items-center justify-between transition cursor-pointer text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-[##0f2744] font-bold text-[15px] md:text-base pr-4">
          {question}
        </span>
        
        {/* Animated Icon Toggle */}
        <div className="shrink-0 text-[#c41e3a]">
          {isOpen ? (
            <X className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
          ) : (
            <Plus className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
          )}
        </div>
      </button>

      {/* Smooth Expand/Collapse Animation */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* The separator line and answer text */}
            <div className="px-5 pb-6 pt-2 md:px-6 md:pb-6 md:pt-4 bg-white border-t border-gray-100">
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main FAQ Section ---
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open the first one like the image

  const toggleFaq = (index: number) => {
    // If clicking the currently open one, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 md:py-16 font-sans">
      <div className="main-container bg-white rounded-2xl  px-4 md:px-6 lg:px-10 py-10 md:py-14 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-[#0f2744] text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold mb-4 tracking-tight">
            Your Questions Answered
          </h2>
          <p className="text-gray-500 font-medium text-sm md:text-lg max-w-2xl mx-auto">
            We&apos;ve helped hundreds of homeowners with their roofing needs. Here are answers to the questions we hear most often.
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