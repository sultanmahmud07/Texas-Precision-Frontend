import React from "react";
import { ClipboardList } from "lucide-react";

// --- Step Data ---
const steps = [
  {
    id: 1,
    title: "Free Inspection",
    desc: "Josh and team climbs up and inspects every inch, documenting damage with photos.",
  },
  {
    id: 2,
    title: "Damage Report",
    desc: "You get a professional report formatted for your insurance adjuster.",
  },
  {
    id: 3,
    title: "Claim Support",
    desc: "We walk you through the process and meet with the adjuster on-site.",
  },
];

export default function InsuranceSection() {
  return (
    // .insurance-section mapped to Tailwind
    <section className="bg-[linear-gradient(135deg,#0f2744_0%,#1a365d_100%)] py-[60px] border-y-2 border-[#06b6d4]/20 font-sans">
      <div className="second-container">
        
        {/* Header Content */}
        <div className="text-center mb-10 md:mb-12">
          
          {/* .section-badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#06b6d4]/10 border border-[#06b6d4]/25 text-[#06b6d4] px-3.5 py-1.5 rounded-[6px] text-[0.72em] font-bold uppercase tracking-[1.5px] mb-[15px]">
            <ClipboardList className="w-3.5 h-3.5" strokeWidth={2.5} />
            INSURANCE HELP
          </div>

          <h2 className="text-[1.8em] md:text-4xl font-extrabold text-white mb-2 tracking-tight">
            We Handle the <span className="text-[#fbbf24]">Insurance Paperwork</span>
          </h2>
          
          <p className="text-gray-300 text-sm md:text-[0.95em] font-medium leading-relaxed max-w-2xl mx-auto">
            Most homeowners leave money on the table because they don&apos;t know what to document. We do.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-8">
          {steps.map((step) => (
            // .ins-step mapped to Tailwind
            <div 
              key={step.id} 
              className="bg-white/4 border border-white/8 rounded-[14px] px-[18px] py-[25px] text-center"
            >
              {/* .ins-step-num mapped to Tailwind */}
              <div className="w-9 h-9 bg-[linear-gradient(135deg,#06b6d4,#0891b2)] text-[#050a12] rounded-full flex items-center justify-center font-extrabold text-[0.95em] mx-auto mb-3">
                {step.id}
              </div>

              <h3 className="text-white font-bold text-base mb-2">
                {step.title}
              </h3>
              
              <p className="text-gray-400 text-[0.85em] md:text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* .insurance-highlight Bottom Banner */}
        <div className="bg-[linear-gradient(135deg,rgba(251,191,36,0.08)_0%,rgba(251,191,36,0.03)_100%)] border border-[#fbbf24]/25 rounded-[12px] p-3 py-4 md:py-6 flex items-center justify-center gap-2 flex-wrap text-center">
          <span className="text-2xl leading-none">💰</span>
          <p className="text-white/80 text-sm md:text-[0.95em] font-semibold">
            Most storm damage roofs are <span className="text-[#fbbf24]">covered 100% by insurance</span> — you may only pay your deductible.
          </p>
        </div>

      </div>
    </section>
  );
}